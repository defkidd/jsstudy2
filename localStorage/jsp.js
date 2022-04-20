var request = {};

        request.getParameter= function(p_name){
            if (location.href.indexOf("?") == -1) {
                return null;
            }
            var v_quueryString = location.href.split("?")[1];
            var v_params = v_quueryString.split("&");
            for(var i=0; i<v_params.length; i++){
                var v_name = v_params[i].split("=")[0];
                var v_value = v_params[i].split("=")[1];
                if (v_name == p_name) {
                    return decodeURIComponent(v_value.replaceAll("+"," "));
                }

            }
            // return  함수는 return 값이 생략돼있다. 값이 없으면 undefined 로 뜬다
            return null;
        }
        request.getParameterValues= function(p_name){
            if (location.href.indexOf("?") == -1) {
                return null;
            }
            var v_values = []; // 찾은 것들을 담을 빈 배열
            var v_quueryString = location.href.split("?")[1];
            var v_params = v_quueryString.split("&");
            for(var i=0; i<v_params.length; i++){
                var v_name = v_params[i].split("=")[0];
                var v_value = v_params[i].split("=")[1];
                if (v_name == p_name) { // 찾았다면 배열에 담음, return하면 안됨
                    v_value.push(decodeURIComponent(v_value.replaceAll("+"," "))); // push !! 배열 !! 
                }

            }
            // return  함수는 return 값이 생략돼있다. 값이 없으면 undefined 로 뜬다
            if(!v_values.length){
                return null;
            }
            return v_values;
        }
var out = {}; // 네임스페이스용 빈 객체
out.print = document.write.bind(document);
out.println = function (p_msg) {
    document.write(p_msg+"<br>");
    
    
}