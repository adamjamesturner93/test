/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
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
export const onCreateAmputation = /* GraphQL */ `
  subscription OnCreateAmputation($owner: String!) {
    onCreateAmputation(owner: $owner) {
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
export const onUpdateAmputation = /* GraphQL */ `
  subscription OnUpdateAmputation($owner: String!) {
    onUpdateAmputation(owner: $owner) {
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
export const onDeleteAmputation = /* GraphQL */ `
  subscription OnDeleteAmputation($owner: String!) {
    onDeleteAmputation(owner: $owner) {
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
export const onCreateInjury = /* GraphQL */ `
  subscription OnCreateInjury($owner: String!) {
    onCreateInjury(owner: $owner) {
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
export const onUpdateInjury = /* GraphQL */ `
  subscription OnUpdateInjury($owner: String!) {
    onUpdateInjury(owner: $owner) {
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
export const onDeleteInjury = /* GraphQL */ `
  subscription OnDeleteInjury($owner: String!) {
    onDeleteInjury(owner: $owner) {
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
export const onCreateHealthCheck = /* GraphQL */ `
  subscription OnCreateHealthCheck($owner: String!) {
    onCreateHealthCheck(owner: $owner) {
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
export const onUpdateHealthCheck = /* GraphQL */ `
  subscription OnUpdateHealthCheck($owner: String!) {
    onUpdateHealthCheck(owner: $owner) {
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
export const onDeleteHealthCheck = /* GraphQL */ `
  subscription OnDeleteHealthCheck($owner: String!) {
    onDeleteHealthCheck(owner: $owner) {
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
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity($owner: String!) {
    onCreateActivity(owner: $owner) {
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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity($owner: String!) {
    onUpdateActivity(owner: $owner) {
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity($owner: String!) {
    onDeleteActivity(owner: $owner) {
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
export const onCreateLimbCheck = /* GraphQL */ `
  subscription OnCreateLimbCheck($owner: String!) {
    onCreateLimbCheck(owner: $owner) {
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
export const onUpdateLimbCheck = /* GraphQL */ `
  subscription OnUpdateLimbCheck($owner: String!) {
    onUpdateLimbCheck(owner: $owner) {
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
export const onDeleteLimbCheck = /* GraphQL */ `
  subscription OnDeleteLimbCheck($owner: String!) {
    onDeleteLimbCheck(owner: $owner) {
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
