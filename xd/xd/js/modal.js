$(function () {
    //首页弹框调用方式
    $("#changeCompany").on("click",function(){
        $("#changeCompanyModal").modal('toggle');
    });
    //还款
    $("#repayment").on("click",function () {
        $("#confirmModalCenter").modal('show');
    });
    //借款
    $("#borrowing").on("click",function () {
        $("#confirmBorrowModal").modal('show');
    });
});