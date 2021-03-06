package com.eduboss.osworkflow.function;

import java.util.Map;

import com.eduboss.common.RefundAuditStatus;
import com.eduboss.domain.RefundWorkflow;
import com.eduboss.service.RefundWorkflowService;
import com.eduboss.utils.ApplicationContextUtil;
import com.opensymphony.module.propertyset.PropertySet;
import com.opensymphony.workflow.FunctionProvider;
import com.opensymphony.workflow.WorkflowException;
import com.opensymphony.workflow.spi.WorkflowEntry;

/**
 * 电子账户转账 撤销审批
 * @author Administrator
 *
 */
public class AuditRevokeFunction implements FunctionProvider {

	@Override
	public synchronized void execute(Map transientVars, Map args, PropertySet ps)
			throws WorkflowException {
		WorkflowEntry workflowEntry = (WorkflowEntry) transientVars.get("entry"); 
		long workflowId = workflowEntry.getId();
		RefundWorkflowService refundWorkflowService = (RefundWorkflowService) ApplicationContextUtil.getContext().getBean(RefundWorkflowService.class);
		RefundWorkflow refundWorkflow = refundWorkflowService.findRefundWorkflowByFlowId(workflowId);
		refundWorkflow.setAuditStatus(RefundAuditStatus.AUDIT_REVOKE);
		refundWorkflowService.unfreezeStudnetAccMv(refundWorkflow);
	}

}
