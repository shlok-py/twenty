import { Module } from '@nestjs/common';

import { WorkflowCommonModule } from 'src/modules/workflow/common/workflow-common.module';
import { WorkflowExecutorWorkspaceService } from 'src/modules/workflow/workflow-executor/workspace-services/workflow-executor.workspace-service';
import { WorkflowActionFactory } from 'src/modules/workflow/workflow-executor/factories/workflow-action.factory';
import { CodeWorkflowAction } from 'src/modules/serverless-function/workflow-actions/code.workflow-action';
import { SendEmailWorkflowAction } from 'src/modules/mail-sender/workflow-actions/send-email.workflow-action';
import { ScopedWorkspaceContextFactory } from 'src/engine/twenty-orm/factories/scoped-workspace-context.factory';
import { MessagingGmailDriverModule } from 'src/modules/messaging/message-import-manager/drivers/gmail/messaging-gmail-driver.module';
import { ServerlessFunctionModule } from 'src/modules/serverless-function/serverless-function.module';

@Module({
  imports: [
    WorkflowCommonModule,
    MessagingGmailDriverModule,
    ServerlessFunctionModule,
  ],
  providers: [
    WorkflowExecutorWorkspaceService,
    ScopedWorkspaceContextFactory,
    WorkflowActionFactory,
    CodeWorkflowAction,
    SendEmailWorkflowAction,
  ],
  exports: [WorkflowExecutorWorkspaceService],
})
export class WorkflowExecutorModule {}
