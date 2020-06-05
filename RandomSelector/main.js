$(document).ready(function(){
    $("input").click(function(){
        let numListItem=$("#choices li").length;
        let ranChildnum = Math.floor(Math.random()*numListItem);
        $("#random-result").text($("#choices li").eq(ranChildnum).text());
        $("#random-pic").attr("src",pictures[ranChildnum]);
    });
});