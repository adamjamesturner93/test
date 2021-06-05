/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  email: string,
  name: string,
  preferred_username: string,
  gender?: string | null,
  ethnicity?: string | null,
  dateOfBirth?: string | null,
  militaryService?: string | null,
  weight?: number | null,
  weightUnits?: string | null,
  height?: number | null,
  heightUnits?: string | null,
  researchConsent?: boolean | null,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  preferred_username?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  ethnicity?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  militaryService?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  weightUnits?: ModelStringInput | null,
  height?: ModelFloatInput | null,
  heightUnits?: ModelStringInput | null,
  researchConsent?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id?: string,
  email?: string,
  name?: string,
  preferred_username?: string,
  gender?: string | null,
  ethnicity?: string | null,
  dateOfBirth?: string | null,
  militaryService?: string | null,
  weight?: number | null,
  weightUnits?: string | null,
  height?: number | null,
  heightUnits?: string | null,
  researchConsent?: boolean | null,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  name?: string | null,
  preferred_username?: string | null,
  gender?: string | null,
  ethnicity?: string | null,
  dateOfBirth?: string | null,
  militaryService?: string | null,
  weight?: number | null,
  weightUnits?: string | null,
  height?: number | null,
  heightUnits?: string | null,
  researchConsent?: boolean | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateAmputationInput = {
  id?: string | null,
  limb: string,
  level: string,
  prosthesisWorn: boolean,
  hand?: string | null,
  elbow?: string | null,
  foot?: string | null,
  ankle?: string | null,
  knee?: string | null,
  socket?: string | null,
};

export type ModelAmputationConditionInput = {
  limb?: ModelStringInput | null,
  level?: ModelStringInput | null,
  prosthesisWorn?: ModelBooleanInput | null,
  hand?: ModelStringInput | null,
  elbow?: ModelStringInput | null,
  foot?: ModelStringInput | null,
  ankle?: ModelStringInput | null,
  knee?: ModelStringInput | null,
  socket?: ModelStringInput | null,
  and?: Array< ModelAmputationConditionInput | null > | null,
  or?: Array< ModelAmputationConditionInput | null > | null,
  not?: ModelAmputationConditionInput | null,
};

export type Amputation = {
  __typename: "Amputation",
  id?: string,
  limb?: string,
  level?: string,
  prosthesisWorn?: boolean,
  hand?: string | null,
  elbow?: string | null,
  foot?: string | null,
  ankle?: string | null,
  knee?: string | null,
  socket?: string | null,
  limbChecks?: ModellimbCheckConnection,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type ModellimbCheckConnection = {
  __typename: "ModellimbCheckConnection",
  items?:  Array<limbCheck | null > | null,
  nextToken?: string | null,
};

export type limbCheck = {
  __typename: "limbCheck",
  id?: string,
  amputationId?: string,
  healthCheckId?: string | null,
  healthCheck?: HealthCheck,
  residuum?: ResiduumCheck,
  socket?: SocketCheck,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type HealthCheck = {
  __typename: "HealthCheck",
  id?: string,
  bodyCheck?: BodyCheck,
  limbChecks?: ModellimbCheckConnection,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type BodyCheck = {
  __typename: "BodyCheck",
  good?: boolean,
  achy?: boolean,
  tired?: boolean,
  sore?: boolean,
  stiff?: boolean,
  other?: boolean,
  details?: string,
  otherComments?: string,
};

export type ResiduumCheck = {
  __typename: "ResiduumCheck",
  good?: boolean,
  sore?: boolean,
  painful?: boolean,
  red?: boolean,
  blistered?: boolean,
  bleeding?: boolean,
  bruised?: boolean,
  sweaty?: boolean,
  other?: boolean,
  details?: string,
  otherComments?: string,
};

export type SocketCheck = {
  __typename: "SocketCheck",
  comfortScore?: number,
  tight?: boolean | null,
  loose?: boolean | null,
  painful?: boolean | null,
  uncomfortable?: boolean | null,
  hot?: boolean | null,
  other?: boolean | null,
  details?: string | null,
  otherComments?: string | null,
};

export type UpdateAmputationInput = {
  id: string,
  limb?: string | null,
  level?: string | null,
  prosthesisWorn?: boolean | null,
  hand?: string | null,
  elbow?: string | null,
  foot?: string | null,
  ankle?: string | null,
  knee?: string | null,
  socket?: string | null,
};

export type DeleteAmputationInput = {
  id?: string | null,
};

export type CreateInjuryInput = {
  id?: string | null,
  location: string,
  severity: string,
  chronic: boolean,
};

export type ModelInjuryConditionInput = {
  location?: ModelStringInput | null,
  severity?: ModelStringInput | null,
  chronic?: ModelBooleanInput | null,
  and?: Array< ModelInjuryConditionInput | null > | null,
  or?: Array< ModelInjuryConditionInput | null > | null,
  not?: ModelInjuryConditionInput | null,
};

export type Injury = {
  __typename: "Injury",
  id?: string,
  location?: string,
  severity?: string,
  chronic?: boolean,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type UpdateInjuryInput = {
  id: string,
  location?: string | null,
  severity?: string | null,
  chronic?: boolean | null,
};

export type DeleteInjuryInput = {
  id?: string | null,
};

export type CreateHealthCheckInput = {
  id?: string | null,
  bodyCheck?: BodyCheckInput | null,
};

export type BodyCheckInput = {
  good: boolean,
  achy: boolean,
  tired: boolean,
  sore: boolean,
  stiff: boolean,
  other: boolean,
  details: string,
  otherComments: string,
};

export type ModelHealthCheckConditionInput = {
  and?: Array< ModelHealthCheckConditionInput | null > | null,
  or?: Array< ModelHealthCheckConditionInput | null > | null,
  not?: ModelHealthCheckConditionInput | null,
};

export type UpdateHealthCheckInput = {
  id: string,
  bodyCheck?: BodyCheckInput | null,
};

export type DeleteHealthCheckInput = {
  id?: string | null,
};

export type CreateActivityInput = {
  id?: string | null,
  date: string,
  activity: string,
  duration: string,
  distance?: string | null,
  cardio?: boolean | null,
  flexibility?: boolean | null,
  strength?: boolean | null,
  workoutDetails: string,
  perceivedExertion: number,
};

export type ModelActivityConditionInput = {
  date?: ModelStringInput | null,
  activity?: ModelStringInput | null,
  duration?: ModelStringInput | null,
  distance?: ModelStringInput | null,
  cardio?: ModelBooleanInput | null,
  flexibility?: ModelBooleanInput | null,
  strength?: ModelBooleanInput | null,
  workoutDetails?: ModelStringInput | null,
  perceivedExertion?: ModelIntInput | null,
  and?: Array< ModelActivityConditionInput | null > | null,
  or?: Array< ModelActivityConditionInput | null > | null,
  not?: ModelActivityConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Activity = {
  __typename: "Activity",
  id?: string,
  date?: string,
  activity?: string,
  duration?: string,
  distance?: string | null,
  cardio?: boolean | null,
  flexibility?: boolean | null,
  strength?: boolean | null,
  workoutDetails?: string,
  perceivedExertion?: number,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type UpdateActivityInput = {
  id: string,
  date?: string | null,
  activity?: string | null,
  duration?: string | null,
  distance?: string | null,
  cardio?: boolean | null,
  flexibility?: boolean | null,
  strength?: boolean | null,
  workoutDetails?: string | null,
  perceivedExertion?: number | null,
};

export type DeleteActivityInput = {
  id?: string | null,
};

export type CreateLimbCheckInput = {
  id?: string | null,
  amputationId: string,
  healthCheckId?: string | null,
  residuum: ResiduumCheckInput,
  socket?: SocketCheckInput | null,
};

export type ResiduumCheckInput = {
  good: boolean,
  sore: boolean,
  painful: boolean,
  red: boolean,
  blistered: boolean,
  bleeding: boolean,
  bruised: boolean,
  sweaty: boolean,
  other: boolean,
  details: string,
  otherComments: string,
};

export type SocketCheckInput = {
  comfortScore: number,
  tight?: boolean | null,
  loose?: boolean | null,
  painful?: boolean | null,
  uncomfortable?: boolean | null,
  hot?: boolean | null,
  other?: boolean | null,
  details?: string | null,
  otherComments?: string | null,
};

export type ModellimbCheckConditionInput = {
  amputationId?: ModelIDInput | null,
  healthCheckId?: ModelIDInput | null,
  and?: Array< ModellimbCheckConditionInput | null > | null,
  or?: Array< ModellimbCheckConditionInput | null > | null,
  not?: ModellimbCheckConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateLimbCheckInput = {
  id: string,
  amputationId?: string | null,
  healthCheckId?: string | null,
  residuum?: ResiduumCheckInput | null,
  socket?: SocketCheckInput | null,
};

export type DeleteLimbCheckInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  preferred_username?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  ethnicity?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  militaryService?: ModelStringInput | null,
  weight?: ModelFloatInput | null,
  weightUnits?: ModelStringInput | null,
  height?: ModelFloatInput | null,
  heightUnits?: ModelStringInput | null,
  researchConsent?: ModelBooleanInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelAmputationFilterInput = {
  id?: ModelIDInput | null,
  limb?: ModelStringInput | null,
  level?: ModelStringInput | null,
  prosthesisWorn?: ModelBooleanInput | null,
  hand?: ModelStringInput | null,
  elbow?: ModelStringInput | null,
  foot?: ModelStringInput | null,
  ankle?: ModelStringInput | null,
  knee?: ModelStringInput | null,
  socket?: ModelStringInput | null,
  and?: Array< ModelAmputationFilterInput | null > | null,
  or?: Array< ModelAmputationFilterInput | null > | null,
  not?: ModelAmputationFilterInput | null,
};

export type ModelAmputationConnection = {
  __typename: "ModelAmputationConnection",
  items?:  Array<Amputation | null > | null,
  nextToken?: string | null,
};

export type ModelInjuryFilterInput = {
  id?: ModelIDInput | null,
  location?: ModelStringInput | null,
  severity?: ModelStringInput | null,
  chronic?: ModelBooleanInput | null,
  and?: Array< ModelInjuryFilterInput | null > | null,
  or?: Array< ModelInjuryFilterInput | null > | null,
  not?: ModelInjuryFilterInput | null,
};

export type ModelInjuryConnection = {
  __typename: "ModelInjuryConnection",
  items?:  Array<Injury | null > | null,
  nextToken?: string | null,
};

export type ModelHealthCheckFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelHealthCheckFilterInput | null > | null,
  or?: Array< ModelHealthCheckFilterInput | null > | null,
  not?: ModelHealthCheckFilterInput | null,
};

export type ModelHealthCheckConnection = {
  __typename: "ModelHealthCheckConnection",
  items?:  Array<HealthCheck | null > | null,
  nextToken?: string | null,
};

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  activity?: ModelStringInput | null,
  duration?: ModelStringInput | null,
  distance?: ModelStringInput | null,
  cardio?: ModelBooleanInput | null,
  flexibility?: ModelBooleanInput | null,
  strength?: ModelBooleanInput | null,
  workoutDetails?: ModelStringInput | null,
  perceivedExertion?: ModelIntInput | null,
  and?: Array< ModelActivityFilterInput | null > | null,
  or?: Array< ModelActivityFilterInput | null > | null,
  not?: ModelActivityFilterInput | null,
};

export type ModelActivityConnection = {
  __typename: "ModelActivityConnection",
  items?:  Array<Activity | null > | null,
  nextToken?: string | null,
};

export type ModellimbCheckFilterInput = {
  id?: ModelIDInput | null,
  amputationId?: ModelIDInput | null,
  healthCheckId?: ModelIDInput | null,
  and?: Array< ModellimbCheckFilterInput | null > | null,
  or?: Array< ModellimbCheckFilterInput | null > | null,
  not?: ModellimbCheckFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    preferred_username: string,
    gender?: string | null,
    ethnicity?: string | null,
    dateOfBirth?: string | null,
    militaryService?: string | null,
    weight?: number | null,
    weightUnits?: string | null,
    height?: number | null,
    heightUnits?: string | null,
    researchConsent?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    preferred_username: string,
    gender?: string | null,
    ethnicity?: string | null,
    dateOfBirth?: string | null,
    militaryService?: string | null,
    weight?: number | null,
    weightUnits?: string | null,
    height?: number | null,
    heightUnits?: string | null,
    researchConsent?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    preferred_username: string,
    gender?: string | null,
    ethnicity?: string | null,
    dateOfBirth?: string | null,
    militaryService?: string | null,
    weight?: number | null,
    weightUnits?: string | null,
    height?: number | null,
    heightUnits?: string | null,
    researchConsent?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateAmputationMutationVariables = {
  input?: CreateAmputationInput,
  condition?: ModelAmputationConditionInput | null,
};

export type CreateAmputationMutation = {
  createAmputation?:  {
    __typename: "Amputation",
    id: string,
    limb: string,
    level: string,
    prosthesisWorn: boolean,
    hand?: string | null,
    elbow?: string | null,
    foot?: string | null,
    ankle?: string | null,
    knee?: string | null,
    socket?: string | null,
    limbChecks?:  {
      __typename: "ModellimbCheckConnection",
      items?:  Array< {
        __typename: "limbCheck",
        id: string,
        amputationId: string,
        healthCheckId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateAmputationMutationVariables = {
  input?: UpdateAmputationInput,
  condition?: ModelAmputationConditionInput | null,
};

export type UpdateAmputationMutation = {
  updateAmputation?:  {
    __typename: "Amputation",
    id: string,
    limb: string,
    level: string,
    prosthesisWorn: boolean,
    hand?: string | null,
    elbow?: string | null,
    foot?: string | null,
    ankle?: string | null,
    knee?: string | null,
    socket?: string | null,
    limbChecks?:  {
      __typename: "ModellimbCheckConnection",
      items?:  Array< {
        __typename: "limbCheck",
        id: string,
        amputationId: string,
        healthCheckId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteAmputationMutationVariables = {
  input?: DeleteAmputationInput,
  condition?: ModelAmputationConditionInput | null,
};

export type DeleteAmputationMutation = {
  deleteAmputation?:  {
    __typename: "Amputation",
    id: string,
    limb: string,
    level: string,
    prosthesisWorn: boolean,
    hand?: string | null,
    elbow?: string | null,
    foot?: string | null,
    ankle?: string | null,
    knee?: string | null,
    socket?: string | null,
    limbChecks?:  {
      __typename: "ModellimbCheckConnection",
      items?:  Array< {
        __typename: "limbCheck",
        id: string,
        amputationId: string,
        healthCheckId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateInjuryMutationVariables = {
  input?: CreateInjuryInput,
  condition?: ModelInjuryConditionInput | null,
};

export type CreateInjuryMutation = {
  createInjury?:  {
    __typename: "Injury",
    id: string,
    location: string,
    severity: string,
    chronic: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateInjuryMutationVariables = {
  input?: UpdateInjuryInput,
  condition?: ModelInjuryConditionInput | null,
};

export type UpdateInjuryMutation = {
  updateInjury?:  {
    __typename: "Injury",
    id: string,
    location: string,
    severity: string,
    chronic: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteInjuryMutationVariables = {
  input?: DeleteInjuryInput,
  condition?: ModelInjuryConditionInput | null,
};

export type DeleteInjuryMutation = {
  deleteInjury?:  {
    __typename: "Injury",
    id: string,
    location: string,
    severity: string,
    chronic: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateHealthCheckMutationVariables = {
  input?: CreateHealthCheckInput,
  condition?: ModelHealthCheckConditionInput | null,
};

export type CreateHealthCheckMutation = {
  createHealthCheck?:  {
    __typename: "HealthCheck",
    id: string,
    bodyCheck?:  {
      __typename: "BodyCheck",
      good: boolean,
      achy: boolean,
      tired: boolean,
      sore: boolean,
      stiff: boolean,
      other: boolean,
      details: string,
      otherComments: string,
    } | null,
    limbChecks?:  {
      __typename: "ModellimbCheckConnection",
      items?:  Array< {
        __typename: "limbCheck",
        id: string,
        amputationId: string,
        healthCheckId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateHealthCheckMutationVariables = {
  input?: UpdateHealthCheckInput,
  condition?: ModelHealthCheckConditionInput | null,
};

export type UpdateHealthCheckMutation = {
  updateHealthCheck?:  {
    __typename: "HealthCheck",
    id: string,
    bodyCheck?:  {
      __typename: "BodyCheck",
      good: boolean,
      achy: boolean,
      tired: boolean,
      sore: boolean,
      stiff: boolean,
      other: boolean,
      details: string,
      otherComments: string,
    } | null,
    limbChecks?:  {
      __typename: "ModellimbCheckConnection",
      items?:  Array< {
        __typename: "limbCheck",
        id: string,
        amputationId: string,
        healthCheckId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteHealthCheckMutationVariables = {
  input?: DeleteHealthCheckInput,
  condition?: ModelHealthCheckConditionInput | null,
};

export type DeleteHealthCheckMutation = {
  deleteHealthCheck?:  {
    __typename: "HealthCheck",
    id: string,
    bodyCheck?:  {
      __typename: "BodyCheck",
      good: boolean,
      achy: boolean,
      tired: boolean,
      sore: boolean,
      stiff: boolean,
      other: boolean,
      details: string,
      otherComments: string,
    } | null,
    limbChecks?:  {
      __typename: "ModellimbCheckConnection",
      items?:  Array< {
        __typename: "limbCheck",
        id: string,
        amputationId: string,
        healthCheckId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateActivityMutationVariables = {
  input?: CreateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type CreateActivityMutation = {
  createActivity?:  {
    __typename: "Activity",
    id: string,
    date: string,
    activity: string,
    duration: string,
    distance?: string | null,
    cardio?: boolean | null,
    flexibility?: boolean | null,
    strength?: boolean | null,
    workoutDetails: string,
    perceivedExertion: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateActivityMutationVariables = {
  input?: UpdateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type UpdateActivityMutation = {
  updateActivity?:  {
    __typename: "Activity",
    id: string,
    date: string,
    activity: string,
    duration: string,
    distance?: string | null,
    cardio?: boolean | null,
    flexibility?: boolean | null,
    strength?: boolean | null,
    workoutDetails: string,
    perceivedExertion: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteActivityMutationVariables = {
  input?: DeleteActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type DeleteActivityMutation = {
  deleteActivity?:  {
    __typename: "Activity",
    id: string,
    date: string,
    activity: string,
    duration: string,
    distance?: string | null,
    cardio?: boolean | null,
    flexibility?: boolean | null,
    strength?: boolean | null,
    workoutDetails: string,
    perceivedExertion: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateLimbCheckMutationVariables = {
  input?: CreateLimbCheckInput,
  condition?: ModellimbCheckConditionInput | null,
};

export type CreateLimbCheckMutation = {
  createLimbCheck?:  {
    __typename: "limbCheck",
    id: string,
    amputationId: string,
    healthCheckId?: string | null,
    healthCheck?:  {
      __typename: "HealthCheck",
      id: string,
      bodyCheck?:  {
        __typename: "BodyCheck",
        good: boolean,
        achy: boolean,
        tired: boolean,
        sore: boolean,
        stiff: boolean,
        other: boolean,
        details: string,
        otherComments: string,
      } | null,
      limbChecks?:  {
        __typename: "ModellimbCheckConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    residuum:  {
      __typename: "ResiduumCheck",
      good: boolean,
      sore: boolean,
      painful: boolean,
      red: boolean,
      blistered: boolean,
      bleeding: boolean,
      bruised: boolean,
      sweaty: boolean,
      other: boolean,
      details: string,
      otherComments: string,
    },
    socket?:  {
      __typename: "SocketCheck",
      comfortScore: number,
      tight?: boolean | null,
      loose?: boolean | null,
      painful?: boolean | null,
      uncomfortable?: boolean | null,
      hot?: boolean | null,
      other?: boolean | null,
      details?: string | null,
      otherComments?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateLimbCheckMutationVariables = {
  input?: UpdateLimbCheckInput,
  condition?: ModellimbCheckConditionInput | null,
};

export type UpdateLimbCheckMutation = {
  updateLimbCheck?:  {
    __typename: "limbCheck",
    id: string,
    amputationId: string,
    healthCheckId?: string | null,
    healthCheck?:  {
      __typename: "HealthCheck",
      id: string,
      bodyCheck?:  {
        __typename: "BodyCheck",
        good: boolean,
        achy: boolean,
        tired: boolean,
        sore: boolean,
        stiff: boolean,
        other: boolean,
        details: string,
        otherComments: string,
      } | null,
      limbChecks?:  {
        __typename: "ModellimbCheckConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    residuum:  {
      __typename: "ResiduumCheck",
      good: boolean,
      sore: boolean,
      painful: boolean,
      red: boolean,
      blistered: boolean,
      bleeding: boolean,
      bruised: boolean,
      sweaty: boolean,
      other: boolean,
      details: string,
      otherComments: string,
    },
    socket?:  {
      __typename: "SocketCheck",
      comfortScore: number,
      tight?: boolean | null,
      loose?: boolean | null,
      painful?: boolean | null,
      uncomfortable?: boolean | null,
      hot?: boolean | null,
      other?: boolean | null,
      details?: string | null,
      otherComments?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteLimbCheckMutationVariables = {
  input?: DeleteLimbCheckInput,
  condition?: ModellimbCheckConditionInput | null,
};

export type DeleteLimbCheckMutation = {
  deleteLimbCheck?:  {
    __typename: "limbCheck",
    id: string,
    amputationId: string,
    healthCheckId?: string | null,
    healthCheck?:  {
      __typename: "HealthCheck",
      id: string,
      bodyCheck?:  {
        __typename: "BodyCheck",
        good: boolean,
        achy: boolean,
        tired: boolean,
        sore: boolean,
        stiff: boolean,
        other: boolean,
        details: string,
        otherComments: string,
      } | null,
      limbChecks?:  {
        __typename: "ModellimbCheckConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    residuum:  {
      __typename: "ResiduumCheck",
      good: boolean,
      sore: boolean,
      painful: boolean,
      red: boolean,
      blistered: boolean,
      bleeding: boolean,
      bruised: boolean,
      sweaty: boolean,
      other: boolean,
      details: string,
      otherComments: string,
    },
    socket?:  {
      __typename: "SocketCheck",
      comfortScore: number,
      tight?: boolean | null,
      loose?: boolean | null,
      painful?: boolean | null,
      uncomfortable?: boolean | null,
      hot?: boolean | null,
      other?: boolean | null,
      details?: string | null,
      otherComments?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    preferred_username: string,
    gender?: string | null,
    ethnicity?: string | null,
    dateOfBirth?: string | null,
    militaryService?: string | null,
    weight?: number | null,
    weightUnits?: string | null,
    height?: number | null,
    heightUnits?: string | null,
    researchConsent?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      preferred_username: string,
      gender?: string | null,
      ethnicity?: string | null,
      dateOfBirth?: string | null,
      militaryService?: string | null,
      weight?: number | null,
      weightUnits?: string | null,
      height?: number | null,
      heightUnits?: string | null,
      researchConsent?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAmputationQueryVariables = {
  id?: string,
};

export type GetAmputationQuery = {
  getAmputation?:  {
    __typename: "Amputation",
    id: string,
    limb: string,
    level: string,
    prosthesisWorn: boolean,
    hand?: string | null,
    elbow?: string | null,
    foot?: string | null,
    ankle?: string | null,
    knee?: string | null,
    socket?: string | null,
    limbChecks?:  {
      __typename: "ModellimbCheckConnection",
      items?:  Array< {
        __typename: "limbCheck",
        id: string,
        amputationId: string,
        healthCheckId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListAmputationsQueryVariables = {
  filter?: ModelAmputationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAmputationsQuery = {
  listAmputations?:  {
    __typename: "ModelAmputationConnection",
    items?:  Array< {
      __typename: "Amputation",
      id: string,
      limb: string,
      level: string,
      prosthesisWorn: boolean,
      hand?: string | null,
      elbow?: string | null,
      foot?: string | null,
      ankle?: string | null,
      knee?: string | null,
      socket?: string | null,
      limbChecks?:  {
        __typename: "ModellimbCheckConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetInjuryQueryVariables = {
  id?: string,
};

export type GetInjuryQuery = {
  getInjury?:  {
    __typename: "Injury",
    id: string,
    location: string,
    severity: string,
    chronic: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListInjurysQueryVariables = {
  filter?: ModelInjuryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInjurysQuery = {
  listInjurys?:  {
    __typename: "ModelInjuryConnection",
    items?:  Array< {
      __typename: "Injury",
      id: string,
      location: string,
      severity: string,
      chronic: boolean,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetHealthCheckQueryVariables = {
  id?: string,
};

export type GetHealthCheckQuery = {
  getHealthCheck?:  {
    __typename: "HealthCheck",
    id: string,
    bodyCheck?:  {
      __typename: "BodyCheck",
      good: boolean,
      achy: boolean,
      tired: boolean,
      sore: boolean,
      stiff: boolean,
      other: boolean,
      details: string,
      otherComments: string,
    } | null,
    limbChecks?:  {
      __typename: "ModellimbCheckConnection",
      items?:  Array< {
        __typename: "limbCheck",
        id: string,
        amputationId: string,
        healthCheckId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListHealthChecksQueryVariables = {
  filter?: ModelHealthCheckFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHealthChecksQuery = {
  listHealthChecks?:  {
    __typename: "ModelHealthCheckConnection",
    items?:  Array< {
      __typename: "HealthCheck",
      id: string,
      bodyCheck?:  {
        __typename: "BodyCheck",
        good: boolean,
        achy: boolean,
        tired: boolean,
        sore: boolean,
        stiff: boolean,
        other: boolean,
        details: string,
        otherComments: string,
      } | null,
      limbChecks?:  {
        __typename: "ModellimbCheckConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetActivityQueryVariables = {
  id?: string,
};

export type GetActivityQuery = {
  getActivity?:  {
    __typename: "Activity",
    id: string,
    date: string,
    activity: string,
    duration: string,
    distance?: string | null,
    cardio?: boolean | null,
    flexibility?: boolean | null,
    strength?: boolean | null,
    workoutDetails: string,
    perceivedExertion: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListActivitysQueryVariables = {
  filter?: ModelActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActivitysQuery = {
  listActivitys?:  {
    __typename: "ModelActivityConnection",
    items?:  Array< {
      __typename: "Activity",
      id: string,
      date: string,
      activity: string,
      duration: string,
      distance?: string | null,
      cardio?: boolean | null,
      flexibility?: boolean | null,
      strength?: boolean | null,
      workoutDetails: string,
      perceivedExertion: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetLimbCheckQueryVariables = {
  id?: string,
};

export type GetLimbCheckQuery = {
  getLimbCheck?:  {
    __typename: "limbCheck",
    id: string,
    amputationId: string,
    healthCheckId?: string | null,
    healthCheck?:  {
      __typename: "HealthCheck",
      id: string,
      bodyCheck?:  {
        __typename: "BodyCheck",
        good: boolean,
        achy: boolean,
        tired: boolean,
        sore: boolean,
        stiff: boolean,
        other: boolean,
        details: string,
        otherComments: string,
      } | null,
      limbChecks?:  {
        __typename: "ModellimbCheckConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    residuum:  {
      __typename: "ResiduumCheck",
      good: boolean,
      sore: boolean,
      painful: boolean,
      red: boolean,
      blistered: boolean,
      bleeding: boolean,
      bruised: boolean,
      sweaty: boolean,
      other: boolean,
      details: string,
      otherComments: string,
    },
    socket?:  {
      __typename: "SocketCheck",
      comfortScore: number,
      tight?: boolean | null,
      loose?: boolean | null,
      painful?: boolean | null,
      uncomfortable?: boolean | null,
      hot?: boolean | null,
      other?: boolean | null,
      details?: string | null,
      otherComments?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListLimbChecksQueryVariables = {
  filter?: ModellimbCheckFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLimbChecksQuery = {
  listLimbChecks?:  {
    __typename: "ModellimbCheckConnection",
    items?:  Array< {
      __typename: "limbCheck",
      id: string,
      amputationId: string,
      healthCheckId?: string | null,
      healthCheck?:  {
        __typename: "HealthCheck",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      residuum:  {
        __typename: "ResiduumCheck",
        good: boolean,
        sore: boolean,
        painful: boolean,
        red: boolean,
        blistered: boolean,
        bleeding: boolean,
        bruised: boolean,
        sweaty: boolean,
        other: boolean,
        details: string,
        otherComments: string,
      },
      socket?:  {
        __typename: "SocketCheck",
        comfortScore: number,
        tight?: boolean | null,
        loose?: boolean | null,
        painful?: boolean | null,
        uncomfortable?: boolean | null,
        hot?: boolean | null,
        other?: boolean | null,
        details?: string | null,
        otherComments?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type LimbCheckByHealthCheckIdQueryVariables = {
  healthCheckId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModellimbCheckFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LimbCheckByHealthCheckIdQuery = {
  limbCheckByHealthCheckId?:  {
    __typename: "ModellimbCheckConnection",
    items?:  Array< {
      __typename: "limbCheck",
      id: string,
      amputationId: string,
      healthCheckId?: string | null,
      healthCheck?:  {
        __typename: "HealthCheck",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      residuum:  {
        __typename: "ResiduumCheck",
        good: boolean,
        sore: boolean,
        painful: boolean,
        red: boolean,
        blistered: boolean,
        bleeding: boolean,
        bruised: boolean,
        sweaty: boolean,
        other: boolean,
        details: string,
        otherComments: string,
      },
      socket?:  {
        __typename: "SocketCheck",
        comfortScore: number,
        tight?: boolean | null,
        loose?: boolean | null,
        painful?: boolean | null,
        uncomfortable?: boolean | null,
        hot?: boolean | null,
        other?: boolean | null,
        details?: string | null,
        otherComments?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type LimbCheckByAmputationIdQueryVariables = {
  amputationId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModellimbCheckFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LimbCheckByAmputationIdQuery = {
  limbCheckByAmputationId?:  {
    __typename: "ModellimbCheckConnection",
    items?:  Array< {
      __typename: "limbCheck",
      id: string,
      amputationId: string,
      healthCheckId?: string | null,
      healthCheck?:  {
        __typename: "HealthCheck",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      residuum:  {
        __typename: "ResiduumCheck",
        good: boolean,
        sore: boolean,
        painful: boolean,
        red: boolean,
        blistered: boolean,
        bleeding: boolean,
        bruised: boolean,
        sweaty: boolean,
        other: boolean,
        details: string,
        otherComments: string,
      },
      socket?:  {
        __typename: "SocketCheck",
        comfortScore: number,
        tight?: boolean | null,
        loose?: boolean | null,
        painful?: boolean | null,
        uncomfortable?: boolean | null,
        hot?: boolean | null,
        other?: boolean | null,
        details?: string | null,
        otherComments?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner?: string,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    preferred_username: string,
    gender?: string | null,
    ethnicity?: string | null,
    dateOfBirth?: string | null,
    militaryService?: string | null,
    weight?: number | null,
    weightUnits?: string | null,
    height?: number | null,
    heightUnits?: string | null,
    researchConsent?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner?: string,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    preferred_username: string,
    gender?: string | null,
    ethnicity?: string | null,
    dateOfBirth?: string | null,
    militaryService?: string | null,
    weight?: number | null,
    weightUnits?: string | null,
    height?: number | null,
    heightUnits?: string | null,
    researchConsent?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner?: string,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    preferred_username: string,
    gender?: string | null,
    ethnicity?: string | null,
    dateOfBirth?: string | null,
    militaryService?: string | null,
    weight?: number | null,
    weightUnits?: string | null,
    height?: number | null,
    heightUnits?: string | null,
    researchConsent?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateAmputationSubscriptionVariables = {
  owner?: string,
};

export type OnCreateAmputationSubscription = {
  onCreateAmputation?:  {
    __typename: "Amputation",
    id: string,
    limb: string,
    level: string,
    prosthesisWorn: boolean,
    hand?: string | null,
    elbow?: string | null,
    foot?: string | null,
    ankle?: string | null,
    knee?: string | null,
    socket?: string | null,
    limbChecks?:  {
      __typename: "ModellimbCheckConnection",
      items?:  Array< {
        __typename: "limbCheck",
        id: string,
        amputationId: string,
        healthCheckId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateAmputationSubscriptionVariables = {
  owner?: string,
};

export type OnUpdateAmputationSubscription = {
  onUpdateAmputation?:  {
    __typename: "Amputation",
    id: string,
    limb: string,
    level: string,
    prosthesisWorn: boolean,
    hand?: string | null,
    elbow?: string | null,
    foot?: string | null,
    ankle?: string | null,
    knee?: string | null,
    socket?: string | null,
    limbChecks?:  {
      __typename: "ModellimbCheckConnection",
      items?:  Array< {
        __typename: "limbCheck",
        id: string,
        amputationId: string,
        healthCheckId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteAmputationSubscriptionVariables = {
  owner?: string,
};

export type OnDeleteAmputationSubscription = {
  onDeleteAmputation?:  {
    __typename: "Amputation",
    id: string,
    limb: string,
    level: string,
    prosthesisWorn: boolean,
    hand?: string | null,
    elbow?: string | null,
    foot?: string | null,
    ankle?: string | null,
    knee?: string | null,
    socket?: string | null,
    limbChecks?:  {
      __typename: "ModellimbCheckConnection",
      items?:  Array< {
        __typename: "limbCheck",
        id: string,
        amputationId: string,
        healthCheckId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateInjurySubscriptionVariables = {
  owner?: string,
};

export type OnCreateInjurySubscription = {
  onCreateInjury?:  {
    __typename: "Injury",
    id: string,
    location: string,
    severity: string,
    chronic: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateInjurySubscriptionVariables = {
  owner?: string,
};

export type OnUpdateInjurySubscription = {
  onUpdateInjury?:  {
    __typename: "Injury",
    id: string,
    location: string,
    severity: string,
    chronic: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteInjurySubscriptionVariables = {
  owner?: string,
};

export type OnDeleteInjurySubscription = {
  onDeleteInjury?:  {
    __typename: "Injury",
    id: string,
    location: string,
    severity: string,
    chronic: boolean,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateHealthCheckSubscriptionVariables = {
  owner?: string,
};

export type OnCreateHealthCheckSubscription = {
  onCreateHealthCheck?:  {
    __typename: "HealthCheck",
    id: string,
    bodyCheck?:  {
      __typename: "BodyCheck",
      good: boolean,
      achy: boolean,
      tired: boolean,
      sore: boolean,
      stiff: boolean,
      other: boolean,
      details: string,
      otherComments: string,
    } | null,
    limbChecks?:  {
      __typename: "ModellimbCheckConnection",
      items?:  Array< {
        __typename: "limbCheck",
        id: string,
        amputationId: string,
        healthCheckId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateHealthCheckSubscriptionVariables = {
  owner?: string,
};

export type OnUpdateHealthCheckSubscription = {
  onUpdateHealthCheck?:  {
    __typename: "HealthCheck",
    id: string,
    bodyCheck?:  {
      __typename: "BodyCheck",
      good: boolean,
      achy: boolean,
      tired: boolean,
      sore: boolean,
      stiff: boolean,
      other: boolean,
      details: string,
      otherComments: string,
    } | null,
    limbChecks?:  {
      __typename: "ModellimbCheckConnection",
      items?:  Array< {
        __typename: "limbCheck",
        id: string,
        amputationId: string,
        healthCheckId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteHealthCheckSubscriptionVariables = {
  owner?: string,
};

export type OnDeleteHealthCheckSubscription = {
  onDeleteHealthCheck?:  {
    __typename: "HealthCheck",
    id: string,
    bodyCheck?:  {
      __typename: "BodyCheck",
      good: boolean,
      achy: boolean,
      tired: boolean,
      sore: boolean,
      stiff: boolean,
      other: boolean,
      details: string,
      otherComments: string,
    } | null,
    limbChecks?:  {
      __typename: "ModellimbCheckConnection",
      items?:  Array< {
        __typename: "limbCheck",
        id: string,
        amputationId: string,
        healthCheckId?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateActivitySubscriptionVariables = {
  owner?: string,
};

export type OnCreateActivitySubscription = {
  onCreateActivity?:  {
    __typename: "Activity",
    id: string,
    date: string,
    activity: string,
    duration: string,
    distance?: string | null,
    cardio?: boolean | null,
    flexibility?: boolean | null,
    strength?: boolean | null,
    workoutDetails: string,
    perceivedExertion: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateActivitySubscriptionVariables = {
  owner?: string,
};

export type OnUpdateActivitySubscription = {
  onUpdateActivity?:  {
    __typename: "Activity",
    id: string,
    date: string,
    activity: string,
    duration: string,
    distance?: string | null,
    cardio?: boolean | null,
    flexibility?: boolean | null,
    strength?: boolean | null,
    workoutDetails: string,
    perceivedExertion: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteActivitySubscriptionVariables = {
  owner?: string,
};

export type OnDeleteActivitySubscription = {
  onDeleteActivity?:  {
    __typename: "Activity",
    id: string,
    date: string,
    activity: string,
    duration: string,
    distance?: string | null,
    cardio?: boolean | null,
    flexibility?: boolean | null,
    strength?: boolean | null,
    workoutDetails: string,
    perceivedExertion: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateLimbCheckSubscriptionVariables = {
  owner?: string,
};

export type OnCreateLimbCheckSubscription = {
  onCreateLimbCheck?:  {
    __typename: "limbCheck",
    id: string,
    amputationId: string,
    healthCheckId?: string | null,
    healthCheck?:  {
      __typename: "HealthCheck",
      id: string,
      bodyCheck?:  {
        __typename: "BodyCheck",
        good: boolean,
        achy: boolean,
        tired: boolean,
        sore: boolean,
        stiff: boolean,
        other: boolean,
        details: string,
        otherComments: string,
      } | null,
      limbChecks?:  {
        __typename: "ModellimbCheckConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    residuum:  {
      __typename: "ResiduumCheck",
      good: boolean,
      sore: boolean,
      painful: boolean,
      red: boolean,
      blistered: boolean,
      bleeding: boolean,
      bruised: boolean,
      sweaty: boolean,
      other: boolean,
      details: string,
      otherComments: string,
    },
    socket?:  {
      __typename: "SocketCheck",
      comfortScore: number,
      tight?: boolean | null,
      loose?: boolean | null,
      painful?: boolean | null,
      uncomfortable?: boolean | null,
      hot?: boolean | null,
      other?: boolean | null,
      details?: string | null,
      otherComments?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateLimbCheckSubscriptionVariables = {
  owner?: string,
};

export type OnUpdateLimbCheckSubscription = {
  onUpdateLimbCheck?:  {
    __typename: "limbCheck",
    id: string,
    amputationId: string,
    healthCheckId?: string | null,
    healthCheck?:  {
      __typename: "HealthCheck",
      id: string,
      bodyCheck?:  {
        __typename: "BodyCheck",
        good: boolean,
        achy: boolean,
        tired: boolean,
        sore: boolean,
        stiff: boolean,
        other: boolean,
        details: string,
        otherComments: string,
      } | null,
      limbChecks?:  {
        __typename: "ModellimbCheckConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    residuum:  {
      __typename: "ResiduumCheck",
      good: boolean,
      sore: boolean,
      painful: boolean,
      red: boolean,
      blistered: boolean,
      bleeding: boolean,
      bruised: boolean,
      sweaty: boolean,
      other: boolean,
      details: string,
      otherComments: string,
    },
    socket?:  {
      __typename: "SocketCheck",
      comfortScore: number,
      tight?: boolean | null,
      loose?: boolean | null,
      painful?: boolean | null,
      uncomfortable?: boolean | null,
      hot?: boolean | null,
      other?: boolean | null,
      details?: string | null,
      otherComments?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteLimbCheckSubscriptionVariables = {
  owner?: string,
};

export type OnDeleteLimbCheckSubscription = {
  onDeleteLimbCheck?:  {
    __typename: "limbCheck",
    id: string,
    amputationId: string,
    healthCheckId?: string | null,
    healthCheck?:  {
      __typename: "HealthCheck",
      id: string,
      bodyCheck?:  {
        __typename: "BodyCheck",
        good: boolean,
        achy: boolean,
        tired: boolean,
        sore: boolean,
        stiff: boolean,
        other: boolean,
        details: string,
        otherComments: string,
      } | null,
      limbChecks?:  {
        __typename: "ModellimbCheckConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    residuum:  {
      __typename: "ResiduumCheck",
      good: boolean,
      sore: boolean,
      painful: boolean,
      red: boolean,
      blistered: boolean,
      bleeding: boolean,
      bruised: boolean,
      sweaty: boolean,
      other: boolean,
      details: string,
      otherComments: string,
    },
    socket?:  {
      __typename: "SocketCheck",
      comfortScore: number,
      tight?: boolean | null,
      loose?: boolean | null,
      painful?: boolean | null,
      uncomfortable?: boolean | null,
      hot?: boolean | null,
      other?: boolean | null,
      details?: string | null,
      otherComments?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
