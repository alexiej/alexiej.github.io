# -*- coding: utf-8 -*-
import random as r

games = {
        "1.10": { 'count': 1.10, 'chance': 0.90 },
        "1.32": { 'count': 1.32, 'chance': 0.75 },        
        "1.50": { 'count': 1.50, 'chance': 0.66 },        
        "1.98": { 'count': 1.98, 'chance': 0.50 },        
        "2.00": { 'count': 2.00, 'chance': 0.495 },        
        "3.00": { 'count': 3.00, 'chance': 0.33 },        
        "4.00": { 'count': 4.00, 'chance': 0.2475 },        
        }


def play(bet,game_count):
    result = r.random()
    game = games[game_count]
    if(result <= game['chance']):
        return bet * game['count'] - bet
    return -bet


def auto_method(start_bet, bet, result, on_loss, on_win):
    if(result > 0):
        return start_bet if on_win < 0 else bet+bet*on_win
    else:
        return start_bet if on_loss < 0 else bet+bet*on_loss


import pandas as pd
import numpy as np

# on_loss/on_win = -1 return to base
def auto_run(start_bet = 1, cash = 100, game_count = "2.00", rolls = 50,
             on_loss = -1, on_win = -1, simulation = 0):
    """ Run one single simulation for defined 'start_bet', 'cash', 'rolls' times or when the bet is higher than the cash.
    
    'on_loss' = when loss bet = bet + bet * on_loss, if -1, return to 'start_bet'
    'one_win' = when win  bet = bet + bet * on_win, if -1, return to 'start_bet'
    
    Available game_count:
        "1.10": { 'count': 1.10, 'chance': 0.90 },
        "1.32": { 'count': 1.32, 'chance': 0.75 },        
        "1.50": { 'count': 1.50, 'chance': 0.66 },        
        "1.98": { 'count': 1.98, 'chance': 0.50 },        
        "2.00": { 'count': 2.00, 'chance': 0.495 },        
        "3.00": { 'count': 3.00, 'chance': 0.33 },        
        "4.00": { 'count': 4.00, 'chance': 0.2475 },        
        }

    
    """

    #results = pd.DataFrame(columns=['roll','cash_before','bet','bancrupt', 'result','cash'],dtype=float)
    bet = start_bet
    
    result_list = []

    for i in range(rolls):
          cash_before = cash
          if(cash_before < bet):
              result_list.extend([[i+ii, cash, 0, 1.0, 0, cash, simulation] for ii in range (rolls-i) ])
              break
    
          result = play(bet, game_count)
          cash += result

          result_list.append([ i,cash_before, bet, 0, result, cash, simulation ])
          bet = auto_method(start_bet,bet,result,on_loss,on_win)
    return pd.DataFrame(result_list, columns=['roll','cash_before','bet','bancrupt', 'result','cash', 'simulation' ],dtype=float)

# auto_simulation(on_loss=3)
def auto_simulation(runs = 10,
                    start_bet = 1, cash = 100, 
                    game_count = "2.00", rolls = 50,
                    on_loss = -1, on_win = -1):
    """
    Simulate whole auto_run n-times (runs)
    
    Returns: Cash plot and statistics for each roll.
    
    """
    df = pd.concat([
            auto_run(start_bet,cash,game_count,rolls,on_loss,on_win,simulation = i)
            for i in range(runs)],ignore_index = True)
    df = df.assign(profit = lambda x: x.cash - x.cash_before )
    df = df.assign(profitr = lambda x: x.cash - cash)

    import matplotlib.pyplot as plt
    statistics = df.groupby(['roll']).agg(
             {
              'bet':  { 'max': 'max', 
                        'cnt': lambda x:  (x[x==np.max(x)].count()) },
              'bancrupt': {'%': lambda x: np.sum(x)/runs*100 },
              'profit': { '': 'mean' },           
              'profitr': { '': 'mean' }, 
              'cash':  { '': 'mean',
                        'win.%': lambda x: (x[x>cash]).count()/runs*100,
                        'win': lambda x: (x[x>cash]-cash).mean(),
                        'loss.%': lambda x: (x[x<cash]).count()/runs*100,
                        'loss': lambda x: (x[x<cash]-cash).mean(),
                        }, 

              }).round(decimals=2).reset_index()
    statistics.columns = statistics.columns.map('.'.join).str.strip().str.rstrip('.')
    statistics.insert(1, 'bet.maxr',statistics['bet.max'].cummax())
    statistics.insert(2, 'bet.cntr', np.nan)

    #calculate running sum for statistics
    for s in statistics.index:
        statistics.loc[s,'bet.cntr'] = statistics[ 
                (statistics['bet.max'] == statistics.loc[s,'bet.maxr']) & 
                (statistics['roll']<=statistics.loc[s,'roll'])]['bet.cnt'].sum() 
        
    statistics['bet.cnt'] = statistics['bet.cnt']/runs*100
    statistics['bet.cntr'] = statistics['bet.cntr']/runs*100

    statistics = statistics.rename(index=str, columns = { 'bet.cnt': 'bet.%', 'bet.cntr': 'betr.%' })

    plt.xlabel("rolls")
    plt.ylabel("cash")
    plt.plot(statistics[['cash']])
    
    return statistics
    



def cont_run(start_bet = 1, cash = 100, game_count = "2.00", profit = 10, on_loss = -1, on_win = -1):
    bet = start_bet    
    max_bet = start_bet
    end_cash = cash + profit

    roll = 0
    while True:
        roll += 1
        cash_before = cash
        if(cash_before < bet):
            # roll, cash, max_bet, bancrupt
            return [roll, cash, max_bet, 1.0]
        result = play(bet, game_count)
        cash += result
       
        if(cash>=end_cash):
           return [roll, cash, max_bet, 0.0]
        
        bet = auto_method(start_bet,bet,result,on_loss,on_win)
        if(bet>max_bet):
            max_bet = bet

def cont_simulation(runs = 100,
                    start_bet = 1, cash = 100, 
                    game_count = "2.00", profit = 10,
                    on_loss = -1, on_win = -1):
     df = pd.DataFrame([
            cont_run(start_bet,cash,game_count,profit,on_loss,on_win)
            for i in range(runs)], 
            columns = ["rolls", "cash", "max_bet", "bancrupt"],  dtype = float)
     import matplotlib.pyplot as plt
     
     statistics = df.groupby(["rolls"]).agg({
             'max_bet': {
                   
                     'mean': 'mean',
                     'max': 'max',
                     '%': lambda x: (x[x==np.max(x)].count())/runs * 100
             },
            'cash': { 'mean': 'mean', 'cnt': 'count' },
            'bancrupt': {'': 'mean' }})
     print('Mean profit:', statistics[('cash','mean')].mean() - cash)
     print(f"% number of wins: {((1-statistics[('bancrupt','')].mean()) * 100):.2f}%")
     plt.xlabel("rolls")
     plt.ylabel("cash")
     plt.plot(statistics[[('cash','mean')]],label="roll")
     return statistics


def table_run(start_bet = 1, cash = 100, game_count = "2.00", 
              profit = 10, 
              on_loss = [[-1, "2.00"]], 
              on_win =  [[-1, "1.50"]]):
    bet = start_bet    
    max_bet = start_bet
    end_cash = cash + profit
    
    loss_cnt = 0
    win_cnt  = 0
    game_current = game_count
    element = []
    roll = 0 
    
    while True:
        roll += 1
        cash_before = cash
        if(cash_before < bet):
            # roll, cash, max_bet, bancrupt
            return [roll, cash, max_bet, 1.0]
        

        result = play(bet, game_current)
        cash += result
       
        if(cash>=end_cash):
           return [roll, cash, max_bet, 0.0]
       

        if result <= 0:
            element = on_loss[-1] if len(on_loss) <= loss_cnt else on_loss[loss_cnt]
            win_cnt = 0
            loss_cnt += 1
        else:
            element = on_win[-1] if len(on_win) <= win_cnt else on_win[win_cnt]
            loss_cnt = 0
            win_cnt += 1
                    
        bet  = start_bet if element[0] < 0 else bet + bet * element[0]
        game_current = element[1]         
        
        if element[0]<0: #return to start
            loss_cnt = 0
            win_cnt = 0
        
        #print(f"{roll:5.0f}: {cash_before:>8}$  |game: {game_current} bet: {bet:4.2f}| loss:{loss_cnt:2.0f} win: {win_cnt:2.0f}  result: {result:>4}  {cash:>8}$  e: {element}")

        if(bet>max_bet):
            max_bet = bet


def table_simulation(runs = 100,
                    start_bet = 1, cash = 100, 
                    game_count = "2.00", profit = 10,
                    on_loss = [[-1, "2.00"]], 
                    on_win =  [[-1, "2.00"]]):
     df = pd.DataFrame([
            table_run(start_bet,cash,game_count,profit,on_loss,on_win)
            for i in range(runs)], 
            columns = ["rolls", "cash", "max_bet", "bancrupt"],  dtype = float)
     import matplotlib.pyplot as plt
     
     statistics = df.groupby(["rolls"]).agg({
             'max_bet': {
                   
                     'mean': 'mean',
                     'max': 'max',
                     '%': lambda x: (x[x==np.max(x)].count())/runs * 100
             },
            'cash': { 'mean': 'mean', 'cnt': 'count' },
            'bancrupt': {'': 'mean' }})
     print('Mean profit:', statistics[('cash','mean')].mean() - cash)
     print(f"% number of wins: {((1-statistics[('bancrupt','')].mean()) * 100):.2f}%")
     plt.xlabel("rolls")
     plt.ylabel("cash")
     plt.plot(statistics[[('cash','mean')]],label="roll")
     return statistics
 
    
    
def labouchere_run(cash = 100, system = [1,2,3,4,5]):
    game_count = "2.00"
    
    roll = 0
    max_bet = 0
    system = system.copy()
    #print(f"{roll:5.0f}: list: {system}")
    
    while True:
        roll += 1
        cash_before = cash
        # only if there is only two elements in the list
        bet = system[0] + (system[-1] if len(system)>1  else 0)
        if bet > max_bet:
            max_bet = bet

        if bet>cash:
            return [roll, cash, max_bet, 1.0, system]
        

        
        result = play(bet, game_count)
        cash += result
        
        if result>0:
            if(len(system)>1):
                system.pop(-1)
            system.pop(0)
        else:
            system.append(bet)
        
        if len(system)<=0:
            return [roll, cash, max_bet, 0.0,[]]
            
        
        #print(f"{roll:5.0f}: {cash_before:>8}$  |bet: {bet:4.2f}| result: {result:>4}  {cash:>8}$  list: {system}")

    
def labouchere_simulation(runs = 100,
                    cash = 100, system = [1,2,3,4,5]):
     labouchere_result = [labouchere_run(cash,system) for i in range(runs)]
     df = pd.DataFrame(labouchere_result,
            columns = ["rolls", "cash", "max_bet", "bancrupt", "list"],  dtype = float)
     import matplotlib.pyplot as plt

     
     statistics = df.groupby(["rolls"]).agg({
             'max_bet': {
                   
                     'mean': 'mean',
                     'max': 'max',
                     '%': lambda x: (x[x==np.max(x)].count())/runs * 100
             },
            'cash': { 'mean': 'mean', 'cnt': 'count' },
            'bancrupt': {'': 'mean' }})
     print('Mean profit:', statistics[('cash','mean')].mean() - cash)
     print(f"% number of wins: {((1-statistics[('bancrupt','')].mean()) * 100):.2f}%")
     
     max_bet_index = df['max_bet'].idxmax()
     print('Max bet:', df.loc[max_bet_index,'max_bet'], ' with cash: ' , df.loc[max_bet_index,'cash'],   ' from list: ',  df.loc[max_bet_index,'list'] )
      
     plt.xlabel("rolls")
     plt.ylabel("cash")
     plt.plot(statistics[[('cash','mean')]],label="roll")
     return statistics  
    
    
    
    
    
    
    
    
    