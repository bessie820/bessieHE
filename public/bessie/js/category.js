
//?????????????????????????????????
$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
    });


    $.ajax({
        url: '/category/queryTopCategory',
        type:'get',
        success:function(res){
            //console.log(res);
            var html = template('categoryTp',res);
            //console.log(html);
            $('#leftLink').html(html);

            if(res.rows.length){
                $('#leftLink').find('a').eq(0).addClass('active');
                var categoryId= res.rows[0].id;
                //console.log(categoryId);

                getcategoryTp2(categoryId);
          /*      $.ajax({
                    url:"/category/querySecondCategory",
                    type:'get',
                    data:{
                        id:categoryId,
                    },
                    success:function(res){
                        console.log(res);
                        var html = template("categoryTp2",res);
                        $(".rightLogo").html(html);
                    }
                })*/
            }
        },

    })



/*    ?????????????????????????
        1.???????????????
        2.????????????л????????????id
        3.?????????????????????????
        4.???????????????λ????
        5.???????????????????????????????????*/


    //???????????????
    $("#leftLink").on("click","a",function(){
        //console.log(this);
        //????????????л????????????id
        var categoryId = $(this).attr("data-id");
        $(this).addClass('active').siblings("a").removeClass("active");

        //?????????????????????????
        getcategoryTp2(categoryId);

    })

})


function getcategoryTp2(categoryId){
    $.ajax({
        url:"/category/querySecondCategory",
        type:'get',
        data:{
            id:categoryId,
        },
        success:function(res){
            //console.log(res);
            var html = template("categoryTp2",res);
            $(".rightLogo").html(html);
        }
    })
}