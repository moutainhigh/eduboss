var token = $.cookie('token');
var basicOperationQueryLevelType = "BRENCH";
var brenchId = EduBossApp.commonUtils.getUrlParameter('brenchId');
var brenchName = decodeURI(EduBossApp.commonUtils.getUrlParameter('brenchName'));
var organizationType = EduBossApp.commonUtils.getUrlParameter('organizationType');

function loadFinanceAnalyze(token, startDate, endDate, basicOperationQueryLevelType) {
	$.ajax({
        type: "get",
        dataType: "json",
        //@param url
        url: "/eduboss/MobileInterface/getCustomerTotalByCusType.do?token=" + token + "&startDate=" + startDate + "&endDate=" + endDate + "&basicOperationQueryLevelType=" + basicOperationQueryLevelType + "&blCampusId=" + brenchId,
        success: function(res){
        	//debugger;
        	if (res.rows.length <= 0) {
        			
        	}
        	$('#countSeReInner .coTab_2').empty();
        	var students = 0,
        	customers = 0,
        	visit = 0,
        	telConsultation = 0,
        	groundCalling = 0,
        	outCalling = 0,
        	internetCalling = 0,
        	strangeCall = 0,
        	introduce = 0,
        	internet = 0,
        	others = 0;
			//更新会话期存储：开始结束日期和月/周/日的选择
			EduBossApp.statisticalAnalysis.localDataStorage(true);

		    $.each(res.rows, function(n, item) {
		    	var campusId="";
		    	var campusName="";
		    	if(item.CAMPUS){
	        		campusId = item.CAMPUS.substring(0,item.CAMPUS.indexOf('_'));
	        		campusName = item.CAMPUS.substring(item.CAMPUS.indexOf('_')+1);
		    	}
        		students += item.students;
        		customers += item.customers;
        		visit += item.visit;
        		telConsultation += item.telConsultation;
        		groundCalling += item.groundCalling;
        		outCalling += item.outCalling;
        		internetCalling += item.internetCalling;
        		strangeCall += item.strangeCall;
        		introduce += item.introduce;
        		internet += item.internet;
        		others += item.others;
            	
        		var tr = '<tr>'
                	tr +=  '<td class="tdR1">'+item.CAMPUS_SORT+'</td>'
                	tr +=  '<td class="tdR2"><div class="tdR2" style="overflow:hidden;"><a href="marketBranch.html?brenchId=' + campusId + '&brenchName=' + encodeURI(campusName) + '">' + campusName + '</a></div></td>'
                	tr +=  '<td class="tdR3"><b>' + item.students + '</b></td>'
                	tr +=  '<td class="tdR4"><b>' + item.customers + '</b></td>'
                	tr +=  '<td class="tdR5"><b>' + item.visit + '</b></td>'
                	tr +=  '<td class="tdR6"><b>' + item.telConsultation + '</b></td>'
                	tr +=  '<td class="tdR7"><b>' + item.groundCalling + '</b></td>'
                	tr +=  '<td class="tdR8"><b>' + item.outCalling + '</b></td>'
                	tr +=  '<td class="tdR9"><b>' + item.internetCalling + '</b></td>'
                	tr +=  '<td class="tdR10"><b>' + item.strangeCall + '</b></td>'
                	tr +=  '<td class="tdR11"><b>' + item.introduce + '</b></td>'
                	tr +=  '<td class="tdR12"><b>' + item.internet + '</b></td>'
                	tr +=  '<td class="tdR13"><b>' + item.others + '</b></td>'
                	tr +=  '</tr>';
             	$('#countSeReInner .coTab_2').append(tr);  
          	});
          	$('#students').text(students);
          	$('#customers').text(customers);
          	$('#visit').text(visit);
          	$('#telConsultation').text(telConsultation);
          	$('#groundCalling').text(groundCalling);
          	$('#outCalling').text(outCalling);
          	$('#internetCalling').text(internetCalling);
          	$('#strangeCall').text(strangeCall);
          	$('#introduce').text(introduce);
          	$('#internet').text(internet);
          	$('#others').text(others);
        	refreshSroll();
        }
   	});

	function refreshSroll() {
		var scrollHeight = $($('#countSeReInner .coTab_2 tr')[0]).height() * ($('#countSeReInner .coTab_2 tr').length)
	  						+ (document.body.offsetHeight - $('#countSeReInner, .scroll').offset().top) - ($('#countSeRe').height()/2);
		$('#countSeReInner .scroll').height(scrollHeight);
		myscrollIn.refresh();
	}
}

$(document).ready(function() {
	var countSeReInnerHeight =  document.body.offsetHeight - $('#countSeReInner, .scroll').offset().top;
	var countSeReHeight =  document.body.offsetHeight - $('#countSeRe').offset().top;
	$('#countSeReInner').height(countSeReInnerHeight)
	$('#countSeRe').height(countSeReHeight);
	
	initScroll();
	debugger;
	if (organizationType == 'CAMPUS') {
		$('#overViewUrl').attr('href', 'overviewBranch.html?organizationType=' + organizationType);
		$('#cashUrl').attr('href', 'cashBranch.html?organizationType=' + organizationType);
		$('#revenueUrl').attr('href', 'revenueBranch.html?organizationType=' + organizationType);
		$('#marketUrl').attr('href', 'javascript:void(0)');
		$('.selectDiv').show();
		$('.headHd').hide();
	} else {
		$('#overViewUrl').attr('href', 'overview.html');
		$('#cashUrl').attr('href', 'cash.html');
		$('#revenueUrl').attr('href', 'revenue.html');
		$('#marketUrl').attr('href', 'market.html');
		$('.selectDiv').hide();
		$('.headHd').show();
	}

	if (brenchName) {
		$('#headName').text(brenchName);
	}	
	//datepicker:
//	EduBossApp.statisticalAnalysis.datepickerToStartdate();
//	EduBossApp.statisticalAnalysis.datepickerToEnddate();
	//读取本地存储数据
	EduBossApp.statisticalAnalysis.localDataStorage(false);
});
