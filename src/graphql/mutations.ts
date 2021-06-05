/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAmputation = /* GraphQL */ `
  mutation CreateAmputation(
    $input: CreateAmputationInput!
    $condition: ModelAmputationConditionInput
  ) {
    createAmputation(input: $input, condition: $condition) {
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
export const updateAmputation = /* GraphQL */ `
  mutation UpdateAmputation(
    $input: UpdateAmputationInput!
    $condition: ModelAmputationConditionInput
  ) {
    updateAmputation(input: $input, condition: $condition) {
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
export const deleteAmputation = /* GraphQL */ `
  mutation DeleteAmputation(
    $input: DeleteAmputationInput!
    $condition: ModelAmputationConditionInput
  ) {
    deleteAmputation(input: $input, condition: $condition) {
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
export const createInjury = /* GraphQL */ `
  mutation CreateInjury(
    $input: CreateInjuryInput!
    $condition: ModelInjuryConditionInput
  ) {
    createInjury(input: $input, condition: $condition) {
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
export const updateInjury = /* GraphQL */ `
  mutation UpdateInjury(
    $input: UpdateInjuryInput!
    $condition: ModelInjuryConditionInput
  ) {
    updateInjury(input: $input, condition: $condition) {
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
export const deleteInjury = /* GraphQL */ `
  mutation DeleteInjury(
    $input: DeleteInjuryInput!
    $condition: ModelInjuryConditionInput
  ) {
    deleteInjury(input: $input, condition: $condition) {
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
export const createHealthCheck = /* GraphQL */ `
  mutation CreateHealthCheck(
    $input: CreateHealthCheckInput!
    $condition: ModelHealthCheckConditionInput
  ) {
    createHealthCheck(input: $input, condition: $condition) {
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
export const updateHealthCheck = /* GraphQL */ `
  mutation UpdateHealthCheck(
    $input: UpdateHealthCheckInput!
    $condition: ModelHealthCheckConditionInput
  ) {
    updateHealthCheck(input: $input, condition: $condition) {
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
export const deleteHealthCheck = /* GraphQL */ `
  mutation DeleteHealthCheck(
    $input: DeleteHealthCheckInput!
    $condition: ModelHealthCheckConditionInput
  ) {
    deleteHealthCheck(input: $input, condition: $condition) {
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
export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
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
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
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
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
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
export const createLimbCheck = /* GraphQL */ `
  mutation CreateLimbCheck(
    $input: CreateLimbCheckInput!
    $condition: ModellimbCheckConditionInput
  ) {
    createLimbCheck(input: $input, condition: $condition) {
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
export const updateLimbCheck = /* GraphQL */ `
  mutation UpdateLimbCheck(
    $input: UpdateLimbCheckInput!
    $condition: ModellimbCheckConditionInput
  ) {
    updateLimbCheck(input: $input, condition: $condition) {
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
export const deleteLimbCheck = /* GraphQL */ `
  mutation DeleteLimbCheck(
    $input: DeleteLimbCheckInput!
    $condition: ModellimbCheckConditionInput
  ) {
    deleteLimbCheck(input: $input, condition: $condition) {
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
