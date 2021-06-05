/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      name
      preferred_username
      gender
      ethnicity
      dateOfBirth
      militaryService
      weight
      weightUnits
      height
      heightUnits
      researchConsent
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        preferred_username
        gender
        ethnicity
        dateOfBirth
        militaryService
        weight
        weightUnits
        height
        heightUnits
        researchConsent
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAmputation = /* GraphQL */ `
  query GetAmputation($id: ID!) {
    getAmputation(id: $id) {
      id
      limb
      level
      prosthesisWorn
      hand
      elbow
      foot
      ankle
      knee
      socket
      limbChecks {
        items {
          id
          amputationId
          healthCheckId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listAmputations = /* GraphQL */ `
  query ListAmputations(
    $filter: ModelAmputationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAmputations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        limb
        level
        prosthesisWorn
        hand
        elbow
        foot
        ankle
        knee
        socket
        limbChecks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getInjury = /* GraphQL */ `
  query GetInjury($id: ID!) {
    getInjury(id: $id) {
      id
      location
      severity
      chronic
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listInjurys = /* GraphQL */ `
  query ListInjurys(
    $filter: ModelInjuryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInjurys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        location
        severity
        chronic
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getHealthCheck = /* GraphQL */ `
  query GetHealthCheck($id: ID!) {
    getHealthCheck(id: $id) {
      id
      bodyCheck {
        good
        achy
        tired
        sore
        stiff
        other
        details
        otherComments
      }
      limbChecks {
        items {
          id
          amputationId
          healthCheckId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listHealthChecks = /* GraphQL */ `
  query ListHealthChecks(
    $filter: ModelHealthCheckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHealthChecks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bodyCheck {
          good
          achy
          tired
          sore
          stiff
          other
          details
          otherComments
        }
        limbChecks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!) {
    getActivity(id: $id) {
      id
      date
      activity
      duration
      distance
      cardio
      flexibility
      strength
      workoutDetails
      perceivedExertion
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listActivitys = /* GraphQL */ `
  query ListActivitys(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        activity
        duration
        distance
        cardio
        flexibility
        strength
        workoutDetails
        perceivedExertion
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getLimbCheck = /* GraphQL */ `
  query GetLimbCheck($id: ID!) {
    getLimbCheck(id: $id) {
      id
      amputationId
      healthCheckId
      healthCheck {
        id
        bodyCheck {
          good
          achy
          tired
          sore
          stiff
          other
          details
          otherComments
        }
        limbChecks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      residuum {
        good
        sore
        painful
        red
        blistered
        bleeding
        bruised
        sweaty
        other
        details
        otherComments
      }
      socket {
        comfortScore
        tight
        loose
        painful
        uncomfortable
        hot
        other
        details
        otherComments
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listLimbChecks = /* GraphQL */ `
  query ListLimbChecks(
    $filter: ModellimbCheckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLimbChecks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amputationId
        healthCheckId
        healthCheck {
          id
          createdAt
          updatedAt
          owner
        }
        residuum {
          good
          sore
          painful
          red
          blistered
          bleeding
          bruised
          sweaty
          other
          details
          otherComments
        }
        socket {
          comfortScore
          tight
          loose
          painful
          uncomfortable
          hot
          other
          details
          otherComments
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const limbCheckByHealthCheckId = /* GraphQL */ `
  query LimbCheckByHealthCheckId(
    $healthCheckId: ID
    $sortDirection: ModelSortDirection
    $filter: ModellimbCheckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    limbCheckByHealthCheckId(
      healthCheckId: $healthCheckId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        amputationId
        healthCheckId
        healthCheck {
          id
          createdAt
          updatedAt
          owner
        }
        residuum {
          good
          sore
          painful
          red
          blistered
          bleeding
          bruised
          sweaty
          other
          details
          otherComments
        }
        socket {
          comfortScore
          tight
          loose
          painful
          uncomfortable
          hot
          other
          details
          otherComments
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const limbCheckByAmputationId = /* GraphQL */ `
  query LimbCheckByAmputationId(
    $amputationId: ID
    $sortDirection: ModelSortDirection
    $filter: ModellimbCheckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    limbCheckByAmputationId(
      amputationId: $amputationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        amputationId
        healthCheckId
        healthCheck {
          id
          createdAt
          updatedAt
          owner
        }
        residuum {
          good
          sore
          painful
          red
          blistered
          bleeding
          bruised
          sweaty
          other
          details
          otherComments
        }
        socket {
          comfortScore
          tight
          loose
          painful
          uncomfortable
          hot
          other
          details
          otherComments
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
