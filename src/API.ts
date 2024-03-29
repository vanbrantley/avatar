/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGarmentInput = {
  id?: string | null,
  area: string,
  color: string,
  brand?: string | null,
  name: string,
};

export type ModelGarmentConditionInput = {
  area?: ModelStringInput | null,
  color?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array<ModelGarmentConditionInput | null> | null,
  or?: Array<ModelGarmentConditionInput | null> | null,
  not?: ModelGarmentConditionInput | null,
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
  between?: Array<string | null> | null,
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
  between?: Array<number | null> | null,
};

export type Garment = {
  __typename: "Garment",
  id: string,
  area: string,
  color: string,
  brand?: string | null,
  name: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateGarmentInput = {
  id: string,
  area?: string | null,
  color?: string | null,
  brand?: string | null,
  name?: string | null,
};

export type DeleteGarmentInput = {
  id: string,
};

export type CreateOutfitInput = {
  id?: string | null,
  hatId: string,
  topId: string,
  bottomId: string,
  shoeId: string,
};

export type ModelOutfitConditionInput = {
  hatId?: ModelStringInput | null,
  topId?: ModelStringInput | null,
  bottomId?: ModelStringInput | null,
  shoeId?: ModelStringInput | null,
  and?: Array<ModelOutfitConditionInput | null> | null,
  or?: Array<ModelOutfitConditionInput | null> | null,
  not?: ModelOutfitConditionInput | null,
};

export type Outfit = {
  __typename: "Outfit",
  id: string,
  hatId: string,
  topId: string,
  bottomId: string,
  shoeId: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateOutfitInput = {
  id: string,
  hatId?: string | null,
  topId?: string | null,
  bottomId?: string | null,
  shoeId?: string | null,
};

export type DeleteOutfitInput = {
  id: string,
};

export type CreateGroupInput = {
  id?: string | null,
  name: string,
};

export type ModelGroupConditionInput = {
  name?: ModelStringInput | null,
  and?: Array<ModelGroupConditionInput | null> | null,
  or?: Array<ModelGroupConditionInput | null> | null,
  not?: ModelGroupConditionInput | null,
};

export type Group = {
  __typename: "Group",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateGroupInput = {
  id: string,
  name?: string | null,
};

export type DeleteGroupInput = {
  id: string,
};

export type CreateGroupAssignmentInput = {
  id?: string | null,
  groupId: string,
  garmentId: string,
};

export type ModelGroupAssignmentConditionInput = {
  groupId?: ModelStringInput | null,
  garmentId?: ModelStringInput | null,
  and?: Array<ModelGroupAssignmentConditionInput | null> | null,
  or?: Array<ModelGroupAssignmentConditionInput | null> | null,
  not?: ModelGroupAssignmentConditionInput | null,
};

export type GroupAssignment = {
  __typename: "GroupAssignment",
  id: string,
  groupId: string,
  garmentId: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateGroupAssignmentInput = {
  id: string,
  groupId?: string | null,
  garmentId?: string | null,
};

export type DeleteGroupAssignmentInput = {
  id: string,
};

export type CreatePaletteInput = {
  id?: string | null,
  hatColor: string,
  topColor: string,
  bottomColor: string,
  shoeColor: string,
};

export type ModelPaletteConditionInput = {
  hatColor?: ModelStringInput | null,
  topColor?: ModelStringInput | null,
  bottomColor?: ModelStringInput | null,
  shoeColor?: ModelStringInput | null,
  and?: Array<ModelPaletteConditionInput | null> | null,
  or?: Array<ModelPaletteConditionInput | null> | null,
  not?: ModelPaletteConditionInput | null,
};

export type Palette = {
  __typename: "Palette",
  id: string,
  hatColor: string,
  topColor: string,
  bottomColor: string,
  shoeColor: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdatePaletteInput = {
  id: string,
  hatColor?: string | null,
  topColor?: string | null,
  bottomColor?: string | null,
  shoeColor?: string | null,
};

export type DeletePaletteInput = {
  id: string,
};

export type CreateComplexionInput = {
  id?: string | null,
  complexion: string,
};

export type ModelComplexionConditionInput = {
  complexion?: ModelStringInput | null,
  and?: Array<ModelComplexionConditionInput | null> | null,
  or?: Array<ModelComplexionConditionInput | null> | null,
  not?: ModelComplexionConditionInput | null,
};

export type Complexion = {
  __typename: "Complexion",
  id: string,
  complexion: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateComplexionInput = {
  id: string,
  complexion?: string | null,
};

export type DeleteComplexionInput = {
  id: string,
};

export type ModelGarmentFilterInput = {
  id?: ModelIDInput | null,
  area?: ModelStringInput | null,
  color?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array<ModelGarmentFilterInput | null> | null,
  or?: Array<ModelGarmentFilterInput | null> | null,
  not?: ModelGarmentFilterInput | null,
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
  between?: Array<string | null> | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelGarmentConnection = {
  __typename: "ModelGarmentConnection",
  items: Array<Garment | null>,
  nextToken?: string | null,
};

export type ModelOutfitFilterInput = {
  id?: ModelIDInput | null,
  hatId?: ModelStringInput | null,
  topId?: ModelStringInput | null,
  bottomId?: ModelStringInput | null,
  shoeId?: ModelStringInput | null,
  and?: Array<ModelOutfitFilterInput | null> | null,
  or?: Array<ModelOutfitFilterInput | null> | null,
  not?: ModelOutfitFilterInput | null,
};

export type ModelOutfitConnection = {
  __typename: "ModelOutfitConnection",
  items: Array<Outfit | null>,
  nextToken?: string | null,
};

export type ModelGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array<ModelGroupFilterInput | null> | null,
  or?: Array<ModelGroupFilterInput | null> | null,
  not?: ModelGroupFilterInput | null,
};

export type ModelGroupConnection = {
  __typename: "ModelGroupConnection",
  items: Array<Group | null>,
  nextToken?: string | null,
};

export type ModelGroupAssignmentFilterInput = {
  id?: ModelIDInput | null,
  groupId?: ModelStringInput | null,
  garmentId?: ModelStringInput | null,
  and?: Array<ModelGroupAssignmentFilterInput | null> | null,
  or?: Array<ModelGroupAssignmentFilterInput | null> | null,
  not?: ModelGroupAssignmentFilterInput | null,
};

export type ModelGroupAssignmentConnection = {
  __typename: "ModelGroupAssignmentConnection",
  items: Array<GroupAssignment | null>,
  nextToken?: string | null,
};

export type ModelPaletteFilterInput = {
  id?: ModelIDInput | null,
  hatColor?: ModelStringInput | null,
  topColor?: ModelStringInput | null,
  bottomColor?: ModelStringInput | null,
  shoeColor?: ModelStringInput | null,
  and?: Array<ModelPaletteFilterInput | null> | null,
  or?: Array<ModelPaletteFilterInput | null> | null,
  not?: ModelPaletteFilterInput | null,
};

export type ModelPaletteConnection = {
  __typename: "ModelPaletteConnection",
  items: Array<Palette | null>,
  nextToken?: string | null,
};

export type ModelComplexionFilterInput = {
  id?: ModelIDInput | null,
  complexion?: ModelStringInput | null,
  and?: Array<ModelComplexionFilterInput | null> | null,
  or?: Array<ModelComplexionFilterInput | null> | null,
  not?: ModelComplexionFilterInput | null,
};

export type ModelComplexionConnection = {
  __typename: "ModelComplexionConnection",
  items: Array<Complexion | null>,
  nextToken?: string | null,
};

export type ModelSubscriptionGarmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  area?: ModelSubscriptionStringInput | null,
  color?: ModelSubscriptionStringInput | null,
  brand?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array<ModelSubscriptionGarmentFilterInput | null> | null,
  or?: Array<ModelSubscriptionGarmentFilterInput | null> | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array<string | null> | null,
  beginsWith?: string | null,
  in?: Array<string | null> | null,
  notIn?: Array<string | null> | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array<string | null> | null,
  beginsWith?: string | null,
  in?: Array<string | null> | null,
  notIn?: Array<string | null> | null,
};

export type ModelSubscriptionOutfitFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  hatId?: ModelSubscriptionStringInput | null,
  topId?: ModelSubscriptionStringInput | null,
  bottomId?: ModelSubscriptionStringInput | null,
  shoeId?: ModelSubscriptionStringInput | null,
  and?: Array<ModelSubscriptionOutfitFilterInput | null> | null,
  or?: Array<ModelSubscriptionOutfitFilterInput | null> | null,
};

export type ModelSubscriptionGroupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array<ModelSubscriptionGroupFilterInput | null> | null,
  or?: Array<ModelSubscriptionGroupFilterInput | null> | null,
};

export type ModelSubscriptionGroupAssignmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  groupId?: ModelSubscriptionStringInput | null,
  garmentId?: ModelSubscriptionStringInput | null,
  and?: Array<ModelSubscriptionGroupAssignmentFilterInput | null> | null,
  or?: Array<ModelSubscriptionGroupAssignmentFilterInput | null> | null,
};

export type ModelSubscriptionPaletteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  hatColor?: ModelSubscriptionStringInput | null,
  topColor?: ModelSubscriptionStringInput | null,
  bottomColor?: ModelSubscriptionStringInput | null,
  shoeColor?: ModelSubscriptionStringInput | null,
  and?: Array<ModelSubscriptionPaletteFilterInput | null> | null,
  or?: Array<ModelSubscriptionPaletteFilterInput | null> | null,
};

export type ModelSubscriptionComplexionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  complexion?: ModelSubscriptionStringInput | null,
  and?: Array<ModelSubscriptionComplexionFilterInput | null> | null,
  or?: Array<ModelSubscriptionComplexionFilterInput | null> | null,
};

export type CreateGarmentMutationVariables = {
  input: CreateGarmentInput,
  condition?: ModelGarmentConditionInput | null,
};

export type CreateGarmentMutation = {
  createGarment?: {
    __typename: "Garment",
    id: string,
    area: string,
    color: string,
    brand?: string | null,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateGarmentMutationVariables = {
  input: UpdateGarmentInput,
  condition?: ModelGarmentConditionInput | null,
};

export type UpdateGarmentMutation = {
  updateGarment?: {
    __typename: "Garment",
    id: string,
    area: string,
    color: string,
    brand?: string | null,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteGarmentMutationVariables = {
  input: DeleteGarmentInput,
  condition?: ModelGarmentConditionInput | null,
};

export type DeleteGarmentMutation = {
  deleteGarment?: {
    __typename: "Garment",
    id: string,
    area: string,
    color: string,
    brand?: string | null,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateOutfitMutationVariables = {
  input: CreateOutfitInput,
  condition?: ModelOutfitConditionInput | null,
};

export type CreateOutfitMutation = {
  createOutfit?: {
    __typename: "Outfit",
    id: string,
    hatId: string,
    topId: string,
    bottomId: string,
    shoeId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateOutfitMutationVariables = {
  input: UpdateOutfitInput,
  condition?: ModelOutfitConditionInput | null,
};

export type UpdateOutfitMutation = {
  updateOutfit?: {
    __typename: "Outfit",
    id: string,
    hatId: string,
    topId: string,
    bottomId: string,
    shoeId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteOutfitMutationVariables = {
  input: DeleteOutfitInput,
  condition?: ModelOutfitConditionInput | null,
};

export type DeleteOutfitMutation = {
  deleteOutfit?: {
    __typename: "Outfit",
    id: string,
    hatId: string,
    topId: string,
    bottomId: string,
    shoeId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type CreateGroupMutation = {
  createGroup?: {
    __typename: "Group",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type UpdateGroupMutation = {
  updateGroup?: {
    __typename: "Group",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type DeleteGroupMutation = {
  deleteGroup?: {
    __typename: "Group",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateGroupAssignmentMutationVariables = {
  input: CreateGroupAssignmentInput,
  condition?: ModelGroupAssignmentConditionInput | null,
};

export type CreateGroupAssignmentMutation = {
  createGroupAssignment?: {
    __typename: "GroupAssignment",
    id: string,
    groupId: string,
    garmentId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateGroupAssignmentMutationVariables = {
  input: UpdateGroupAssignmentInput,
  condition?: ModelGroupAssignmentConditionInput | null,
};

export type UpdateGroupAssignmentMutation = {
  updateGroupAssignment?: {
    __typename: "GroupAssignment",
    id: string,
    groupId: string,
    garmentId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteGroupAssignmentMutationVariables = {
  input: DeleteGroupAssignmentInput,
  condition?: ModelGroupAssignmentConditionInput | null,
};

export type DeleteGroupAssignmentMutation = {
  deleteGroupAssignment?: {
    __typename: "GroupAssignment",
    id: string,
    groupId: string,
    garmentId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePaletteMutationVariables = {
  input: CreatePaletteInput,
  condition?: ModelPaletteConditionInput | null,
};

export type CreatePaletteMutation = {
  createPalette?: {
    __typename: "Palette",
    id: string,
    hatColor: string,
    topColor: string,
    bottomColor: string,
    shoeColor: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePaletteMutationVariables = {
  input: UpdatePaletteInput,
  condition?: ModelPaletteConditionInput | null,
};

export type UpdatePaletteMutation = {
  updatePalette?: {
    __typename: "Palette",
    id: string,
    hatColor: string,
    topColor: string,
    bottomColor: string,
    shoeColor: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePaletteMutationVariables = {
  input: DeletePaletteInput,
  condition?: ModelPaletteConditionInput | null,
};

export type DeletePaletteMutation = {
  deletePalette?: {
    __typename: "Palette",
    id: string,
    hatColor: string,
    topColor: string,
    bottomColor: string,
    shoeColor: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateComplexionMutationVariables = {
  input: CreateComplexionInput,
  condition?: ModelComplexionConditionInput | null,
};

export type CreateComplexionMutation = {
  createComplexion?: {
    __typename: "Complexion",
    id: string,
    complexion: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateComplexionMutationVariables = {
  input: UpdateComplexionInput,
  condition?: ModelComplexionConditionInput | null,
};

export type UpdateComplexionMutation = {
  updateComplexion?: {
    __typename: "Complexion",
    id: string,
    complexion: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteComplexionMutationVariables = {
  input: DeleteComplexionInput,
  condition?: ModelComplexionConditionInput | null,
};

export type DeleteComplexionMutation = {
  deleteComplexion?: {
    __typename: "Complexion",
    id: string,
    complexion: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetGarmentQueryVariables = {
  id: string,
};

export type GetGarmentQuery = {
  getGarment?: {
    __typename: "Garment",
    id: string,
    area: string,
    color: string,
    brand?: string | null,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListGarmentsQueryVariables = {
  filter?: ModelGarmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGarmentsQuery = {
  listGarments?: {
    __typename: "ModelGarmentConnection",
    items: Array<{
      __typename: "Garment",
      id: string,
      area: string,
      color: string,
      brand?: string | null,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null>,
    nextToken?: string | null,
  } | null,
};

export type GetOutfitQueryVariables = {
  id: string,
};

export type GetOutfitQuery = {
  getOutfit?: {
    __typename: "Outfit",
    id: string,
    hatId: string,
    topId: string,
    bottomId: string,
    shoeId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListOutfitsQueryVariables = {
  filter?: ModelOutfitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOutfitsQuery = {
  listOutfits?: {
    __typename: "ModelOutfitConnection",
    items: Array<{
      __typename: "Outfit",
      id: string,
      hatId: string,
      topId: string,
      bottomId: string,
      shoeId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null>,
    nextToken?: string | null,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
};

export type GetGroupQuery = {
  getGroup?: {
    __typename: "Group",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListGroupsQueryVariables = {
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsQuery = {
  listGroups?: {
    __typename: "ModelGroupConnection",
    items: Array<{
      __typename: "Group",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null>,
    nextToken?: string | null,
  } | null,
};

export type GetGroupAssignmentQueryVariables = {
  id: string,
};

export type GetGroupAssignmentQuery = {
  getGroupAssignment?: {
    __typename: "GroupAssignment",
    id: string,
    groupId: string,
    garmentId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListGroupAssignmentsQueryVariables = {
  filter?: ModelGroupAssignmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupAssignmentsQuery = {
  listGroupAssignments?: {
    __typename: "ModelGroupAssignmentConnection",
    items: Array<{
      __typename: "GroupAssignment",
      id: string,
      groupId: string,
      garmentId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null>,
    nextToken?: string | null,
  } | null,
};

export type GetPaletteQueryVariables = {
  id: string,
};

export type GetPaletteQuery = {
  getPalette?: {
    __typename: "Palette",
    id: string,
    hatColor: string,
    topColor: string,
    bottomColor: string,
    shoeColor: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPalettesQueryVariables = {
  filter?: ModelPaletteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPalettesQuery = {
  listPalettes?: {
    __typename: "ModelPaletteConnection",
    items: Array<{
      __typename: "Palette",
      id: string,
      hatColor: string,
      topColor: string,
      bottomColor: string,
      shoeColor: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null>,
    nextToken?: string | null,
  } | null,
};

export type GetComplexionQueryVariables = {
  id: string,
};

export type GetComplexionQuery = {
  getComplexion?: {
    __typename: "Complexion",
    id: string,
    complexion: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListComplexionsQueryVariables = {
  filter?: ModelComplexionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListComplexionsQuery = {
  listComplexions?: {
    __typename: "ModelComplexionConnection",
    items: Array<{
      __typename: "Complexion",
      id: string,
      complexion: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null>,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGarmentSubscriptionVariables = {
  filter?: ModelSubscriptionGarmentFilterInput | null,
  owner?: string | null,
};

export type OnCreateGarmentSubscription = {
  onCreateGarment?: {
    __typename: "Garment",
    id: string,
    area: string,
    color: string,
    brand?: string | null,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateGarmentSubscriptionVariables = {
  filter?: ModelSubscriptionGarmentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateGarmentSubscription = {
  onUpdateGarment?: {
    __typename: "Garment",
    id: string,
    area: string,
    color: string,
    brand?: string | null,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteGarmentSubscriptionVariables = {
  filter?: ModelSubscriptionGarmentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteGarmentSubscription = {
  onDeleteGarment?: {
    __typename: "Garment",
    id: string,
    area: string,
    color: string,
    brand?: string | null,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateOutfitSubscriptionVariables = {
  filter?: ModelSubscriptionOutfitFilterInput | null,
  owner?: string | null,
};

export type OnCreateOutfitSubscription = {
  onCreateOutfit?: {
    __typename: "Outfit",
    id: string,
    hatId: string,
    topId: string,
    bottomId: string,
    shoeId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateOutfitSubscriptionVariables = {
  filter?: ModelSubscriptionOutfitFilterInput | null,
  owner?: string | null,
};

export type OnUpdateOutfitSubscription = {
  onUpdateOutfit?: {
    __typename: "Outfit",
    id: string,
    hatId: string,
    topId: string,
    bottomId: string,
    shoeId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteOutfitSubscriptionVariables = {
  filter?: ModelSubscriptionOutfitFilterInput | null,
  owner?: string | null,
};

export type OnDeleteOutfitSubscription = {
  onDeleteOutfit?: {
    __typename: "Outfit",
    id: string,
    hatId: string,
    topId: string,
    bottomId: string,
    shoeId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
  owner?: string | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup?: {
    __typename: "Group",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
  owner?: string | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup?: {
    __typename: "Group",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
  owner?: string | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup?: {
    __typename: "Group",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateGroupAssignmentSubscriptionVariables = {
  filter?: ModelSubscriptionGroupAssignmentFilterInput | null,
  owner?: string | null,
};

export type OnCreateGroupAssignmentSubscription = {
  onCreateGroupAssignment?: {
    __typename: "GroupAssignment",
    id: string,
    groupId: string,
    garmentId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateGroupAssignmentSubscriptionVariables = {
  filter?: ModelSubscriptionGroupAssignmentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateGroupAssignmentSubscription = {
  onUpdateGroupAssignment?: {
    __typename: "GroupAssignment",
    id: string,
    groupId: string,
    garmentId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteGroupAssignmentSubscriptionVariables = {
  filter?: ModelSubscriptionGroupAssignmentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteGroupAssignmentSubscription = {
  onDeleteGroupAssignment?: {
    __typename: "GroupAssignment",
    id: string,
    groupId: string,
    garmentId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePaletteSubscriptionVariables = {
  filter?: ModelSubscriptionPaletteFilterInput | null,
  owner?: string | null,
};

export type OnCreatePaletteSubscription = {
  onCreatePalette?: {
    __typename: "Palette",
    id: string,
    hatColor: string,
    topColor: string,
    bottomColor: string,
    shoeColor: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePaletteSubscriptionVariables = {
  filter?: ModelSubscriptionPaletteFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePaletteSubscription = {
  onUpdatePalette?: {
    __typename: "Palette",
    id: string,
    hatColor: string,
    topColor: string,
    bottomColor: string,
    shoeColor: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePaletteSubscriptionVariables = {
  filter?: ModelSubscriptionPaletteFilterInput | null,
  owner?: string | null,
};

export type OnDeletePaletteSubscription = {
  onDeletePalette?: {
    __typename: "Palette",
    id: string,
    hatColor: string,
    topColor: string,
    bottomColor: string,
    shoeColor: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateComplexionSubscriptionVariables = {
  filter?: ModelSubscriptionComplexionFilterInput | null,
  owner?: string | null,
};

export type OnCreateComplexionSubscription = {
  onCreateComplexion?: {
    __typename: "Complexion",
    id: string,
    complexion: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateComplexionSubscriptionVariables = {
  filter?: ModelSubscriptionComplexionFilterInput | null,
  owner?: string | null,
};

export type OnUpdateComplexionSubscription = {
  onUpdateComplexion?: {
    __typename: "Complexion",
    id: string,
    complexion: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteComplexionSubscriptionVariables = {
  filter?: ModelSubscriptionComplexionFilterInput | null,
  owner?: string | null,
};

export type OnDeleteComplexionSubscription = {
  onDeleteComplexion?: {
    __typename: "Complexion",
    id: string,
    complexion: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
