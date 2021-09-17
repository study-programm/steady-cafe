
//ハンバーガー開閉処理
$(function(){

    $(".toggle-btn").click(function(){

        if($(".header-flex").hasClass("open")){

            $(".header-flex").removeClass("open");
        }else{
            $(".header-flex").addClass("open");
        }

    });

    
    
//背景を押すと、ハンバーガーの開きと背景を元に戻す。
    
    $(".mask").click(function(){   
            
            $(".header-flex").removeClass("open"); 

        
    });
    
//パソコンでハンバーガークリックしてそのまま広げた時に
//背景だけが残るのでそれの処理を距離を測って行う

    $(window).on('load resize', function(){

        //幅を取得
    var $win=$(window).width();
    
    var $smart=575;

    //575px以上の時に背景含めたopen解除（戻ってみた時に通常の状態に見えるようにする）
    //それ未満は何もしない。
    
    if($smart <= $win){

        //1:ハンバーガーが開いている部分を解除
        //2:背景を解除
        $(".header-flex").removeClass("open");
        $(".mask").removeClass("open");
    
    }else{
        ; //何もしない
        }
    });

    //ハンバーガーメニュー開いた後にクリックしたら背景とボタンを元に戻して見えるようにする

    $(".header-link").click(function(){

        $(".header-flex").removeClass("open");
        
    });


    //トップのスリックスライダーの処理。

    $(".slider-show").slick({
            autoplay:true,
            autoplaySpeed:6000,
            Speed:3000,
            arrows: false,
            fade:true,
    });

    
    //スライダー画面超えた時にスクロールしたら背景を出す


    //しっかり手順をメモする。
    // 1 PC画面で見た時に幅ごとに対応させないといけないので、
    //
    //
    //前準備として画面の幅が変わったら、slide-imgの高さを取得し直してPC画面に反映したときにも対応させる
    
    
    $(window).on('scroll resize',function(){
        
        let sliderHeight=$(".slide-img").height();
        //ページトップからスライダーの高さを超えた場合changesクラスを与える。
        if($(this).scrollTop()>sliderHeight){
            $("header").addClass("changes");
    //slide-imgの高さを超えなかったchnagesクラスを外す処理を加えてあげる。        
        }else{
            $("header").removeClass("changes");
        }

    });

    //ナビゲーションをクリックしたらゆっくりその場までスクロールする

    $(".header-link").click(function(){

        //リンクを取得させる
        let link=$(this).attr("href");

        //移動先のポジション取得
        let target=$(link=="#"|| link==""? html:link);

        //到達地点を数値で取得
        let position=target.offset().top;

        $("html,body").animate({

            scrollTop:position

        },1200);


    });
    

    //ヘッダーと同じ統一感を出すために、同じ高さになった時にボタンを出してあげる
    
    let scrollTop=$("#scrollTop");
    
    //初期はボタンを隠す
    scrollTop.hide();

    $(window).scroll(function(){
        
        if($(this).scrollTop()>650){
            scrollTop.fadeIn();
        }else{
            scrollTop.fadeOut();
        }
        
    });
    
    
    //スクロールしたらTOPページにゆっくり戻る処理
    
    $("#scrollTop").click(function(){

        $("html,body").animate({

            scrollTop:0
            
        },1200);

    });
    


});