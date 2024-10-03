import { createScopeInternalContext } from '@/ui/utilities/recoil-scope/scopes-internal/utils/createScopeInternalContext';
import { RecoilComponentStateKey } from '@/ui/utilities/state/component-state/types/RecoilComponentStateKey';

type BottomBarScopeInternalContextProps = RecoilComponentStateKey;

export const BottomBarScopeInternalContext =
  createScopeInternalContext<BottomBarScopeInternalContextProps>();
