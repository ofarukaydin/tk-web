import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

/** The start of any query */
export type Query = {
  __typename?: 'Query';
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
  __typename?: 'Mutation';
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
  __typename?: 'UserAddressItemResponseDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response7>;
  result?: Maybe<Scalars['Boolean']>;
};

export type OperationResultMessage = {
  __typename?: 'OperationResultMessage';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type Response7 = {
  __typename?: 'Response7';
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
  __typename?: 'UserAddressListResponseDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response6>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response6 = {
  __typename?: 'Response6';
  addressList?: Maybe<Array<Maybe<UserAddressItemResponseDto>>>;
};

export type UserAddressItemResponseDto = {
  __typename?: 'UserAddressItemResponseDTO';
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
  __typename?: 'GetUserDetailsResponseDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response5>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response5 = {
  __typename?: 'Response5';
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
  __typename?: 'BasketInfoDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response9>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response9 = {
  __typename?: 'Response9';
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
  __typename?: 'BasketItemListDTO';
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
  __typename?: 'CampaignResponseDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response10>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response10 = {
  __typename?: 'Response10';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['BigInt']>;
  imageUrl?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SliderResponseDtoOperationResultDto = {
  __typename?: 'SliderResponseDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response12>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response12 = {
  __typename?: 'Response12';
  id?: Maybe<Scalars['BigInt']>;
  imageUrl?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type GetCarrierResponseDtoOperationResultDto = {
  __typename?: 'GetCarrierResponseDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response16>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response16 = {
  __typename?: 'Response16';
  carrierType?: Maybe<Scalars['Int']>;
  fullName?: Maybe<Scalars['String']>;
  merchantId?: Maybe<Scalars['BigInt']>;
  userId?: Maybe<Scalars['BigInt']>;
};

export type Int64OperationResultDto = {
  __typename?: 'Int64OperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Scalars['BigInt']>;
  result?: Maybe<Scalars['Boolean']>;
};

export type MerchantBranchSummaryDtoOperationResultDto = {
  __typename?: 'MerchantBranchSummaryDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response28>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response28 = {
  __typename?: 'Response28';
  delivered?: Maybe<Scalars['Int']>;
  new?: Maybe<Scalars['Int']>;
  preparing?: Maybe<Scalars['Int']>;
  ready?: Maybe<Scalars['Int']>;
  shipping?: Maybe<Scalars['Int']>;
};

export type OrderResponseDtoOperationResultDto = {
  __typename?: 'OrderResponseDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response23>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response23 = {
  __typename?: 'Response23';
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
  __typename?: 'OrderProductItemListDTO';
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
  __typename?: 'GetOrderListResponseDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response24>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response24 = {
  __typename?: 'Response24';
  currentPage?: Maybe<Scalars['Int']>;
  orders?: Maybe<Array<Maybe<OrderResponseDto>>>;
  pageCount?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type OrderResponseDto = {
  __typename?: 'OrderResponseDTO';
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
  __typename?: 'UserActiveOrderDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response26>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response26 = {
  __typename?: 'Response26';
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
  __typename?: 'GetBaseCategoriesResponseDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response33>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response33 = {
  __typename?: 'Response33';
  baseCategories?: Maybe<Array<Maybe<GetCategoryReponseItemDto>>>;
};

export type GetCategoryReponseItemDto = {
  __typename?: 'GetCategoryReponseItemDTO';
  categoryUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
  products?: Maybe<Array<Maybe<GetProductResponseDto>>>;
};

export type GetProductResponseDto = {
  __typename?: 'GetProductResponseDTO';
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
  __typename?: 'ProductFilterResponseDTOPagingOperationDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response31>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response31 = {
  __typename?: 'Response31';
  data?: Maybe<Array<Maybe<ProductFilterResponseDto>>>;
  pageCount?: Maybe<Scalars['Int']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductFilterResponseDto = {
  __typename?: 'ProductFilterResponseDTO';
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
  __typename?: 'ProductFilterItemDTO';
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['BigInt']>;
  productItemId?: Maybe<Scalars['BigInt']>;
  sku?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['Int']>;
};

export enum OrderDir {
  Ascend = 'ASCEND',
  Descend = 'DESCEND'
}

export type ProductItemListDtoPagingOperationDto = {
  __typename?: 'ProductItemListDTOPagingOperationDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response30>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response30 = {
  __typename?: 'Response30';
  data?: Maybe<Array<Maybe<ProductItemListDto>>>;
  pageCount?: Maybe<Scalars['Int']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductItemListDto = {
  __typename?: 'ProductItemListDTO';
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
  __typename?: 'GetSubCategoriesResponseDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response34>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response34 = {
  __typename?: 'Response34';
  subCategories?: Maybe<Array<Maybe<GetCategoryReponseItemDto>>>;
};

export type SubCategoryWithProductsDtoPagingOperationDto = {
  __typename?: 'SubCategoryWithProductsDTOPagingOperationDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response29>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response29 = {
  __typename?: 'Response29';
  data?: Maybe<Array<Maybe<SubCategoryWithProductsDto>>>;
  pageCount?: Maybe<Scalars['Int']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SubCategoryWithProductsDto = {
  __typename?: 'SubCategoryWithProductsDTO';
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
  __typename?: 'OperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  result?: Maybe<Scalars['Boolean']>;
};

export type CreateForgetPasswordRequestDtoInput = {
  phoneNumber?: Maybe<Scalars['String']>;
};

export type InsertUserAddressResponseDtoOperationResultDto = {
  __typename?: 'InsertUserAddressResponseDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response2>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response2 = {
  __typename?: 'Response2';
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
  __typename?: 'RegisterUserResponseDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response4>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response4 = {
  __typename?: 'Response4';
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
  __typename?: 'ValidateUserResponseDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response8>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response8 = {
  __typename?: 'Response8';
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
  __typename?: 'CampaignResponseDTOPagingOperationDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response11>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response11 = {
  __typename?: 'Response11';
  data?: Maybe<Array<Maybe<CampaignResponseDto>>>;
  pageCount?: Maybe<Scalars['Int']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CampaignResponseDto = {
  __typename?: 'CampaignResponseDTO';
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
  __typename?: 'SliderResponseDTOPagingOperationDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response13>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response13 = {
  __typename?: 'Response13';
  data?: Maybe<Array<Maybe<SliderResponseDto>>>;
  pageCount?: Maybe<Scalars['Int']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SliderResponseDto = {
  __typename?: 'SliderResponseDTO';
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
  __typename?: 'GetCarrierResponseDTOPagingOperationDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response17>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response17 = {
  __typename?: 'Response17';
  data?: Maybe<Array<Maybe<GetCarrierResponseDto>>>;
  pageCount?: Maybe<Scalars['Int']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GetCarrierResponseDto = {
  __typename?: 'GetCarrierResponseDTO';
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
  __typename?: 'GetCarrierTrackingInfoResponseDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response20>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response20 = {
  __typename?: 'Response20';
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
  __typename?: 'InsertCarrierResponseDTOOperationResultDTO';
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
  __typename?: 'InsertCarrierTrackingInfoResponseDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response21>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response21 = {
  __typename?: 'Response21';
  carrierId?: Maybe<Scalars['BigInt']>;
  id?: Maybe<Scalars['BigInt']>;
  isMoving?: Maybe<Scalars['Boolean']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  orderId?: Maybe<Scalars['BigInt']>;
};

export type InsertOrderDeliveryCodeResponseDtoOperationResultDto = {
  __typename?: 'InsertOrderDeliveryCodeResponseDTOOperationResultDTO';
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
  __typename?: 'FileResponseDTO';
  dataInfo?: Maybe<DataInfo>;
  header?: Maybe<Header>;
};

export type DataInfo = {
  __typename?: 'DataInfo';
  totalCount?: Maybe<Scalars['Int']>;
};

export type Header = {
  __typename?: 'Header';
  isSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  responseCode?: Maybe<Scalars['String']>;
};

export type FileRequestDtoInput = {
  files?: Maybe<Scalars['String']>;
};

export type CarrierOrderListItemListOperationResultDto = {
  __typename?: 'CarrierOrderListItemListOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Array<Maybe<CarrierOrderListItem>>>;
  result?: Maybe<Scalars['Boolean']>;
};

export type CarrierOrderListItem = {
  __typename?: 'CarrierOrderListItem';
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
  __typename?: 'InsertOrderResponseDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response22>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response22 = {
  __typename?: 'Response22';
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
  __typename?: 'OrderSearchResponseDTOPagingOperationDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response25>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response25 = {
  __typename?: 'Response25';
  data?: Maybe<Array<Maybe<OrderSearchResponseDto>>>;
  pageCount?: Maybe<Scalars['Int']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type OrderSearchResponseDto = {
  __typename?: 'OrderSearchResponseDTO';
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
  __typename?: 'GetProductDetailResponseDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response35>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response35 = {
  __typename?: 'Response35';
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
  __typename?: 'GetCategoryResponseDTOPagingOperationDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response32>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response32 = {
  __typename?: 'Response32';
  data?: Maybe<Array<Maybe<GetCategoryResponseDto>>>;
  pageCount?: Maybe<Scalars['Int']>;
  pageIndex?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type GetCategoryResponseDto = {
  __typename?: 'GetCategoryResponseDTO';
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
  __typename?: 'UpdateUserResponseDTOOperationResultDTO';
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
  __typename?: 'UpdateUserAddressResponseDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response3>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response3 = {
  __typename?: 'Response3';
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
  __typename?: 'UpdateCarrierResponseDTOOperationResultDTO';
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
  __typename?: 'UpdateCarrierTrackingInfoResponseDTOOperationResultDTO';
  messages?: Maybe<Array<Maybe<OperationResultMessage>>>;
  response?: Maybe<Response19>;
  result?: Maybe<Scalars['Boolean']>;
};

export type Response19 = {
  __typename?: 'Response19';
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

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  userTypeId: Scalars['Int'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { postApiV1AuthenticationValidateuser?: Maybe<(
    { __typename?: 'ValidateUserResponseDTOOperationResultDTO' }
    & Pick<ValidateUserResponseDtoOperationResultDto, 'result'>
    & { response?: Maybe<(
      { __typename?: 'Response8' }
      & Pick<Response8, 'id' | 'email' | 'username' | 'addressId' | 'merchantBranchId' | 'name' | 'surname' | 'phoneNumber' | 'refreshToken' | 'token' | 'tokenExpireDate'>
    )>, messages?: Maybe<Array<Maybe<(
      { __typename?: 'OperationResultMessage' }
      & Pick<OperationResultMessage, 'code' | 'message'>
    )>>> }
  )> }
);


export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!, $userTypeId: Int!) {
  postApiV1AuthenticationValidateuser(validateUserRequestDTOInput: {username: $username, password: $password, userTypeId: $userTypeId}) {
    result
    response {
      id
      email
      username
      addressId
      merchantBranchId
      name
      surname
      phoneNumber
      refreshToken
      token
      tokenExpireDate
    }
    messages {
      code
      message
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};