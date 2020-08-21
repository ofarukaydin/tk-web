import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: BigInt;
  JSON: any;
};

/** The start of any query */
export type Query = {
  /** Equivalent to GET /api/v1/authentication/getcurrentuseraddress */
  getApiV1AuthenticationGetcurrentuseraddress?: Maybe<UserAddressItemResponseDtoOperationResultDto>;
  /** Equivalent to GET /api/v1/authentication/getuseraddresses */
  getApiV1AuthenticationGetuseraddresses?: Maybe<UserAddressListResponseDtoOperationResultDto>;
  /** Equivalent to GET /api/v1/authentication/getuserdetails */
  getApiV1AuthenticationGetuserdetails?: Maybe<GetUserDetailsResponseDtoOperationResultDto>;
  /** Equivalent to GET /api/v1/basket/getuserbasketbyaddressidasync */
  getApiV1BasketGetuserbasketbyaddressidasync?: Maybe<BasketInfoDtoOperationResultDto>;
  /** Equivalent to GET /api/v1/campaign/campaign */
  getApiV1CampaignCampaign?: Maybe<CampaignResponseDtoOperationResultDto>;
  /** Equivalent to GET /api/v1/campaign/slider */
  getApiV1CampaignSlider?: Maybe<SliderResponseDtoOperationResultDto>;
  /** Equivalent to GET /api/v1/carrier/getcarrier */
  getApiV1CarrierGetcarrier?: Maybe<GetCarrierResponseDtoOperationResultDto>;
  /** Equivalent to GET /api/v1/merchant/getmerchantbranchidbyaddressid/{addressId} */
  getApiV1MerchantGetmerchantbranchidbyaddressidAddressId?: Maybe<Int64OperationResultDto>;
  /** Equivalent to GET /api/v1/merchant/getmerchantbranchidbylatlong */
  getApiV1MerchantGetmerchantbranchidbylatlong?: Maybe<Int64OperationResultDto>;
  /** Equivalent to GET /api/v1/order/getmerchantbranchsummary */
  getApiV1OrderGetmerchantbranchsummary?: Maybe<MerchantBranchSummaryDtoOperationResultDto>;
  /** Equivalent to GET /api/v1/order/getorderbyidasync */
  getApiV1OrderGetorderbyidasync?: Maybe<OrderResponseDtoOperationResultDto>;
  /** Equivalent to GET /api/v1/order/getordersbyuseridasync */
  getApiV1OrderGetordersbyuseridasync?: Maybe<GetOrderListResponseDtoOperationResultDto>;
  /** Equivalent to GET /api/v1/order/getuseractiveorder */
  getApiV1OrderGetuseractiveorder?: Maybe<UserActiveOrderDtoOperationResultDto>;
  /** Equivalent to GET /api/v1/product/getbasecategories */
  getApiV1ProductGetbasecategories?: Maybe<GetBaseCategoriesResponseDtoOperationResultDto>;
  /** Equivalent to GET /api/v1/product/getproductfilterlist */
  getApiV1ProductGetproductfilterlist?: Maybe<ProductFilterResponseDtoPagingOperationDto>;
  /** Equivalent to GET /api/v1/product/getproductlistbymerchantbranch */
  getApiV1ProductGetproductlistbymerchantbranch?: Maybe<ProductItemListDtoPagingOperationDto>;
  /** Equivalent to GET /api/v1/product/getsubcategories */
  getApiV1ProductGetsubcategories?: Maybe<GetSubCategoriesResponseDtoOperationResultDto>;
  /** Equivalent to GET /api/v1/product/getsubcategorieswithproduct */
  getApiV1ProductGetsubcategorieswithproduct?: Maybe<GetSubCategoriesResponseDtoOperationResultDto>;
  /** Equivalent to GET /api/v1/product/getsubcategorieswithproductsandcategory */
  getApiV1ProductGetsubcategorieswithproductsandcategory?: Maybe<SubCategoryWithProductsDtoPagingOperationDto>;
  /** Equivalent to GET /api/v1/product/searchproductbymerchantbranch */
  getApiV1ProductSearchproductbymerchantbranch?: Maybe<ProductItemListDtoPagingOperationDto>;
};


/** The start of any query */
export type QueryGetApiV1BasketGetuserbasketbyaddressidasyncArgs = {
  addressId?: Maybe<Scalars['BigInt']>;
};


/** The start of any query */
export type QueryGetApiV1CampaignCampaignArgs = {
  campaignId?: Maybe<Scalars['BigInt']>;
};


/** The start of any query */
export type QueryGetApiV1CampaignSliderArgs = {
  sliderId?: Maybe<Scalars['BigInt']>;
};


/** The start of any query */
export type QueryGetApiV1CarrierGetcarrierArgs = {
  carrierId?: Maybe<Scalars['BigInt']>;
};


/** The start of any query */
export type QueryGetApiV1MerchantGetmerchantbranchidbyaddressidAddressIdArgs = {
  addressId: Scalars['BigInt'];
};


/** The start of any query */
export type QueryGetApiV1MerchantGetmerchantbranchidbylatlongArgs = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};


/** The start of any query */
export type QueryGetApiV1OrderGetorderbyidasyncArgs = {
  orderId?: Maybe<Scalars['BigInt']>;
};


/** The start of any query */
export type QueryGetApiV1ProductGetproductfilterlistArgs = {
  merchantBranchId?: Maybe<Scalars['BigInt']>;
  orderBy?: Maybe<Scalars['String']>;
  orderDir?: Maybe<OrderDir>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  searchValue?: Maybe<Scalars['String']>;
};


/** The start of any query */
export type QueryGetApiV1ProductGetproductlistbymerchantbranchArgs = {
  merchantBranchId?: Maybe<Scalars['BigInt']>;
};


/** The start of any query */
export type QueryGetApiV1ProductGetsubcategorieswithproductsandcategoryArgs = {
  merchantBranchId?: Maybe<Scalars['BigInt']>;
  orderBy?: Maybe<Scalars['String']>;
  orderDir?: Maybe<OrderDir>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  parentCategoryId?: Maybe<Scalars['BigInt']>;
};


/** The start of any query */
export type QueryGetApiV1ProductSearchproductbymerchantbranchArgs = {
  merchantBranchId?: Maybe<Scalars['BigInt']>;
  orderBy?: Maybe<Scalars['String']>;
  orderDir?: Maybe<OrderDir>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  productName?: Maybe<Scalars['String']>;
};

/** The start of any mutation */
export type Mutation = {
  /** Equivalent to DELETE /api/v1/authentication/deleteuser */
  deleteApiV1AuthenticationDeleteuser?: Maybe<UserAddressItemResponseDtoOperationResultDto>;
  /** Equivalent to DELETE /api/v1/basket/removebasketitemasync */
  deleteApiV1BasketRemovebasketitemasync?: Maybe<BasketInfoDtoOperationResultDto>;
  /** Equivalent to DELETE /api/v1/basket/removeuserbasketasync */
  deleteApiV1BasketRemoveuserbasketasync?: Maybe<OperationResultDto>;
  /** Equivalent to DELETE /api/v1/campaign/delete-campaign */
  deleteApiV1CampaignDeleteCampaign?: Maybe<OperationResultDto>;
  /** Equivalent to DELETE /api/v1/campaign/delete-slider */
  deleteApiV1CampaignDeleteSlider?: Maybe<OperationResultDto>;
  /** Equivalent to DELETE /api/v1/carrier/deletecarrier */
  deleteApiV1CarrierDeletecarrier?: Maybe<OperationResultDto>;
  /** Equivalent to POST /api/v1/authentication/createforgetpasswordrequest */
  postApiV1AuthenticationCreateforgetpasswordrequest?: Maybe<OperationResultDto>;
  /** Equivalent to POST /api/v1/authentication/insertuseraddress */
  postApiV1AuthenticationInsertuseraddress?: Maybe<InsertUserAddressResponseDtoOperationResultDto>;
  /** Equivalent to POST /api/v1/authentication/register */
  postApiV1AuthenticationRegister?: Maybe<RegisterUserResponseDtoOperationResultDto>;
  /** Equivalent to POST /api/v1/authentication/validateforgetpasswordrequest */
  postApiV1AuthenticationValidateforgetpasswordrequest?: Maybe<OperationResultDto>;
  /** Equivalent to POST /api/v1/authentication/validateuser */
  postApiV1AuthenticationValidateuser?: Maybe<ValidateUserResponseDtoOperationResultDto>;
  /** Equivalent to POST /api/v1/basket/insertbasketitem */
  postApiV1BasketInsertbasketitem?: Maybe<BasketInfoDtoOperationResultDto>;
  /** Equivalent to POST /api/v1/campaign/campaigns */
  postApiV1CampaignCampaigns?: Maybe<CampaignResponseDtoPagingOperationDto>;
  /** Equivalent to POST /api/v1/campaign/insert-campaign */
  postApiV1CampaignInsertCampaign?: Maybe<CampaignResponseDtoOperationResultDto>;
  /** Equivalent to POST /api/v1/campaign/insert-slider */
  postApiV1CampaignInsertSlider?: Maybe<SliderResponseDtoOperationResultDto>;
  /** Equivalent to POST /api/v1/campaign/search-campaign */
  postApiV1CampaignSearchCampaign?: Maybe<CampaignResponseDtoPagingOperationDto>;
  /** Equivalent to POST /api/v1/campaign/search-slider */
  postApiV1CampaignSearchSlider?: Maybe<SliderResponseDtoPagingOperationDto>;
  /** Equivalent to POST /api/v1/campaign/sliders */
  postApiV1CampaignSliders?: Maybe<SliderResponseDtoPagingOperationDto>;
  /** Equivalent to POST /api/v1/carrier/getcarriers */
  postApiV1CarrierGetcarriers?: Maybe<GetCarrierResponseDtoPagingOperationDto>;
  /** Equivalent to POST /api/v1/carrier/getcarriertrackinginfo */
  postApiV1CarrierGetcarriertrackinginfo?: Maybe<GetCarrierTrackingInfoResponseDtoOperationResultDto>;
  /** Equivalent to POST /api/v1/carrier/insertcarrier */
  postApiV1CarrierInsertcarrier?: Maybe<InsertCarrierResponseDtoOperationResultDto>;
  /** Equivalent to POST /api/v1/carrier/insertcarriertrackinginfo2 */
  postApiV1CarrierInsertcarriertrackinginfo2?: Maybe<InsertCarrierTrackingInfoResponseDtoOperationResultDto>;
  /** Equivalent to POST /api/v1/carrier/insertorderdeliverycode */
  postApiV1CarrierInsertorderdeliverycode?: Maybe<InsertOrderDeliveryCodeResponseDtoOperationResultDto>;
  /** Equivalent to POST /api/v1/carrier/searchcarrier */
  postApiV1CarrierSearchcarrier?: Maybe<GetCarrierResponseDtoPagingOperationDto>;
  /** Equivalent to POST /api/v1/file/insertfileasync */
  postApiV1FileInsertfileasync?: Maybe<FileResponseDto>;
  /** Equivalent to POST /api/v1/file/test */
  postApiV1FileTest?: Maybe<Scalars['Boolean']>;
  /** Equivalent to POST /api/v1/order/getcarrierordersbyorderstatus */
  postApiV1OrderGetcarrierordersbyorderstatus?: Maybe<CarrierOrderListItemListOperationResultDto>;
  /** Equivalent to POST /api/v1/order/insertorderasync */
  postApiV1OrderInsertorderasync?: Maybe<InsertOrderResponseDtoOperationResultDto>;
  /** Equivalent to POST /api/v1/order/searchorderasync */
  postApiV1OrderSearchorderasync?: Maybe<OrderSearchResponseDtoPagingOperationDto>;
  /** Equivalent to POST /api/v1/order/updateorderasync */
  postApiV1OrderUpdateorderasync?: Maybe<OrderResponseDtoOperationResultDto>;
  /** Equivalent to POST /api/v1/order/updateorderstatusasync */
  postApiV1OrderUpdateorderstatusasync?: Maybe<OrderResponseDtoOperationResultDto>;
  /** Equivalent to POST /api/v1/product/getproductdetails */
  postApiV1ProductGetproductdetails?: Maybe<GetProductDetailResponseDtoOperationResultDto>;
  /** Equivalent to POST /api/v1/product/getproductlistbylatlong */
  postApiV1ProductGetproductlistbylatlong?: Maybe<ProductItemListDtoPagingOperationDto>;
  /** Equivalent to POST /api/v1/product/searchcategoryasync */
  postApiV1ProductSearchcategoryasync?: Maybe<GetCategoryResponseDtoPagingOperationDto>;
  /** Equivalent to POST /api/v1/product/searchproductsbylatlong */
  postApiV1ProductSearchproductsbylatlong?: Maybe<ProductItemListDtoPagingOperationDto>;
  /** Equivalent to PUT /api/v1/authentication/setcurrentuseraddress */
  putApiV1AuthenticationSetcurrentuseraddress?: Maybe<UserAddressItemResponseDtoOperationResultDto>;
  /** Equivalent to PUT /api/v1/authentication/updateforgetpasswordrequest */
  putApiV1AuthenticationUpdateforgetpasswordrequest?: Maybe<OperationResultDto>;
  /** Equivalent to PUT /api/v1/authentication/updatepasswordrequest */
  putApiV1AuthenticationUpdatepasswordrequest?: Maybe<OperationResultDto>;
  /** Equivalent to PUT /api/v1/authentication/updateuser */
  putApiV1AuthenticationUpdateuser?: Maybe<UpdateUserResponseDtoOperationResultDto>;
  /** Equivalent to PUT /api/v1/authentication/updateuseraddress */
  putApiV1AuthenticationUpdateuseraddress?: Maybe<UpdateUserAddressResponseDtoOperationResultDto>;
  /** Equivalent to PUT /api/v1/campaign/update-campaign */
  putApiV1CampaignUpdateCampaign?: Maybe<CampaignResponseDtoOperationResultDto>;
  /** Equivalent to PUT /api/v1/campaign/update-slider */
  putApiV1CampaignUpdateSlider?: Maybe<SliderResponseDtoOperationResultDto>;
  /** Equivalent to PUT /api/v1/carrier/updatecarrier */
  putApiV1CarrierUpdatecarrier?: Maybe<UpdateCarrierResponseDtoOperationResultDto>;
  /** Equivalent to PUT /api/v1/carrier/updatecarriertrackinginfo */
  putApiV1CarrierUpdatecarriertrackinginfo?: Maybe<UpdateCarrierTrackingInfoResponseDtoOperationResultDto>;
};


/** The start of any mutation */
export type MutationDeleteApiV1AuthenticationDeleteuserArgs = {
  deleteUserRequestDTOInput?: Maybe<DeleteUserRequestDtoInput>;
};


/** The start of any mutation */
export type MutationDeleteApiV1BasketRemovebasketitemasyncArgs = {
  removeBasketItemDTOInput?: Maybe<RemoveBasketItemDtoInput>;
};


/** The start of any mutation */
export type MutationDeleteApiV1BasketRemoveuserbasketasyncArgs = {
  addressId?: Maybe<Scalars['BigInt']>;
};


/** The start of any mutation */
export type MutationDeleteApiV1CampaignDeleteCampaignArgs = {
  campaignId?: Maybe<Scalars['BigInt']>;
};


/** The start of any mutation */
export type MutationDeleteApiV1CampaignDeleteSliderArgs = {
  sliderId?: Maybe<Scalars['BigInt']>;
};


/** The start of any mutation */
export type MutationDeleteApiV1CarrierDeletecarrierArgs = {
  carrierId?: Maybe<Scalars['BigInt']>;
};


/** The start of any mutation */
export type MutationPostApiV1AuthenticationCreateforgetpasswordrequestArgs = {
  createForgetPasswordRequestDTOInput?: Maybe<CreateForgetPasswordRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1AuthenticationInsertuseraddressArgs = {
  insertUserAddressRequestDTOInput?: Maybe<InsertUserAddressRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1AuthenticationRegisterArgs = {
  registerUserRequestDTOInput?: Maybe<RegisterUserRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1AuthenticationValidateforgetpasswordrequestArgs = {
  validateForgetPasswordRequestDTOInput?: Maybe<ValidateForgetPasswordRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1AuthenticationValidateuserArgs = {
  validateUserRequestDTOInput?: Maybe<ValidateUserRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1BasketInsertbasketitemArgs = {
  insertBasketItemRequestDTOInput?: Maybe<InsertBasketItemRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1CampaignCampaignsArgs = {
  getCampaignsRequestDTOInput?: Maybe<GetCampaignsRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1CampaignInsertCampaignArgs = {
  insertCampaignRequestDTOInput?: Maybe<InsertCampaignRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1CampaignInsertSliderArgs = {
  insertSliderRequestDTOInput?: Maybe<InsertSliderRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1CampaignSearchCampaignArgs = {
  searchCampaignsRequestDTOInput?: Maybe<SearchCampaignsRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1CampaignSearchSliderArgs = {
  searchSlidersRequestDTOInput?: Maybe<SearchSlidersRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1CampaignSlidersArgs = {
  getSlidersRequestDTOInput?: Maybe<Scalars['JSON']>;
};


/** The start of any mutation */
export type MutationPostApiV1CarrierGetcarriersArgs = {
  getCarrierListRequestDTOInput?: Maybe<GetCarrierListRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1CarrierGetcarriertrackinginfoArgs = {
  getCarrierTrackingInfoRequestDTOInput?: Maybe<GetCarrierTrackingInfoRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1CarrierInsertcarrierArgs = {
  insertCarrierRequestDTOInput?: Maybe<InsertCarrierRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1CarrierInsertcarriertrackinginfo2Args = {
  apiV1CarrierInsertcarriertrackinginfo2Input?: Maybe<Scalars['JSON']>;
};


/** The start of any mutation */
export type MutationPostApiV1CarrierInsertorderdeliverycodeArgs = {
  insertOrderDeliveryCodeRequestDTOInput?: Maybe<InsertOrderDeliveryCodeRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1CarrierSearchcarrierArgs = {
  searchCarrierRequestDTOInput?: Maybe<SearchCarrierRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1FileInsertfileasyncArgs = {
  fileRequestDTOInput?: Maybe<FileRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1FileTestArgs = {
  data?: Maybe<Scalars['Int']>;
};


/** The start of any mutation */
export type MutationPostApiV1OrderGetcarrierordersbyorderstatusArgs = {
  getCarrierOrderDTOInput?: Maybe<GetCarrierOrderDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1OrderInsertorderasyncArgs = {
  insertOrderRequestDTOInput?: Maybe<InsertOrderRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1OrderSearchorderasyncArgs = {
  searchOrderRequestDTOInput?: Maybe<SearchOrderRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1OrderUpdateorderasyncArgs = {
  updateOrderRequestDTOInput?: Maybe<UpdateOrderRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1OrderUpdateorderstatusasyncArgs = {
  updateOrderStatusRequestDTOInput?: Maybe<UpdateOrderStatusRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1ProductGetproductdetailsArgs = {
  getProductRequestDTOInput?: Maybe<GetProductRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1ProductGetproductlistbylatlongArgs = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};


/** The start of any mutation */
export type MutationPostApiV1ProductSearchcategoryasyncArgs = {
  searchCategoryRequestDTOInput?: Maybe<SearchCategoryRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPostApiV1ProductSearchproductsbylatlongArgs = {
  searchProductsByLatLongRequestDTOInput?: Maybe<SearchProductsByLatLongRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPutApiV1AuthenticationSetcurrentuseraddressArgs = {
  addressId?: Maybe<Scalars['BigInt']>;
};


/** The start of any mutation */
export type MutationPutApiV1AuthenticationUpdateforgetpasswordrequestArgs = {
  changeForgetPasswordRequestDTOInput?: Maybe<ChangeForgetPasswordRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPutApiV1AuthenticationUpdatepasswordrequestArgs = {
  updatePasswordRequestInput?: Maybe<UpdatePasswordRequestInput>;
};


/** The start of any mutation */
export type MutationPutApiV1AuthenticationUpdateuserArgs = {
  updateUserRequestDTOInput?: Maybe<UpdateUserRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPutApiV1AuthenticationUpdateuseraddressArgs = {
  updateUserAddressRequestDTOInput?: Maybe<UpdateUserAddressRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPutApiV1CampaignUpdateCampaignArgs = {
  updateCampaignRequestDTOInput?: Maybe<UpdateCampaignRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPutApiV1CampaignUpdateSliderArgs = {
  updateSliderRequestDTOInput?: Maybe<UpdateSliderRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPutApiV1CarrierUpdatecarrierArgs = {
  updateCarrierRequestDTOInput?: Maybe<UpdateCarrierRequestDtoInput>;
};


/** The start of any mutation */
export type MutationPutApiV1CarrierUpdatecarriertrackinginfoArgs = {
  updateCarrierTrackingInfoRequestDTOInput?: Maybe<UpdateCarrierTrackingInfoRequestDtoInput>;
};

export type UserAddressItemResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response7>;
  result?: Maybe<Scalars['Boolean']>;
};

export type OperationResultMessage = {
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type Response7 = {
  addressType?: Maybe<Scalars['Int']>;
  building?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['Int']>;
  contactTitle?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['Int']>;
  creationTime?: Maybe<Scalars['String']>;
  creatorUserId?: Maybe<Scalars['BigInt']>;
  department?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  districtId?: Maybe<Scalars['Int']>;
  fullAddress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};


export type UserAddressListResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response6>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response6 = {
  addressList?: Maybe<Array<Maybe<UserAddressItemResponseDto>>>;
};

export type UserAddressItemResponseDto = {
  addressType?: Maybe<Scalars['Int']>;
  building?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['Int']>;
  contactTitle?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['Int']>;
  creationTime?: Maybe<Scalars['String']>;
  creatorUserId?: Maybe<Scalars['BigInt']>;
  department?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  districtId?: Maybe<Scalars['Int']>;
  fullAddress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type GetUserDetailsResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response5>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response5 = {
  addressId?: Maybe<Scalars['BigInt']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  merchantBranchId?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type BasketInfoDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response9>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response9 = {
  amount?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  freeShipping?: Maybe<Scalars['Boolean']>;
  freeShippingLimit?: Maybe<Scalars['Float']>;
  isMinAmount?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<Maybe<BasketItemListDto>>>;
  shippingPrice?: Maybe<Scalars['Float']>;
  statusMessage?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['BigInt']>;
};

export type BasketItemListDto = {
  price?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['BigInt']>;
  productImage?: Maybe<Scalars['String']>;
  productItemId?: Maybe<Scalars['BigInt']>;
  productName?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  stockStatus?: Maybe<Scalars['Boolean']>;
  stockStatusMessage?: Maybe<Scalars['String']>;
};

export type CampaignResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response10>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response10 = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  imageUrl?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SliderResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response12>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response12 = {
  id?: Maybe<Scalars['BigInt']>;
  imageUrl?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type GetCarrierResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response16>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response16 = {
  carrierType?: Maybe<Scalars['Int']>;
  fullName?: Maybe<Scalars['String']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  userId?: Maybe<Scalars['BigInt']>;
};

export type Int64OperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Scalars['BigInt']>;
  result?: Maybe<Scalars['Boolean']>;
};

export type MerchantBranchSummaryDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response28>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response28 = {
  delivered?: Maybe<Scalars['Int']>;
  new?: Maybe<Scalars['Int']>;
  preparing?: Maybe<Scalars['Int']>;
  ready?: Maybe<Scalars['Int']>;
  shipping?: Maybe<Scalars['Int']>;
};

export type OrderResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response23>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response23 = {
  addressTitle?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  carrierId?: Maybe<Scalars['BigInt']>;
  contactPhoneNumber?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  deliveryDate?: Maybe<Scalars['String']>;
  deliveryEndDate?: Maybe<Scalars['String']>;
  deliveryStartDate?: Maybe<Scalars['String']>;
  deliveryType?: Maybe<Scalars['String']>;
  fullAddress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  lastStatusBysUser?: Maybe<Scalars['String']>;
  merchantBranchId?: Maybe<Scalars['BigInt']>;
  notes?: Maybe<Scalars['String']>;
  orderDate?: Maybe<Scalars['String']>;
  orderNumber?: Maybe<Scalars['String']>;
  orderStatus?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<OrderProductItemListDto>>>;
  shippingPrice?: Maybe<Scalars['Float']>;
  statusDescription?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['BigInt']>;
};

export type OrderProductItemListDto = {
  imageUrl?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['BigInt']>;
  productItemId?: Maybe<Scalars['BigInt']>;
  productName?: Maybe<Scalars['String']>;
  productTotalAmount?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['Int']>;
};

export type GetOrderListResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response24>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response24 = {
  currentPage?: Maybe<Scalars['Int']>;
  orders?: Maybe<Array<Maybe<OrderResponseDto>>>;
  pageCount?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type OrderResponseDto = {
  addressTitle?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  carrierId?: Maybe<Scalars['BigInt']>;
  contactPhoneNumber?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  deliveryDate?: Maybe<Scalars['String']>;
  deliveryEndDate?: Maybe<Scalars['String']>;
  deliveryStartDate?: Maybe<Scalars['String']>;
  deliveryType?: Maybe<Scalars['String']>;
  fullAddress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  lastStatusBysUser?: Maybe<Scalars['String']>;
  merchantBranchId?: Maybe<Scalars['BigInt']>;
  notes?: Maybe<Scalars['String']>;
  orderDate?: Maybe<Scalars['String']>;
  orderNumber?: Maybe<Scalars['String']>;
  orderStatus?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<OrderProductItemListDto>>>;
  shippingPrice?: Maybe<Scalars['Float']>;
  statusDescription?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['BigInt']>;
};

export type UserActiveOrderDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response26>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response26 = {
  addressDetail?: Maybe<Scalars['String']>;
  addressTitle?: Maybe<Scalars['String']>;
  carrierLat?: Maybe<Scalars['Float']>;
  carrierLong?: Maybe<Scalars['Float']>;
  orderDate?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['BigInt']>;
  orderNumber?: Maybe<Scalars['String']>;
  orderProducts?: Maybe<Scalars['String']>;
  orderStatus?: Maybe<Scalars['String']>;
  orderStatusDescription?: Maybe<Scalars['String']>;
  orderStatusTitle?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['BigInt']>;
  userLat?: Maybe<Scalars['Float']>;
  userLong?: Maybe<Scalars['Float']>;
};

export type GetBaseCategoriesResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response33>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response33 = {
  baseCategories?: Maybe<Array<Maybe<GetCategoryReponseItemDto>>>;
};

export type GetCategoryReponseItemDto = {
  categoryUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
  products?: Maybe<Array<Maybe<GetProductResponseDto>>>;
};

export type GetProductResponseDto = {
  brandId?: Maybe<Scalars['Int']>;
  categoryId?: Maybe<Scalars['Int']>;
  creationTime?: Maybe<Scalars['String']>;
  creatorUserId?: Maybe<Scalars['BigInt']>;
  defaultImageUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  lastModTime?: Maybe<Scalars['String']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  minQuantity?: Maybe<Scalars['Float']>;
  modifierUserId?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['Int']>;
};

export type ProductFilterResponseDtoPagingOperationDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response31>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response31 = {
  data?: Maybe<Array<Maybe<ProductFilterResponseDto>>>;
  pageCount?: Maybe<Scalars['Int']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductFilterResponseDto = {
  campain?: Maybe<Scalars['Boolean']>;
  categoryName?: Maybe<Scalars['String']>;
  fastShipping?: Maybe<Scalars['Boolean']>;
  imageUrl?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['BigInt']>;
  productItems?: Maybe<Array<Maybe<ProductFilterItemDto>>>;
  productName?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Float']>;
};

export type ProductFilterItemDto = {
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['BigInt']>;
  productItemId?: Maybe<Scalars['BigInt']>;
  sku?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['Int']>;
};

export enum OrderDir {
  ASCEND = 'ASCEND',
  DESCEND = 'DESCEND'
}

export type ProductItemListDtoPagingOperationDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response30>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response30 = {
  data?: Maybe<Array<Maybe<ProductItemListDto>>>;
  pageCount?: Maybe<Scalars['Int']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductItemListDto = {
  brand?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['BigInt']>;
  productItemId?: Maybe<Scalars['BigInt']>;
  sku?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['Int']>;
};

export type GetSubCategoriesResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response34>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response34 = {
  subCategories?: Maybe<Array<Maybe<GetCategoryReponseItemDto>>>;
};

export type SubCategoryWithProductsDtoPagingOperationDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response29>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response29 = {
  data?: Maybe<Array<Maybe<SubCategoryWithProductsDto>>>;
  pageCount?: Maybe<Scalars['Int']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SubCategoryWithProductsDto = {
  id?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<ProductItemListDto>>>;
};

export type DeleteUserRequestDtoInput = {
  id?: Maybe<Scalars['BigInt']>;
};

export type RemoveBasketItemDtoInput = {
  addressId?: Maybe<Scalars['BigInt']>;
  productId?: Maybe<Scalars['BigInt']>;
  productItemId?: Maybe<Scalars['BigInt']>;
};

export type OperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  result?: Maybe<Scalars['Boolean']>;
};

export type CreateForgetPasswordRequestDtoInput = {
  phoneNumber?: Maybe<Scalars['String']>;
};

export type InsertUserAddressResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response2>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response2 = {
  addressType?: Maybe<Scalars['Int']>;
  building?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['Int']>;
  contactTitle?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['Int']>;
  creationTime?: Maybe<Scalars['String']>;
  creatorUserId?: Maybe<Scalars['BigInt']>;
  department?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  districtId?: Maybe<Scalars['Int']>;
  fullAddress?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  neighborhood?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type InsertUserAddressRequestDtoInput = {
  addressType?: Maybe<Scalars['Int']>;
  building?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['Int']>;
  contactTitle?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['Int']>;
  department?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  districtId?: Maybe<Scalars['Int']>;
  fullAddress?: Maybe<Scalars['String']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  neighborhood?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type RegisterUserResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response4>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response4 = {
  creationTime?: Maybe<Scalars['String']>;
  creatorUserId?: Maybe<Scalars['BigInt']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  lastModTime?: Maybe<Scalars['String']>;
  modifierUserId?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type RegisterUserRequestDtoInput = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
};

export type ValidateForgetPasswordRequestDtoInput = {
  code?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type ValidateUserResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response8>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response8 = {
  addressId?: Maybe<Scalars['BigInt']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  merchantBranchId?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  tokenExpireDate?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type ValidateUserRequestDtoInput = {
  password?: Maybe<Scalars['String']>;
  userTypeId?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
};

export type InsertBasketItemRequestDtoInput = {
  addressId?: Maybe<Scalars['BigInt']>;
  basketItem?: Maybe<BasketItemInput>;
};

export type BasketItemInput = {
  productId?: Maybe<Scalars['BigInt']>;
  productItemId?: Maybe<Scalars['BigInt']>;
  quantity?: Maybe<Scalars['Float']>;
};

export type CampaignResponseDtoPagingOperationDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response11>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response11 = {
  data?: Maybe<Array<Maybe<CampaignResponseDto>>>;
  pageCount?: Maybe<Scalars['Int']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CampaignResponseDto = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  imageUrl?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type GetCampaignsRequestDtoInput = {
  merchantBranchId?: Maybe<Scalars['BigInt']>;
};

export type InsertCampaignRequestDtoInput = {
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  merchantBranchId?: Maybe<Scalars['BigInt']>;
  order?: Maybe<Scalars['Int']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type InsertSliderRequestDtoInput = {
  imageUrl?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SearchCampaignsRequestDtoInput = {
  orderBy?: Maybe<Scalars['String']>;
  orderDir?: Maybe<Scalars['String']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type SliderResponseDtoPagingOperationDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response13>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response13 = {
  data?: Maybe<Array<Maybe<SliderResponseDto>>>;
  pageCount?: Maybe<Scalars['Int']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SliderResponseDto = {
  id?: Maybe<Scalars['BigInt']>;
  imageUrl?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SearchSlidersRequestDtoInput = {
  orderBy?: Maybe<Scalars['String']>;
  orderDir?: Maybe<Scalars['String']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};


export type GetCarrierResponseDtoPagingOperationDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response17>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response17 = {
  data?: Maybe<Array<Maybe<GetCarrierResponseDto>>>;
  pageCount?: Maybe<Scalars['Int']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GetCarrierResponseDto = {
  carrierType?: Maybe<Scalars['Int']>;
  fullName?: Maybe<Scalars['String']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  userId?: Maybe<Scalars['BigInt']>;
};

export type GetCarrierListRequestDtoInput = {
  orderBy?: Maybe<Scalars['String']>;
  orderDir?: Maybe<Scalars['String']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

export type GetCarrierTrackingInfoResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response20>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response20 = {
  carrierId?: Maybe<Scalars['BigInt']>;
  id?: Maybe<Scalars['BigInt']>;
  isMoving?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['BigInt']>;
};

export type GetCarrierTrackingInfoRequestDtoInput = {
  carrierTrackingInfoId?: Maybe<Scalars['BigInt']>;
};

export type InsertCarrierResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Scalars['JSON']>;
  result?: Maybe<Scalars['Boolean']>;
};

export type InsertCarrierRequestDtoInput = {
  carrierType?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
};

export type InsertCarrierTrackingInfoResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response21>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response21 = {
  carrierId?: Maybe<Scalars['BigInt']>;
  id?: Maybe<Scalars['BigInt']>;
  isMoving?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['BigInt']>;
};

export type InsertOrderDeliveryCodeResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Scalars['JSON']>;
  result?: Maybe<Scalars['Boolean']>;
};

export type InsertOrderDeliveryCodeRequestDtoInput = {
  carrierId?: Maybe<Scalars['BigInt']>;
  orderId?: Maybe<Scalars['BigInt']>;
};

export type SearchCarrierRequestDtoInput = {
  fullName?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  orderDir?: Maybe<Scalars['String']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

export type FileResponseDto = {
  dataInfo?: Maybe<DataInfo>;
  header?: Maybe<Header>;
};

export type DataInfo = {
  totalCount?: Maybe<Scalars['Int']>;
};

export type Header = {
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  responseCode?: Maybe<Scalars['String']>;
};

export type FileRequestDtoInput = {
  files?: Maybe<Scalars['String']>;
};

export type CarrierOrderListItemListOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Array<Maybe<CarrierOrderListItem>>>;
  result?: Maybe<Scalars['Boolean']>;
};

export type CarrierOrderListItem = {
  address?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  customer?: Maybe<Scalars['String']>;
  deliveryEndDate?: Maybe<Scalars['String']>;
  deliveryStartDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  notes?: Maybe<Scalars['String']>;
  orderDate?: Maybe<Scalars['String']>;
  orderNumber?: Maybe<Scalars['String']>;
  orderStatus?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<OrderProductItemListDto>>>;
  shippingPrice?: Maybe<Scalars['Float']>;
  statusDescription?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['BigInt']>;
  userLat?: Maybe<Scalars['Float']>;
  userLong?: Maybe<Scalars['Float']>;
};

export type GetCarrierOrderDtoInput = {
  orderStatus?: Maybe<Scalars['String']>;
};

export type InsertOrderResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response22>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response22 = {
  deliveryEndDate?: Maybe<Scalars['String']>;
  deliveryStartDate?: Maybe<Scalars['String']>;
  deliveryType?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  merchantBranchId?: Maybe<Scalars['BigInt']>;
  notes?: Maybe<Scalars['String']>;
  orderDate?: Maybe<Scalars['String']>;
  orderNumber?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['BigInt']>;
};

export type InsertOrderRequestDtoInput = {
  addressId?: Maybe<Scalars['BigInt']>;
  notes?: Maybe<Scalars['String']>;
};

export type OrderSearchResponseDtoPagingOperationDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response25>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response25 = {
  data?: Maybe<Array<Maybe<OrderSearchResponseDto>>>;
  pageCount?: Maybe<Scalars['Int']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type OrderSearchResponseDto = {
  amount?: Maybe<Scalars['Float']>;
  carrierId?: Maybe<Scalars['BigInt']>;
  customer?: Maybe<Scalars['String']>;
  deliveryDate?: Maybe<Scalars['String']>;
  deliveryEndDate?: Maybe<Scalars['String']>;
  deliveryStartDate?: Maybe<Scalars['String']>;
  deliveryType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  lastStatusBysUser?: Maybe<Scalars['String']>;
  merchantBranchId?: Maybe<Scalars['BigInt']>;
  notes?: Maybe<Scalars['String']>;
  orderAddress?: Maybe<Scalars['String']>;
  orderDate?: Maybe<Scalars['String']>;
  orderNumber?: Maybe<Scalars['String']>;
  orderStatus?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<OrderProductItemListDto>>>;
  shippingPrice?: Maybe<Scalars['Float']>;
  statusDescription?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['BigInt']>;
};

export type SearchOrderRequestDtoInput = {
  deliveryEndDate?: Maybe<Scalars['String']>;
  deliveryStartDate?: Maybe<Scalars['String']>;
  deliveryType?: Maybe<Scalars['Int']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  merchantBranchId?: Maybe<Scalars['BigInt']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  modifierUserId?: Maybe<Scalars['BigInt']>;
  notes?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  orderDateEnd?: Maybe<Scalars['String']>;
  orderDateStart?: Maybe<Scalars['String']>;
  orderDir?: Maybe<Scalars['String']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  searchValue?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  userType?: Maybe<Scalars['String']>;
};

export type UpdateOrderRequestDtoInput = {
  addressId?: Maybe<Scalars['BigInt']>;
  deliveryEndDate?: Maybe<Scalars['String']>;
  deliveryStartDate?: Maybe<Scalars['String']>;
  deliveryType?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['BigInt']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type UpdateOrderStatusRequestDtoInput = {
  notes?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['BigInt']>;
  orderStatus?: Maybe<Scalars['String']>;
};

export type GetProductDetailResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response35>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response35 = {
  brandId?: Maybe<Scalars['Int']>;
  defaultImageUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  itemId?: Maybe<Scalars['BigInt']>;
  merchantBranchId?: Maybe<Scalars['BigInt']>;
  minQuantity?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['BigInt']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['Int']>;
};

export type GetProductRequestDtoInput = {
  id?: Maybe<Scalars['Int']>;
};

export type GetCategoryResponseDtoPagingOperationDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response32>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response32 = {
  data?: Maybe<Array<Maybe<GetCategoryResponseDto>>>;
  pageCount?: Maybe<Scalars['Int']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GetCategoryResponseDto = {
  categoryDescription?: Maybe<Scalars['String']>;
  categoryName?: Maybe<Scalars['String']>;
  categoryUrl?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  parentID?: Maybe<Scalars['Int']>;
};

export type SearchCategoryRequestDtoInput = {
  categoryName?: Maybe<Scalars['String']>;
  orderBy?: Maybe<Scalars['String']>;
  orderDir?: Maybe<Scalars['String']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

export type SearchProductsByLatLongRequestDtoInput = {
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  orderBy?: Maybe<Scalars['String']>;
  orderDir?: Maybe<Scalars['String']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  productName?: Maybe<Scalars['String']>;
};

export type ChangeForgetPasswordRequestDtoInput = {
  code?: Maybe<Scalars['String']>;
  confirmPassword?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UpdatePasswordRequestInput = {
  newPassword?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  reTypeNewPassword?: Maybe<Scalars['String']>;
};

export type UpdateUserResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Scalars['JSON']>;
  result?: Maybe<Scalars['Boolean']>;
};

export type UpdateUserRequestDtoInput = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
};

export type UpdateUserAddressResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response3>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response3 = {
  addressId?: Maybe<Scalars['BigInt']>;
  addressType?: Maybe<Scalars['Int']>;
  building?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['Int']>;
  contactTitle?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['Int']>;
  department?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  districtId?: Maybe<Scalars['Int']>;
  fullAddress?: Maybe<Scalars['String']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type UpdateUserAddressRequestDtoInput = {
  addressId?: Maybe<Scalars['BigInt']>;
  addressType?: Maybe<Scalars['Int']>;
  building?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['Int']>;
  contactTitle?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['Int']>;
  department?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  districtId?: Maybe<Scalars['Int']>;
  fullAddress?: Maybe<Scalars['String']>;
  isCurrent?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  neighborhood?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
};

export type UpdateCampaignRequestDtoInput = {
  campaignId?: Maybe<Scalars['BigInt']>;
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateSliderRequestDtoInput = {
  imageUrl?: Maybe<Scalars['String']>;
  sliderId?: Maybe<Scalars['BigInt']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateCarrierResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Scalars['JSON']>;
  result?: Maybe<Scalars['Boolean']>;
};

export type UpdateCarrierRequestDtoInput = {
  carrierId?: Maybe<Scalars['BigInt']>;
  carrierType?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
};

export type UpdateCarrierTrackingInfoResponseDtoOperationResultDto = {
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response19>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response19 = {
  carrierId?: Maybe<Scalars['BigInt']>;
  id?: Maybe<Scalars['BigInt']>;
  isMoving?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['BigInt']>;
};

export type UpdateCarrierTrackingInfoRequestDtoInput = {
  carrierId?: Maybe<Scalars['BigInt']>;
  carrierTrackingInfoId?: Maybe<Scalars['BigInt']>;
  isMoving?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  UserAddressItemResponseDTOOperationResultDTO: ResolverTypeWrapper<UserAddressItemResponseDtoOperationResultDto>;
  OperationResultMessage: ResolverTypeWrapper<OperationResultMessage>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Response7: ResolverTypeWrapper<Response7>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  UserAddressListResponseDTOOperationResultDTO: ResolverTypeWrapper<UserAddressListResponseDtoOperationResultDto>;
  Response6: ResolverTypeWrapper<Response6>;
  UserAddressItemResponseDTO: ResolverTypeWrapper<UserAddressItemResponseDto>;
  GetUserDetailsResponseDTOOperationResultDTO: ResolverTypeWrapper<GetUserDetailsResponseDtoOperationResultDto>;
  Response5: ResolverTypeWrapper<Response5>;
  BasketInfoDTOOperationResultDTO: ResolverTypeWrapper<BasketInfoDtoOperationResultDto>;
  Response9: ResolverTypeWrapper<Response9>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  BasketItemListDTO: ResolverTypeWrapper<BasketItemListDto>;
  CampaignResponseDTOOperationResultDTO: ResolverTypeWrapper<CampaignResponseDtoOperationResultDto>;
  Response10: ResolverTypeWrapper<Response10>;
  SliderResponseDTOOperationResultDTO: ResolverTypeWrapper<SliderResponseDtoOperationResultDto>;
  Response12: ResolverTypeWrapper<Response12>;
  GetCarrierResponseDTOOperationResultDTO: ResolverTypeWrapper<GetCarrierResponseDtoOperationResultDto>;
  Response16: ResolverTypeWrapper<Response16>;
  Int64OperationResultDTO: ResolverTypeWrapper<Int64OperationResultDto>;
  MerchantBranchSummaryDTOOperationResultDTO: ResolverTypeWrapper<MerchantBranchSummaryDtoOperationResultDto>;
  Response28: ResolverTypeWrapper<Response28>;
  OrderResponseDTOOperationResultDTO: ResolverTypeWrapper<OrderResponseDtoOperationResultDto>;
  Response23: ResolverTypeWrapper<Response23>;
  OrderProductItemListDTO: ResolverTypeWrapper<OrderProductItemListDto>;
  GetOrderListResponseDTOOperationResultDTO: ResolverTypeWrapper<GetOrderListResponseDtoOperationResultDto>;
  Response24: ResolverTypeWrapper<Response24>;
  OrderResponseDTO: ResolverTypeWrapper<OrderResponseDto>;
  UserActiveOrderDTOOperationResultDTO: ResolverTypeWrapper<UserActiveOrderDtoOperationResultDto>;
  Response26: ResolverTypeWrapper<Response26>;
  GetBaseCategoriesResponseDTOOperationResultDTO: ResolverTypeWrapper<GetBaseCategoriesResponseDtoOperationResultDto>;
  Response33: ResolverTypeWrapper<Response33>;
  GetCategoryReponseItemDTO: ResolverTypeWrapper<GetCategoryReponseItemDto>;
  GetProductResponseDTO: ResolverTypeWrapper<GetProductResponseDto>;
  ProductFilterResponseDTOPagingOperationDTO: ResolverTypeWrapper<ProductFilterResponseDtoPagingOperationDto>;
  Response31: ResolverTypeWrapper<Response31>;
  ProductFilterResponseDTO: ResolverTypeWrapper<ProductFilterResponseDto>;
  ProductFilterItemDTO: ResolverTypeWrapper<ProductFilterItemDto>;
  OrderDir: OrderDir;
  ProductItemListDTOPagingOperationDTO: ResolverTypeWrapper<ProductItemListDtoPagingOperationDto>;
  Response30: ResolverTypeWrapper<Response30>;
  ProductItemListDTO: ResolverTypeWrapper<ProductItemListDto>;
  GetSubCategoriesResponseDTOOperationResultDTO: ResolverTypeWrapper<GetSubCategoriesResponseDtoOperationResultDto>;
  Response34: ResolverTypeWrapper<Response34>;
  SubCategoryWithProductsDTOPagingOperationDTO: ResolverTypeWrapper<SubCategoryWithProductsDtoPagingOperationDto>;
  Response29: ResolverTypeWrapper<Response29>;
  SubCategoryWithProductsDTO: ResolverTypeWrapper<SubCategoryWithProductsDto>;
  DeleteUserRequestDTOInput: DeleteUserRequestDtoInput;
  RemoveBasketItemDTOInput: RemoveBasketItemDtoInput;
  OperationResultDTO: ResolverTypeWrapper<OperationResultDto>;
  CreateForgetPasswordRequestDTOInput: CreateForgetPasswordRequestDtoInput;
  InsertUserAddressResponseDTOOperationResultDTO: ResolverTypeWrapper<InsertUserAddressResponseDtoOperationResultDto>;
  Response2: ResolverTypeWrapper<Response2>;
  InsertUserAddressRequestDTOInput: InsertUserAddressRequestDtoInput;
  RegisterUserResponseDTOOperationResultDTO: ResolverTypeWrapper<RegisterUserResponseDtoOperationResultDto>;
  Response4: ResolverTypeWrapper<Response4>;
  RegisterUserRequestDTOInput: RegisterUserRequestDtoInput;
  ValidateForgetPasswordRequestDTOInput: ValidateForgetPasswordRequestDtoInput;
  ValidateUserResponseDTOOperationResultDTO: ResolverTypeWrapper<ValidateUserResponseDtoOperationResultDto>;
  Response8: ResolverTypeWrapper<Response8>;
  ValidateUserRequestDTOInput: ValidateUserRequestDtoInput;
  InsertBasketItemRequestDTOInput: InsertBasketItemRequestDtoInput;
  BasketItemInput: BasketItemInput;
  CampaignResponseDTOPagingOperationDTO: ResolverTypeWrapper<CampaignResponseDtoPagingOperationDto>;
  Response11: ResolverTypeWrapper<Response11>;
  CampaignResponseDTO: ResolverTypeWrapper<CampaignResponseDto>;
  GetCampaignsRequestDTOInput: GetCampaignsRequestDtoInput;
  InsertCampaignRequestDTOInput: InsertCampaignRequestDtoInput;
  InsertSliderRequestDTOInput: InsertSliderRequestDtoInput;
  SearchCampaignsRequestDTOInput: SearchCampaignsRequestDtoInput;
  SliderResponseDTOPagingOperationDTO: ResolverTypeWrapper<SliderResponseDtoPagingOperationDto>;
  Response13: ResolverTypeWrapper<Response13>;
  SliderResponseDTO: ResolverTypeWrapper<SliderResponseDto>;
  SearchSlidersRequestDTOInput: SearchSlidersRequestDtoInput;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  GetCarrierResponseDTOPagingOperationDTO: ResolverTypeWrapper<GetCarrierResponseDtoPagingOperationDto>;
  Response17: ResolverTypeWrapper<Response17>;
  GetCarrierResponseDTO: ResolverTypeWrapper<GetCarrierResponseDto>;
  GetCarrierListRequestDTOInput: GetCarrierListRequestDtoInput;
  GetCarrierTrackingInfoResponseDTOOperationResultDTO: ResolverTypeWrapper<GetCarrierTrackingInfoResponseDtoOperationResultDto>;
  Response20: ResolverTypeWrapper<Response20>;
  GetCarrierTrackingInfoRequestDTOInput: GetCarrierTrackingInfoRequestDtoInput;
  InsertCarrierResponseDTOOperationResultDTO: ResolverTypeWrapper<InsertCarrierResponseDtoOperationResultDto>;
  InsertCarrierRequestDTOInput: InsertCarrierRequestDtoInput;
  InsertCarrierTrackingInfoResponseDTOOperationResultDTO: ResolverTypeWrapper<InsertCarrierTrackingInfoResponseDtoOperationResultDto>;
  Response21: ResolverTypeWrapper<Response21>;
  InsertOrderDeliveryCodeResponseDTOOperationResultDTO: ResolverTypeWrapper<InsertOrderDeliveryCodeResponseDtoOperationResultDto>;
  InsertOrderDeliveryCodeRequestDTOInput: InsertOrderDeliveryCodeRequestDtoInput;
  SearchCarrierRequestDTOInput: SearchCarrierRequestDtoInput;
  FileResponseDTO: ResolverTypeWrapper<FileResponseDto>;
  DataInfo: ResolverTypeWrapper<DataInfo>;
  Header: ResolverTypeWrapper<Header>;
  FileRequestDTOInput: FileRequestDtoInput;
  CarrierOrderListItemListOperationResultDTO: ResolverTypeWrapper<CarrierOrderListItemListOperationResultDto>;
  CarrierOrderListItem: ResolverTypeWrapper<CarrierOrderListItem>;
  GetCarrierOrderDTOInput: GetCarrierOrderDtoInput;
  InsertOrderResponseDTOOperationResultDTO: ResolverTypeWrapper<InsertOrderResponseDtoOperationResultDto>;
  Response22: ResolverTypeWrapper<Response22>;
  InsertOrderRequestDTOInput: InsertOrderRequestDtoInput;
  OrderSearchResponseDTOPagingOperationDTO: ResolverTypeWrapper<OrderSearchResponseDtoPagingOperationDto>;
  Response25: ResolverTypeWrapper<Response25>;
  OrderSearchResponseDTO: ResolverTypeWrapper<OrderSearchResponseDto>;
  SearchOrderRequestDTOInput: SearchOrderRequestDtoInput;
  UpdateOrderRequestDTOInput: UpdateOrderRequestDtoInput;
  UpdateOrderStatusRequestDTOInput: UpdateOrderStatusRequestDtoInput;
  GetProductDetailResponseDTOOperationResultDTO: ResolverTypeWrapper<GetProductDetailResponseDtoOperationResultDto>;
  Response35: ResolverTypeWrapper<Response35>;
  GetProductRequestDTOInput: GetProductRequestDtoInput;
  GetCategoryResponseDTOPagingOperationDTO: ResolverTypeWrapper<GetCategoryResponseDtoPagingOperationDto>;
  Response32: ResolverTypeWrapper<Response32>;
  GetCategoryResponseDTO: ResolverTypeWrapper<GetCategoryResponseDto>;
  SearchCategoryRequestDTOInput: SearchCategoryRequestDtoInput;
  SearchProductsByLatLongRequestDTOInput: SearchProductsByLatLongRequestDtoInput;
  ChangeForgetPasswordRequestDTOInput: ChangeForgetPasswordRequestDtoInput;
  UpdatePasswordRequestInput: UpdatePasswordRequestInput;
  UpdateUserResponseDTOOperationResultDTO: ResolverTypeWrapper<UpdateUserResponseDtoOperationResultDto>;
  UpdateUserRequestDTOInput: UpdateUserRequestDtoInput;
  UpdateUserAddressResponseDTOOperationResultDTO: ResolverTypeWrapper<UpdateUserAddressResponseDtoOperationResultDto>;
  Response3: ResolverTypeWrapper<Response3>;
  UpdateUserAddressRequestDTOInput: UpdateUserAddressRequestDtoInput;
  UpdateCampaignRequestDTOInput: UpdateCampaignRequestDtoInput;
  UpdateSliderRequestDTOInput: UpdateSliderRequestDtoInput;
  UpdateCarrierResponseDTOOperationResultDTO: ResolverTypeWrapper<UpdateCarrierResponseDtoOperationResultDto>;
  UpdateCarrierRequestDTOInput: UpdateCarrierRequestDtoInput;
  UpdateCarrierTrackingInfoResponseDTOOperationResultDTO: ResolverTypeWrapper<UpdateCarrierTrackingInfoResponseDtoOperationResultDto>;
  Response19: ResolverTypeWrapper<Response19>;
  UpdateCarrierTrackingInfoRequestDTOInput: UpdateCarrierTrackingInfoRequestDtoInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Mutation: {};
  UserAddressItemResponseDTOOperationResultDTO: UserAddressItemResponseDtoOperationResultDto;
  OperationResultMessage: OperationResultMessage;
  String: Scalars['String'];
  Response7: Response7;
  Int: Scalars['Int'];
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  UserAddressListResponseDTOOperationResultDTO: UserAddressListResponseDtoOperationResultDto;
  Response6: Response6;
  UserAddressItemResponseDTO: UserAddressItemResponseDto;
  GetUserDetailsResponseDTOOperationResultDTO: GetUserDetailsResponseDtoOperationResultDto;
  Response5: Response5;
  BasketInfoDTOOperationResultDTO: BasketInfoDtoOperationResultDto;
  Response9: Response9;
  Float: Scalars['Float'];
  BasketItemListDTO: BasketItemListDto;
  CampaignResponseDTOOperationResultDTO: CampaignResponseDtoOperationResultDto;
  Response10: Response10;
  SliderResponseDTOOperationResultDTO: SliderResponseDtoOperationResultDto;
  Response12: Response12;
  GetCarrierResponseDTOOperationResultDTO: GetCarrierResponseDtoOperationResultDto;
  Response16: Response16;
  Int64OperationResultDTO: Int64OperationResultDto;
  MerchantBranchSummaryDTOOperationResultDTO: MerchantBranchSummaryDtoOperationResultDto;
  Response28: Response28;
  OrderResponseDTOOperationResultDTO: OrderResponseDtoOperationResultDto;
  Response23: Response23;
  OrderProductItemListDTO: OrderProductItemListDto;
  GetOrderListResponseDTOOperationResultDTO: GetOrderListResponseDtoOperationResultDto;
  Response24: Response24;
  OrderResponseDTO: OrderResponseDto;
  UserActiveOrderDTOOperationResultDTO: UserActiveOrderDtoOperationResultDto;
  Response26: Response26;
  GetBaseCategoriesResponseDTOOperationResultDTO: GetBaseCategoriesResponseDtoOperationResultDto;
  Response33: Response33;
  GetCategoryReponseItemDTO: GetCategoryReponseItemDto;
  GetProductResponseDTO: GetProductResponseDto;
  ProductFilterResponseDTOPagingOperationDTO: ProductFilterResponseDtoPagingOperationDto;
  Response31: Response31;
  ProductFilterResponseDTO: ProductFilterResponseDto;
  ProductFilterItemDTO: ProductFilterItemDto;
  ProductItemListDTOPagingOperationDTO: ProductItemListDtoPagingOperationDto;
  Response30: Response30;
  ProductItemListDTO: ProductItemListDto;
  GetSubCategoriesResponseDTOOperationResultDTO: GetSubCategoriesResponseDtoOperationResultDto;
  Response34: Response34;
  SubCategoryWithProductsDTOPagingOperationDTO: SubCategoryWithProductsDtoPagingOperationDto;
  Response29: Response29;
  SubCategoryWithProductsDTO: SubCategoryWithProductsDto;
  DeleteUserRequestDTOInput: DeleteUserRequestDtoInput;
  RemoveBasketItemDTOInput: RemoveBasketItemDtoInput;
  OperationResultDTO: OperationResultDto;
  CreateForgetPasswordRequestDTOInput: CreateForgetPasswordRequestDtoInput;
  InsertUserAddressResponseDTOOperationResultDTO: InsertUserAddressResponseDtoOperationResultDto;
  Response2: Response2;
  InsertUserAddressRequestDTOInput: InsertUserAddressRequestDtoInput;
  RegisterUserResponseDTOOperationResultDTO: RegisterUserResponseDtoOperationResultDto;
  Response4: Response4;
  RegisterUserRequestDTOInput: RegisterUserRequestDtoInput;
  ValidateForgetPasswordRequestDTOInput: ValidateForgetPasswordRequestDtoInput;
  ValidateUserResponseDTOOperationResultDTO: ValidateUserResponseDtoOperationResultDto;
  Response8: Response8;
  ValidateUserRequestDTOInput: ValidateUserRequestDtoInput;
  InsertBasketItemRequestDTOInput: InsertBasketItemRequestDtoInput;
  BasketItemInput: BasketItemInput;
  CampaignResponseDTOPagingOperationDTO: CampaignResponseDtoPagingOperationDto;
  Response11: Response11;
  CampaignResponseDTO: CampaignResponseDto;
  GetCampaignsRequestDTOInput: GetCampaignsRequestDtoInput;
  InsertCampaignRequestDTOInput: InsertCampaignRequestDtoInput;
  InsertSliderRequestDTOInput: InsertSliderRequestDtoInput;
  SearchCampaignsRequestDTOInput: SearchCampaignsRequestDtoInput;
  SliderResponseDTOPagingOperationDTO: SliderResponseDtoPagingOperationDto;
  Response13: Response13;
  SliderResponseDTO: SliderResponseDto;
  SearchSlidersRequestDTOInput: SearchSlidersRequestDtoInput;
  JSON: Scalars['JSON'];
  GetCarrierResponseDTOPagingOperationDTO: GetCarrierResponseDtoPagingOperationDto;
  Response17: Response17;
  GetCarrierResponseDTO: GetCarrierResponseDto;
  GetCarrierListRequestDTOInput: GetCarrierListRequestDtoInput;
  GetCarrierTrackingInfoResponseDTOOperationResultDTO: GetCarrierTrackingInfoResponseDtoOperationResultDto;
  Response20: Response20;
  GetCarrierTrackingInfoRequestDTOInput: GetCarrierTrackingInfoRequestDtoInput;
  InsertCarrierResponseDTOOperationResultDTO: InsertCarrierResponseDtoOperationResultDto;
  InsertCarrierRequestDTOInput: InsertCarrierRequestDtoInput;
  InsertCarrierTrackingInfoResponseDTOOperationResultDTO: InsertCarrierTrackingInfoResponseDtoOperationResultDto;
  Response21: Response21;
  InsertOrderDeliveryCodeResponseDTOOperationResultDTO: InsertOrderDeliveryCodeResponseDtoOperationResultDto;
  InsertOrderDeliveryCodeRequestDTOInput: InsertOrderDeliveryCodeRequestDtoInput;
  SearchCarrierRequestDTOInput: SearchCarrierRequestDtoInput;
  FileResponseDTO: FileResponseDto;
  DataInfo: DataInfo;
  Header: Header;
  FileRequestDTOInput: FileRequestDtoInput;
  CarrierOrderListItemListOperationResultDTO: CarrierOrderListItemListOperationResultDto;
  CarrierOrderListItem: CarrierOrderListItem;
  GetCarrierOrderDTOInput: GetCarrierOrderDtoInput;
  InsertOrderResponseDTOOperationResultDTO: InsertOrderResponseDtoOperationResultDto;
  Response22: Response22;
  InsertOrderRequestDTOInput: InsertOrderRequestDtoInput;
  OrderSearchResponseDTOPagingOperationDTO: OrderSearchResponseDtoPagingOperationDto;
  Response25: Response25;
  OrderSearchResponseDTO: OrderSearchResponseDto;
  SearchOrderRequestDTOInput: SearchOrderRequestDtoInput;
  UpdateOrderRequestDTOInput: UpdateOrderRequestDtoInput;
  UpdateOrderStatusRequestDTOInput: UpdateOrderStatusRequestDtoInput;
  GetProductDetailResponseDTOOperationResultDTO: GetProductDetailResponseDtoOperationResultDto;
  Response35: Response35;
  GetProductRequestDTOInput: GetProductRequestDtoInput;
  GetCategoryResponseDTOPagingOperationDTO: GetCategoryResponseDtoPagingOperationDto;
  Response32: Response32;
  GetCategoryResponseDTO: GetCategoryResponseDto;
  SearchCategoryRequestDTOInput: SearchCategoryRequestDtoInput;
  SearchProductsByLatLongRequestDTOInput: SearchProductsByLatLongRequestDtoInput;
  ChangeForgetPasswordRequestDTOInput: ChangeForgetPasswordRequestDtoInput;
  UpdatePasswordRequestInput: UpdatePasswordRequestInput;
  UpdateUserResponseDTOOperationResultDTO: UpdateUserResponseDtoOperationResultDto;
  UpdateUserRequestDTOInput: UpdateUserRequestDtoInput;
  UpdateUserAddressResponseDTOOperationResultDTO: UpdateUserAddressResponseDtoOperationResultDto;
  Response3: Response3;
  UpdateUserAddressRequestDTOInput: UpdateUserAddressRequestDtoInput;
  UpdateCampaignRequestDTOInput: UpdateCampaignRequestDtoInput;
  UpdateSliderRequestDTOInput: UpdateSliderRequestDtoInput;
  UpdateCarrierResponseDTOOperationResultDTO: UpdateCarrierResponseDtoOperationResultDto;
  UpdateCarrierRequestDTOInput: UpdateCarrierRequestDtoInput;
  UpdateCarrierTrackingInfoResponseDTOOperationResultDTO: UpdateCarrierTrackingInfoResponseDtoOperationResultDto;
  Response19: Response19;
  UpdateCarrierTrackingInfoRequestDTOInput: UpdateCarrierTrackingInfoRequestDtoInput;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getApiV1AuthenticationGetcurrentuseraddress?: Resolver<Maybe<ResolversTypes['UserAddressItemResponseDTOOperationResultDTO']>, ParentType, ContextType>;
  getApiV1AuthenticationGetuseraddresses?: Resolver<Maybe<ResolversTypes['UserAddressListResponseDTOOperationResultDTO']>, ParentType, ContextType>;
  getApiV1AuthenticationGetuserdetails?: Resolver<Maybe<ResolversTypes['GetUserDetailsResponseDTOOperationResultDTO']>, ParentType, ContextType>;
  getApiV1BasketGetuserbasketbyaddressidasync?: Resolver<Maybe<ResolversTypes['BasketInfoDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<QueryGetApiV1BasketGetuserbasketbyaddressidasyncArgs, never>>;
  getApiV1CampaignCampaign?: Resolver<Maybe<ResolversTypes['CampaignResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<QueryGetApiV1CampaignCampaignArgs, never>>;
  getApiV1CampaignSlider?: Resolver<Maybe<ResolversTypes['SliderResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<QueryGetApiV1CampaignSliderArgs, never>>;
  getApiV1CarrierGetcarrier?: Resolver<Maybe<ResolversTypes['GetCarrierResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<QueryGetApiV1CarrierGetcarrierArgs, never>>;
  getApiV1MerchantGetmerchantbranchidbyaddressidAddressId?: Resolver<Maybe<ResolversTypes['Int64OperationResultDTO']>, ParentType, ContextType, RequireFields<QueryGetApiV1MerchantGetmerchantbranchidbyaddressidAddressIdArgs, 'addressId'>>;
  getApiV1MerchantGetmerchantbranchidbylatlong?: Resolver<Maybe<ResolversTypes['Int64OperationResultDTO']>, ParentType, ContextType, RequireFields<QueryGetApiV1MerchantGetmerchantbranchidbylatlongArgs, never>>;
  getApiV1OrderGetmerchantbranchsummary?: Resolver<Maybe<ResolversTypes['MerchantBranchSummaryDTOOperationResultDTO']>, ParentType, ContextType>;
  getApiV1OrderGetorderbyidasync?: Resolver<Maybe<ResolversTypes['OrderResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<QueryGetApiV1OrderGetorderbyidasyncArgs, never>>;
  getApiV1OrderGetordersbyuseridasync?: Resolver<Maybe<ResolversTypes['GetOrderListResponseDTOOperationResultDTO']>, ParentType, ContextType>;
  getApiV1OrderGetuseractiveorder?: Resolver<Maybe<ResolversTypes['UserActiveOrderDTOOperationResultDTO']>, ParentType, ContextType>;
  getApiV1ProductGetbasecategories?: Resolver<Maybe<ResolversTypes['GetBaseCategoriesResponseDTOOperationResultDTO']>, ParentType, ContextType>;
  getApiV1ProductGetproductfilterlist?: Resolver<Maybe<ResolversTypes['ProductFilterResponseDTOPagingOperationDTO']>, ParentType, ContextType, RequireFields<QueryGetApiV1ProductGetproductfilterlistArgs, never>>;
  getApiV1ProductGetproductlistbymerchantbranch?: Resolver<Maybe<ResolversTypes['ProductItemListDTOPagingOperationDTO']>, ParentType, ContextType, RequireFields<QueryGetApiV1ProductGetproductlistbymerchantbranchArgs, never>>;
  getApiV1ProductGetsubcategories?: Resolver<Maybe<ResolversTypes['GetSubCategoriesResponseDTOOperationResultDTO']>, ParentType, ContextType>;
  getApiV1ProductGetsubcategorieswithproduct?: Resolver<Maybe<ResolversTypes['GetSubCategoriesResponseDTOOperationResultDTO']>, ParentType, ContextType>;
  getApiV1ProductGetsubcategorieswithproductsandcategory?: Resolver<Maybe<ResolversTypes['SubCategoryWithProductsDTOPagingOperationDTO']>, ParentType, ContextType, RequireFields<QueryGetApiV1ProductGetsubcategorieswithproductsandcategoryArgs, never>>;
  getApiV1ProductSearchproductbymerchantbranch?: Resolver<Maybe<ResolversTypes['ProductItemListDTOPagingOperationDTO']>, ParentType, ContextType, RequireFields<QueryGetApiV1ProductSearchproductbymerchantbranchArgs, never>>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  deleteApiV1AuthenticationDeleteuser?: Resolver<Maybe<ResolversTypes['UserAddressItemResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationDeleteApiV1AuthenticationDeleteuserArgs, never>>;
  deleteApiV1BasketRemovebasketitemasync?: Resolver<Maybe<ResolversTypes['BasketInfoDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationDeleteApiV1BasketRemovebasketitemasyncArgs, never>>;
  deleteApiV1BasketRemoveuserbasketasync?: Resolver<Maybe<ResolversTypes['OperationResultDTO']>, ParentType, ContextType, RequireFields<MutationDeleteApiV1BasketRemoveuserbasketasyncArgs, never>>;
  deleteApiV1CampaignDeleteCampaign?: Resolver<Maybe<ResolversTypes['OperationResultDTO']>, ParentType, ContextType, RequireFields<MutationDeleteApiV1CampaignDeleteCampaignArgs, never>>;
  deleteApiV1CampaignDeleteSlider?: Resolver<Maybe<ResolversTypes['OperationResultDTO']>, ParentType, ContextType, RequireFields<MutationDeleteApiV1CampaignDeleteSliderArgs, never>>;
  deleteApiV1CarrierDeletecarrier?: Resolver<Maybe<ResolversTypes['OperationResultDTO']>, ParentType, ContextType, RequireFields<MutationDeleteApiV1CarrierDeletecarrierArgs, never>>;
  postApiV1AuthenticationCreateforgetpasswordrequest?: Resolver<Maybe<ResolversTypes['OperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1AuthenticationCreateforgetpasswordrequestArgs, never>>;
  postApiV1AuthenticationInsertuseraddress?: Resolver<Maybe<ResolversTypes['InsertUserAddressResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1AuthenticationInsertuseraddressArgs, never>>;
  postApiV1AuthenticationRegister?: Resolver<Maybe<ResolversTypes['RegisterUserResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1AuthenticationRegisterArgs, never>>;
  postApiV1AuthenticationValidateforgetpasswordrequest?: Resolver<Maybe<ResolversTypes['OperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1AuthenticationValidateforgetpasswordrequestArgs, never>>;
  postApiV1AuthenticationValidateuser?: Resolver<Maybe<ResolversTypes['ValidateUserResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1AuthenticationValidateuserArgs, never>>;
  postApiV1BasketInsertbasketitem?: Resolver<Maybe<ResolversTypes['BasketInfoDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1BasketInsertbasketitemArgs, never>>;
  postApiV1CampaignCampaigns?: Resolver<Maybe<ResolversTypes['CampaignResponseDTOPagingOperationDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1CampaignCampaignsArgs, never>>;
  postApiV1CampaignInsertCampaign?: Resolver<Maybe<ResolversTypes['CampaignResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1CampaignInsertCampaignArgs, never>>;
  postApiV1CampaignInsertSlider?: Resolver<Maybe<ResolversTypes['SliderResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1CampaignInsertSliderArgs, never>>;
  postApiV1CampaignSearchCampaign?: Resolver<Maybe<ResolversTypes['CampaignResponseDTOPagingOperationDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1CampaignSearchCampaignArgs, never>>;
  postApiV1CampaignSearchSlider?: Resolver<Maybe<ResolversTypes['SliderResponseDTOPagingOperationDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1CampaignSearchSliderArgs, never>>;
  postApiV1CampaignSliders?: Resolver<Maybe<ResolversTypes['SliderResponseDTOPagingOperationDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1CampaignSlidersArgs, never>>;
  postApiV1CarrierGetcarriers?: Resolver<Maybe<ResolversTypes['GetCarrierResponseDTOPagingOperationDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1CarrierGetcarriersArgs, never>>;
  postApiV1CarrierGetcarriertrackinginfo?: Resolver<Maybe<ResolversTypes['GetCarrierTrackingInfoResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1CarrierGetcarriertrackinginfoArgs, never>>;
  postApiV1CarrierInsertcarrier?: Resolver<Maybe<ResolversTypes['InsertCarrierResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1CarrierInsertcarrierArgs, never>>;
  postApiV1CarrierInsertcarriertrackinginfo2?: Resolver<Maybe<ResolversTypes['InsertCarrierTrackingInfoResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1CarrierInsertcarriertrackinginfo2Args, never>>;
  postApiV1CarrierInsertorderdeliverycode?: Resolver<Maybe<ResolversTypes['InsertOrderDeliveryCodeResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1CarrierInsertorderdeliverycodeArgs, never>>;
  postApiV1CarrierSearchcarrier?: Resolver<Maybe<ResolversTypes['GetCarrierResponseDTOPagingOperationDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1CarrierSearchcarrierArgs, never>>;
  postApiV1FileInsertfileasync?: Resolver<Maybe<ResolversTypes['FileResponseDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1FileInsertfileasyncArgs, never>>;
  postApiV1FileTest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationPostApiV1FileTestArgs, never>>;
  postApiV1OrderGetcarrierordersbyorderstatus?: Resolver<Maybe<ResolversTypes['CarrierOrderListItemListOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1OrderGetcarrierordersbyorderstatusArgs, never>>;
  postApiV1OrderInsertorderasync?: Resolver<Maybe<ResolversTypes['InsertOrderResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1OrderInsertorderasyncArgs, never>>;
  postApiV1OrderSearchorderasync?: Resolver<Maybe<ResolversTypes['OrderSearchResponseDTOPagingOperationDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1OrderSearchorderasyncArgs, never>>;
  postApiV1OrderUpdateorderasync?: Resolver<Maybe<ResolversTypes['OrderResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1OrderUpdateorderasyncArgs, never>>;
  postApiV1OrderUpdateorderstatusasync?: Resolver<Maybe<ResolversTypes['OrderResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1OrderUpdateorderstatusasyncArgs, never>>;
  postApiV1ProductGetproductdetails?: Resolver<Maybe<ResolversTypes['GetProductDetailResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1ProductGetproductdetailsArgs, never>>;
  postApiV1ProductGetproductlistbylatlong?: Resolver<Maybe<ResolversTypes['ProductItemListDTOPagingOperationDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1ProductGetproductlistbylatlongArgs, never>>;
  postApiV1ProductSearchcategoryasync?: Resolver<Maybe<ResolversTypes['GetCategoryResponseDTOPagingOperationDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1ProductSearchcategoryasyncArgs, never>>;
  postApiV1ProductSearchproductsbylatlong?: Resolver<Maybe<ResolversTypes['ProductItemListDTOPagingOperationDTO']>, ParentType, ContextType, RequireFields<MutationPostApiV1ProductSearchproductsbylatlongArgs, never>>;
  putApiV1AuthenticationSetcurrentuseraddress?: Resolver<Maybe<ResolversTypes['UserAddressItemResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPutApiV1AuthenticationSetcurrentuseraddressArgs, never>>;
  putApiV1AuthenticationUpdateforgetpasswordrequest?: Resolver<Maybe<ResolversTypes['OperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPutApiV1AuthenticationUpdateforgetpasswordrequestArgs, never>>;
  putApiV1AuthenticationUpdatepasswordrequest?: Resolver<Maybe<ResolversTypes['OperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPutApiV1AuthenticationUpdatepasswordrequestArgs, never>>;
  putApiV1AuthenticationUpdateuser?: Resolver<Maybe<ResolversTypes['UpdateUserResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPutApiV1AuthenticationUpdateuserArgs, never>>;
  putApiV1AuthenticationUpdateuseraddress?: Resolver<Maybe<ResolversTypes['UpdateUserAddressResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPutApiV1AuthenticationUpdateuseraddressArgs, never>>;
  putApiV1CampaignUpdateCampaign?: Resolver<Maybe<ResolversTypes['CampaignResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPutApiV1CampaignUpdateCampaignArgs, never>>;
  putApiV1CampaignUpdateSlider?: Resolver<Maybe<ResolversTypes['SliderResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPutApiV1CampaignUpdateSliderArgs, never>>;
  putApiV1CarrierUpdatecarrier?: Resolver<Maybe<ResolversTypes['UpdateCarrierResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPutApiV1CarrierUpdatecarrierArgs, never>>;
  putApiV1CarrierUpdatecarriertrackinginfo?: Resolver<Maybe<ResolversTypes['UpdateCarrierTrackingInfoResponseDTOOperationResultDTO']>, ParentType, ContextType, RequireFields<MutationPutApiV1CarrierUpdatecarriertrackinginfoArgs, never>>;
}>;

export type UserAddressItemResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserAddressItemResponseDTOOperationResultDTO'] = ResolversParentTypes['UserAddressItemResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response7']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type OperationResultMessageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OperationResultMessage'] = ResolversParentTypes['OperationResultMessage']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response7Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response7'] = ResolversParentTypes['Response7']> = ResolversObject<{
  addressType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  building?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cityId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  contactTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  creationTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creatorUserId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  department?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  districtId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fullAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  isCurrent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  neighborhood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type UserAddressListResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserAddressListResponseDTOOperationResultDTO'] = ResolversParentTypes['UserAddressListResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response6']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response6Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response6'] = ResolversParentTypes['Response6']> = ResolversObject<{
  addressList?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserAddressItemResponseDTO']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type UserAddressItemResponseDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserAddressItemResponseDTO'] = ResolversParentTypes['UserAddressItemResponseDTO']> = ResolversObject<{
  addressType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  building?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cityId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  contactTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  creationTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creatorUserId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  department?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  districtId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fullAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  isCurrent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  neighborhood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GetUserDetailsResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetUserDetailsResponseDTOOperationResultDTO'] = ResolversParentTypes['GetUserDetailsResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response5']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response5Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response5'] = ResolversParentTypes['Response5']> = ResolversObject<{
  addressId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  merchantBranchId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  surname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type BasketInfoDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BasketInfoDTOOperationResultDTO'] = ResolversParentTypes['BasketInfoDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response9']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response9Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response9'] = ResolversParentTypes['Response9']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  discount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  freeShipping?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  freeShippingLimit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  isMinAmount?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['BasketItemListDTO']>>>, ParentType, ContextType>;
  shippingPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  statusMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type BasketItemListDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BasketItemListDTO'] = ResolversParentTypes['BasketItemListDTO']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  productImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productItemId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  productName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stockStatus?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  stockStatusMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CampaignResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CampaignResponseDTOOperationResultDTO'] = ResolversParentTypes['CampaignResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response10']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response10Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response10'] = ResolversParentTypes['Response10']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type SliderResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SliderResponseDTOOperationResultDTO'] = ResolversParentTypes['SliderResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response12']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response12Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response12'] = ResolversParentTypes['Response12']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GetCarrierResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetCarrierResponseDTOOperationResultDTO'] = ResolversParentTypes['GetCarrierResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response16']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response16Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response16'] = ResolversParentTypes['Response16']> = ResolversObject<{
  carrierType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  merchantId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Int64OperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Int64OperationResultDTO'] = ResolversParentTypes['Int64OperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type MerchantBranchSummaryDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MerchantBranchSummaryDTOOperationResultDTO'] = ResolversParentTypes['MerchantBranchSummaryDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response28']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response28Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response28'] = ResolversParentTypes['Response28']> = ResolversObject<{
  delivered?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  new?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  preparing?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ready?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  shipping?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type OrderResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderResponseDTOOperationResultDTO'] = ResolversParentTypes['OrderResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response23']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response23Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response23'] = ResolversParentTypes['Response23']> = ResolversObject<{
  addressTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  carrierId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  contactPhoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryEndDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryStartDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  lastStatusBysUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  merchantBranchId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderProductItemListDTO']>>>, ParentType, ContextType>;
  shippingPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  statusDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type OrderProductItemListDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderProductItemListDTO'] = ResolversParentTypes['OrderProductItemListDTO']> = ResolversObject<{
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  productItemId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  productName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productTotalAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GetOrderListResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetOrderListResponseDTOOperationResultDTO'] = ResolversParentTypes['GetOrderListResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response24']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response24Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response24'] = ResolversParentTypes['Response24']> = ResolversObject<{
  currentPage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  orders?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderResponseDTO']>>>, ParentType, ContextType>;
  pageCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type OrderResponseDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderResponseDTO'] = ResolversParentTypes['OrderResponseDTO']> = ResolversObject<{
  addressTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  carrierId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  contactPhoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryEndDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryStartDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fullAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  lastStatusBysUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  merchantBranchId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderProductItemListDTO']>>>, ParentType, ContextType>;
  shippingPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  statusDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type UserActiveOrderDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UserActiveOrderDTOOperationResultDTO'] = ResolversParentTypes['UserActiveOrderDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response26']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response26Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response26'] = ResolversParentTypes['Response26']> = ResolversObject<{
  addressDetail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  carrierLat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  carrierLong?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orderDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  orderNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderProducts?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderStatusDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderStatusTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  userLat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userLong?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GetBaseCategoriesResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetBaseCategoriesResponseDTOOperationResultDTO'] = ResolversParentTypes['GetBaseCategoriesResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response33']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response33Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response33'] = ResolversParentTypes['Response33']> = ResolversObject<{
  baseCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['GetCategoryReponseItemDTO']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GetCategoryReponseItemDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetCategoryReponseItemDTO'] = ResolversParentTypes['GetCategoryReponseItemDTO']> = ResolversObject<{
  categoryUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['GetProductResponseDTO']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GetProductResponseDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetProductResponseDTO'] = ResolversParentTypes['GetProductResponseDTO']> = ResolversObject<{
  brandId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  categoryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  creationTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creatorUserId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  defaultImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastModTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  merchantId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  minQuantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  modifierUserId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type ProductFilterResponseDtoPagingOperationDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductFilterResponseDTOPagingOperationDTO'] = ResolversParentTypes['ProductFilterResponseDTOPagingOperationDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response31']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response31Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response31'] = ResolversParentTypes['Response31']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductFilterResponseDTO']>>>, ParentType, ContextType>;
  pageCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type ProductFilterResponseDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductFilterResponseDTO'] = ResolversParentTypes['ProductFilterResponseDTO']> = ResolversObject<{
  campain?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  categoryName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fastShipping?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  productItems?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductFilterItemDTO']>>>, ParentType, ContextType>;
  productName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type ProductFilterItemDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductFilterItemDTO'] = ResolversParentTypes['ProductFilterItemDTO']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  productItemId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stock?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type ProductItemListDtoPagingOperationDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductItemListDTOPagingOperationDTO'] = ResolversParentTypes['ProductItemListDTOPagingOperationDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response30']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response30Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response30'] = ResolversParentTypes['Response30']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductItemListDTO']>>>, ParentType, ContextType>;
  pageCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type ProductItemListDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProductItemListDTO'] = ResolversParentTypes['ProductItemListDTO']> = ResolversObject<{
  brand?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  productItemId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GetSubCategoriesResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetSubCategoriesResponseDTOOperationResultDTO'] = ResolversParentTypes['GetSubCategoriesResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response34']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response34Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response34'] = ResolversParentTypes['Response34']> = ResolversObject<{
  subCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['GetCategoryReponseItemDTO']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type SubCategoryWithProductsDtoPagingOperationDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SubCategoryWithProductsDTOPagingOperationDTO'] = ResolversParentTypes['SubCategoryWithProductsDTOPagingOperationDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response29']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response29Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response29'] = ResolversParentTypes['Response29']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['SubCategoryWithProductsDTO']>>>, ParentType, ContextType>;
  pageCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type SubCategoryWithProductsDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SubCategoryWithProductsDTO'] = ResolversParentTypes['SubCategoryWithProductsDTO']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductItemListDTO']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type OperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OperationResultDTO'] = ResolversParentTypes['OperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type InsertUserAddressResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InsertUserAddressResponseDTOOperationResultDTO'] = ResolversParentTypes['InsertUserAddressResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response2']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response2'] = ResolversParentTypes['Response2']> = ResolversObject<{
  addressType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  building?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cityId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  contactTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  creationTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creatorUserId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  department?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  districtId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fullAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  isCurrent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  neighborhood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type RegisterUserResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RegisterUserResponseDTOOperationResultDTO'] = ResolversParentTypes['RegisterUserResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response4']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response4Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response4'] = ResolversParentTypes['Response4']> = ResolversObject<{
  creationTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creatorUserId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastModTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modifierUserId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  surname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type ValidateUserResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ValidateUserResponseDTOOperationResultDTO'] = ResolversParentTypes['ValidateUserResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response8']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response8Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response8'] = ResolversParentTypes['Response8']> = ResolversObject<{
  addressId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  merchantBranchId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refreshToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  surname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokenExpireDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CampaignResponseDtoPagingOperationDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CampaignResponseDTOPagingOperationDTO'] = ResolversParentTypes['CampaignResponseDTOPagingOperationDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response11']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response11Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response11'] = ResolversParentTypes['Response11']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['CampaignResponseDTO']>>>, ParentType, ContextType>;
  pageCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CampaignResponseDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CampaignResponseDTO'] = ResolversParentTypes['CampaignResponseDTO']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type SliderResponseDtoPagingOperationDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SliderResponseDTOPagingOperationDTO'] = ResolversParentTypes['SliderResponseDTOPagingOperationDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response13']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response13Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response13'] = ResolversParentTypes['Response13']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['SliderResponseDTO']>>>, ParentType, ContextType>;
  pageCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type SliderResponseDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SliderResponseDTO'] = ResolversParentTypes['SliderResponseDTO']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type GetCarrierResponseDtoPagingOperationDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetCarrierResponseDTOPagingOperationDTO'] = ResolversParentTypes['GetCarrierResponseDTOPagingOperationDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response17']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response17Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response17'] = ResolversParentTypes['Response17']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['GetCarrierResponseDTO']>>>, ParentType, ContextType>;
  pageCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GetCarrierResponseDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetCarrierResponseDTO'] = ResolversParentTypes['GetCarrierResponseDTO']> = ResolversObject<{
  carrierType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  merchantId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GetCarrierTrackingInfoResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetCarrierTrackingInfoResponseDTOOperationResultDTO'] = ResolversParentTypes['GetCarrierTrackingInfoResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response20']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response20Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response20'] = ResolversParentTypes['Response20']> = ResolversObject<{
  carrierId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  isMoving?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orderId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type InsertCarrierResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InsertCarrierResponseDTOOperationResultDTO'] = ResolversParentTypes['InsertCarrierResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type InsertCarrierTrackingInfoResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InsertCarrierTrackingInfoResponseDTOOperationResultDTO'] = ResolversParentTypes['InsertCarrierTrackingInfoResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response21']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response21Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response21'] = ResolversParentTypes['Response21']> = ResolversObject<{
  carrierId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  isMoving?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orderId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type InsertOrderDeliveryCodeResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InsertOrderDeliveryCodeResponseDTOOperationResultDTO'] = ResolversParentTypes['InsertOrderDeliveryCodeResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type FileResponseDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FileResponseDTO'] = ResolversParentTypes['FileResponseDTO']> = ResolversObject<{
  dataInfo?: Resolver<Maybe<ResolversTypes['DataInfo']>, ParentType, ContextType>;
  header?: Resolver<Maybe<ResolversTypes['Header']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type DataInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DataInfo'] = ResolversParentTypes['DataInfo']> = ResolversObject<{
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type HeaderResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Header'] = ResolversParentTypes['Header']> = ResolversObject<{
  isSuccess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  responseCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CarrierOrderListItemListOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CarrierOrderListItemListOperationResultDTO'] = ResolversParentTypes['CarrierOrderListItemListOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<Array<Maybe<ResolversTypes['CarrierOrderListItem']>>>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type CarrierOrderListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CarrierOrderListItem'] = ResolversParentTypes['CarrierOrderListItem']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryEndDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryStartDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderProductItemListDTO']>>>, ParentType, ContextType>;
  shippingPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  statusDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  userLat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userLong?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type InsertOrderResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InsertOrderResponseDTOOperationResultDTO'] = ResolversParentTypes['InsertOrderResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response22']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response22Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response22'] = ResolversParentTypes['Response22']> = ResolversObject<{
  deliveryEndDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryStartDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  merchantBranchId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type OrderSearchResponseDtoPagingOperationDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderSearchResponseDTOPagingOperationDTO'] = ResolversParentTypes['OrderSearchResponseDTOPagingOperationDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response25']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response25Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response25'] = ResolversParentTypes['Response25']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderSearchResponseDTO']>>>, ParentType, ContextType>;
  pageCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type OrderSearchResponseDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderSearchResponseDTO'] = ResolversParentTypes['OrderSearchResponseDTO']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  carrierId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  customer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryEndDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryStartDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  lastStatusBysUser?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  merchantBranchId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderProductItemListDTO']>>>, ParentType, ContextType>;
  shippingPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  statusDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GetProductDetailResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetProductDetailResponseDTOOperationResultDTO'] = ResolversParentTypes['GetProductDetailResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response35']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response35Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response35'] = ResolversParentTypes['Response35']> = ResolversObject<{
  brandId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  defaultImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itemId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  merchantBranchId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  minQuantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GetCategoryResponseDtoPagingOperationDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetCategoryResponseDTOPagingOperationDTO'] = ResolversParentTypes['GetCategoryResponseDTOPagingOperationDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response32']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response32Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response32'] = ResolversParentTypes['Response32']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['GetCategoryResponseDTO']>>>, ParentType, ContextType>;
  pageCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageIndex?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pageSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type GetCategoryResponseDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetCategoryResponseDTO'] = ResolversParentTypes['GetCategoryResponseDTO']> = ResolversObject<{
  categoryDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categoryName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categoryUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parentID?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type UpdateUserResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UpdateUserResponseDTOOperationResultDTO'] = ResolversParentTypes['UpdateUserResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type UpdateUserAddressResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UpdateUserAddressResponseDTOOperationResultDTO'] = ResolversParentTypes['UpdateUserAddressResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response3']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response3Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response3'] = ResolversParentTypes['Response3']> = ResolversObject<{
  addressId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  addressType?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  building?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cityId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  contactTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  department?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  districtId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fullAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isCurrent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  neighborhood?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type UpdateCarrierResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UpdateCarrierResponseDTOOperationResultDTO'] = ResolversParentTypes['UpdateCarrierResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type UpdateCarrierTrackingInfoResponseDtoOperationResultDtoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UpdateCarrierTrackingInfoResponseDTOOperationResultDTO'] = ResolversParentTypes['UpdateCarrierTrackingInfoResponseDTOOperationResultDTO']> = ResolversObject<{
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['OperationResultMessage']>>>, ParentType, ContextType>;
  response?: Resolver<Maybe<ResolversTypes['Response19']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Response19Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Response19'] = ResolversParentTypes['Response19']> = ResolversObject<{
  carrierId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  isMoving?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  orderId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  UserAddressItemResponseDTOOperationResultDTO?: UserAddressItemResponseDtoOperationResultDtoResolvers<ContextType>;
  OperationResultMessage?: OperationResultMessageResolvers<ContextType>;
  Response7?: Response7Resolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  UserAddressListResponseDTOOperationResultDTO?: UserAddressListResponseDtoOperationResultDtoResolvers<ContextType>;
  Response6?: Response6Resolvers<ContextType>;
  UserAddressItemResponseDTO?: UserAddressItemResponseDtoResolvers<ContextType>;
  GetUserDetailsResponseDTOOperationResultDTO?: GetUserDetailsResponseDtoOperationResultDtoResolvers<ContextType>;
  Response5?: Response5Resolvers<ContextType>;
  BasketInfoDTOOperationResultDTO?: BasketInfoDtoOperationResultDtoResolvers<ContextType>;
  Response9?: Response9Resolvers<ContextType>;
  BasketItemListDTO?: BasketItemListDtoResolvers<ContextType>;
  CampaignResponseDTOOperationResultDTO?: CampaignResponseDtoOperationResultDtoResolvers<ContextType>;
  Response10?: Response10Resolvers<ContextType>;
  SliderResponseDTOOperationResultDTO?: SliderResponseDtoOperationResultDtoResolvers<ContextType>;
  Response12?: Response12Resolvers<ContextType>;
  GetCarrierResponseDTOOperationResultDTO?: GetCarrierResponseDtoOperationResultDtoResolvers<ContextType>;
  Response16?: Response16Resolvers<ContextType>;
  Int64OperationResultDTO?: Int64OperationResultDtoResolvers<ContextType>;
  MerchantBranchSummaryDTOOperationResultDTO?: MerchantBranchSummaryDtoOperationResultDtoResolvers<ContextType>;
  Response28?: Response28Resolvers<ContextType>;
  OrderResponseDTOOperationResultDTO?: OrderResponseDtoOperationResultDtoResolvers<ContextType>;
  Response23?: Response23Resolvers<ContextType>;
  OrderProductItemListDTO?: OrderProductItemListDtoResolvers<ContextType>;
  GetOrderListResponseDTOOperationResultDTO?: GetOrderListResponseDtoOperationResultDtoResolvers<ContextType>;
  Response24?: Response24Resolvers<ContextType>;
  OrderResponseDTO?: OrderResponseDtoResolvers<ContextType>;
  UserActiveOrderDTOOperationResultDTO?: UserActiveOrderDtoOperationResultDtoResolvers<ContextType>;
  Response26?: Response26Resolvers<ContextType>;
  GetBaseCategoriesResponseDTOOperationResultDTO?: GetBaseCategoriesResponseDtoOperationResultDtoResolvers<ContextType>;
  Response33?: Response33Resolvers<ContextType>;
  GetCategoryReponseItemDTO?: GetCategoryReponseItemDtoResolvers<ContextType>;
  GetProductResponseDTO?: GetProductResponseDtoResolvers<ContextType>;
  ProductFilterResponseDTOPagingOperationDTO?: ProductFilterResponseDtoPagingOperationDtoResolvers<ContextType>;
  Response31?: Response31Resolvers<ContextType>;
  ProductFilterResponseDTO?: ProductFilterResponseDtoResolvers<ContextType>;
  ProductFilterItemDTO?: ProductFilterItemDtoResolvers<ContextType>;
  ProductItemListDTOPagingOperationDTO?: ProductItemListDtoPagingOperationDtoResolvers<ContextType>;
  Response30?: Response30Resolvers<ContextType>;
  ProductItemListDTO?: ProductItemListDtoResolvers<ContextType>;
  GetSubCategoriesResponseDTOOperationResultDTO?: GetSubCategoriesResponseDtoOperationResultDtoResolvers<ContextType>;
  Response34?: Response34Resolvers<ContextType>;
  SubCategoryWithProductsDTOPagingOperationDTO?: SubCategoryWithProductsDtoPagingOperationDtoResolvers<ContextType>;
  Response29?: Response29Resolvers<ContextType>;
  SubCategoryWithProductsDTO?: SubCategoryWithProductsDtoResolvers<ContextType>;
  OperationResultDTO?: OperationResultDtoResolvers<ContextType>;
  InsertUserAddressResponseDTOOperationResultDTO?: InsertUserAddressResponseDtoOperationResultDtoResolvers<ContextType>;
  Response2?: Response2Resolvers<ContextType>;
  RegisterUserResponseDTOOperationResultDTO?: RegisterUserResponseDtoOperationResultDtoResolvers<ContextType>;
  Response4?: Response4Resolvers<ContextType>;
  ValidateUserResponseDTOOperationResultDTO?: ValidateUserResponseDtoOperationResultDtoResolvers<ContextType>;
  Response8?: Response8Resolvers<ContextType>;
  CampaignResponseDTOPagingOperationDTO?: CampaignResponseDtoPagingOperationDtoResolvers<ContextType>;
  Response11?: Response11Resolvers<ContextType>;
  CampaignResponseDTO?: CampaignResponseDtoResolvers<ContextType>;
  SliderResponseDTOPagingOperationDTO?: SliderResponseDtoPagingOperationDtoResolvers<ContextType>;
  Response13?: Response13Resolvers<ContextType>;
  SliderResponseDTO?: SliderResponseDtoResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  GetCarrierResponseDTOPagingOperationDTO?: GetCarrierResponseDtoPagingOperationDtoResolvers<ContextType>;
  Response17?: Response17Resolvers<ContextType>;
  GetCarrierResponseDTO?: GetCarrierResponseDtoResolvers<ContextType>;
  GetCarrierTrackingInfoResponseDTOOperationResultDTO?: GetCarrierTrackingInfoResponseDtoOperationResultDtoResolvers<ContextType>;
  Response20?: Response20Resolvers<ContextType>;
  InsertCarrierResponseDTOOperationResultDTO?: InsertCarrierResponseDtoOperationResultDtoResolvers<ContextType>;
  InsertCarrierTrackingInfoResponseDTOOperationResultDTO?: InsertCarrierTrackingInfoResponseDtoOperationResultDtoResolvers<ContextType>;
  Response21?: Response21Resolvers<ContextType>;
  InsertOrderDeliveryCodeResponseDTOOperationResultDTO?: InsertOrderDeliveryCodeResponseDtoOperationResultDtoResolvers<ContextType>;
  FileResponseDTO?: FileResponseDtoResolvers<ContextType>;
  DataInfo?: DataInfoResolvers<ContextType>;
  Header?: HeaderResolvers<ContextType>;
  CarrierOrderListItemListOperationResultDTO?: CarrierOrderListItemListOperationResultDtoResolvers<ContextType>;
  CarrierOrderListItem?: CarrierOrderListItemResolvers<ContextType>;
  InsertOrderResponseDTOOperationResultDTO?: InsertOrderResponseDtoOperationResultDtoResolvers<ContextType>;
  Response22?: Response22Resolvers<ContextType>;
  OrderSearchResponseDTOPagingOperationDTO?: OrderSearchResponseDtoPagingOperationDtoResolvers<ContextType>;
  Response25?: Response25Resolvers<ContextType>;
  OrderSearchResponseDTO?: OrderSearchResponseDtoResolvers<ContextType>;
  GetProductDetailResponseDTOOperationResultDTO?: GetProductDetailResponseDtoOperationResultDtoResolvers<ContextType>;
  Response35?: Response35Resolvers<ContextType>;
  GetCategoryResponseDTOPagingOperationDTO?: GetCategoryResponseDtoPagingOperationDtoResolvers<ContextType>;
  Response32?: Response32Resolvers<ContextType>;
  GetCategoryResponseDTO?: GetCategoryResponseDtoResolvers<ContextType>;
  UpdateUserResponseDTOOperationResultDTO?: UpdateUserResponseDtoOperationResultDtoResolvers<ContextType>;
  UpdateUserAddressResponseDTOOperationResultDTO?: UpdateUserAddressResponseDtoOperationResultDtoResolvers<ContextType>;
  Response3?: Response3Resolvers<ContextType>;
  UpdateCarrierResponseDTOOperationResultDTO?: UpdateCarrierResponseDtoOperationResultDtoResolvers<ContextType>;
  UpdateCarrierTrackingInfoResponseDTOOperationResultDTO?: UpdateCarrierTrackingInfoResponseDtoOperationResultDtoResolvers<ContextType>;
  Response19?: Response19Resolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MeshContext> = Resolvers<ContextType>;

import { MeshContext as OriginalMeshContext, ProjectionOptions } from '@graphql-mesh/runtime';

export type Tarim KrediSdk = {
  getApiV1AuthenticationGetcurrentuseraddress: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getApiV1AuthenticationGetcurrentuseraddress']>,
  getApiV1AuthenticationGetuseraddresses: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getApiV1AuthenticationGetuseraddresses']>,
  getApiV1AuthenticationGetuserdetails: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getApiV1AuthenticationGetuserdetails']>,
  getApiV1BasketGetuserbasketbyaddressidasync: (args: QueryGetApiV1BasketGetuserbasketbyaddressidasyncArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getApiV1BasketGetuserbasketbyaddressidasync']>,
  getApiV1CampaignCampaign: (args: QueryGetApiV1CampaignCampaignArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getApiV1CampaignCampaign']>,
  getApiV1CampaignSlider: (args: QueryGetApiV1CampaignSliderArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getApiV1CampaignSlider']>,
  getApiV1CarrierGetcarrier: (args: QueryGetApiV1CarrierGetcarrierArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getApiV1CarrierGetcarrier']>,
  getApiV1MerchantGetmerchantbranchidbyaddressidAddressId: (args: QueryGetApiV1MerchantGetmerchantbranchidbyaddressidAddressIdArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getApiV1MerchantGetmerchantbranchidbyaddressidAddressId']>,
  getApiV1MerchantGetmerchantbranchidbylatlong: (args: QueryGetApiV1MerchantGetmerchantbranchidbylatlongArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getApiV1MerchantGetmerchantbranchidbylatlong']>,
  getApiV1OrderGetmerchantbranchsummary: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getApiV1OrderGetmerchantbranchsummary']>,
  getApiV1OrderGetorderbyidasync: (args: QueryGetApiV1OrderGetorderbyidasyncArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getApiV1OrderGetorderbyidasync']>,
  getApiV1OrderGetordersbyuseridasync: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getApiV1OrderGetordersbyuseridasync']>,
  getApiV1OrderGetuseractiveorder: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getApiV1OrderGetuseractiveorder']>,
  getApiV1ProductGetbasecategories: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getApiV1ProductGetbasecategories']>,
  getApiV1ProductGetproductfilterlist: (args: QueryGetApiV1ProductGetproductfilterlistArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getApiV1ProductGetproductfilterlist']>,
  getApiV1ProductGetproductlistbymerchantbranch: (args: QueryGetApiV1ProductGetproductlistbymerchantbranchArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getApiV1ProductGetproductlistbymerchantbranch']>,
  getApiV1ProductGetsubcategories: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getApiV1ProductGetsubcategories']>,
  getApiV1ProductGetsubcategorieswithproduct: (args?: {}, projectionOptions?: ProjectionOptions) => Promise<Query['getApiV1ProductGetsubcategorieswithproduct']>,
  getApiV1ProductGetsubcategorieswithproductsandcategory: (args: QueryGetApiV1ProductGetsubcategorieswithproductsandcategoryArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getApiV1ProductGetsubcategorieswithproductsandcategory']>,
  getApiV1ProductSearchproductbymerchantbranch: (args: QueryGetApiV1ProductSearchproductbymerchantbranchArgs, projectionOptions?: ProjectionOptions) => Promise<Query['getApiV1ProductSearchproductbymerchantbranch']>,
  deleteApiV1AuthenticationDeleteuser: (args: MutationDeleteApiV1AuthenticationDeleteuserArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['deleteApiV1AuthenticationDeleteuser']>,
  deleteApiV1BasketRemovebasketitemasync: (args: MutationDeleteApiV1BasketRemovebasketitemasyncArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['deleteApiV1BasketRemovebasketitemasync']>,
  deleteApiV1BasketRemoveuserbasketasync: (args: MutationDeleteApiV1BasketRemoveuserbasketasyncArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['deleteApiV1BasketRemoveuserbasketasync']>,
  deleteApiV1CampaignDeleteCampaign: (args: MutationDeleteApiV1CampaignDeleteCampaignArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['deleteApiV1CampaignDeleteCampaign']>,
  deleteApiV1CampaignDeleteSlider: (args: MutationDeleteApiV1CampaignDeleteSliderArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['deleteApiV1CampaignDeleteSlider']>,
  deleteApiV1CarrierDeletecarrier: (args: MutationDeleteApiV1CarrierDeletecarrierArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['deleteApiV1CarrierDeletecarrier']>,
  postApiV1AuthenticationCreateforgetpasswordrequest: (args: MutationPostApiV1AuthenticationCreateforgetpasswordrequestArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1AuthenticationCreateforgetpasswordrequest']>,
  postApiV1AuthenticationInsertuseraddress: (args: MutationPostApiV1AuthenticationInsertuseraddressArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1AuthenticationInsertuseraddress']>,
  postApiV1AuthenticationRegister: (args: MutationPostApiV1AuthenticationRegisterArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1AuthenticationRegister']>,
  postApiV1AuthenticationValidateforgetpasswordrequest: (args: MutationPostApiV1AuthenticationValidateforgetpasswordrequestArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1AuthenticationValidateforgetpasswordrequest']>,
  postApiV1AuthenticationValidateuser: (args: MutationPostApiV1AuthenticationValidateuserArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1AuthenticationValidateuser']>,
  postApiV1BasketInsertbasketitem: (args: MutationPostApiV1BasketInsertbasketitemArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1BasketInsertbasketitem']>,
  postApiV1CampaignCampaigns: (args: MutationPostApiV1CampaignCampaignsArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1CampaignCampaigns']>,
  postApiV1CampaignInsertCampaign: (args: MutationPostApiV1CampaignInsertCampaignArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1CampaignInsertCampaign']>,
  postApiV1CampaignInsertSlider: (args: MutationPostApiV1CampaignInsertSliderArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1CampaignInsertSlider']>,
  postApiV1CampaignSearchCampaign: (args: MutationPostApiV1CampaignSearchCampaignArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1CampaignSearchCampaign']>,
  postApiV1CampaignSearchSlider: (args: MutationPostApiV1CampaignSearchSliderArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1CampaignSearchSlider']>,
  postApiV1CampaignSliders: (args: MutationPostApiV1CampaignSlidersArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1CampaignSliders']>,
  postApiV1CarrierGetcarriers: (args: MutationPostApiV1CarrierGetcarriersArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1CarrierGetcarriers']>,
  postApiV1CarrierGetcarriertrackinginfo: (args: MutationPostApiV1CarrierGetcarriertrackinginfoArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1CarrierGetcarriertrackinginfo']>,
  postApiV1CarrierInsertcarrier: (args: MutationPostApiV1CarrierInsertcarrierArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1CarrierInsertcarrier']>,
  postApiV1CarrierInsertcarriertrackinginfo2: (args: MutationPostApiV1CarrierInsertcarriertrackinginfo2Args, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1CarrierInsertcarriertrackinginfo2']>,
  postApiV1CarrierInsertorderdeliverycode: (args: MutationPostApiV1CarrierInsertorderdeliverycodeArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1CarrierInsertorderdeliverycode']>,
  postApiV1CarrierSearchcarrier: (args: MutationPostApiV1CarrierSearchcarrierArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1CarrierSearchcarrier']>,
  postApiV1FileInsertfileasync: (args: MutationPostApiV1FileInsertfileasyncArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1FileInsertfileasync']>,
  postApiV1FileTest: (args: MutationPostApiV1FileTestArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1FileTest']>,
  postApiV1OrderGetcarrierordersbyorderstatus: (args: MutationPostApiV1OrderGetcarrierordersbyorderstatusArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1OrderGetcarrierordersbyorderstatus']>,
  postApiV1OrderInsertorderasync: (args: MutationPostApiV1OrderInsertorderasyncArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1OrderInsertorderasync']>,
  postApiV1OrderSearchorderasync: (args: MutationPostApiV1OrderSearchorderasyncArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1OrderSearchorderasync']>,
  postApiV1OrderUpdateorderasync: (args: MutationPostApiV1OrderUpdateorderasyncArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1OrderUpdateorderasync']>,
  postApiV1OrderUpdateorderstatusasync: (args: MutationPostApiV1OrderUpdateorderstatusasyncArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1OrderUpdateorderstatusasync']>,
  postApiV1ProductGetproductdetails: (args: MutationPostApiV1ProductGetproductdetailsArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1ProductGetproductdetails']>,
  postApiV1ProductGetproductlistbylatlong: (args: MutationPostApiV1ProductGetproductlistbylatlongArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1ProductGetproductlistbylatlong']>,
  postApiV1ProductSearchcategoryasync: (args: MutationPostApiV1ProductSearchcategoryasyncArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1ProductSearchcategoryasync']>,
  postApiV1ProductSearchproductsbylatlong: (args: MutationPostApiV1ProductSearchproductsbylatlongArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['postApiV1ProductSearchproductsbylatlong']>,
  putApiV1AuthenticationSetcurrentuseraddress: (args: MutationPutApiV1AuthenticationSetcurrentuseraddressArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['putApiV1AuthenticationSetcurrentuseraddress']>,
  putApiV1AuthenticationUpdateforgetpasswordrequest: (args: MutationPutApiV1AuthenticationUpdateforgetpasswordrequestArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['putApiV1AuthenticationUpdateforgetpasswordrequest']>,
  putApiV1AuthenticationUpdatepasswordrequest: (args: MutationPutApiV1AuthenticationUpdatepasswordrequestArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['putApiV1AuthenticationUpdatepasswordrequest']>,
  putApiV1AuthenticationUpdateuser: (args: MutationPutApiV1AuthenticationUpdateuserArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['putApiV1AuthenticationUpdateuser']>,
  putApiV1AuthenticationUpdateuseraddress: (args: MutationPutApiV1AuthenticationUpdateuseraddressArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['putApiV1AuthenticationUpdateuseraddress']>,
  putApiV1CampaignUpdateCampaign: (args: MutationPutApiV1CampaignUpdateCampaignArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['putApiV1CampaignUpdateCampaign']>,
  putApiV1CampaignUpdateSlider: (args: MutationPutApiV1CampaignUpdateSliderArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['putApiV1CampaignUpdateSlider']>,
  putApiV1CarrierUpdatecarrier: (args: MutationPutApiV1CarrierUpdatecarrierArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['putApiV1CarrierUpdatecarrier']>,
  putApiV1CarrierUpdatecarriertrackinginfo: (args: MutationPutApiV1CarrierUpdatecarriertrackinginfoArgs, projectionOptions?: ProjectionOptions) => Promise<Mutation['putApiV1CarrierUpdatecarriertrackinginfo']>
};

export type Tarim KrediContext = { 
      Tarim Kredi: { api: Tarim KrediSdk }, 
    };

export type MeshContext = Tarim KrediContext & OriginalMeshContext;