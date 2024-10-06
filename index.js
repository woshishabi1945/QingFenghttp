        //图片顺序加载
        let srcList = [
            "./image/QQ.jpg",
            
            "rj/rj1.jpg",            
            "rj/rj1.jpg",
            "./zd/zd1.png",
            "./zd/zd1.png",
            "./zd/zd1.png"
            "./zd/zd1.png"
        ];
        
        let info_image = document.querySelector(".info-image"),
            record_list = document.querySelectorAll(".record-list .item img"),
            site_list = document.querySelectorAll(".site-list .item img");
        
        var timer = setTimeout(() => {
        for(i=0;i<srcList.length;i++) {
            switch (i) {
                case 0:
                    info_image.src = srcList[i];
                    break;
                case 1:
                    record_list[0].src = srcList[i];
                    break;
                case 2:
                    record_list[1].src = srcList[i];
                    break;
                case 3:
                    record_list[2].src = srcList[i];
                    break;
                case 4:
                    record_list[3].src = srcList[i];
                    break;
                case 5:
                    record_list[4].src = srcList[i];
                    break;
                case 6:
                    record_list[5].src = srcList[i];
                    break;
                case 7:
                    site_list[0].src = srcList[i];
                    break;
                case 8:
                    site_list[1].src = srcList[i];
                    break;
                case 9:
                    site_list[2].src = srcList[i];
                    break;
                case 10:
                    site_list[3].src = srcList[i];
                    break;
            }
        }
        }, 800);
            
        
        
        
        //介绍文字加载
        let text = "故不积跬步，无以至千里.";
        text += "                    ";
        let text_ojb = document.querySelector(".info-say");

        i=0;
        j=0;
        var timer = setInterval(() => {
            if(j <= text.length) {
                if(i < text.length) {
                    i+=1;
                    text_ojb.innerHTML = text.substr(0,i) + "|";
                }
            }

            if(i == text.length) {
                if(j < text.length) {
                    j+=1;
                    text_ojb.innerHTML = text.substr(0,text.length-j) + "|";
                }
            }

            if(j == text.length) {
                j=0;
                i=0;
            }
        }, 60);