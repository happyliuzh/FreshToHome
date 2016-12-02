var pageObj = {
    //data
    data:{
        selectedcategory:"vegetable",
        list:[{
            id : "3270",
            name:"花菜",
            price:"7.00元/500g",
            picUrl:""
        }],
        nextAction:[]
    },
    //生命周期方法
    onLaunch:function()
    {

    },
    //事件处理
    //1.处理切换分类
    onCategoryTapped:function(e)
    {
        this.setData({
            selectedcategory : e.target.id
        });

    }
}

Page(pageObj);