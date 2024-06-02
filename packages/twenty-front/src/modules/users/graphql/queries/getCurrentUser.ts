// This query cannot be put in the graphQL folder because it cannot be generated by the graphQL codegen.
import { gql } from '@apollo/client';

export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    currentUser {
      id
      firstName
      lastName
      email
      canImpersonate
      supportUserHash
      workspaceMember {
        id
        name {
          firstName
          lastName
        }
        colorScheme
        avatarUrl
        locale
        timeZone
        dateFormat
        timeFormat
      }
      defaultWorkspace {
        id
        displayName
        logo
        domainName
        inviteHash
        allowImpersonation
        subscriptionStatus
        activationStatus
        featureFlags {
          id
          key
          value
          workspaceId
        }
        currentCacheVersion
        currentBillingSubscription {
          id
          status
          interval
        }
      }
      workspaces {
        workspace {
          id
          displayName
          logo
          domainName
        }
      }
    }
  }
`;
