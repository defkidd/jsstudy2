    // namespace 주기 빈 JSON객체를 많이 이용
    // javascript에서 변수명으로 쓸수있는 특수문자는 두개 ($,_)
    var $ = {};
    $.ajax = function (p_json) {
        var v_ajax = new XMLHttpRequest();
        
        v_ajax.open(p_json.method,p_json.url , p_json.async);
        
        v_ajax.onreadystatechange = function () {

            if (v_ajax.readyState == 4 && v_ajax.status ==200) {
                if (p_json.dataType == "JSON" ||p_json.dataType == "json"  ) {
                    p_json.success(JSON.parse(v_ajax.responseText));
                    return;
                }
                if (p_json.dataType == "xml" || p_json.dataType == "XML") {
                    console.log("xml")
                    p_json.success(v_ajax.responseXML);
                    return;
                }
                p_json.success(v_ajax.responseText);
            }
        }

        v_ajax.send();
    }