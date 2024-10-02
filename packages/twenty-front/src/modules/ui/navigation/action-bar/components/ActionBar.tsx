import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { actionBarEntriesState } from '@/ui/navigation/action-bar/states/actionBarEntriesState';
import { contextMenuIsOpenState } from '@/ui/navigation/context-menu/states/contextMenuIsOpenState';
import SharedNavigationModal from '@/ui/navigation/shared/components/NavigationModal';

import { contextStoreTargetedRecordIdsState } from '@/context-store/states/contextStoreTargetedRecordIdsState';
import { ActionBarItem } from './ActionBarItem';

const StyledContainerActionBar = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.background.secondary};
  border: 1px solid ${({ theme }) => theme.border.color.medium};
  border-radius: ${({ theme }) => theme.border.radius.md};
  bottom: 38px;
  box-shadow: ${({ theme }) => theme.boxShadow.strong};
  display: flex;
  height: 48px;
  width: max-content;
  left: 50%;
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
  position: absolute;
  top: auto;

  transform: translateX(-50%);
  z-index: 1;
`;

const StyledLabel = styled.div`
  color: ${({ theme }) => theme.font.color.tertiary};
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
`;

export const ActionBar = () => {
  const setContextMenuOpenState = useSetRecoilState(contextMenuIsOpenState);

  const contextStoreTargetedRecordIds = useRecoilValue(
    contextStoreTargetedRecordIdsState,
  );

  useEffect(() => {
    if (contextStoreTargetedRecordIds.length > 1) {
      setContextMenuOpenState(false);
    }
  }, [contextStoreTargetedRecordIds, setContextMenuOpenState]);

  const contextMenuIsOpen = useRecoilValue(contextMenuIsOpenState);
  const actionBarEntries = useRecoilValue(actionBarEntriesState);

  if (contextMenuIsOpen || !contextStoreTargetedRecordIds.length) {
    return null;
  }

  return (
    <>
      <StyledContainerActionBar data-select-disable className="action-bar">
        <StyledLabel>
          {contextStoreTargetedRecordIds?.length} selected:
        </StyledLabel>
        {actionBarEntries.map((item, index) => (
          <ActionBarItem key={index} item={item} />
        ))}
      </StyledContainerActionBar>
      <SharedNavigationModal
        actionBarEntries={actionBarEntries}
        customClassName="action-bar"
      />
    </>
  );
};
