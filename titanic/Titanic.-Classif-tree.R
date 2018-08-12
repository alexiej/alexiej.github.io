#CLASSIFICATION TREE METHOD 

  #Fetch data

    Train <- read.csv("Titanic.train.proc1.csv")
    Train$X <- NULL
    Train$Survived <- as.factor(Train$Survived)
    Train$PassengerId <- NULL
    Train$Name <- NULL
    Train$Ticket <- as.factor(Train$Ticket)
    Train$Pclass <- as.factor(Train$Pclass)
    
    
    Data.to.predict <- read.csv("Titanic.test.proc1.csv")
    Data.to.predict$Ticket <- as.factor(Data.to.predict$Ticket)
    Data.to.predict$Pclass <- as.factor(Data.to.predict$Pclass)
    
  #Data analysis 
    #Yule.cor - my function for calculate Yule coefficient
    
    library(MyLibrary) #My functions library
    
    #Pclass
    Yule.cor(Train$Survived, Train$Pclass)
    table(Train$Survived, Train$Pclass)
    
    #Ticket
    Yule.cor(Train$Survived, Train$Ticket)
    table(Train$Survived, Train$Ticket)
    
    #Cabin
    Yule.cor(Train$Survived, Train$Cabin)
    table(Train$Survived, Train$Cabin)
    
    #Embarked
    Yule.cor(Train$Survived, Train$Embarked)
    table(Train$Survived, Train$Embarked)
    
    #Family
    Yule.cor(Train$Survived, Train$Family)
    table(Train$Survived, Train$Family)
    
    #Fare
    Fare.surv <- Train[Train$Survived == 1, "Fare"]
    Fare.dead <- Train[Train$Survived == 0, "Fare"]
    
    summary(Fare.dead)
    summary(Fare.surv)
    
    hist(Fare.dead, xlim = c(0, 500), ylim = c(0, 300), breaks = 15)
    hist(Fare.surv, xlim = c(0, 500), ylim = c(0, 300), breaks = 15)
    
    boxplot(Fare.dead, Fare.surv)
    
    plot(Fare.dead)
    plot(Fare.surv)
    
    #Tempering outlier values
    
    Train$Fare[Train$Fare > 300] <- 263
    
    #Ticket and Embarked have less Yule's coefficient, so I removed it from model
    
    Train$Ticket <- NULL
    Train$Embarked <- NULL
    
    
    
    
  #Create model   
    
    library(rpart)
    library(rattle)
    
    set.seed(6)
    
    Tree.1 <- rpart(Survived ~ ., cp = 0, minsplit = 2, data = Train, method = "class", xval = 300)
    
    plotcp(Tree.1)
    
    fancyRpartPlot(Tree.1)
    
    CP <- Tree.1$cptable
    
    CP <- as.data.frame(CP)
    
    
    
    #Min cv error method for selecting CP
    attach(CP)
    optim.CP <- CP[CP$xerror == min(xerror), ]
    optim.CP <- optim.CP[1, ]
    detach(CP)
    optim.CP <- as.numeric(optim.CP[1])
    optim.CP  # 0.002192982, 
    
    
    
    #Submin CV error method for selecting CP
    optim.CP <- CP[5, 1] # CP = 0.0073099415
    
    
    
    #Pruning tree with submin CV CP value
    
    Tree.1.2 <- prune(Tree.1, cp = optim.CP)
    
    library(rattle)
    fancyRpartPlot(Tree.1.2, cex = 0.6)
    
    predict.Tree.1.2 <- predict(Tree.1.2, type = "class")
    
    sum(predict.Tree.1.2 == Train$Survived)/nrow(Train) 

    
    
    #Prediction and create answer table
    
    Answer <- data.frame(PassengerId = Data.to.predict$PassengerId, Survived = predict(Tree.1.2, newdata = Data.to.predict, type = "class"))
    
    write.csv(Answer, "Tree.prediction.csv", quote = F, row.names = F)
    
    
