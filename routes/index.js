module.export = app => {
    require('./ExpenseRoutes')(app),
    require('./HoursRoutes')(app),
    require('./OrdersRoutes')(app),
    require('./RevenueRoutes')(app)
}