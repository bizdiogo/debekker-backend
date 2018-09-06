import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    clients: <T = Client[]>(args: { where?: ClientWhereInput, orderBy?: ClientOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    communications: <T = Communication[]>(args: { where?: CommunicationWhereInput, orderBy?: CommunicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    events: <T = Event[]>(args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    languages: <T = Language[]>(args: { where?: LanguageWhereInput, orderBy?: LanguageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    offers: <T = Offer[]>(args: { where?: OfferWhereInput, orderBy?: OfferOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    items: <T = Item[]>(args: { where?: ItemWhereInput, orderBy?: ItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clientContacts: <T = ClientContact[]>(args: { where?: ClientContactWhereInput, orderBy?: ClientContactOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    places: <T = Place[]>(args: { where?: PlaceWhereInput, orderBy?: PlaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    budgetLines: <T = BudgetLine[]>(args: { where?: BudgetLineWhereInput, orderBy?: BudgetLineOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    employees: <T = Employee[]>(args: { where?: EmployeeWhereInput, orderBy?: EmployeeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    employeeEstimations: <T = EmployeeEstimation[]>(args: { where?: EmployeeEstimationWhereInput, orderBy?: EmployeeEstimationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    eventTypes: <T = EventType[]>(args: { where?: EventTypeWhereInput, orderBy?: EventTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobs: <T = Job[]>(args: { where?: JobWhereInput, orderBy?: JobOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    placeContacts: <T = PlaceContact[]>(args: { where?: PlaceContactWhereInput, orderBy?: PlaceContactOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sectionItems: <T = SectionItem[]>(args: { where?: SectionItemWhereInput, orderBy?: SectionItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stuffs: <T = Stuff[]>(args: { where?: StuffWhereInput, orderBy?: StuffOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    taxes: <T = Tax[]>(args: { where?: TaxWhereInput, orderBy?: TaxOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    vehicles: <T = Vehicle[]>(args: { where?: VehicleWhereInput, orderBy?: VehicleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    client: <T = Client | null>(args: { where: ClientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    communication: <T = Communication | null>(args: { where: CommunicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    event: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    language: <T = Language | null>(args: { where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    offer: <T = Offer | null>(args: { where: OfferWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    item: <T = Item | null>(args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clientContact: <T = ClientContact | null>(args: { where: ClientContactWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    place: <T = Place | null>(args: { where: PlaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    budgetLine: <T = BudgetLine | null>(args: { where: BudgetLineWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    employee: <T = Employee | null>(args: { where: EmployeeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    employeeEstimation: <T = EmployeeEstimation | null>(args: { where: EmployeeEstimationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    eventType: <T = EventType | null>(args: { where: EventTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    job: <T = Job | null>(args: { where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    placeContact: <T = PlaceContact | null>(args: { where: PlaceContactWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sectionItem: <T = SectionItem | null>(args: { where: SectionItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stuff: <T = Stuff | null>(args: { where: StuffWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tax: <T = Tax | null>(args: { where: TaxWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    vehicle: <T = Vehicle | null>(args: { where: VehicleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clientsConnection: <T = ClientConnection>(args: { where?: ClientWhereInput, orderBy?: ClientOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    communicationsConnection: <T = CommunicationConnection>(args: { where?: CommunicationWhereInput, orderBy?: CommunicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    eventsConnection: <T = EventConnection>(args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    languagesConnection: <T = LanguageConnection>(args: { where?: LanguageWhereInput, orderBy?: LanguageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    offersConnection: <T = OfferConnection>(args: { where?: OfferWhereInput, orderBy?: OfferOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    itemsConnection: <T = ItemConnection>(args: { where?: ItemWhereInput, orderBy?: ItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clientContactsConnection: <T = ClientContactConnection>(args: { where?: ClientContactWhereInput, orderBy?: ClientContactOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    placesConnection: <T = PlaceConnection>(args: { where?: PlaceWhereInput, orderBy?: PlaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    budgetLinesConnection: <T = BudgetLineConnection>(args: { where?: BudgetLineWhereInput, orderBy?: BudgetLineOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    employeesConnection: <T = EmployeeConnection>(args: { where?: EmployeeWhereInput, orderBy?: EmployeeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    employeeEstimationsConnection: <T = EmployeeEstimationConnection>(args: { where?: EmployeeEstimationWhereInput, orderBy?: EmployeeEstimationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    eventTypesConnection: <T = EventTypeConnection>(args: { where?: EventTypeWhereInput, orderBy?: EventTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobsConnection: <T = JobConnection>(args: { where?: JobWhereInput, orderBy?: JobOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    placeContactsConnection: <T = PlaceContactConnection>(args: { where?: PlaceContactWhereInput, orderBy?: PlaceContactOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sectionItemsConnection: <T = SectionItemConnection>(args: { where?: SectionItemWhereInput, orderBy?: SectionItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stuffsConnection: <T = StuffConnection>(args: { where?: StuffWhereInput, orderBy?: StuffOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    taxesConnection: <T = TaxConnection>(args: { where?: TaxWhereInput, orderBy?: TaxOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    vehiclesConnection: <T = VehicleConnection>(args: { where?: VehicleWhereInput, orderBy?: VehicleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createClient: <T = Client>(args: { data: ClientCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCommunication: <T = Communication>(args: { data: CommunicationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEvent: <T = Event>(args: { data: EventCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLanguage: <T = Language>(args: { data: LanguageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOffer: <T = Offer>(args: { data: OfferCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createItem: <T = Item>(args: { data: ItemCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createClientContact: <T = ClientContact>(args: { data: ClientContactCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPlace: <T = Place>(args: { data: PlaceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBudgetLine: <T = BudgetLine>(args: { data: BudgetLineCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEmployee: <T = Employee>(args: { data: EmployeeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEmployeeEstimation: <T = EmployeeEstimation>(args: { data: EmployeeEstimationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEventType: <T = EventType>(args: { data: EventTypeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createJob: <T = Job>(args: { data: JobCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPlaceContact: <T = PlaceContact>(args: { data: PlaceContactCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSectionItem: <T = SectionItem>(args: { data: SectionItemCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createStuff: <T = Stuff>(args: { data: StuffCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTax: <T = Tax>(args: { data: TaxCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createVehicle: <T = Vehicle>(args: { data: VehicleCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateClient: <T = Client | null>(args: { data: ClientUpdateInput, where: ClientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCommunication: <T = Communication | null>(args: { data: CommunicationUpdateInput, where: CommunicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEvent: <T = Event | null>(args: { data: EventUpdateInput, where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLanguage: <T = Language | null>(args: { data: LanguageUpdateInput, where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOffer: <T = Offer | null>(args: { data: OfferUpdateInput, where: OfferWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateItem: <T = Item | null>(args: { data: ItemUpdateInput, where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateClientContact: <T = ClientContact | null>(args: { data: ClientContactUpdateInput, where: ClientContactWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePlace: <T = Place | null>(args: { data: PlaceUpdateInput, where: PlaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBudgetLine: <T = BudgetLine | null>(args: { data: BudgetLineUpdateInput, where: BudgetLineWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEmployee: <T = Employee | null>(args: { data: EmployeeUpdateInput, where: EmployeeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEmployeeEstimation: <T = EmployeeEstimation | null>(args: { data: EmployeeEstimationUpdateInput, where: EmployeeEstimationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEventType: <T = EventType | null>(args: { data: EventTypeUpdateInput, where: EventTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateJob: <T = Job | null>(args: { data: JobUpdateInput, where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePlaceContact: <T = PlaceContact | null>(args: { data: PlaceContactUpdateInput, where: PlaceContactWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSectionItem: <T = SectionItem | null>(args: { data: SectionItemUpdateInput, where: SectionItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateStuff: <T = Stuff | null>(args: { data: StuffUpdateInput, where: StuffWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTax: <T = Tax | null>(args: { data: TaxUpdateInput, where: TaxWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateVehicle: <T = Vehicle | null>(args: { data: VehicleUpdateInput, where: VehicleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteClient: <T = Client | null>(args: { where: ClientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCommunication: <T = Communication | null>(args: { where: CommunicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEvent: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLanguage: <T = Language | null>(args: { where: LanguageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOffer: <T = Offer | null>(args: { where: OfferWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteItem: <T = Item | null>(args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteClientContact: <T = ClientContact | null>(args: { where: ClientContactWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePlace: <T = Place | null>(args: { where: PlaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBudgetLine: <T = BudgetLine | null>(args: { where: BudgetLineWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEmployee: <T = Employee | null>(args: { where: EmployeeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEmployeeEstimation: <T = EmployeeEstimation | null>(args: { where: EmployeeEstimationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEventType: <T = EventType | null>(args: { where: EventTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteJob: <T = Job | null>(args: { where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePlaceContact: <T = PlaceContact | null>(args: { where: PlaceContactWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSectionItem: <T = SectionItem | null>(args: { where: SectionItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteStuff: <T = Stuff | null>(args: { where: StuffWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTax: <T = Tax | null>(args: { where: TaxWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteVehicle: <T = Vehicle | null>(args: { where: VehicleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertClient: <T = Client>(args: { where: ClientWhereUniqueInput, create: ClientCreateInput, update: ClientUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCommunication: <T = Communication>(args: { where: CommunicationWhereUniqueInput, create: CommunicationCreateInput, update: CommunicationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEvent: <T = Event>(args: { where: EventWhereUniqueInput, create: EventCreateInput, update: EventUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLanguage: <T = Language>(args: { where: LanguageWhereUniqueInput, create: LanguageCreateInput, update: LanguageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOffer: <T = Offer>(args: { where: OfferWhereUniqueInput, create: OfferCreateInput, update: OfferUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertItem: <T = Item>(args: { where: ItemWhereUniqueInput, create: ItemCreateInput, update: ItemUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertClientContact: <T = ClientContact>(args: { where: ClientContactWhereUniqueInput, create: ClientContactCreateInput, update: ClientContactUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPlace: <T = Place>(args: { where: PlaceWhereUniqueInput, create: PlaceCreateInput, update: PlaceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBudgetLine: <T = BudgetLine>(args: { where: BudgetLineWhereUniqueInput, create: BudgetLineCreateInput, update: BudgetLineUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEmployee: <T = Employee>(args: { where: EmployeeWhereUniqueInput, create: EmployeeCreateInput, update: EmployeeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEmployeeEstimation: <T = EmployeeEstimation>(args: { where: EmployeeEstimationWhereUniqueInput, create: EmployeeEstimationCreateInput, update: EmployeeEstimationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEventType: <T = EventType>(args: { where: EventTypeWhereUniqueInput, create: EventTypeCreateInput, update: EventTypeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertJob: <T = Job>(args: { where: JobWhereUniqueInput, create: JobCreateInput, update: JobUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPlaceContact: <T = PlaceContact>(args: { where: PlaceContactWhereUniqueInput, create: PlaceContactCreateInput, update: PlaceContactUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSectionItem: <T = SectionItem>(args: { where: SectionItemWhereUniqueInput, create: SectionItemCreateInput, update: SectionItemUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertStuff: <T = Stuff>(args: { where: StuffWhereUniqueInput, create: StuffCreateInput, update: StuffUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTax: <T = Tax>(args: { where: TaxWhereUniqueInput, create: TaxCreateInput, update: TaxUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertVehicle: <T = Vehicle>(args: { where: VehicleWhereUniqueInput, create: VehicleCreateInput, update: VehicleUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyClients: <T = BatchPayload>(args: { data: ClientUpdateInput, where?: ClientWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCommunications: <T = BatchPayload>(args: { data: CommunicationUpdateInput, where?: CommunicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEvents: <T = BatchPayload>(args: { data: EventUpdateInput, where?: EventWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLanguages: <T = BatchPayload>(args: { data: LanguageUpdateInput, where?: LanguageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOffers: <T = BatchPayload>(args: { data: OfferUpdateInput, where?: OfferWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyItems: <T = BatchPayload>(args: { data: ItemUpdateInput, where?: ItemWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyClientContacts: <T = BatchPayload>(args: { data: ClientContactUpdateInput, where?: ClientContactWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPlaces: <T = BatchPayload>(args: { data: PlaceUpdateInput, where?: PlaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBudgetLines: <T = BatchPayload>(args: { data: BudgetLineUpdateInput, where?: BudgetLineWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEmployees: <T = BatchPayload>(args: { data: EmployeeUpdateInput, where?: EmployeeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEmployeeEstimations: <T = BatchPayload>(args: { data: EmployeeEstimationUpdateInput, where?: EmployeeEstimationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEventTypes: <T = BatchPayload>(args: { data: EventTypeUpdateInput, where?: EventTypeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyJobs: <T = BatchPayload>(args: { data: JobUpdateInput, where?: JobWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPlaceContacts: <T = BatchPayload>(args: { data: PlaceContactUpdateInput, where?: PlaceContactWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySectionItems: <T = BatchPayload>(args: { data: SectionItemUpdateInput, where?: SectionItemWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyStuffs: <T = BatchPayload>(args: { data: StuffUpdateInput, where?: StuffWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTaxes: <T = BatchPayload>(args: { data: TaxUpdateInput, where?: TaxWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyVehicles: <T = BatchPayload>(args: { data: VehicleUpdateInput, where?: VehicleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyClients: <T = BatchPayload>(args: { where?: ClientWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCommunications: <T = BatchPayload>(args: { where?: CommunicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEvents: <T = BatchPayload>(args: { where?: EventWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLanguages: <T = BatchPayload>(args: { where?: LanguageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOffers: <T = BatchPayload>(args: { where?: OfferWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyItems: <T = BatchPayload>(args: { where?: ItemWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyClientContacts: <T = BatchPayload>(args: { where?: ClientContactWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPlaces: <T = BatchPayload>(args: { where?: PlaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBudgetLines: <T = BatchPayload>(args: { where?: BudgetLineWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEmployees: <T = BatchPayload>(args: { where?: EmployeeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEmployeeEstimations: <T = BatchPayload>(args: { where?: EmployeeEstimationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEventTypes: <T = BatchPayload>(args: { where?: EventTypeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyJobs: <T = BatchPayload>(args: { where?: JobWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPlaceContacts: <T = BatchPayload>(args: { where?: PlaceContactWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySectionItems: <T = BatchPayload>(args: { where?: SectionItemWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyStuffs: <T = BatchPayload>(args: { where?: StuffWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTaxes: <T = BatchPayload>(args: { where?: TaxWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyVehicles: <T = BatchPayload>(args: { where?: VehicleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    client: <T = ClientSubscriptionPayload | null>(args: { where?: ClientSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    communication: <T = CommunicationSubscriptionPayload | null>(args: { where?: CommunicationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    event: <T = EventSubscriptionPayload | null>(args: { where?: EventSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    language: <T = LanguageSubscriptionPayload | null>(args: { where?: LanguageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    offer: <T = OfferSubscriptionPayload | null>(args: { where?: OfferSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    item: <T = ItemSubscriptionPayload | null>(args: { where?: ItemSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    clientContact: <T = ClientContactSubscriptionPayload | null>(args: { where?: ClientContactSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    place: <T = PlaceSubscriptionPayload | null>(args: { where?: PlaceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    budgetLine: <T = BudgetLineSubscriptionPayload | null>(args: { where?: BudgetLineSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    employee: <T = EmployeeSubscriptionPayload | null>(args: { where?: EmployeeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    employeeEstimation: <T = EmployeeEstimationSubscriptionPayload | null>(args: { where?: EmployeeEstimationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    eventType: <T = EventTypeSubscriptionPayload | null>(args: { where?: EventTypeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    job: <T = JobSubscriptionPayload | null>(args: { where?: JobSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    placeContact: <T = PlaceContactSubscriptionPayload | null>(args: { where?: PlaceContactSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    sectionItem: <T = SectionItemSubscriptionPayload | null>(args: { where?: SectionItemSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    stuff: <T = StuffSubscriptionPayload | null>(args: { where?: StuffSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    tax: <T = TaxSubscriptionPayload | null>(args: { where?: TaxSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    vehicle: <T = VehicleSubscriptionPayload | null>(args: { where?: VehicleSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Client: (where?: ClientWhereInput) => Promise<boolean>
  Communication: (where?: CommunicationWhereInput) => Promise<boolean>
  Event: (where?: EventWhereInput) => Promise<boolean>
  Language: (where?: LanguageWhereInput) => Promise<boolean>
  Offer: (where?: OfferWhereInput) => Promise<boolean>
  Item: (where?: ItemWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  ClientContact: (where?: ClientContactWhereInput) => Promise<boolean>
  Place: (where?: PlaceWhereInput) => Promise<boolean>
  BudgetLine: (where?: BudgetLineWhereInput) => Promise<boolean>
  Employee: (where?: EmployeeWhereInput) => Promise<boolean>
  EmployeeEstimation: (where?: EmployeeEstimationWhereInput) => Promise<boolean>
  EventType: (where?: EventTypeWhereInput) => Promise<boolean>
  Job: (where?: JobWhereInput) => Promise<boolean>
  PlaceContact: (where?: PlaceContactWhereInput) => Promise<boolean>
  SectionItem: (where?: SectionItemWhereInput) => Promise<boolean>
  Stuff: (where?: StuffWhereInput) => Promise<boolean>
  Tax: (where?: TaxWhereInput) => Promise<boolean>
  Vehicle: (where?: VehicleWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateBudgetLine {
  count: Int!
}

type AggregateClient {
  count: Int!
}

type AggregateClientContact {
  count: Int!
}

type AggregateCommunication {
  count: Int!
}

type AggregateEmployee {
  count: Int!
}

type AggregateEmployeeEstimation {
  count: Int!
}

type AggregateEvent {
  count: Int!
}

type AggregateEventType {
  count: Int!
}

type AggregateItem {
  count: Int!
}

type AggregateJob {
  count: Int!
}

type AggregateLanguage {
  count: Int!
}

type AggregateOffer {
  count: Int!
}

type AggregatePlace {
  count: Int!
}

type AggregatePlaceContact {
  count: Int!
}

type AggregateSectionItem {
  count: Int!
}

type AggregateStuff {
  count: Int!
}

type AggregateTax {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVehicle {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type BudgetLine implements Node {
  description: String!
  id: ID!
  offer(where: OfferWhereInput): Offer
  quantity: Int
  tax(where: TaxWhereInput): Tax
  unitPrice: Float
  value: Float!
}

"""A connection to a list of items."""
type BudgetLineConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BudgetLineEdge]!
  aggregate: AggregateBudgetLine!
}

input BudgetLineCreateInput {
  description: String!
  quantity: Int
  unitPrice: Float
  value: Float!
  offer: OfferCreateOneWithoutBudgetLinesInput
  tax: TaxCreateOneWithoutBudgetLinesInput
}

input BudgetLineCreateManyWithoutOfferInput {
  create: [BudgetLineCreateWithoutOfferInput!]
  connect: [BudgetLineWhereUniqueInput!]
}

input BudgetLineCreateManyWithoutTaxInput {
  create: [BudgetLineCreateWithoutTaxInput!]
  connect: [BudgetLineWhereUniqueInput!]
}

input BudgetLineCreateWithoutOfferInput {
  description: String!
  quantity: Int
  unitPrice: Float
  value: Float!
  tax: TaxCreateOneWithoutBudgetLinesInput
}

input BudgetLineCreateWithoutTaxInput {
  description: String!
  quantity: Int
  unitPrice: Float
  value: Float!
  offer: OfferCreateOneWithoutBudgetLinesInput
}

"""An edge in a connection."""
type BudgetLineEdge {
  """The item at the end of the edge."""
  node: BudgetLine!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BudgetLineOrderByInput {
  description_ASC
  description_DESC
  id_ASC
  id_DESC
  quantity_ASC
  quantity_DESC
  unitPrice_ASC
  unitPrice_DESC
  value_ASC
  value_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BudgetLinePreviousValues {
  description: String!
  id: ID!
  quantity: Int
  unitPrice: Float
  value: Float!
}

type BudgetLineSubscriptionPayload {
  mutation: MutationType!
  node: BudgetLine
  updatedFields: [String!]
  previousValues: BudgetLinePreviousValues
}

input BudgetLineSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BudgetLineSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BudgetLineSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BudgetLineSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BudgetLineWhereInput
}

input BudgetLineUpdateInput {
  description: String
  quantity: Int
  unitPrice: Float
  value: Float
  offer: OfferUpdateOneWithoutBudgetLinesInput
  tax: TaxUpdateOneWithoutBudgetLinesInput
}

input BudgetLineUpdateManyWithoutOfferInput {
  create: [BudgetLineCreateWithoutOfferInput!]
  connect: [BudgetLineWhereUniqueInput!]
  disconnect: [BudgetLineWhereUniqueInput!]
  delete: [BudgetLineWhereUniqueInput!]
  update: [BudgetLineUpdateWithWhereUniqueWithoutOfferInput!]
  upsert: [BudgetLineUpsertWithWhereUniqueWithoutOfferInput!]
}

input BudgetLineUpdateManyWithoutTaxInput {
  create: [BudgetLineCreateWithoutTaxInput!]
  connect: [BudgetLineWhereUniqueInput!]
  disconnect: [BudgetLineWhereUniqueInput!]
  delete: [BudgetLineWhereUniqueInput!]
  update: [BudgetLineUpdateWithWhereUniqueWithoutTaxInput!]
  upsert: [BudgetLineUpsertWithWhereUniqueWithoutTaxInput!]
}

input BudgetLineUpdateWithoutOfferDataInput {
  description: String
  quantity: Int
  unitPrice: Float
  value: Float
  tax: TaxUpdateOneWithoutBudgetLinesInput
}

input BudgetLineUpdateWithoutTaxDataInput {
  description: String
  quantity: Int
  unitPrice: Float
  value: Float
  offer: OfferUpdateOneWithoutBudgetLinesInput
}

input BudgetLineUpdateWithWhereUniqueWithoutOfferInput {
  where: BudgetLineWhereUniqueInput!
  data: BudgetLineUpdateWithoutOfferDataInput!
}

input BudgetLineUpdateWithWhereUniqueWithoutTaxInput {
  where: BudgetLineWhereUniqueInput!
  data: BudgetLineUpdateWithoutTaxDataInput!
}

input BudgetLineUpsertWithWhereUniqueWithoutOfferInput {
  where: BudgetLineWhereUniqueInput!
  update: BudgetLineUpdateWithoutOfferDataInput!
  create: BudgetLineCreateWithoutOfferInput!
}

input BudgetLineUpsertWithWhereUniqueWithoutTaxInput {
  where: BudgetLineWhereUniqueInput!
  update: BudgetLineUpdateWithoutTaxDataInput!
  create: BudgetLineCreateWithoutTaxInput!
}

input BudgetLineWhereInput {
  """Logical AND on all given filters."""
  AND: [BudgetLineWhereInput!]

  """Logical OR on all given filters."""
  OR: [BudgetLineWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BudgetLineWhereInput!]
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  quantity: Int

  """All values that are not equal to given value."""
  quantity_not: Int

  """All values that are contained in given list."""
  quantity_in: [Int!]

  """All values that are not contained in given list."""
  quantity_not_in: [Int!]

  """All values less than the given value."""
  quantity_lt: Int

  """All values less than or equal the given value."""
  quantity_lte: Int

  """All values greater than the given value."""
  quantity_gt: Int

  """All values greater than or equal the given value."""
  quantity_gte: Int
  unitPrice: Float

  """All values that are not equal to given value."""
  unitPrice_not: Float

  """All values that are contained in given list."""
  unitPrice_in: [Float!]

  """All values that are not contained in given list."""
  unitPrice_not_in: [Float!]

  """All values less than the given value."""
  unitPrice_lt: Float

  """All values less than or equal the given value."""
  unitPrice_lte: Float

  """All values greater than the given value."""
  unitPrice_gt: Float

  """All values greater than or equal the given value."""
  unitPrice_gte: Float
  value: Float

  """All values that are not equal to given value."""
  value_not: Float

  """All values that are contained in given list."""
  value_in: [Float!]

  """All values that are not contained in given list."""
  value_not_in: [Float!]

  """All values less than the given value."""
  value_lt: Float

  """All values less than or equal the given value."""
  value_lte: Float

  """All values greater than the given value."""
  value_gt: Float

  """All values greater than or equal the given value."""
  value_gte: Float
  offer: OfferWhereInput
  tax: TaxWhereInput
}

input BudgetLineWhereUniqueInput {
  id: ID
}

enum Channel {
  Email
  Phone
  Call
  Message
}

type Client implements Node {
  address: String
  createdAt: DateTime!
  email: String!
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  id: ID!
  name: String!
  offers(where: OfferWhereInput, orderBy: OfferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Offer!]
  phone: String!
  tva: String
  clientContacts(where: ClientContactWhereInput, orderBy: ClientContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClientContact!]
  language(where: LanguageWhereInput): Language
  communications(where: CommunicationWhereInput, orderBy: CommunicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Communication!]
  type: ClientType
}

"""A connection to a list of items."""
type ClientConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ClientEdge]!
  aggregate: AggregateClient!
}

type ClientContact implements Node {
  client(where: ClientWhereInput): Client
  email: String!
  id: ID!
  mobilePhone: String
  name: String!
  phoneNumber: String
  offers(where: OfferWhereInput, orderBy: OfferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Offer!]
}

"""A connection to a list of items."""
type ClientContactConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ClientContactEdge]!
  aggregate: AggregateClientContact!
}

input ClientContactCreateInput {
  email: String!
  mobilePhone: String
  name: String!
  phoneNumber: String
  client: ClientCreateOneWithoutClientContactsInput
  offers: OfferCreateManyWithoutClientContactInput
}

input ClientContactCreateManyWithoutClientInput {
  create: [ClientContactCreateWithoutClientInput!]
  connect: [ClientContactWhereUniqueInput!]
}

input ClientContactCreateOneWithoutOffersInput {
  create: ClientContactCreateWithoutOffersInput
  connect: ClientContactWhereUniqueInput
}

input ClientContactCreateWithoutClientInput {
  email: String!
  mobilePhone: String
  name: String!
  phoneNumber: String
  offers: OfferCreateManyWithoutClientContactInput
}

input ClientContactCreateWithoutOffersInput {
  email: String!
  mobilePhone: String
  name: String!
  phoneNumber: String
  client: ClientCreateOneWithoutClientContactsInput
}

"""An edge in a connection."""
type ClientContactEdge {
  """The item at the end of the edge."""
  node: ClientContact!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ClientContactOrderByInput {
  email_ASC
  email_DESC
  id_ASC
  id_DESC
  mobilePhone_ASC
  mobilePhone_DESC
  name_ASC
  name_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ClientContactPreviousValues {
  email: String!
  id: ID!
  mobilePhone: String
  name: String!
  phoneNumber: String
}

type ClientContactSubscriptionPayload {
  mutation: MutationType!
  node: ClientContact
  updatedFields: [String!]
  previousValues: ClientContactPreviousValues
}

input ClientContactSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ClientContactSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClientContactSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClientContactSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ClientContactWhereInput
}

input ClientContactUpdateInput {
  email: String
  mobilePhone: String
  name: String
  phoneNumber: String
  client: ClientUpdateOneWithoutClientContactsInput
  offers: OfferUpdateManyWithoutClientContactInput
}

input ClientContactUpdateManyWithoutClientInput {
  create: [ClientContactCreateWithoutClientInput!]
  connect: [ClientContactWhereUniqueInput!]
  disconnect: [ClientContactWhereUniqueInput!]
  delete: [ClientContactWhereUniqueInput!]
  update: [ClientContactUpdateWithWhereUniqueWithoutClientInput!]
  upsert: [ClientContactUpsertWithWhereUniqueWithoutClientInput!]
}

input ClientContactUpdateOneWithoutOffersInput {
  create: ClientContactCreateWithoutOffersInput
  connect: ClientContactWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ClientContactUpdateWithoutOffersDataInput
  upsert: ClientContactUpsertWithoutOffersInput
}

input ClientContactUpdateWithoutClientDataInput {
  email: String
  mobilePhone: String
  name: String
  phoneNumber: String
  offers: OfferUpdateManyWithoutClientContactInput
}

input ClientContactUpdateWithoutOffersDataInput {
  email: String
  mobilePhone: String
  name: String
  phoneNumber: String
  client: ClientUpdateOneWithoutClientContactsInput
}

input ClientContactUpdateWithWhereUniqueWithoutClientInput {
  where: ClientContactWhereUniqueInput!
  data: ClientContactUpdateWithoutClientDataInput!
}

input ClientContactUpsertWithoutOffersInput {
  update: ClientContactUpdateWithoutOffersDataInput!
  create: ClientContactCreateWithoutOffersInput!
}

input ClientContactUpsertWithWhereUniqueWithoutClientInput {
  where: ClientContactWhereUniqueInput!
  update: ClientContactUpdateWithoutClientDataInput!
  create: ClientContactCreateWithoutClientInput!
}

input ClientContactWhereInput {
  """Logical AND on all given filters."""
  AND: [ClientContactWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClientContactWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClientContactWhereInput!]
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  mobilePhone: String

  """All values that are not equal to given value."""
  mobilePhone_not: String

  """All values that are contained in given list."""
  mobilePhone_in: [String!]

  """All values that are not contained in given list."""
  mobilePhone_not_in: [String!]

  """All values less than the given value."""
  mobilePhone_lt: String

  """All values less than or equal the given value."""
  mobilePhone_lte: String

  """All values greater than the given value."""
  mobilePhone_gt: String

  """All values greater than or equal the given value."""
  mobilePhone_gte: String

  """All values containing the given string."""
  mobilePhone_contains: String

  """All values not containing the given string."""
  mobilePhone_not_contains: String

  """All values starting with the given string."""
  mobilePhone_starts_with: String

  """All values not starting with the given string."""
  mobilePhone_not_starts_with: String

  """All values ending with the given string."""
  mobilePhone_ends_with: String

  """All values not ending with the given string."""
  mobilePhone_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  phoneNumber: String

  """All values that are not equal to given value."""
  phoneNumber_not: String

  """All values that are contained in given list."""
  phoneNumber_in: [String!]

  """All values that are not contained in given list."""
  phoneNumber_not_in: [String!]

  """All values less than the given value."""
  phoneNumber_lt: String

  """All values less than or equal the given value."""
  phoneNumber_lte: String

  """All values greater than the given value."""
  phoneNumber_gt: String

  """All values greater than or equal the given value."""
  phoneNumber_gte: String

  """All values containing the given string."""
  phoneNumber_contains: String

  """All values not containing the given string."""
  phoneNumber_not_contains: String

  """All values starting with the given string."""
  phoneNumber_starts_with: String

  """All values not starting with the given string."""
  phoneNumber_not_starts_with: String

  """All values ending with the given string."""
  phoneNumber_ends_with: String

  """All values not ending with the given string."""
  phoneNumber_not_ends_with: String
  client: ClientWhereInput
  offers_every: OfferWhereInput
  offers_some: OfferWhereInput
  offers_none: OfferWhereInput
}

input ClientContactWhereUniqueInput {
  id: ID
}

input ClientCreateInput {
  address: String
  email: String!
  name: String!
  phone: String!
  tva: String
  type: ClientType
  events: EventCreateManyWithoutClientInput
  offers: OfferCreateManyWithoutClientInput
  clientContacts: ClientContactCreateManyWithoutClientInput
  language: LanguageCreateOneWithoutClientsInput
  communications: CommunicationCreateManyWithoutClientInput
}

input ClientCreateManyWithoutLanguageInput {
  create: [ClientCreateWithoutLanguageInput!]
  connect: [ClientWhereUniqueInput!]
}

input ClientCreateOneWithoutClientContactsInput {
  create: ClientCreateWithoutClientContactsInput
  connect: ClientWhereUniqueInput
}

input ClientCreateOneWithoutCommunicationsInput {
  create: ClientCreateWithoutCommunicationsInput
  connect: ClientWhereUniqueInput
}

input ClientCreateOneWithoutEventsInput {
  create: ClientCreateWithoutEventsInput
  connect: ClientWhereUniqueInput
}

input ClientCreateOneWithoutOffersInput {
  create: ClientCreateWithoutOffersInput
  connect: ClientWhereUniqueInput
}

input ClientCreateWithoutClientContactsInput {
  address: String
  email: String!
  name: String!
  phone: String!
  tva: String
  type: ClientType
  events: EventCreateManyWithoutClientInput
  offers: OfferCreateManyWithoutClientInput
  language: LanguageCreateOneWithoutClientsInput
  communications: CommunicationCreateManyWithoutClientInput
}

input ClientCreateWithoutCommunicationsInput {
  address: String
  email: String!
  name: String!
  phone: String!
  tva: String
  type: ClientType
  events: EventCreateManyWithoutClientInput
  offers: OfferCreateManyWithoutClientInput
  clientContacts: ClientContactCreateManyWithoutClientInput
  language: LanguageCreateOneWithoutClientsInput
}

input ClientCreateWithoutEventsInput {
  address: String
  email: String!
  name: String!
  phone: String!
  tva: String
  type: ClientType
  offers: OfferCreateManyWithoutClientInput
  clientContacts: ClientContactCreateManyWithoutClientInput
  language: LanguageCreateOneWithoutClientsInput
  communications: CommunicationCreateManyWithoutClientInput
}

input ClientCreateWithoutLanguageInput {
  address: String
  email: String!
  name: String!
  phone: String!
  tva: String
  type: ClientType
  events: EventCreateManyWithoutClientInput
  offers: OfferCreateManyWithoutClientInput
  clientContacts: ClientContactCreateManyWithoutClientInput
  communications: CommunicationCreateManyWithoutClientInput
}

input ClientCreateWithoutOffersInput {
  address: String
  email: String!
  name: String!
  phone: String!
  tva: String
  type: ClientType
  events: EventCreateManyWithoutClientInput
  clientContacts: ClientContactCreateManyWithoutClientInput
  language: LanguageCreateOneWithoutClientsInput
  communications: CommunicationCreateManyWithoutClientInput
}

"""An edge in a connection."""
type ClientEdge {
  """The item at the end of the edge."""
  node: Client!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ClientOrderByInput {
  address_ASC
  address_DESC
  createdAt_ASC
  createdAt_DESC
  email_ASC
  email_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  phone_ASC
  phone_DESC
  tva_ASC
  tva_DESC
  type_ASC
  type_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ClientPreviousValues {
  address: String
  createdAt: DateTime!
  email: String!
  id: ID!
  name: String!
  phone: String!
  tva: String
  type: ClientType
}

type ClientSubscriptionPayload {
  mutation: MutationType!
  node: Client
  updatedFields: [String!]
  previousValues: ClientPreviousValues
}

input ClientSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ClientSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClientSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClientSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ClientWhereInput
}

enum ClientType {
  Prive
  Societe
}

input ClientUpdateInput {
  address: String
  email: String
  name: String
  phone: String
  tva: String
  type: ClientType
  events: EventUpdateManyWithoutClientInput
  offers: OfferUpdateManyWithoutClientInput
  clientContacts: ClientContactUpdateManyWithoutClientInput
  language: LanguageUpdateOneWithoutClientsInput
  communications: CommunicationUpdateManyWithoutClientInput
}

input ClientUpdateManyWithoutLanguageInput {
  create: [ClientCreateWithoutLanguageInput!]
  connect: [ClientWhereUniqueInput!]
  disconnect: [ClientWhereUniqueInput!]
  delete: [ClientWhereUniqueInput!]
  update: [ClientUpdateWithWhereUniqueWithoutLanguageInput!]
  upsert: [ClientUpsertWithWhereUniqueWithoutLanguageInput!]
}

input ClientUpdateOneWithoutClientContactsInput {
  create: ClientCreateWithoutClientContactsInput
  connect: ClientWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ClientUpdateWithoutClientContactsDataInput
  upsert: ClientUpsertWithoutClientContactsInput
}

input ClientUpdateOneWithoutCommunicationsInput {
  create: ClientCreateWithoutCommunicationsInput
  connect: ClientWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ClientUpdateWithoutCommunicationsDataInput
  upsert: ClientUpsertWithoutCommunicationsInput
}

input ClientUpdateOneWithoutEventsInput {
  create: ClientCreateWithoutEventsInput
  connect: ClientWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ClientUpdateWithoutEventsDataInput
  upsert: ClientUpsertWithoutEventsInput
}

input ClientUpdateOneWithoutOffersInput {
  create: ClientCreateWithoutOffersInput
  connect: ClientWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ClientUpdateWithoutOffersDataInput
  upsert: ClientUpsertWithoutOffersInput
}

input ClientUpdateWithoutClientContactsDataInput {
  address: String
  email: String
  name: String
  phone: String
  tva: String
  type: ClientType
  events: EventUpdateManyWithoutClientInput
  offers: OfferUpdateManyWithoutClientInput
  language: LanguageUpdateOneWithoutClientsInput
  communications: CommunicationUpdateManyWithoutClientInput
}

input ClientUpdateWithoutCommunicationsDataInput {
  address: String
  email: String
  name: String
  phone: String
  tva: String
  type: ClientType
  events: EventUpdateManyWithoutClientInput
  offers: OfferUpdateManyWithoutClientInput
  clientContacts: ClientContactUpdateManyWithoutClientInput
  language: LanguageUpdateOneWithoutClientsInput
}

input ClientUpdateWithoutEventsDataInput {
  address: String
  email: String
  name: String
  phone: String
  tva: String
  type: ClientType
  offers: OfferUpdateManyWithoutClientInput
  clientContacts: ClientContactUpdateManyWithoutClientInput
  language: LanguageUpdateOneWithoutClientsInput
  communications: CommunicationUpdateManyWithoutClientInput
}

input ClientUpdateWithoutLanguageDataInput {
  address: String
  email: String
  name: String
  phone: String
  tva: String
  type: ClientType
  events: EventUpdateManyWithoutClientInput
  offers: OfferUpdateManyWithoutClientInput
  clientContacts: ClientContactUpdateManyWithoutClientInput
  communications: CommunicationUpdateManyWithoutClientInput
}

input ClientUpdateWithoutOffersDataInput {
  address: String
  email: String
  name: String
  phone: String
  tva: String
  type: ClientType
  events: EventUpdateManyWithoutClientInput
  clientContacts: ClientContactUpdateManyWithoutClientInput
  language: LanguageUpdateOneWithoutClientsInput
  communications: CommunicationUpdateManyWithoutClientInput
}

input ClientUpdateWithWhereUniqueWithoutLanguageInput {
  where: ClientWhereUniqueInput!
  data: ClientUpdateWithoutLanguageDataInput!
}

input ClientUpsertWithoutClientContactsInput {
  update: ClientUpdateWithoutClientContactsDataInput!
  create: ClientCreateWithoutClientContactsInput!
}

input ClientUpsertWithoutCommunicationsInput {
  update: ClientUpdateWithoutCommunicationsDataInput!
  create: ClientCreateWithoutCommunicationsInput!
}

input ClientUpsertWithoutEventsInput {
  update: ClientUpdateWithoutEventsDataInput!
  create: ClientCreateWithoutEventsInput!
}

input ClientUpsertWithoutOffersInput {
  update: ClientUpdateWithoutOffersDataInput!
  create: ClientCreateWithoutOffersInput!
}

input ClientUpsertWithWhereUniqueWithoutLanguageInput {
  where: ClientWhereUniqueInput!
  update: ClientUpdateWithoutLanguageDataInput!
  create: ClientCreateWithoutLanguageInput!
}

input ClientWhereInput {
  """Logical AND on all given filters."""
  AND: [ClientWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClientWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClientWhereInput!]
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  phone: String

  """All values that are not equal to given value."""
  phone_not: String

  """All values that are contained in given list."""
  phone_in: [String!]

  """All values that are not contained in given list."""
  phone_not_in: [String!]

  """All values less than the given value."""
  phone_lt: String

  """All values less than or equal the given value."""
  phone_lte: String

  """All values greater than the given value."""
  phone_gt: String

  """All values greater than or equal the given value."""
  phone_gte: String

  """All values containing the given string."""
  phone_contains: String

  """All values not containing the given string."""
  phone_not_contains: String

  """All values starting with the given string."""
  phone_starts_with: String

  """All values not starting with the given string."""
  phone_not_starts_with: String

  """All values ending with the given string."""
  phone_ends_with: String

  """All values not ending with the given string."""
  phone_not_ends_with: String
  tva: String

  """All values that are not equal to given value."""
  tva_not: String

  """All values that are contained in given list."""
  tva_in: [String!]

  """All values that are not contained in given list."""
  tva_not_in: [String!]

  """All values less than the given value."""
  tva_lt: String

  """All values less than or equal the given value."""
  tva_lte: String

  """All values greater than the given value."""
  tva_gt: String

  """All values greater than or equal the given value."""
  tva_gte: String

  """All values containing the given string."""
  tva_contains: String

  """All values not containing the given string."""
  tva_not_contains: String

  """All values starting with the given string."""
  tva_starts_with: String

  """All values not starting with the given string."""
  tva_not_starts_with: String

  """All values ending with the given string."""
  tva_ends_with: String

  """All values not ending with the given string."""
  tva_not_ends_with: String
  type: ClientType

  """All values that are not equal to given value."""
  type_not: ClientType

  """All values that are contained in given list."""
  type_in: [ClientType!]

  """All values that are not contained in given list."""
  type_not_in: [ClientType!]
  events_every: EventWhereInput
  events_some: EventWhereInput
  events_none: EventWhereInput
  offers_every: OfferWhereInput
  offers_some: OfferWhereInput
  offers_none: OfferWhereInput
  clientContacts_every: ClientContactWhereInput
  clientContacts_some: ClientContactWhereInput
  clientContacts_none: ClientContactWhereInput
  language: LanguageWhereInput
  communications_every: CommunicationWhereInput
  communications_some: CommunicationWhereInput
  communications_none: CommunicationWhereInput
}

input ClientWhereUniqueInput {
  id: ID
}

type Communication implements Node {
  id: ID!
  message: String!
  subject: String!
  channel: Channel!
  client(where: ClientWhereInput): Client
  date: DateTime!
  gmtOffset: String!
}

"""A connection to a list of items."""
type CommunicationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CommunicationEdge]!
  aggregate: AggregateCommunication!
}

input CommunicationCreateInput {
  message: String!
  subject: String!
  channel: Channel!
  date: DateTime!
  gmtOffset: String!
  client: ClientCreateOneWithoutCommunicationsInput
}

input CommunicationCreateManyWithoutClientInput {
  create: [CommunicationCreateWithoutClientInput!]
  connect: [CommunicationWhereUniqueInput!]
}

input CommunicationCreateWithoutClientInput {
  message: String!
  subject: String!
  channel: Channel!
  date: DateTime!
  gmtOffset: String!
}

"""An edge in a connection."""
type CommunicationEdge {
  """The item at the end of the edge."""
  node: Communication!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CommunicationOrderByInput {
  id_ASC
  id_DESC
  message_ASC
  message_DESC
  subject_ASC
  subject_DESC
  channel_ASC
  channel_DESC
  date_ASC
  date_DESC
  gmtOffset_ASC
  gmtOffset_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CommunicationPreviousValues {
  id: ID!
  message: String!
  subject: String!
  channel: Channel!
  date: DateTime!
  gmtOffset: String!
}

type CommunicationSubscriptionPayload {
  mutation: MutationType!
  node: Communication
  updatedFields: [String!]
  previousValues: CommunicationPreviousValues
}

input CommunicationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CommunicationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommunicationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommunicationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CommunicationWhereInput
}

input CommunicationUpdateInput {
  message: String
  subject: String
  channel: Channel
  date: DateTime
  gmtOffset: String
  client: ClientUpdateOneWithoutCommunicationsInput
}

input CommunicationUpdateManyWithoutClientInput {
  create: [CommunicationCreateWithoutClientInput!]
  connect: [CommunicationWhereUniqueInput!]
  disconnect: [CommunicationWhereUniqueInput!]
  delete: [CommunicationWhereUniqueInput!]
  update: [CommunicationUpdateWithWhereUniqueWithoutClientInput!]
  upsert: [CommunicationUpsertWithWhereUniqueWithoutClientInput!]
}

input CommunicationUpdateWithoutClientDataInput {
  message: String
  subject: String
  channel: Channel
  date: DateTime
  gmtOffset: String
}

input CommunicationUpdateWithWhereUniqueWithoutClientInput {
  where: CommunicationWhereUniqueInput!
  data: CommunicationUpdateWithoutClientDataInput!
}

input CommunicationUpsertWithWhereUniqueWithoutClientInput {
  where: CommunicationWhereUniqueInput!
  update: CommunicationUpdateWithoutClientDataInput!
  create: CommunicationCreateWithoutClientInput!
}

input CommunicationWhereInput {
  """Logical AND on all given filters."""
  AND: [CommunicationWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommunicationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommunicationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  message: String

  """All values that are not equal to given value."""
  message_not: String

  """All values that are contained in given list."""
  message_in: [String!]

  """All values that are not contained in given list."""
  message_not_in: [String!]

  """All values less than the given value."""
  message_lt: String

  """All values less than or equal the given value."""
  message_lte: String

  """All values greater than the given value."""
  message_gt: String

  """All values greater than or equal the given value."""
  message_gte: String

  """All values containing the given string."""
  message_contains: String

  """All values not containing the given string."""
  message_not_contains: String

  """All values starting with the given string."""
  message_starts_with: String

  """All values not starting with the given string."""
  message_not_starts_with: String

  """All values ending with the given string."""
  message_ends_with: String

  """All values not ending with the given string."""
  message_not_ends_with: String
  subject: String

  """All values that are not equal to given value."""
  subject_not: String

  """All values that are contained in given list."""
  subject_in: [String!]

  """All values that are not contained in given list."""
  subject_not_in: [String!]

  """All values less than the given value."""
  subject_lt: String

  """All values less than or equal the given value."""
  subject_lte: String

  """All values greater than the given value."""
  subject_gt: String

  """All values greater than or equal the given value."""
  subject_gte: String

  """All values containing the given string."""
  subject_contains: String

  """All values not containing the given string."""
  subject_not_contains: String

  """All values starting with the given string."""
  subject_starts_with: String

  """All values not starting with the given string."""
  subject_not_starts_with: String

  """All values ending with the given string."""
  subject_ends_with: String

  """All values not ending with the given string."""
  subject_not_ends_with: String
  channel: Channel

  """All values that are not equal to given value."""
  channel_not: Channel

  """All values that are contained in given list."""
  channel_in: [Channel!]

  """All values that are not contained in given list."""
  channel_not_in: [Channel!]
  date: DateTime

  """All values that are not equal to given value."""
  date_not: DateTime

  """All values that are contained in given list."""
  date_in: [DateTime!]

  """All values that are not contained in given list."""
  date_not_in: [DateTime!]

  """All values less than the given value."""
  date_lt: DateTime

  """All values less than or equal the given value."""
  date_lte: DateTime

  """All values greater than the given value."""
  date_gt: DateTime

  """All values greater than or equal the given value."""
  date_gte: DateTime
  gmtOffset: String

  """All values that are not equal to given value."""
  gmtOffset_not: String

  """All values that are contained in given list."""
  gmtOffset_in: [String!]

  """All values that are not contained in given list."""
  gmtOffset_not_in: [String!]

  """All values less than the given value."""
  gmtOffset_lt: String

  """All values less than or equal the given value."""
  gmtOffset_lte: String

  """All values greater than the given value."""
  gmtOffset_gt: String

  """All values greater than or equal the given value."""
  gmtOffset_gte: String

  """All values containing the given string."""
  gmtOffset_contains: String

  """All values not containing the given string."""
  gmtOffset_not_contains: String

  """All values starting with the given string."""
  gmtOffset_starts_with: String

  """All values not starting with the given string."""
  gmtOffset_not_starts_with: String

  """All values ending with the given string."""
  gmtOffset_ends_with: String

  """All values not ending with the given string."""
  gmtOffset_not_ends_with: String
  client: ClientWhereInput
}

input CommunicationWhereUniqueInput {
  id: ID
}

enum Country {
  BE
}

scalar DateTime

type Employee implements Node {
  endedAt: DateTime
  estimatedEndAt: DateTime!
  estimatedStartAt: DateTime!
  event(where: EventWhereInput): Event
  id: ID!
  job(where: JobWhereInput): Job
  startedAt: DateTime
  user(where: UserWhereInput): User
}

"""A connection to a list of items."""
type EmployeeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [EmployeeEdge]!
  aggregate: AggregateEmployee!
}

input EmployeeCreateInput {
  endedAt: DateTime
  estimatedEndAt: DateTime!
  estimatedStartAt: DateTime!
  startedAt: DateTime
  event: EventCreateOneWithoutEmployeesInput
  job: JobCreateOneWithoutEmployeesInput
  user: UserCreateOneWithoutEmployeeInput
}

input EmployeeCreateManyWithoutEventInput {
  create: [EmployeeCreateWithoutEventInput!]
  connect: [EmployeeWhereUniqueInput!]
}

input EmployeeCreateManyWithoutJobInput {
  create: [EmployeeCreateWithoutJobInput!]
  connect: [EmployeeWhereUniqueInput!]
}

input EmployeeCreateOneWithoutUserInput {
  create: EmployeeCreateWithoutUserInput
  connect: EmployeeWhereUniqueInput
}

input EmployeeCreateWithoutEventInput {
  endedAt: DateTime
  estimatedEndAt: DateTime!
  estimatedStartAt: DateTime!
  startedAt: DateTime
  job: JobCreateOneWithoutEmployeesInput
  user: UserCreateOneWithoutEmployeeInput
}

input EmployeeCreateWithoutJobInput {
  endedAt: DateTime
  estimatedEndAt: DateTime!
  estimatedStartAt: DateTime!
  startedAt: DateTime
  event: EventCreateOneWithoutEmployeesInput
  user: UserCreateOneWithoutEmployeeInput
}

input EmployeeCreateWithoutUserInput {
  endedAt: DateTime
  estimatedEndAt: DateTime!
  estimatedStartAt: DateTime!
  startedAt: DateTime
  event: EventCreateOneWithoutEmployeesInput
  job: JobCreateOneWithoutEmployeesInput
}

"""An edge in a connection."""
type EmployeeEdge {
  """The item at the end of the edge."""
  node: Employee!

  """A cursor for use in pagination."""
  cursor: String!
}

type EmployeeEstimation implements Node {
  estimatedEndAt: DateTime!
  estimatedStartAt: DateTime!
  id: ID!
  job(where: JobWhereInput): Job
  number: Int!
  offer(where: OfferWhereInput): Offer
  pricePerHour: Float!
  total: Float!
}

"""A connection to a list of items."""
type EmployeeEstimationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [EmployeeEstimationEdge]!
  aggregate: AggregateEmployeeEstimation!
}

input EmployeeEstimationCreateInput {
  estimatedEndAt: DateTime!
  estimatedStartAt: DateTime!
  number: Int!
  pricePerHour: Float
  total: Float
  job: JobCreateOneWithoutEmployeeEstimationsInput
  offer: OfferCreateOneWithoutEmployeeEstimationsInput
}

input EmployeeEstimationCreateManyWithoutJobInput {
  create: [EmployeeEstimationCreateWithoutJobInput!]
  connect: [EmployeeEstimationWhereUniqueInput!]
}

input EmployeeEstimationCreateManyWithoutOfferInput {
  create: [EmployeeEstimationCreateWithoutOfferInput!]
  connect: [EmployeeEstimationWhereUniqueInput!]
}

input EmployeeEstimationCreateWithoutJobInput {
  estimatedEndAt: DateTime!
  estimatedStartAt: DateTime!
  number: Int!
  pricePerHour: Float
  total: Float
  offer: OfferCreateOneWithoutEmployeeEstimationsInput
}

input EmployeeEstimationCreateWithoutOfferInput {
  estimatedEndAt: DateTime!
  estimatedStartAt: DateTime!
  number: Int!
  pricePerHour: Float
  total: Float
  job: JobCreateOneWithoutEmployeeEstimationsInput
}

"""An edge in a connection."""
type EmployeeEstimationEdge {
  """The item at the end of the edge."""
  node: EmployeeEstimation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum EmployeeEstimationOrderByInput {
  estimatedEndAt_ASC
  estimatedEndAt_DESC
  estimatedStartAt_ASC
  estimatedStartAt_DESC
  id_ASC
  id_DESC
  number_ASC
  number_DESC
  pricePerHour_ASC
  pricePerHour_DESC
  total_ASC
  total_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type EmployeeEstimationPreviousValues {
  estimatedEndAt: DateTime!
  estimatedStartAt: DateTime!
  id: ID!
  number: Int!
  pricePerHour: Float!
  total: Float!
}

type EmployeeEstimationSubscriptionPayload {
  mutation: MutationType!
  node: EmployeeEstimation
  updatedFields: [String!]
  previousValues: EmployeeEstimationPreviousValues
}

input EmployeeEstimationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [EmployeeEstimationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [EmployeeEstimationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EmployeeEstimationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: EmployeeEstimationWhereInput
}

input EmployeeEstimationUpdateInput {
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  number: Int
  pricePerHour: Float
  total: Float
  job: JobUpdateOneWithoutEmployeeEstimationsInput
  offer: OfferUpdateOneWithoutEmployeeEstimationsInput
}

input EmployeeEstimationUpdateManyWithoutJobInput {
  create: [EmployeeEstimationCreateWithoutJobInput!]
  connect: [EmployeeEstimationWhereUniqueInput!]
  disconnect: [EmployeeEstimationWhereUniqueInput!]
  delete: [EmployeeEstimationWhereUniqueInput!]
  update: [EmployeeEstimationUpdateWithWhereUniqueWithoutJobInput!]
  upsert: [EmployeeEstimationUpsertWithWhereUniqueWithoutJobInput!]
}

input EmployeeEstimationUpdateManyWithoutOfferInput {
  create: [EmployeeEstimationCreateWithoutOfferInput!]
  connect: [EmployeeEstimationWhereUniqueInput!]
  disconnect: [EmployeeEstimationWhereUniqueInput!]
  delete: [EmployeeEstimationWhereUniqueInput!]
  update: [EmployeeEstimationUpdateWithWhereUniqueWithoutOfferInput!]
  upsert: [EmployeeEstimationUpsertWithWhereUniqueWithoutOfferInput!]
}

input EmployeeEstimationUpdateWithoutJobDataInput {
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  number: Int
  pricePerHour: Float
  total: Float
  offer: OfferUpdateOneWithoutEmployeeEstimationsInput
}

input EmployeeEstimationUpdateWithoutOfferDataInput {
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  number: Int
  pricePerHour: Float
  total: Float
  job: JobUpdateOneWithoutEmployeeEstimationsInput
}

input EmployeeEstimationUpdateWithWhereUniqueWithoutJobInput {
  where: EmployeeEstimationWhereUniqueInput!
  data: EmployeeEstimationUpdateWithoutJobDataInput!
}

input EmployeeEstimationUpdateWithWhereUniqueWithoutOfferInput {
  where: EmployeeEstimationWhereUniqueInput!
  data: EmployeeEstimationUpdateWithoutOfferDataInput!
}

input EmployeeEstimationUpsertWithWhereUniqueWithoutJobInput {
  where: EmployeeEstimationWhereUniqueInput!
  update: EmployeeEstimationUpdateWithoutJobDataInput!
  create: EmployeeEstimationCreateWithoutJobInput!
}

input EmployeeEstimationUpsertWithWhereUniqueWithoutOfferInput {
  where: EmployeeEstimationWhereUniqueInput!
  update: EmployeeEstimationUpdateWithoutOfferDataInput!
  create: EmployeeEstimationCreateWithoutOfferInput!
}

input EmployeeEstimationWhereInput {
  """Logical AND on all given filters."""
  AND: [EmployeeEstimationWhereInput!]

  """Logical OR on all given filters."""
  OR: [EmployeeEstimationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EmployeeEstimationWhereInput!]
  estimatedEndAt: DateTime

  """All values that are not equal to given value."""
  estimatedEndAt_not: DateTime

  """All values that are contained in given list."""
  estimatedEndAt_in: [DateTime!]

  """All values that are not contained in given list."""
  estimatedEndAt_not_in: [DateTime!]

  """All values less than the given value."""
  estimatedEndAt_lt: DateTime

  """All values less than or equal the given value."""
  estimatedEndAt_lte: DateTime

  """All values greater than the given value."""
  estimatedEndAt_gt: DateTime

  """All values greater than or equal the given value."""
  estimatedEndAt_gte: DateTime
  estimatedStartAt: DateTime

  """All values that are not equal to given value."""
  estimatedStartAt_not: DateTime

  """All values that are contained in given list."""
  estimatedStartAt_in: [DateTime!]

  """All values that are not contained in given list."""
  estimatedStartAt_not_in: [DateTime!]

  """All values less than the given value."""
  estimatedStartAt_lt: DateTime

  """All values less than or equal the given value."""
  estimatedStartAt_lte: DateTime

  """All values greater than the given value."""
  estimatedStartAt_gt: DateTime

  """All values greater than or equal the given value."""
  estimatedStartAt_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  number: Int

  """All values that are not equal to given value."""
  number_not: Int

  """All values that are contained in given list."""
  number_in: [Int!]

  """All values that are not contained in given list."""
  number_not_in: [Int!]

  """All values less than the given value."""
  number_lt: Int

  """All values less than or equal the given value."""
  number_lte: Int

  """All values greater than the given value."""
  number_gt: Int

  """All values greater than or equal the given value."""
  number_gte: Int
  pricePerHour: Float

  """All values that are not equal to given value."""
  pricePerHour_not: Float

  """All values that are contained in given list."""
  pricePerHour_in: [Float!]

  """All values that are not contained in given list."""
  pricePerHour_not_in: [Float!]

  """All values less than the given value."""
  pricePerHour_lt: Float

  """All values less than or equal the given value."""
  pricePerHour_lte: Float

  """All values greater than the given value."""
  pricePerHour_gt: Float

  """All values greater than or equal the given value."""
  pricePerHour_gte: Float
  total: Float

  """All values that are not equal to given value."""
  total_not: Float

  """All values that are contained in given list."""
  total_in: [Float!]

  """All values that are not contained in given list."""
  total_not_in: [Float!]

  """All values less than the given value."""
  total_lt: Float

  """All values less than or equal the given value."""
  total_lte: Float

  """All values greater than the given value."""
  total_gt: Float

  """All values greater than or equal the given value."""
  total_gte: Float
  job: JobWhereInput
  offer: OfferWhereInput
}

input EmployeeEstimationWhereUniqueInput {
  id: ID
}

enum EmployeeOrderByInput {
  endedAt_ASC
  endedAt_DESC
  estimatedEndAt_ASC
  estimatedEndAt_DESC
  estimatedStartAt_ASC
  estimatedStartAt_DESC
  id_ASC
  id_DESC
  startedAt_ASC
  startedAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type EmployeePreviousValues {
  endedAt: DateTime
  estimatedEndAt: DateTime!
  estimatedStartAt: DateTime!
  id: ID!
  startedAt: DateTime
}

type EmployeeSubscriptionPayload {
  mutation: MutationType!
  node: Employee
  updatedFields: [String!]
  previousValues: EmployeePreviousValues
}

input EmployeeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [EmployeeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [EmployeeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EmployeeSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: EmployeeWhereInput
}

input EmployeeUpdateInput {
  endedAt: DateTime
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  startedAt: DateTime
  event: EventUpdateOneWithoutEmployeesInput
  job: JobUpdateOneWithoutEmployeesInput
  user: UserUpdateOneWithoutEmployeeInput
}

input EmployeeUpdateManyWithoutEventInput {
  create: [EmployeeCreateWithoutEventInput!]
  connect: [EmployeeWhereUniqueInput!]
  disconnect: [EmployeeWhereUniqueInput!]
  delete: [EmployeeWhereUniqueInput!]
  update: [EmployeeUpdateWithWhereUniqueWithoutEventInput!]
  upsert: [EmployeeUpsertWithWhereUniqueWithoutEventInput!]
}

input EmployeeUpdateManyWithoutJobInput {
  create: [EmployeeCreateWithoutJobInput!]
  connect: [EmployeeWhereUniqueInput!]
  disconnect: [EmployeeWhereUniqueInput!]
  delete: [EmployeeWhereUniqueInput!]
  update: [EmployeeUpdateWithWhereUniqueWithoutJobInput!]
  upsert: [EmployeeUpsertWithWhereUniqueWithoutJobInput!]
}

input EmployeeUpdateOneWithoutUserInput {
  create: EmployeeCreateWithoutUserInput
  connect: EmployeeWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: EmployeeUpdateWithoutUserDataInput
  upsert: EmployeeUpsertWithoutUserInput
}

input EmployeeUpdateWithoutEventDataInput {
  endedAt: DateTime
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  startedAt: DateTime
  job: JobUpdateOneWithoutEmployeesInput
  user: UserUpdateOneWithoutEmployeeInput
}

input EmployeeUpdateWithoutJobDataInput {
  endedAt: DateTime
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  startedAt: DateTime
  event: EventUpdateOneWithoutEmployeesInput
  user: UserUpdateOneWithoutEmployeeInput
}

input EmployeeUpdateWithoutUserDataInput {
  endedAt: DateTime
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  startedAt: DateTime
  event: EventUpdateOneWithoutEmployeesInput
  job: JobUpdateOneWithoutEmployeesInput
}

input EmployeeUpdateWithWhereUniqueWithoutEventInput {
  where: EmployeeWhereUniqueInput!
  data: EmployeeUpdateWithoutEventDataInput!
}

input EmployeeUpdateWithWhereUniqueWithoutJobInput {
  where: EmployeeWhereUniqueInput!
  data: EmployeeUpdateWithoutJobDataInput!
}

input EmployeeUpsertWithoutUserInput {
  update: EmployeeUpdateWithoutUserDataInput!
  create: EmployeeCreateWithoutUserInput!
}

input EmployeeUpsertWithWhereUniqueWithoutEventInput {
  where: EmployeeWhereUniqueInput!
  update: EmployeeUpdateWithoutEventDataInput!
  create: EmployeeCreateWithoutEventInput!
}

input EmployeeUpsertWithWhereUniqueWithoutJobInput {
  where: EmployeeWhereUniqueInput!
  update: EmployeeUpdateWithoutJobDataInput!
  create: EmployeeCreateWithoutJobInput!
}

input EmployeeWhereInput {
  """Logical AND on all given filters."""
  AND: [EmployeeWhereInput!]

  """Logical OR on all given filters."""
  OR: [EmployeeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EmployeeWhereInput!]
  endedAt: DateTime

  """All values that are not equal to given value."""
  endedAt_not: DateTime

  """All values that are contained in given list."""
  endedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  endedAt_not_in: [DateTime!]

  """All values less than the given value."""
  endedAt_lt: DateTime

  """All values less than or equal the given value."""
  endedAt_lte: DateTime

  """All values greater than the given value."""
  endedAt_gt: DateTime

  """All values greater than or equal the given value."""
  endedAt_gte: DateTime
  estimatedEndAt: DateTime

  """All values that are not equal to given value."""
  estimatedEndAt_not: DateTime

  """All values that are contained in given list."""
  estimatedEndAt_in: [DateTime!]

  """All values that are not contained in given list."""
  estimatedEndAt_not_in: [DateTime!]

  """All values less than the given value."""
  estimatedEndAt_lt: DateTime

  """All values less than or equal the given value."""
  estimatedEndAt_lte: DateTime

  """All values greater than the given value."""
  estimatedEndAt_gt: DateTime

  """All values greater than or equal the given value."""
  estimatedEndAt_gte: DateTime
  estimatedStartAt: DateTime

  """All values that are not equal to given value."""
  estimatedStartAt_not: DateTime

  """All values that are contained in given list."""
  estimatedStartAt_in: [DateTime!]

  """All values that are not contained in given list."""
  estimatedStartAt_not_in: [DateTime!]

  """All values less than the given value."""
  estimatedStartAt_lt: DateTime

  """All values less than or equal the given value."""
  estimatedStartAt_lte: DateTime

  """All values greater than the given value."""
  estimatedStartAt_gt: DateTime

  """All values greater than or equal the given value."""
  estimatedStartAt_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  startedAt: DateTime

  """All values that are not equal to given value."""
  startedAt_not: DateTime

  """All values that are contained in given list."""
  startedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  startedAt_not_in: [DateTime!]

  """All values less than the given value."""
  startedAt_lt: DateTime

  """All values less than or equal the given value."""
  startedAt_lte: DateTime

  """All values greater than the given value."""
  startedAt_gt: DateTime

  """All values greater than or equal the given value."""
  startedAt_gte: DateTime
  event: EventWhereInput
  job: JobWhereInput
  user: UserWhereInput
}

input EmployeeWhereUniqueInput {
  id: ID
}

type Event implements Node {
  client(where: ClientWhereInput): Client
  id: ID!
  offer(where: OfferWhereInput): Offer
  employees(where: EmployeeWhereInput, orderBy: EmployeeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Employee!]
  endTime: DateTime!
  gmtOffset: String!
  startTime: DateTime!
  stuffs(where: StuffWhereInput, orderBy: StuffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stuff!]
  vehicles(where: VehicleWhereInput, orderBy: VehicleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vehicle!]
}

"""A connection to a list of items."""
type EventConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  endTime: DateTime!
  gmtOffset: String!
  startTime: DateTime!
  client: ClientCreateOneWithoutEventsInput
  offer: OfferCreateOneWithoutEventInput
  employees: EmployeeCreateManyWithoutEventInput
  stuffs: StuffCreateManyWithoutEventsInput
  vehicles: VehicleCreateManyWithoutEventsInput
}

input EventCreateManyWithoutClientInput {
  create: [EventCreateWithoutClientInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateManyWithoutStuffsInput {
  create: [EventCreateWithoutStuffsInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateManyWithoutVehiclesInput {
  create: [EventCreateWithoutVehiclesInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateOneWithoutEmployeesInput {
  create: EventCreateWithoutEmployeesInput
  connect: EventWhereUniqueInput
}

input EventCreateOneWithoutOfferInput {
  create: EventCreateWithoutOfferInput
  connect: EventWhereUniqueInput
}

input EventCreateWithoutClientInput {
  endTime: DateTime!
  gmtOffset: String!
  startTime: DateTime!
  offer: OfferCreateOneWithoutEventInput
  employees: EmployeeCreateManyWithoutEventInput
  stuffs: StuffCreateManyWithoutEventsInput
  vehicles: VehicleCreateManyWithoutEventsInput
}

input EventCreateWithoutEmployeesInput {
  endTime: DateTime!
  gmtOffset: String!
  startTime: DateTime!
  client: ClientCreateOneWithoutEventsInput
  offer: OfferCreateOneWithoutEventInput
  stuffs: StuffCreateManyWithoutEventsInput
  vehicles: VehicleCreateManyWithoutEventsInput
}

input EventCreateWithoutOfferInput {
  endTime: DateTime!
  gmtOffset: String!
  startTime: DateTime!
  client: ClientCreateOneWithoutEventsInput
  employees: EmployeeCreateManyWithoutEventInput
  stuffs: StuffCreateManyWithoutEventsInput
  vehicles: VehicleCreateManyWithoutEventsInput
}

input EventCreateWithoutStuffsInput {
  endTime: DateTime!
  gmtOffset: String!
  startTime: DateTime!
  client: ClientCreateOneWithoutEventsInput
  offer: OfferCreateOneWithoutEventInput
  employees: EmployeeCreateManyWithoutEventInput
  vehicles: VehicleCreateManyWithoutEventsInput
}

input EventCreateWithoutVehiclesInput {
  endTime: DateTime!
  gmtOffset: String!
  startTime: DateTime!
  client: ClientCreateOneWithoutEventsInput
  offer: OfferCreateOneWithoutEventInput
  employees: EmployeeCreateManyWithoutEventInput
  stuffs: StuffCreateManyWithoutEventsInput
}

"""An edge in a connection."""
type EventEdge {
  """The item at the end of the edge."""
  node: Event!

  """A cursor for use in pagination."""
  cursor: String!
}

enum EventOrderByInput {
  id_ASC
  id_DESC
  endTime_ASC
  endTime_DESC
  gmtOffset_ASC
  gmtOffset_DESC
  startTime_ASC
  startTime_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type EventPreviousValues {
  id: ID!
  endTime: DateTime!
  gmtOffset: String!
  startTime: DateTime!
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [EventSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [EventSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EventSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: EventWhereInput
}

type EventType implements Node {
  id: ID!
  name: String!
  offers(where: OfferWhereInput, orderBy: OfferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Offer!]
}

"""A connection to a list of items."""
type EventTypeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [EventTypeEdge]!
  aggregate: AggregateEventType!
}

input EventTypeCreateInput {
  name: String!
  offers: OfferCreateManyWithoutEventTypeInput
}

input EventTypeCreateOneWithoutOffersInput {
  create: EventTypeCreateWithoutOffersInput
  connect: EventTypeWhereUniqueInput
}

input EventTypeCreateWithoutOffersInput {
  name: String!
}

"""An edge in a connection."""
type EventTypeEdge {
  """The item at the end of the edge."""
  node: EventType!

  """A cursor for use in pagination."""
  cursor: String!
}

enum EventTypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type EventTypePreviousValues {
  id: ID!
  name: String!
}

type EventTypeSubscriptionPayload {
  mutation: MutationType!
  node: EventType
  updatedFields: [String!]
  previousValues: EventTypePreviousValues
}

input EventTypeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [EventTypeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [EventTypeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EventTypeSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: EventTypeWhereInput
}

input EventTypeUpdateInput {
  name: String
  offers: OfferUpdateManyWithoutEventTypeInput
}

input EventTypeUpdateOneWithoutOffersInput {
  create: EventTypeCreateWithoutOffersInput
  connect: EventTypeWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: EventTypeUpdateWithoutOffersDataInput
  upsert: EventTypeUpsertWithoutOffersInput
}

input EventTypeUpdateWithoutOffersDataInput {
  name: String
}

input EventTypeUpsertWithoutOffersInput {
  update: EventTypeUpdateWithoutOffersDataInput!
  create: EventTypeCreateWithoutOffersInput!
}

input EventTypeWhereInput {
  """Logical AND on all given filters."""
  AND: [EventTypeWhereInput!]

  """Logical OR on all given filters."""
  OR: [EventTypeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EventTypeWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  offers_every: OfferWhereInput
  offers_some: OfferWhereInput
  offers_none: OfferWhereInput
}

input EventTypeWhereUniqueInput {
  id: ID
}

input EventUpdateInput {
  endTime: DateTime
  gmtOffset: String
  startTime: DateTime
  client: ClientUpdateOneWithoutEventsInput
  offer: OfferUpdateOneWithoutEventInput
  employees: EmployeeUpdateManyWithoutEventInput
  stuffs: StuffUpdateManyWithoutEventsInput
  vehicles: VehicleUpdateManyWithoutEventsInput
}

input EventUpdateManyWithoutClientInput {
  create: [EventCreateWithoutClientInput!]
  connect: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  delete: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutClientInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutClientInput!]
}

input EventUpdateManyWithoutStuffsInput {
  create: [EventCreateWithoutStuffsInput!]
  connect: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  delete: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutStuffsInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutStuffsInput!]
}

input EventUpdateManyWithoutVehiclesInput {
  create: [EventCreateWithoutVehiclesInput!]
  connect: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  delete: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutVehiclesInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutVehiclesInput!]
}

input EventUpdateOneWithoutEmployeesInput {
  create: EventCreateWithoutEmployeesInput
  connect: EventWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: EventUpdateWithoutEmployeesDataInput
  upsert: EventUpsertWithoutEmployeesInput
}

input EventUpdateOneWithoutOfferInput {
  create: EventCreateWithoutOfferInput
  connect: EventWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: EventUpdateWithoutOfferDataInput
  upsert: EventUpsertWithoutOfferInput
}

input EventUpdateWithoutClientDataInput {
  endTime: DateTime
  gmtOffset: String
  startTime: DateTime
  offer: OfferUpdateOneWithoutEventInput
  employees: EmployeeUpdateManyWithoutEventInput
  stuffs: StuffUpdateManyWithoutEventsInput
  vehicles: VehicleUpdateManyWithoutEventsInput
}

input EventUpdateWithoutEmployeesDataInput {
  endTime: DateTime
  gmtOffset: String
  startTime: DateTime
  client: ClientUpdateOneWithoutEventsInput
  offer: OfferUpdateOneWithoutEventInput
  stuffs: StuffUpdateManyWithoutEventsInput
  vehicles: VehicleUpdateManyWithoutEventsInput
}

input EventUpdateWithoutOfferDataInput {
  endTime: DateTime
  gmtOffset: String
  startTime: DateTime
  client: ClientUpdateOneWithoutEventsInput
  employees: EmployeeUpdateManyWithoutEventInput
  stuffs: StuffUpdateManyWithoutEventsInput
  vehicles: VehicleUpdateManyWithoutEventsInput
}

input EventUpdateWithoutStuffsDataInput {
  endTime: DateTime
  gmtOffset: String
  startTime: DateTime
  client: ClientUpdateOneWithoutEventsInput
  offer: OfferUpdateOneWithoutEventInput
  employees: EmployeeUpdateManyWithoutEventInput
  vehicles: VehicleUpdateManyWithoutEventsInput
}

input EventUpdateWithoutVehiclesDataInput {
  endTime: DateTime
  gmtOffset: String
  startTime: DateTime
  client: ClientUpdateOneWithoutEventsInput
  offer: OfferUpdateOneWithoutEventInput
  employees: EmployeeUpdateManyWithoutEventInput
  stuffs: StuffUpdateManyWithoutEventsInput
}

input EventUpdateWithWhereUniqueWithoutClientInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutClientDataInput!
}

input EventUpdateWithWhereUniqueWithoutStuffsInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutStuffsDataInput!
}

input EventUpdateWithWhereUniqueWithoutVehiclesInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutVehiclesDataInput!
}

input EventUpsertWithoutEmployeesInput {
  update: EventUpdateWithoutEmployeesDataInput!
  create: EventCreateWithoutEmployeesInput!
}

input EventUpsertWithoutOfferInput {
  update: EventUpdateWithoutOfferDataInput!
  create: EventCreateWithoutOfferInput!
}

input EventUpsertWithWhereUniqueWithoutClientInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutClientDataInput!
  create: EventCreateWithoutClientInput!
}

input EventUpsertWithWhereUniqueWithoutStuffsInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutStuffsDataInput!
  create: EventCreateWithoutStuffsInput!
}

input EventUpsertWithWhereUniqueWithoutVehiclesInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutVehiclesDataInput!
  create: EventCreateWithoutVehiclesInput!
}

input EventWhereInput {
  """Logical AND on all given filters."""
  AND: [EventWhereInput!]

  """Logical OR on all given filters."""
  OR: [EventWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EventWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  endTime: DateTime

  """All values that are not equal to given value."""
  endTime_not: DateTime

  """All values that are contained in given list."""
  endTime_in: [DateTime!]

  """All values that are not contained in given list."""
  endTime_not_in: [DateTime!]

  """All values less than the given value."""
  endTime_lt: DateTime

  """All values less than or equal the given value."""
  endTime_lte: DateTime

  """All values greater than the given value."""
  endTime_gt: DateTime

  """All values greater than or equal the given value."""
  endTime_gte: DateTime
  gmtOffset: String

  """All values that are not equal to given value."""
  gmtOffset_not: String

  """All values that are contained in given list."""
  gmtOffset_in: [String!]

  """All values that are not contained in given list."""
  gmtOffset_not_in: [String!]

  """All values less than the given value."""
  gmtOffset_lt: String

  """All values less than or equal the given value."""
  gmtOffset_lte: String

  """All values greater than the given value."""
  gmtOffset_gt: String

  """All values greater than or equal the given value."""
  gmtOffset_gte: String

  """All values containing the given string."""
  gmtOffset_contains: String

  """All values not containing the given string."""
  gmtOffset_not_contains: String

  """All values starting with the given string."""
  gmtOffset_starts_with: String

  """All values not starting with the given string."""
  gmtOffset_not_starts_with: String

  """All values ending with the given string."""
  gmtOffset_ends_with: String

  """All values not ending with the given string."""
  gmtOffset_not_ends_with: String
  startTime: DateTime

  """All values that are not equal to given value."""
  startTime_not: DateTime

  """All values that are contained in given list."""
  startTime_in: [DateTime!]

  """All values that are not contained in given list."""
  startTime_not_in: [DateTime!]

  """All values less than the given value."""
  startTime_lt: DateTime

  """All values less than or equal the given value."""
  startTime_lte: DateTime

  """All values greater than the given value."""
  startTime_gt: DateTime

  """All values greater than or equal the given value."""
  startTime_gte: DateTime
  client: ClientWhereInput
  offer: OfferWhereInput
  employees_every: EmployeeWhereInput
  employees_some: EmployeeWhereInput
  employees_none: EmployeeWhereInput
  stuffs_every: StuffWhereInput
  stuffs_some: StuffWhereInput
  stuffs_none: StuffWhereInput
  vehicles_every: VehicleWhereInput
  vehicles_some: VehicleWhereInput
  vehicles_none: VehicleWhereInput
}

input EventWhereUniqueInput {
  id: ID
}

type Item implements Node {
  description: String!
  id: ID!
  name: String!
  internalDescription: String
  language(where: LanguageWhereInput): Language
  sectionItems(where: SectionItemWhereInput, orderBy: SectionItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SectionItem!]
}

"""A connection to a list of items."""
type ItemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  description: String!
  name: String!
  internalDescription: String
  language: LanguageCreateOneWithoutItemsInput
  sectionItems: SectionItemCreateManyWithoutItemsInput
}

input ItemCreateManyWithoutLanguageInput {
  create: [ItemCreateWithoutLanguageInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateManyWithoutSectionItemsInput {
  create: [ItemCreateWithoutSectionItemsInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateWithoutLanguageInput {
  description: String!
  name: String!
  internalDescription: String
  sectionItems: SectionItemCreateManyWithoutItemsInput
}

input ItemCreateWithoutSectionItemsInput {
  description: String!
  name: String!
  internalDescription: String
  language: LanguageCreateOneWithoutItemsInput
}

"""An edge in a connection."""
type ItemEdge {
  """The item at the end of the edge."""
  node: Item!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ItemOrderByInput {
  description_ASC
  description_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  internalDescription_ASC
  internalDescription_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ItemPreviousValues {
  description: String!
  id: ID!
  name: String!
  internalDescription: String
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
}

input ItemUpdateInput {
  description: String
  name: String
  internalDescription: String
  language: LanguageUpdateOneWithoutItemsInput
  sectionItems: SectionItemUpdateManyWithoutItemsInput
}

input ItemUpdateManyWithoutLanguageInput {
  create: [ItemCreateWithoutLanguageInput!]
  connect: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  delete: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithWhereUniqueWithoutLanguageInput!]
  upsert: [ItemUpsertWithWhereUniqueWithoutLanguageInput!]
}

input ItemUpdateManyWithoutSectionItemsInput {
  create: [ItemCreateWithoutSectionItemsInput!]
  connect: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  delete: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithWhereUniqueWithoutSectionItemsInput!]
  upsert: [ItemUpsertWithWhereUniqueWithoutSectionItemsInput!]
}

input ItemUpdateWithoutLanguageDataInput {
  description: String
  name: String
  internalDescription: String
  sectionItems: SectionItemUpdateManyWithoutItemsInput
}

input ItemUpdateWithoutSectionItemsDataInput {
  description: String
  name: String
  internalDescription: String
  language: LanguageUpdateOneWithoutItemsInput
}

input ItemUpdateWithWhereUniqueWithoutLanguageInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateWithoutLanguageDataInput!
}

input ItemUpdateWithWhereUniqueWithoutSectionItemsInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateWithoutSectionItemsDataInput!
}

input ItemUpsertWithWhereUniqueWithoutLanguageInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateWithoutLanguageDataInput!
  create: ItemCreateWithoutLanguageInput!
}

input ItemUpsertWithWhereUniqueWithoutSectionItemsInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateWithoutSectionItemsDataInput!
  create: ItemCreateWithoutSectionItemsInput!
}

input ItemWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemWhereInput!]
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  internalDescription: String

  """All values that are not equal to given value."""
  internalDescription_not: String

  """All values that are contained in given list."""
  internalDescription_in: [String!]

  """All values that are not contained in given list."""
  internalDescription_not_in: [String!]

  """All values less than the given value."""
  internalDescription_lt: String

  """All values less than or equal the given value."""
  internalDescription_lte: String

  """All values greater than the given value."""
  internalDescription_gt: String

  """All values greater than or equal the given value."""
  internalDescription_gte: String

  """All values containing the given string."""
  internalDescription_contains: String

  """All values not containing the given string."""
  internalDescription_not_contains: String

  """All values starting with the given string."""
  internalDescription_starts_with: String

  """All values not starting with the given string."""
  internalDescription_not_starts_with: String

  """All values ending with the given string."""
  internalDescription_ends_with: String

  """All values not ending with the given string."""
  internalDescription_not_ends_with: String
  language: LanguageWhereInput
  sectionItems_every: SectionItemWhereInput
  sectionItems_some: SectionItemWhereInput
  sectionItems_none: SectionItemWhereInput
}

input ItemWhereUniqueInput {
  id: ID
}

type Job implements Node {
  employeeEstimations(where: EmployeeEstimationWhereInput, orderBy: EmployeeEstimationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EmployeeEstimation!]
  employees(where: EmployeeWhereInput, orderBy: EmployeeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Employee!]
  id: ID!
  name: String!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

"""A connection to a list of items."""
type JobConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [JobEdge]!
  aggregate: AggregateJob!
}

input JobCreateInput {
  name: String!
  employeeEstimations: EmployeeEstimationCreateManyWithoutJobInput
  employees: EmployeeCreateManyWithoutJobInput
  users: UserCreateManyWithoutJobsInput
}

input JobCreateManyWithoutUsersInput {
  create: [JobCreateWithoutUsersInput!]
  connect: [JobWhereUniqueInput!]
}

input JobCreateOneWithoutEmployeeEstimationsInput {
  create: JobCreateWithoutEmployeeEstimationsInput
  connect: JobWhereUniqueInput
}

input JobCreateOneWithoutEmployeesInput {
  create: JobCreateWithoutEmployeesInput
  connect: JobWhereUniqueInput
}

input JobCreateWithoutEmployeeEstimationsInput {
  name: String!
  employees: EmployeeCreateManyWithoutJobInput
  users: UserCreateManyWithoutJobsInput
}

input JobCreateWithoutEmployeesInput {
  name: String!
  employeeEstimations: EmployeeEstimationCreateManyWithoutJobInput
  users: UserCreateManyWithoutJobsInput
}

input JobCreateWithoutUsersInput {
  name: String!
  employeeEstimations: EmployeeEstimationCreateManyWithoutJobInput
  employees: EmployeeCreateManyWithoutJobInput
}

"""An edge in a connection."""
type JobEdge {
  """The item at the end of the edge."""
  node: Job!

  """A cursor for use in pagination."""
  cursor: String!
}

enum JobOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type JobPreviousValues {
  id: ID!
  name: String!
}

type JobSubscriptionPayload {
  mutation: MutationType!
  node: Job
  updatedFields: [String!]
  previousValues: JobPreviousValues
}

input JobSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [JobSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [JobSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [JobSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: JobWhereInput
}

input JobUpdateInput {
  name: String
  employeeEstimations: EmployeeEstimationUpdateManyWithoutJobInput
  employees: EmployeeUpdateManyWithoutJobInput
  users: UserUpdateManyWithoutJobsInput
}

input JobUpdateManyWithoutUsersInput {
  create: [JobCreateWithoutUsersInput!]
  connect: [JobWhereUniqueInput!]
  disconnect: [JobWhereUniqueInput!]
  delete: [JobWhereUniqueInput!]
  update: [JobUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [JobUpsertWithWhereUniqueWithoutUsersInput!]
}

input JobUpdateOneWithoutEmployeeEstimationsInput {
  create: JobCreateWithoutEmployeeEstimationsInput
  connect: JobWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: JobUpdateWithoutEmployeeEstimationsDataInput
  upsert: JobUpsertWithoutEmployeeEstimationsInput
}

input JobUpdateOneWithoutEmployeesInput {
  create: JobCreateWithoutEmployeesInput
  connect: JobWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: JobUpdateWithoutEmployeesDataInput
  upsert: JobUpsertWithoutEmployeesInput
}

input JobUpdateWithoutEmployeeEstimationsDataInput {
  name: String
  employees: EmployeeUpdateManyWithoutJobInput
  users: UserUpdateManyWithoutJobsInput
}

input JobUpdateWithoutEmployeesDataInput {
  name: String
  employeeEstimations: EmployeeEstimationUpdateManyWithoutJobInput
  users: UserUpdateManyWithoutJobsInput
}

input JobUpdateWithoutUsersDataInput {
  name: String
  employeeEstimations: EmployeeEstimationUpdateManyWithoutJobInput
  employees: EmployeeUpdateManyWithoutJobInput
}

input JobUpdateWithWhereUniqueWithoutUsersInput {
  where: JobWhereUniqueInput!
  data: JobUpdateWithoutUsersDataInput!
}

input JobUpsertWithoutEmployeeEstimationsInput {
  update: JobUpdateWithoutEmployeeEstimationsDataInput!
  create: JobCreateWithoutEmployeeEstimationsInput!
}

input JobUpsertWithoutEmployeesInput {
  update: JobUpdateWithoutEmployeesDataInput!
  create: JobCreateWithoutEmployeesInput!
}

input JobUpsertWithWhereUniqueWithoutUsersInput {
  where: JobWhereUniqueInput!
  update: JobUpdateWithoutUsersDataInput!
  create: JobCreateWithoutUsersInput!
}

input JobWhereInput {
  """Logical AND on all given filters."""
  AND: [JobWhereInput!]

  """Logical OR on all given filters."""
  OR: [JobWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [JobWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  employeeEstimations_every: EmployeeEstimationWhereInput
  employeeEstimations_some: EmployeeEstimationWhereInput
  employeeEstimations_none: EmployeeEstimationWhereInput
  employees_every: EmployeeWhereInput
  employees_some: EmployeeWhereInput
  employees_none: EmployeeWhereInput
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
}

input JobWhereUniqueInput {
  id: ID
}

type Language implements Node {
  id: ID!
  type: LanguageEnum!
  clients(where: ClientWhereInput, orderBy: ClientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Client!]
  offers(where: OfferWhereInput, orderBy: OfferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Offer!]
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

"""A connection to a list of items."""
type LanguageConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LanguageEdge]!
  aggregate: AggregateLanguage!
}

input LanguageCreateInput {
  type: LanguageEnum!
  clients: ClientCreateManyWithoutLanguageInput
  offers: OfferCreateManyWithoutLanguageInput
  items: ItemCreateManyWithoutLanguageInput
  users: UserCreateManyWithoutLanguageInput
}

input LanguageCreateOneWithoutClientsInput {
  create: LanguageCreateWithoutClientsInput
  connect: LanguageWhereUniqueInput
}

input LanguageCreateOneWithoutItemsInput {
  create: LanguageCreateWithoutItemsInput
  connect: LanguageWhereUniqueInput
}

input LanguageCreateOneWithoutOffersInput {
  create: LanguageCreateWithoutOffersInput
  connect: LanguageWhereUniqueInput
}

input LanguageCreateOneWithoutUsersInput {
  create: LanguageCreateWithoutUsersInput
  connect: LanguageWhereUniqueInput
}

input LanguageCreateWithoutClientsInput {
  type: LanguageEnum!
  offers: OfferCreateManyWithoutLanguageInput
  items: ItemCreateManyWithoutLanguageInput
  users: UserCreateManyWithoutLanguageInput
}

input LanguageCreateWithoutItemsInput {
  type: LanguageEnum!
  clients: ClientCreateManyWithoutLanguageInput
  offers: OfferCreateManyWithoutLanguageInput
  users: UserCreateManyWithoutLanguageInput
}

input LanguageCreateWithoutOffersInput {
  type: LanguageEnum!
  clients: ClientCreateManyWithoutLanguageInput
  items: ItemCreateManyWithoutLanguageInput
  users: UserCreateManyWithoutLanguageInput
}

input LanguageCreateWithoutUsersInput {
  type: LanguageEnum!
  clients: ClientCreateManyWithoutLanguageInput
  offers: OfferCreateManyWithoutLanguageInput
  items: ItemCreateManyWithoutLanguageInput
}

"""An edge in a connection."""
type LanguageEdge {
  """The item at the end of the edge."""
  node: Language!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LanguageEnum {
  FR
  NL
  EN
}

enum LanguageOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LanguagePreviousValues {
  id: ID!
  type: LanguageEnum!
}

type LanguageSubscriptionPayload {
  mutation: MutationType!
  node: Language
  updatedFields: [String!]
  previousValues: LanguagePreviousValues
}

input LanguageSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LanguageSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LanguageSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LanguageSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LanguageWhereInput
}

input LanguageUpdateInput {
  type: LanguageEnum
  clients: ClientUpdateManyWithoutLanguageInput
  offers: OfferUpdateManyWithoutLanguageInput
  items: ItemUpdateManyWithoutLanguageInput
  users: UserUpdateManyWithoutLanguageInput
}

input LanguageUpdateOneWithoutClientsInput {
  create: LanguageCreateWithoutClientsInput
  connect: LanguageWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LanguageUpdateWithoutClientsDataInput
  upsert: LanguageUpsertWithoutClientsInput
}

input LanguageUpdateOneWithoutItemsInput {
  create: LanguageCreateWithoutItemsInput
  connect: LanguageWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LanguageUpdateWithoutItemsDataInput
  upsert: LanguageUpsertWithoutItemsInput
}

input LanguageUpdateOneWithoutOffersInput {
  create: LanguageCreateWithoutOffersInput
  connect: LanguageWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LanguageUpdateWithoutOffersDataInput
  upsert: LanguageUpsertWithoutOffersInput
}

input LanguageUpdateOneWithoutUsersInput {
  create: LanguageCreateWithoutUsersInput
  connect: LanguageWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LanguageUpdateWithoutUsersDataInput
  upsert: LanguageUpsertWithoutUsersInput
}

input LanguageUpdateWithoutClientsDataInput {
  type: LanguageEnum
  offers: OfferUpdateManyWithoutLanguageInput
  items: ItemUpdateManyWithoutLanguageInput
  users: UserUpdateManyWithoutLanguageInput
}

input LanguageUpdateWithoutItemsDataInput {
  type: LanguageEnum
  clients: ClientUpdateManyWithoutLanguageInput
  offers: OfferUpdateManyWithoutLanguageInput
  users: UserUpdateManyWithoutLanguageInput
}

input LanguageUpdateWithoutOffersDataInput {
  type: LanguageEnum
  clients: ClientUpdateManyWithoutLanguageInput
  items: ItemUpdateManyWithoutLanguageInput
  users: UserUpdateManyWithoutLanguageInput
}

input LanguageUpdateWithoutUsersDataInput {
  type: LanguageEnum
  clients: ClientUpdateManyWithoutLanguageInput
  offers: OfferUpdateManyWithoutLanguageInput
  items: ItemUpdateManyWithoutLanguageInput
}

input LanguageUpsertWithoutClientsInput {
  update: LanguageUpdateWithoutClientsDataInput!
  create: LanguageCreateWithoutClientsInput!
}

input LanguageUpsertWithoutItemsInput {
  update: LanguageUpdateWithoutItemsDataInput!
  create: LanguageCreateWithoutItemsInput!
}

input LanguageUpsertWithoutOffersInput {
  update: LanguageUpdateWithoutOffersDataInput!
  create: LanguageCreateWithoutOffersInput!
}

input LanguageUpsertWithoutUsersInput {
  update: LanguageUpdateWithoutUsersDataInput!
  create: LanguageCreateWithoutUsersInput!
}

input LanguageWhereInput {
  """Logical AND on all given filters."""
  AND: [LanguageWhereInput!]

  """Logical OR on all given filters."""
  OR: [LanguageWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LanguageWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  type: LanguageEnum

  """All values that are not equal to given value."""
  type_not: LanguageEnum

  """All values that are contained in given list."""
  type_in: [LanguageEnum!]

  """All values that are not contained in given list."""
  type_not_in: [LanguageEnum!]
  clients_every: ClientWhereInput
  clients_some: ClientWhereInput
  clients_none: ClientWhereInput
  offers_every: OfferWhereInput
  offers_some: OfferWhereInput
  offers_none: OfferWhereInput
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
}

input LanguageWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createClient(data: ClientCreateInput!): Client!
  createCommunication(data: CommunicationCreateInput!): Communication!
  createEvent(data: EventCreateInput!): Event!
  createLanguage(data: LanguageCreateInput!): Language!
  createOffer(data: OfferCreateInput!): Offer!
  createItem(data: ItemCreateInput!): Item!
  createUser(data: UserCreateInput!): User!
  createClientContact(data: ClientContactCreateInput!): ClientContact!
  createPlace(data: PlaceCreateInput!): Place!
  createBudgetLine(data: BudgetLineCreateInput!): BudgetLine!
  createEmployee(data: EmployeeCreateInput!): Employee!
  createEmployeeEstimation(data: EmployeeEstimationCreateInput!): EmployeeEstimation!
  createEventType(data: EventTypeCreateInput!): EventType!
  createJob(data: JobCreateInput!): Job!
  createPlaceContact(data: PlaceContactCreateInput!): PlaceContact!
  createSectionItem(data: SectionItemCreateInput!): SectionItem!
  createStuff(data: StuffCreateInput!): Stuff!
  createTax(data: TaxCreateInput!): Tax!
  createVehicle(data: VehicleCreateInput!): Vehicle!
  updateClient(data: ClientUpdateInput!, where: ClientWhereUniqueInput!): Client
  updateCommunication(data: CommunicationUpdateInput!, where: CommunicationWhereUniqueInput!): Communication
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateLanguage(data: LanguageUpdateInput!, where: LanguageWhereUniqueInput!): Language
  updateOffer(data: OfferUpdateInput!, where: OfferWhereUniqueInput!): Offer
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateClientContact(data: ClientContactUpdateInput!, where: ClientContactWhereUniqueInput!): ClientContact
  updatePlace(data: PlaceUpdateInput!, where: PlaceWhereUniqueInput!): Place
  updateBudgetLine(data: BudgetLineUpdateInput!, where: BudgetLineWhereUniqueInput!): BudgetLine
  updateEmployee(data: EmployeeUpdateInput!, where: EmployeeWhereUniqueInput!): Employee
  updateEmployeeEstimation(data: EmployeeEstimationUpdateInput!, where: EmployeeEstimationWhereUniqueInput!): EmployeeEstimation
  updateEventType(data: EventTypeUpdateInput!, where: EventTypeWhereUniqueInput!): EventType
  updateJob(data: JobUpdateInput!, where: JobWhereUniqueInput!): Job
  updatePlaceContact(data: PlaceContactUpdateInput!, where: PlaceContactWhereUniqueInput!): PlaceContact
  updateSectionItem(data: SectionItemUpdateInput!, where: SectionItemWhereUniqueInput!): SectionItem
  updateStuff(data: StuffUpdateInput!, where: StuffWhereUniqueInput!): Stuff
  updateTax(data: TaxUpdateInput!, where: TaxWhereUniqueInput!): Tax
  updateVehicle(data: VehicleUpdateInput!, where: VehicleWhereUniqueInput!): Vehicle
  deleteClient(where: ClientWhereUniqueInput!): Client
  deleteCommunication(where: CommunicationWhereUniqueInput!): Communication
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteLanguage(where: LanguageWhereUniqueInput!): Language
  deleteOffer(where: OfferWhereUniqueInput!): Offer
  deleteItem(where: ItemWhereUniqueInput!): Item
  deleteUser(where: UserWhereUniqueInput!): User
  deleteClientContact(where: ClientContactWhereUniqueInput!): ClientContact
  deletePlace(where: PlaceWhereUniqueInput!): Place
  deleteBudgetLine(where: BudgetLineWhereUniqueInput!): BudgetLine
  deleteEmployee(where: EmployeeWhereUniqueInput!): Employee
  deleteEmployeeEstimation(where: EmployeeEstimationWhereUniqueInput!): EmployeeEstimation
  deleteEventType(where: EventTypeWhereUniqueInput!): EventType
  deleteJob(where: JobWhereUniqueInput!): Job
  deletePlaceContact(where: PlaceContactWhereUniqueInput!): PlaceContact
  deleteSectionItem(where: SectionItemWhereUniqueInput!): SectionItem
  deleteStuff(where: StuffWhereUniqueInput!): Stuff
  deleteTax(where: TaxWhereUniqueInput!): Tax
  deleteVehicle(where: VehicleWhereUniqueInput!): Vehicle
  upsertClient(where: ClientWhereUniqueInput!, create: ClientCreateInput!, update: ClientUpdateInput!): Client!
  upsertCommunication(where: CommunicationWhereUniqueInput!, create: CommunicationCreateInput!, update: CommunicationUpdateInput!): Communication!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  upsertLanguage(where: LanguageWhereUniqueInput!, create: LanguageCreateInput!, update: LanguageUpdateInput!): Language!
  upsertOffer(where: OfferWhereUniqueInput!, create: OfferCreateInput!, update: OfferUpdateInput!): Offer!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertClientContact(where: ClientContactWhereUniqueInput!, create: ClientContactCreateInput!, update: ClientContactUpdateInput!): ClientContact!
  upsertPlace(where: PlaceWhereUniqueInput!, create: PlaceCreateInput!, update: PlaceUpdateInput!): Place!
  upsertBudgetLine(where: BudgetLineWhereUniqueInput!, create: BudgetLineCreateInput!, update: BudgetLineUpdateInput!): BudgetLine!
  upsertEmployee(where: EmployeeWhereUniqueInput!, create: EmployeeCreateInput!, update: EmployeeUpdateInput!): Employee!
  upsertEmployeeEstimation(where: EmployeeEstimationWhereUniqueInput!, create: EmployeeEstimationCreateInput!, update: EmployeeEstimationUpdateInput!): EmployeeEstimation!
  upsertEventType(where: EventTypeWhereUniqueInput!, create: EventTypeCreateInput!, update: EventTypeUpdateInput!): EventType!
  upsertJob(where: JobWhereUniqueInput!, create: JobCreateInput!, update: JobUpdateInput!): Job!
  upsertPlaceContact(where: PlaceContactWhereUniqueInput!, create: PlaceContactCreateInput!, update: PlaceContactUpdateInput!): PlaceContact!
  upsertSectionItem(where: SectionItemWhereUniqueInput!, create: SectionItemCreateInput!, update: SectionItemUpdateInput!): SectionItem!
  upsertStuff(where: StuffWhereUniqueInput!, create: StuffCreateInput!, update: StuffUpdateInput!): Stuff!
  upsertTax(where: TaxWhereUniqueInput!, create: TaxCreateInput!, update: TaxUpdateInput!): Tax!
  upsertVehicle(where: VehicleWhereUniqueInput!, create: VehicleCreateInput!, update: VehicleUpdateInput!): Vehicle!
  updateManyClients(data: ClientUpdateInput!, where: ClientWhereInput): BatchPayload!
  updateManyCommunications(data: CommunicationUpdateInput!, where: CommunicationWhereInput): BatchPayload!
  updateManyEvents(data: EventUpdateInput!, where: EventWhereInput): BatchPayload!
  updateManyLanguages(data: LanguageUpdateInput!, where: LanguageWhereInput): BatchPayload!
  updateManyOffers(data: OfferUpdateInput!, where: OfferWhereInput): BatchPayload!
  updateManyItems(data: ItemUpdateInput!, where: ItemWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyClientContacts(data: ClientContactUpdateInput!, where: ClientContactWhereInput): BatchPayload!
  updateManyPlaces(data: PlaceUpdateInput!, where: PlaceWhereInput): BatchPayload!
  updateManyBudgetLines(data: BudgetLineUpdateInput!, where: BudgetLineWhereInput): BatchPayload!
  updateManyEmployees(data: EmployeeUpdateInput!, where: EmployeeWhereInput): BatchPayload!
  updateManyEmployeeEstimations(data: EmployeeEstimationUpdateInput!, where: EmployeeEstimationWhereInput): BatchPayload!
  updateManyEventTypes(data: EventTypeUpdateInput!, where: EventTypeWhereInput): BatchPayload!
  updateManyJobs(data: JobUpdateInput!, where: JobWhereInput): BatchPayload!
  updateManyPlaceContacts(data: PlaceContactUpdateInput!, where: PlaceContactWhereInput): BatchPayload!
  updateManySectionItems(data: SectionItemUpdateInput!, where: SectionItemWhereInput): BatchPayload!
  updateManyStuffs(data: StuffUpdateInput!, where: StuffWhereInput): BatchPayload!
  updateManyTaxes(data: TaxUpdateInput!, where: TaxWhereInput): BatchPayload!
  updateManyVehicles(data: VehicleUpdateInput!, where: VehicleWhereInput): BatchPayload!
  deleteManyClients(where: ClientWhereInput): BatchPayload!
  deleteManyCommunications(where: CommunicationWhereInput): BatchPayload!
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  deleteManyLanguages(where: LanguageWhereInput): BatchPayload!
  deleteManyOffers(where: OfferWhereInput): BatchPayload!
  deleteManyItems(where: ItemWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyClientContacts(where: ClientContactWhereInput): BatchPayload!
  deleteManyPlaces(where: PlaceWhereInput): BatchPayload!
  deleteManyBudgetLines(where: BudgetLineWhereInput): BatchPayload!
  deleteManyEmployees(where: EmployeeWhereInput): BatchPayload!
  deleteManyEmployeeEstimations(where: EmployeeEstimationWhereInput): BatchPayload!
  deleteManyEventTypes(where: EventTypeWhereInput): BatchPayload!
  deleteManyJobs(where: JobWhereInput): BatchPayload!
  deleteManyPlaceContacts(where: PlaceContactWhereInput): BatchPayload!
  deleteManySectionItems(where: SectionItemWhereInput): BatchPayload!
  deleteManyStuffs(where: StuffWhereInput): BatchPayload!
  deleteManyTaxes(where: TaxWhereInput): BatchPayload!
  deleteManyVehicles(where: VehicleWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Offer implements Node {
  version: Int
  client(where: ClientWhereInput): Client
  createdAt: DateTime!
  customMessage: String
  event(where: EventWhereInput): Event
  id: ID!
  status: StatusOffer!
  language(where: LanguageWhereInput): Language
  address: String!
  budgetLines(where: BudgetLineWhereInput, orderBy: BudgetLineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BudgetLine!]
  city: String!
  clientContact(where: ClientContactWhereInput): ClientContact
  employeeEstimations(where: EmployeeEstimationWhereInput, orderBy: EmployeeEstimationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EmployeeEstimation!]
  endTime: DateTime
  eventType(where: EventTypeWhereInput): EventType
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  place(where: PlaceWhereInput): Place
  postalCode: String!
  sectionItems(where: SectionItemWhereInput, orderBy: SectionItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SectionItem!]
  startTime: DateTime
}

"""A connection to a list of items."""
type OfferConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OfferEdge]!
  aggregate: AggregateOffer!
}

input OfferCreateInput {
  version: Int
  customMessage: String
  status: StatusOffer!
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  startTime: DateTime
  client: ClientCreateOneWithoutOffersInput
  event: EventCreateOneWithoutOfferInput
  language: LanguageCreateOneWithoutOffersInput
  budgetLines: BudgetLineCreateManyWithoutOfferInput
  clientContact: ClientContactCreateOneWithoutOffersInput
  employeeEstimations: EmployeeEstimationCreateManyWithoutOfferInput
  eventType: EventTypeCreateOneWithoutOffersInput
  place: PlaceCreateOneWithoutOfferInput
  sectionItems: SectionItemCreateManyWithoutOfferInput
}

input OfferCreateManyWithoutClientContactInput {
  create: [OfferCreateWithoutClientContactInput!]
  connect: [OfferWhereUniqueInput!]
}

input OfferCreateManyWithoutClientInput {
  create: [OfferCreateWithoutClientInput!]
  connect: [OfferWhereUniqueInput!]
}

input OfferCreateManyWithoutEventTypeInput {
  create: [OfferCreateWithoutEventTypeInput!]
  connect: [OfferWhereUniqueInput!]
}

input OfferCreateManyWithoutLanguageInput {
  create: [OfferCreateWithoutLanguageInput!]
  connect: [OfferWhereUniqueInput!]
}

input OfferCreateOneWithoutBudgetLinesInput {
  create: OfferCreateWithoutBudgetLinesInput
  connect: OfferWhereUniqueInput
}

input OfferCreateOneWithoutEmployeeEstimationsInput {
  create: OfferCreateWithoutEmployeeEstimationsInput
  connect: OfferWhereUniqueInput
}

input OfferCreateOneWithoutEventInput {
  create: OfferCreateWithoutEventInput
  connect: OfferWhereUniqueInput
}

input OfferCreateOneWithoutPlaceInput {
  create: OfferCreateWithoutPlaceInput
  connect: OfferWhereUniqueInput
}

input OfferCreateOneWithoutSectionItemsInput {
  create: OfferCreateWithoutSectionItemsInput
  connect: OfferWhereUniqueInput
}

input OfferCreateWithoutBudgetLinesInput {
  version: Int
  customMessage: String
  status: StatusOffer!
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  startTime: DateTime
  client: ClientCreateOneWithoutOffersInput
  event: EventCreateOneWithoutOfferInput
  language: LanguageCreateOneWithoutOffersInput
  clientContact: ClientContactCreateOneWithoutOffersInput
  employeeEstimations: EmployeeEstimationCreateManyWithoutOfferInput
  eventType: EventTypeCreateOneWithoutOffersInput
  place: PlaceCreateOneWithoutOfferInput
  sectionItems: SectionItemCreateManyWithoutOfferInput
}

input OfferCreateWithoutClientContactInput {
  version: Int
  customMessage: String
  status: StatusOffer!
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  startTime: DateTime
  client: ClientCreateOneWithoutOffersInput
  event: EventCreateOneWithoutOfferInput
  language: LanguageCreateOneWithoutOffersInput
  budgetLines: BudgetLineCreateManyWithoutOfferInput
  employeeEstimations: EmployeeEstimationCreateManyWithoutOfferInput
  eventType: EventTypeCreateOneWithoutOffersInput
  place: PlaceCreateOneWithoutOfferInput
  sectionItems: SectionItemCreateManyWithoutOfferInput
}

input OfferCreateWithoutClientInput {
  version: Int
  customMessage: String
  status: StatusOffer!
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  startTime: DateTime
  event: EventCreateOneWithoutOfferInput
  language: LanguageCreateOneWithoutOffersInput
  budgetLines: BudgetLineCreateManyWithoutOfferInput
  clientContact: ClientContactCreateOneWithoutOffersInput
  employeeEstimations: EmployeeEstimationCreateManyWithoutOfferInput
  eventType: EventTypeCreateOneWithoutOffersInput
  place: PlaceCreateOneWithoutOfferInput
  sectionItems: SectionItemCreateManyWithoutOfferInput
}

input OfferCreateWithoutEmployeeEstimationsInput {
  version: Int
  customMessage: String
  status: StatusOffer!
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  startTime: DateTime
  client: ClientCreateOneWithoutOffersInput
  event: EventCreateOneWithoutOfferInput
  language: LanguageCreateOneWithoutOffersInput
  budgetLines: BudgetLineCreateManyWithoutOfferInput
  clientContact: ClientContactCreateOneWithoutOffersInput
  eventType: EventTypeCreateOneWithoutOffersInput
  place: PlaceCreateOneWithoutOfferInput
  sectionItems: SectionItemCreateManyWithoutOfferInput
}

input OfferCreateWithoutEventInput {
  version: Int
  customMessage: String
  status: StatusOffer!
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  startTime: DateTime
  client: ClientCreateOneWithoutOffersInput
  language: LanguageCreateOneWithoutOffersInput
  budgetLines: BudgetLineCreateManyWithoutOfferInput
  clientContact: ClientContactCreateOneWithoutOffersInput
  employeeEstimations: EmployeeEstimationCreateManyWithoutOfferInput
  eventType: EventTypeCreateOneWithoutOffersInput
  place: PlaceCreateOneWithoutOfferInput
  sectionItems: SectionItemCreateManyWithoutOfferInput
}

input OfferCreateWithoutEventTypeInput {
  version: Int
  customMessage: String
  status: StatusOffer!
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  startTime: DateTime
  client: ClientCreateOneWithoutOffersInput
  event: EventCreateOneWithoutOfferInput
  language: LanguageCreateOneWithoutOffersInput
  budgetLines: BudgetLineCreateManyWithoutOfferInput
  clientContact: ClientContactCreateOneWithoutOffersInput
  employeeEstimations: EmployeeEstimationCreateManyWithoutOfferInput
  place: PlaceCreateOneWithoutOfferInput
  sectionItems: SectionItemCreateManyWithoutOfferInput
}

input OfferCreateWithoutLanguageInput {
  version: Int
  customMessage: String
  status: StatusOffer!
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  startTime: DateTime
  client: ClientCreateOneWithoutOffersInput
  event: EventCreateOneWithoutOfferInput
  budgetLines: BudgetLineCreateManyWithoutOfferInput
  clientContact: ClientContactCreateOneWithoutOffersInput
  employeeEstimations: EmployeeEstimationCreateManyWithoutOfferInput
  eventType: EventTypeCreateOneWithoutOffersInput
  place: PlaceCreateOneWithoutOfferInput
  sectionItems: SectionItemCreateManyWithoutOfferInput
}

input OfferCreateWithoutPlaceInput {
  version: Int
  customMessage: String
  status: StatusOffer!
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  startTime: DateTime
  client: ClientCreateOneWithoutOffersInput
  event: EventCreateOneWithoutOfferInput
  language: LanguageCreateOneWithoutOffersInput
  budgetLines: BudgetLineCreateManyWithoutOfferInput
  clientContact: ClientContactCreateOneWithoutOffersInput
  employeeEstimations: EmployeeEstimationCreateManyWithoutOfferInput
  eventType: EventTypeCreateOneWithoutOffersInput
  sectionItems: SectionItemCreateManyWithoutOfferInput
}

input OfferCreateWithoutSectionItemsInput {
  version: Int
  customMessage: String
  status: StatusOffer!
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  startTime: DateTime
  client: ClientCreateOneWithoutOffersInput
  event: EventCreateOneWithoutOfferInput
  language: LanguageCreateOneWithoutOffersInput
  budgetLines: BudgetLineCreateManyWithoutOfferInput
  clientContact: ClientContactCreateOneWithoutOffersInput
  employeeEstimations: EmployeeEstimationCreateManyWithoutOfferInput
  eventType: EventTypeCreateOneWithoutOffersInput
  place: PlaceCreateOneWithoutOfferInput
}

"""An edge in a connection."""
type OfferEdge {
  """The item at the end of the edge."""
  node: Offer!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OfferOrderByInput {
  version_ASC
  version_DESC
  createdAt_ASC
  createdAt_DESC
  customMessage_ASC
  customMessage_DESC
  id_ASC
  id_DESC
  status_ASC
  status_DESC
  address_ASC
  address_DESC
  city_ASC
  city_DESC
  endTime_ASC
  endTime_DESC
  gmtOffset_ASC
  gmtOffset_DESC
  maxPersons_ASC
  maxPersons_DESC
  minPersons_ASC
  minPersons_DESC
  name_ASC
  name_DESC
  postalCode_ASC
  postalCode_DESC
  startTime_ASC
  startTime_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OfferPreviousValues {
  version: Int
  createdAt: DateTime!
  customMessage: String
  id: ID!
  status: StatusOffer!
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  startTime: DateTime
}

type OfferSubscriptionPayload {
  mutation: MutationType!
  node: Offer
  updatedFields: [String!]
  previousValues: OfferPreviousValues
}

input OfferSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OfferSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OfferSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OfferSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: OfferWhereInput
}

input OfferUpdateInput {
  version: Int
  customMessage: String
  status: StatusOffer
  address: String
  city: String
  endTime: DateTime
  gmtOffset: String
  maxPersons: Int
  minPersons: Int
  name: String
  postalCode: String
  startTime: DateTime
  client: ClientUpdateOneWithoutOffersInput
  event: EventUpdateOneWithoutOfferInput
  language: LanguageUpdateOneWithoutOffersInput
  budgetLines: BudgetLineUpdateManyWithoutOfferInput
  clientContact: ClientContactUpdateOneWithoutOffersInput
  employeeEstimations: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType: EventTypeUpdateOneWithoutOffersInput
  place: PlaceUpdateOneWithoutOfferInput
  sectionItems: SectionItemUpdateManyWithoutOfferInput
}

input OfferUpdateManyWithoutClientContactInput {
  create: [OfferCreateWithoutClientContactInput!]
  connect: [OfferWhereUniqueInput!]
  disconnect: [OfferWhereUniqueInput!]
  delete: [OfferWhereUniqueInput!]
  update: [OfferUpdateWithWhereUniqueWithoutClientContactInput!]
  upsert: [OfferUpsertWithWhereUniqueWithoutClientContactInput!]
}

input OfferUpdateManyWithoutClientInput {
  create: [OfferCreateWithoutClientInput!]
  connect: [OfferWhereUniqueInput!]
  disconnect: [OfferWhereUniqueInput!]
  delete: [OfferWhereUniqueInput!]
  update: [OfferUpdateWithWhereUniqueWithoutClientInput!]
  upsert: [OfferUpsertWithWhereUniqueWithoutClientInput!]
}

input OfferUpdateManyWithoutEventTypeInput {
  create: [OfferCreateWithoutEventTypeInput!]
  connect: [OfferWhereUniqueInput!]
  disconnect: [OfferWhereUniqueInput!]
  delete: [OfferWhereUniqueInput!]
  update: [OfferUpdateWithWhereUniqueWithoutEventTypeInput!]
  upsert: [OfferUpsertWithWhereUniqueWithoutEventTypeInput!]
}

input OfferUpdateManyWithoutLanguageInput {
  create: [OfferCreateWithoutLanguageInput!]
  connect: [OfferWhereUniqueInput!]
  disconnect: [OfferWhereUniqueInput!]
  delete: [OfferWhereUniqueInput!]
  update: [OfferUpdateWithWhereUniqueWithoutLanguageInput!]
  upsert: [OfferUpsertWithWhereUniqueWithoutLanguageInput!]
}

input OfferUpdateOneWithoutBudgetLinesInput {
  create: OfferCreateWithoutBudgetLinesInput
  connect: OfferWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: OfferUpdateWithoutBudgetLinesDataInput
  upsert: OfferUpsertWithoutBudgetLinesInput
}

input OfferUpdateOneWithoutEmployeeEstimationsInput {
  create: OfferCreateWithoutEmployeeEstimationsInput
  connect: OfferWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: OfferUpdateWithoutEmployeeEstimationsDataInput
  upsert: OfferUpsertWithoutEmployeeEstimationsInput
}

input OfferUpdateOneWithoutEventInput {
  create: OfferCreateWithoutEventInput
  connect: OfferWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: OfferUpdateWithoutEventDataInput
  upsert: OfferUpsertWithoutEventInput
}

input OfferUpdateOneWithoutPlaceInput {
  create: OfferCreateWithoutPlaceInput
  connect: OfferWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: OfferUpdateWithoutPlaceDataInput
  upsert: OfferUpsertWithoutPlaceInput
}

input OfferUpdateOneWithoutSectionItemsInput {
  create: OfferCreateWithoutSectionItemsInput
  connect: OfferWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: OfferUpdateWithoutSectionItemsDataInput
  upsert: OfferUpsertWithoutSectionItemsInput
}

input OfferUpdateWithoutBudgetLinesDataInput {
  version: Int
  customMessage: String
  status: StatusOffer
  address: String
  city: String
  endTime: DateTime
  gmtOffset: String
  maxPersons: Int
  minPersons: Int
  name: String
  postalCode: String
  startTime: DateTime
  client: ClientUpdateOneWithoutOffersInput
  event: EventUpdateOneWithoutOfferInput
  language: LanguageUpdateOneWithoutOffersInput
  clientContact: ClientContactUpdateOneWithoutOffersInput
  employeeEstimations: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType: EventTypeUpdateOneWithoutOffersInput
  place: PlaceUpdateOneWithoutOfferInput
  sectionItems: SectionItemUpdateManyWithoutOfferInput
}

input OfferUpdateWithoutClientContactDataInput {
  version: Int
  customMessage: String
  status: StatusOffer
  address: String
  city: String
  endTime: DateTime
  gmtOffset: String
  maxPersons: Int
  minPersons: Int
  name: String
  postalCode: String
  startTime: DateTime
  client: ClientUpdateOneWithoutOffersInput
  event: EventUpdateOneWithoutOfferInput
  language: LanguageUpdateOneWithoutOffersInput
  budgetLines: BudgetLineUpdateManyWithoutOfferInput
  employeeEstimations: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType: EventTypeUpdateOneWithoutOffersInput
  place: PlaceUpdateOneWithoutOfferInput
  sectionItems: SectionItemUpdateManyWithoutOfferInput
}

input OfferUpdateWithoutClientDataInput {
  version: Int
  customMessage: String
  status: StatusOffer
  address: String
  city: String
  endTime: DateTime
  gmtOffset: String
  maxPersons: Int
  minPersons: Int
  name: String
  postalCode: String
  startTime: DateTime
  event: EventUpdateOneWithoutOfferInput
  language: LanguageUpdateOneWithoutOffersInput
  budgetLines: BudgetLineUpdateManyWithoutOfferInput
  clientContact: ClientContactUpdateOneWithoutOffersInput
  employeeEstimations: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType: EventTypeUpdateOneWithoutOffersInput
  place: PlaceUpdateOneWithoutOfferInput
  sectionItems: SectionItemUpdateManyWithoutOfferInput
}

input OfferUpdateWithoutEmployeeEstimationsDataInput {
  version: Int
  customMessage: String
  status: StatusOffer
  address: String
  city: String
  endTime: DateTime
  gmtOffset: String
  maxPersons: Int
  minPersons: Int
  name: String
  postalCode: String
  startTime: DateTime
  client: ClientUpdateOneWithoutOffersInput
  event: EventUpdateOneWithoutOfferInput
  language: LanguageUpdateOneWithoutOffersInput
  budgetLines: BudgetLineUpdateManyWithoutOfferInput
  clientContact: ClientContactUpdateOneWithoutOffersInput
  eventType: EventTypeUpdateOneWithoutOffersInput
  place: PlaceUpdateOneWithoutOfferInput
  sectionItems: SectionItemUpdateManyWithoutOfferInput
}

input OfferUpdateWithoutEventDataInput {
  version: Int
  customMessage: String
  status: StatusOffer
  address: String
  city: String
  endTime: DateTime
  gmtOffset: String
  maxPersons: Int
  minPersons: Int
  name: String
  postalCode: String
  startTime: DateTime
  client: ClientUpdateOneWithoutOffersInput
  language: LanguageUpdateOneWithoutOffersInput
  budgetLines: BudgetLineUpdateManyWithoutOfferInput
  clientContact: ClientContactUpdateOneWithoutOffersInput
  employeeEstimations: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType: EventTypeUpdateOneWithoutOffersInput
  place: PlaceUpdateOneWithoutOfferInput
  sectionItems: SectionItemUpdateManyWithoutOfferInput
}

input OfferUpdateWithoutEventTypeDataInput {
  version: Int
  customMessage: String
  status: StatusOffer
  address: String
  city: String
  endTime: DateTime
  gmtOffset: String
  maxPersons: Int
  minPersons: Int
  name: String
  postalCode: String
  startTime: DateTime
  client: ClientUpdateOneWithoutOffersInput
  event: EventUpdateOneWithoutOfferInput
  language: LanguageUpdateOneWithoutOffersInput
  budgetLines: BudgetLineUpdateManyWithoutOfferInput
  clientContact: ClientContactUpdateOneWithoutOffersInput
  employeeEstimations: EmployeeEstimationUpdateManyWithoutOfferInput
  place: PlaceUpdateOneWithoutOfferInput
  sectionItems: SectionItemUpdateManyWithoutOfferInput
}

input OfferUpdateWithoutLanguageDataInput {
  version: Int
  customMessage: String
  status: StatusOffer
  address: String
  city: String
  endTime: DateTime
  gmtOffset: String
  maxPersons: Int
  minPersons: Int
  name: String
  postalCode: String
  startTime: DateTime
  client: ClientUpdateOneWithoutOffersInput
  event: EventUpdateOneWithoutOfferInput
  budgetLines: BudgetLineUpdateManyWithoutOfferInput
  clientContact: ClientContactUpdateOneWithoutOffersInput
  employeeEstimations: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType: EventTypeUpdateOneWithoutOffersInput
  place: PlaceUpdateOneWithoutOfferInput
  sectionItems: SectionItemUpdateManyWithoutOfferInput
}

input OfferUpdateWithoutPlaceDataInput {
  version: Int
  customMessage: String
  status: StatusOffer
  address: String
  city: String
  endTime: DateTime
  gmtOffset: String
  maxPersons: Int
  minPersons: Int
  name: String
  postalCode: String
  startTime: DateTime
  client: ClientUpdateOneWithoutOffersInput
  event: EventUpdateOneWithoutOfferInput
  language: LanguageUpdateOneWithoutOffersInput
  budgetLines: BudgetLineUpdateManyWithoutOfferInput
  clientContact: ClientContactUpdateOneWithoutOffersInput
  employeeEstimations: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType: EventTypeUpdateOneWithoutOffersInput
  sectionItems: SectionItemUpdateManyWithoutOfferInput
}

input OfferUpdateWithoutSectionItemsDataInput {
  version: Int
  customMessage: String
  status: StatusOffer
  address: String
  city: String
  endTime: DateTime
  gmtOffset: String
  maxPersons: Int
  minPersons: Int
  name: String
  postalCode: String
  startTime: DateTime
  client: ClientUpdateOneWithoutOffersInput
  event: EventUpdateOneWithoutOfferInput
  language: LanguageUpdateOneWithoutOffersInput
  budgetLines: BudgetLineUpdateManyWithoutOfferInput
  clientContact: ClientContactUpdateOneWithoutOffersInput
  employeeEstimations: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType: EventTypeUpdateOneWithoutOffersInput
  place: PlaceUpdateOneWithoutOfferInput
}

input OfferUpdateWithWhereUniqueWithoutClientContactInput {
  where: OfferWhereUniqueInput!
  data: OfferUpdateWithoutClientContactDataInput!
}

input OfferUpdateWithWhereUniqueWithoutClientInput {
  where: OfferWhereUniqueInput!
  data: OfferUpdateWithoutClientDataInput!
}

input OfferUpdateWithWhereUniqueWithoutEventTypeInput {
  where: OfferWhereUniqueInput!
  data: OfferUpdateWithoutEventTypeDataInput!
}

input OfferUpdateWithWhereUniqueWithoutLanguageInput {
  where: OfferWhereUniqueInput!
  data: OfferUpdateWithoutLanguageDataInput!
}

input OfferUpsertWithoutBudgetLinesInput {
  update: OfferUpdateWithoutBudgetLinesDataInput!
  create: OfferCreateWithoutBudgetLinesInput!
}

input OfferUpsertWithoutEmployeeEstimationsInput {
  update: OfferUpdateWithoutEmployeeEstimationsDataInput!
  create: OfferCreateWithoutEmployeeEstimationsInput!
}

input OfferUpsertWithoutEventInput {
  update: OfferUpdateWithoutEventDataInput!
  create: OfferCreateWithoutEventInput!
}

input OfferUpsertWithoutPlaceInput {
  update: OfferUpdateWithoutPlaceDataInput!
  create: OfferCreateWithoutPlaceInput!
}

input OfferUpsertWithoutSectionItemsInput {
  update: OfferUpdateWithoutSectionItemsDataInput!
  create: OfferCreateWithoutSectionItemsInput!
}

input OfferUpsertWithWhereUniqueWithoutClientContactInput {
  where: OfferWhereUniqueInput!
  update: OfferUpdateWithoutClientContactDataInput!
  create: OfferCreateWithoutClientContactInput!
}

input OfferUpsertWithWhereUniqueWithoutClientInput {
  where: OfferWhereUniqueInput!
  update: OfferUpdateWithoutClientDataInput!
  create: OfferCreateWithoutClientInput!
}

input OfferUpsertWithWhereUniqueWithoutEventTypeInput {
  where: OfferWhereUniqueInput!
  update: OfferUpdateWithoutEventTypeDataInput!
  create: OfferCreateWithoutEventTypeInput!
}

input OfferUpsertWithWhereUniqueWithoutLanguageInput {
  where: OfferWhereUniqueInput!
  update: OfferUpdateWithoutLanguageDataInput!
  create: OfferCreateWithoutLanguageInput!
}

input OfferWhereInput {
  """Logical AND on all given filters."""
  AND: [OfferWhereInput!]

  """Logical OR on all given filters."""
  OR: [OfferWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OfferWhereInput!]
  version: Int

  """All values that are not equal to given value."""
  version_not: Int

  """All values that are contained in given list."""
  version_in: [Int!]

  """All values that are not contained in given list."""
  version_not_in: [Int!]

  """All values less than the given value."""
  version_lt: Int

  """All values less than or equal the given value."""
  version_lte: Int

  """All values greater than the given value."""
  version_gt: Int

  """All values greater than or equal the given value."""
  version_gte: Int
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  customMessage: String

  """All values that are not equal to given value."""
  customMessage_not: String

  """All values that are contained in given list."""
  customMessage_in: [String!]

  """All values that are not contained in given list."""
  customMessage_not_in: [String!]

  """All values less than the given value."""
  customMessage_lt: String

  """All values less than or equal the given value."""
  customMessage_lte: String

  """All values greater than the given value."""
  customMessage_gt: String

  """All values greater than or equal the given value."""
  customMessage_gte: String

  """All values containing the given string."""
  customMessage_contains: String

  """All values not containing the given string."""
  customMessage_not_contains: String

  """All values starting with the given string."""
  customMessage_starts_with: String

  """All values not starting with the given string."""
  customMessage_not_starts_with: String

  """All values ending with the given string."""
  customMessage_ends_with: String

  """All values not ending with the given string."""
  customMessage_not_ends_with: String
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  status: StatusOffer

  """All values that are not equal to given value."""
  status_not: StatusOffer

  """All values that are contained in given list."""
  status_in: [StatusOffer!]

  """All values that are not contained in given list."""
  status_not_in: [StatusOffer!]
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  city: String

  """All values that are not equal to given value."""
  city_not: String

  """All values that are contained in given list."""
  city_in: [String!]

  """All values that are not contained in given list."""
  city_not_in: [String!]

  """All values less than the given value."""
  city_lt: String

  """All values less than or equal the given value."""
  city_lte: String

  """All values greater than the given value."""
  city_gt: String

  """All values greater than or equal the given value."""
  city_gte: String

  """All values containing the given string."""
  city_contains: String

  """All values not containing the given string."""
  city_not_contains: String

  """All values starting with the given string."""
  city_starts_with: String

  """All values not starting with the given string."""
  city_not_starts_with: String

  """All values ending with the given string."""
  city_ends_with: String

  """All values not ending with the given string."""
  city_not_ends_with: String
  endTime: DateTime

  """All values that are not equal to given value."""
  endTime_not: DateTime

  """All values that are contained in given list."""
  endTime_in: [DateTime!]

  """All values that are not contained in given list."""
  endTime_not_in: [DateTime!]

  """All values less than the given value."""
  endTime_lt: DateTime

  """All values less than or equal the given value."""
  endTime_lte: DateTime

  """All values greater than the given value."""
  endTime_gt: DateTime

  """All values greater than or equal the given value."""
  endTime_gte: DateTime
  gmtOffset: String

  """All values that are not equal to given value."""
  gmtOffset_not: String

  """All values that are contained in given list."""
  gmtOffset_in: [String!]

  """All values that are not contained in given list."""
  gmtOffset_not_in: [String!]

  """All values less than the given value."""
  gmtOffset_lt: String

  """All values less than or equal the given value."""
  gmtOffset_lte: String

  """All values greater than the given value."""
  gmtOffset_gt: String

  """All values greater than or equal the given value."""
  gmtOffset_gte: String

  """All values containing the given string."""
  gmtOffset_contains: String

  """All values not containing the given string."""
  gmtOffset_not_contains: String

  """All values starting with the given string."""
  gmtOffset_starts_with: String

  """All values not starting with the given string."""
  gmtOffset_not_starts_with: String

  """All values ending with the given string."""
  gmtOffset_ends_with: String

  """All values not ending with the given string."""
  gmtOffset_not_ends_with: String
  maxPersons: Int

  """All values that are not equal to given value."""
  maxPersons_not: Int

  """All values that are contained in given list."""
  maxPersons_in: [Int!]

  """All values that are not contained in given list."""
  maxPersons_not_in: [Int!]

  """All values less than the given value."""
  maxPersons_lt: Int

  """All values less than or equal the given value."""
  maxPersons_lte: Int

  """All values greater than the given value."""
  maxPersons_gt: Int

  """All values greater than or equal the given value."""
  maxPersons_gte: Int
  minPersons: Int

  """All values that are not equal to given value."""
  minPersons_not: Int

  """All values that are contained in given list."""
  minPersons_in: [Int!]

  """All values that are not contained in given list."""
  minPersons_not_in: [Int!]

  """All values less than the given value."""
  minPersons_lt: Int

  """All values less than or equal the given value."""
  minPersons_lte: Int

  """All values greater than the given value."""
  minPersons_gt: Int

  """All values greater than or equal the given value."""
  minPersons_gte: Int
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  postalCode: String

  """All values that are not equal to given value."""
  postalCode_not: String

  """All values that are contained in given list."""
  postalCode_in: [String!]

  """All values that are not contained in given list."""
  postalCode_not_in: [String!]

  """All values less than the given value."""
  postalCode_lt: String

  """All values less than or equal the given value."""
  postalCode_lte: String

  """All values greater than the given value."""
  postalCode_gt: String

  """All values greater than or equal the given value."""
  postalCode_gte: String

  """All values containing the given string."""
  postalCode_contains: String

  """All values not containing the given string."""
  postalCode_not_contains: String

  """All values starting with the given string."""
  postalCode_starts_with: String

  """All values not starting with the given string."""
  postalCode_not_starts_with: String

  """All values ending with the given string."""
  postalCode_ends_with: String

  """All values not ending with the given string."""
  postalCode_not_ends_with: String
  startTime: DateTime

  """All values that are not equal to given value."""
  startTime_not: DateTime

  """All values that are contained in given list."""
  startTime_in: [DateTime!]

  """All values that are not contained in given list."""
  startTime_not_in: [DateTime!]

  """All values less than the given value."""
  startTime_lt: DateTime

  """All values less than or equal the given value."""
  startTime_lte: DateTime

  """All values greater than the given value."""
  startTime_gt: DateTime

  """All values greater than or equal the given value."""
  startTime_gte: DateTime
  client: ClientWhereInput
  event: EventWhereInput
  language: LanguageWhereInput
  budgetLines_every: BudgetLineWhereInput
  budgetLines_some: BudgetLineWhereInput
  budgetLines_none: BudgetLineWhereInput
  clientContact: ClientContactWhereInput
  employeeEstimations_every: EmployeeEstimationWhereInput
  employeeEstimations_some: EmployeeEstimationWhereInput
  employeeEstimations_none: EmployeeEstimationWhereInput
  eventType: EventTypeWhereInput
  place: PlaceWhereInput
  sectionItems_every: SectionItemWhereInput
  sectionItems_some: SectionItemWhereInput
  sectionItems_none: SectionItemWhereInput
}

input OfferWhereUniqueInput {
  id: ID
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Place implements Node {
  address: String!
  city: String!
  id: ID!
  name: String!
  postalCode: String!
  country: Country
  note: String
  offer(where: OfferWhereInput): Offer
  placeContacts(where: PlaceContactWhereInput, orderBy: PlaceContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PlaceContact!]
}

"""A connection to a list of items."""
type PlaceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PlaceEdge]!
  aggregate: AggregatePlace!
}

type PlaceContact implements Node {
  email: String
  id: ID!
  mobilePhone: String
  name: String!
  phoneNumber: String
  place(where: PlaceWhereInput): Place
}

"""A connection to a list of items."""
type PlaceContactConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PlaceContactEdge]!
  aggregate: AggregatePlaceContact!
}

input PlaceContactCreateInput {
  email: String
  mobilePhone: String
  name: String!
  phoneNumber: String
  place: PlaceCreateOneWithoutPlaceContactsInput
}

input PlaceContactCreateManyWithoutPlaceInput {
  create: [PlaceContactCreateWithoutPlaceInput!]
  connect: [PlaceContactWhereUniqueInput!]
}

input PlaceContactCreateWithoutPlaceInput {
  email: String
  mobilePhone: String
  name: String!
  phoneNumber: String
}

"""An edge in a connection."""
type PlaceContactEdge {
  """The item at the end of the edge."""
  node: PlaceContact!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PlaceContactOrderByInput {
  email_ASC
  email_DESC
  id_ASC
  id_DESC
  mobilePhone_ASC
  mobilePhone_DESC
  name_ASC
  name_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PlaceContactPreviousValues {
  email: String
  id: ID!
  mobilePhone: String
  name: String!
  phoneNumber: String
}

type PlaceContactSubscriptionPayload {
  mutation: MutationType!
  node: PlaceContact
  updatedFields: [String!]
  previousValues: PlaceContactPreviousValues
}

input PlaceContactSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PlaceContactSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PlaceContactSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PlaceContactSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PlaceContactWhereInput
}

input PlaceContactUpdateInput {
  email: String
  mobilePhone: String
  name: String
  phoneNumber: String
  place: PlaceUpdateOneWithoutPlaceContactsInput
}

input PlaceContactUpdateManyWithoutPlaceInput {
  create: [PlaceContactCreateWithoutPlaceInput!]
  connect: [PlaceContactWhereUniqueInput!]
  disconnect: [PlaceContactWhereUniqueInput!]
  delete: [PlaceContactWhereUniqueInput!]
  update: [PlaceContactUpdateWithWhereUniqueWithoutPlaceInput!]
  upsert: [PlaceContactUpsertWithWhereUniqueWithoutPlaceInput!]
}

input PlaceContactUpdateWithoutPlaceDataInput {
  email: String
  mobilePhone: String
  name: String
  phoneNumber: String
}

input PlaceContactUpdateWithWhereUniqueWithoutPlaceInput {
  where: PlaceContactWhereUniqueInput!
  data: PlaceContactUpdateWithoutPlaceDataInput!
}

input PlaceContactUpsertWithWhereUniqueWithoutPlaceInput {
  where: PlaceContactWhereUniqueInput!
  update: PlaceContactUpdateWithoutPlaceDataInput!
  create: PlaceContactCreateWithoutPlaceInput!
}

input PlaceContactWhereInput {
  """Logical AND on all given filters."""
  AND: [PlaceContactWhereInput!]

  """Logical OR on all given filters."""
  OR: [PlaceContactWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PlaceContactWhereInput!]
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  mobilePhone: String

  """All values that are not equal to given value."""
  mobilePhone_not: String

  """All values that are contained in given list."""
  mobilePhone_in: [String!]

  """All values that are not contained in given list."""
  mobilePhone_not_in: [String!]

  """All values less than the given value."""
  mobilePhone_lt: String

  """All values less than or equal the given value."""
  mobilePhone_lte: String

  """All values greater than the given value."""
  mobilePhone_gt: String

  """All values greater than or equal the given value."""
  mobilePhone_gte: String

  """All values containing the given string."""
  mobilePhone_contains: String

  """All values not containing the given string."""
  mobilePhone_not_contains: String

  """All values starting with the given string."""
  mobilePhone_starts_with: String

  """All values not starting with the given string."""
  mobilePhone_not_starts_with: String

  """All values ending with the given string."""
  mobilePhone_ends_with: String

  """All values not ending with the given string."""
  mobilePhone_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  phoneNumber: String

  """All values that are not equal to given value."""
  phoneNumber_not: String

  """All values that are contained in given list."""
  phoneNumber_in: [String!]

  """All values that are not contained in given list."""
  phoneNumber_not_in: [String!]

  """All values less than the given value."""
  phoneNumber_lt: String

  """All values less than or equal the given value."""
  phoneNumber_lte: String

  """All values greater than the given value."""
  phoneNumber_gt: String

  """All values greater than or equal the given value."""
  phoneNumber_gte: String

  """All values containing the given string."""
  phoneNumber_contains: String

  """All values not containing the given string."""
  phoneNumber_not_contains: String

  """All values starting with the given string."""
  phoneNumber_starts_with: String

  """All values not starting with the given string."""
  phoneNumber_not_starts_with: String

  """All values ending with the given string."""
  phoneNumber_ends_with: String

  """All values not ending with the given string."""
  phoneNumber_not_ends_with: String
  place: PlaceWhereInput
}

input PlaceContactWhereUniqueInput {
  id: ID
}

input PlaceCreateInput {
  address: String!
  city: String!
  name: String!
  postalCode: String!
  country: Country
  note: String
  offer: OfferCreateOneWithoutPlaceInput
  placeContacts: PlaceContactCreateManyWithoutPlaceInput
}

input PlaceCreateOneWithoutOfferInput {
  create: PlaceCreateWithoutOfferInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateOneWithoutPlaceContactsInput {
  create: PlaceCreateWithoutPlaceContactsInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateWithoutOfferInput {
  address: String!
  city: String!
  name: String!
  postalCode: String!
  country: Country
  note: String
  placeContacts: PlaceContactCreateManyWithoutPlaceInput
}

input PlaceCreateWithoutPlaceContactsInput {
  address: String!
  city: String!
  name: String!
  postalCode: String!
  country: Country
  note: String
  offer: OfferCreateOneWithoutPlaceInput
}

"""An edge in a connection."""
type PlaceEdge {
  """The item at the end of the edge."""
  node: Place!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PlaceOrderByInput {
  address_ASC
  address_DESC
  city_ASC
  city_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  postalCode_ASC
  postalCode_DESC
  country_ASC
  country_DESC
  note_ASC
  note_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PlacePreviousValues {
  address: String!
  city: String!
  id: ID!
  name: String!
  postalCode: String!
  country: Country
  note: String
}

type PlaceSubscriptionPayload {
  mutation: MutationType!
  node: Place
  updatedFields: [String!]
  previousValues: PlacePreviousValues
}

input PlaceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PlaceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PlaceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PlaceSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PlaceWhereInput
}

input PlaceUpdateInput {
  address: String
  city: String
  name: String
  postalCode: String
  country: Country
  note: String
  offer: OfferUpdateOneWithoutPlaceInput
  placeContacts: PlaceContactUpdateManyWithoutPlaceInput
}

input PlaceUpdateOneWithoutOfferInput {
  create: PlaceCreateWithoutOfferInput
  connect: PlaceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PlaceUpdateWithoutOfferDataInput
  upsert: PlaceUpsertWithoutOfferInput
}

input PlaceUpdateOneWithoutPlaceContactsInput {
  create: PlaceCreateWithoutPlaceContactsInput
  connect: PlaceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PlaceUpdateWithoutPlaceContactsDataInput
  upsert: PlaceUpsertWithoutPlaceContactsInput
}

input PlaceUpdateWithoutOfferDataInput {
  address: String
  city: String
  name: String
  postalCode: String
  country: Country
  note: String
  placeContacts: PlaceContactUpdateManyWithoutPlaceInput
}

input PlaceUpdateWithoutPlaceContactsDataInput {
  address: String
  city: String
  name: String
  postalCode: String
  country: Country
  note: String
  offer: OfferUpdateOneWithoutPlaceInput
}

input PlaceUpsertWithoutOfferInput {
  update: PlaceUpdateWithoutOfferDataInput!
  create: PlaceCreateWithoutOfferInput!
}

input PlaceUpsertWithoutPlaceContactsInput {
  update: PlaceUpdateWithoutPlaceContactsDataInput!
  create: PlaceCreateWithoutPlaceContactsInput!
}

input PlaceWhereInput {
  """Logical AND on all given filters."""
  AND: [PlaceWhereInput!]

  """Logical OR on all given filters."""
  OR: [PlaceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PlaceWhereInput!]
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  city: String

  """All values that are not equal to given value."""
  city_not: String

  """All values that are contained in given list."""
  city_in: [String!]

  """All values that are not contained in given list."""
  city_not_in: [String!]

  """All values less than the given value."""
  city_lt: String

  """All values less than or equal the given value."""
  city_lte: String

  """All values greater than the given value."""
  city_gt: String

  """All values greater than or equal the given value."""
  city_gte: String

  """All values containing the given string."""
  city_contains: String

  """All values not containing the given string."""
  city_not_contains: String

  """All values starting with the given string."""
  city_starts_with: String

  """All values not starting with the given string."""
  city_not_starts_with: String

  """All values ending with the given string."""
  city_ends_with: String

  """All values not ending with the given string."""
  city_not_ends_with: String
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  postalCode: String

  """All values that are not equal to given value."""
  postalCode_not: String

  """All values that are contained in given list."""
  postalCode_in: [String!]

  """All values that are not contained in given list."""
  postalCode_not_in: [String!]

  """All values less than the given value."""
  postalCode_lt: String

  """All values less than or equal the given value."""
  postalCode_lte: String

  """All values greater than the given value."""
  postalCode_gt: String

  """All values greater than or equal the given value."""
  postalCode_gte: String

  """All values containing the given string."""
  postalCode_contains: String

  """All values not containing the given string."""
  postalCode_not_contains: String

  """All values starting with the given string."""
  postalCode_starts_with: String

  """All values not starting with the given string."""
  postalCode_not_starts_with: String

  """All values ending with the given string."""
  postalCode_ends_with: String

  """All values not ending with the given string."""
  postalCode_not_ends_with: String
  country: Country

  """All values that are not equal to given value."""
  country_not: Country

  """All values that are contained in given list."""
  country_in: [Country!]

  """All values that are not contained in given list."""
  country_not_in: [Country!]
  note: String

  """All values that are not equal to given value."""
  note_not: String

  """All values that are contained in given list."""
  note_in: [String!]

  """All values that are not contained in given list."""
  note_not_in: [String!]

  """All values less than the given value."""
  note_lt: String

  """All values less than or equal the given value."""
  note_lte: String

  """All values greater than the given value."""
  note_gt: String

  """All values greater than or equal the given value."""
  note_gte: String

  """All values containing the given string."""
  note_contains: String

  """All values not containing the given string."""
  note_not_contains: String

  """All values starting with the given string."""
  note_starts_with: String

  """All values not starting with the given string."""
  note_not_starts_with: String

  """All values ending with the given string."""
  note_ends_with: String

  """All values not ending with the given string."""
  note_not_ends_with: String
  offer: OfferWhereInput
  placeContacts_every: PlaceContactWhereInput
  placeContacts_some: PlaceContactWhereInput
  placeContacts_none: PlaceContactWhereInput
}

input PlaceWhereUniqueInput {
  id: ID
}

type Query {
  clients(where: ClientWhereInput, orderBy: ClientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Client]!
  communications(where: CommunicationWhereInput, orderBy: CommunicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Communication]!
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  languages(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Language]!
  offers(where: OfferWhereInput, orderBy: OfferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Offer]!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  clientContacts(where: ClientContactWhereInput, orderBy: ClientContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClientContact]!
  places(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place]!
  budgetLines(where: BudgetLineWhereInput, orderBy: BudgetLineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BudgetLine]!
  employees(where: EmployeeWhereInput, orderBy: EmployeeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Employee]!
  employeeEstimations(where: EmployeeEstimationWhereInput, orderBy: EmployeeEstimationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EmployeeEstimation]!
  eventTypes(where: EventTypeWhereInput, orderBy: EventTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EventType]!
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job]!
  placeContacts(where: PlaceContactWhereInput, orderBy: PlaceContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PlaceContact]!
  sectionItems(where: SectionItemWhereInput, orderBy: SectionItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SectionItem]!
  stuffs(where: StuffWhereInput, orderBy: StuffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stuff]!
  taxes(where: TaxWhereInput, orderBy: TaxOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tax]!
  vehicles(where: VehicleWhereInput, orderBy: VehicleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vehicle]!
  client(where: ClientWhereUniqueInput!): Client
  communication(where: CommunicationWhereUniqueInput!): Communication
  event(where: EventWhereUniqueInput!): Event
  language(where: LanguageWhereUniqueInput!): Language
  offer(where: OfferWhereUniqueInput!): Offer
  item(where: ItemWhereUniqueInput!): Item
  user(where: UserWhereUniqueInput!): User
  clientContact(where: ClientContactWhereUniqueInput!): ClientContact
  place(where: PlaceWhereUniqueInput!): Place
  budgetLine(where: BudgetLineWhereUniqueInput!): BudgetLine
  employee(where: EmployeeWhereUniqueInput!): Employee
  employeeEstimation(where: EmployeeEstimationWhereUniqueInput!): EmployeeEstimation
  eventType(where: EventTypeWhereUniqueInput!): EventType
  job(where: JobWhereUniqueInput!): Job
  placeContact(where: PlaceContactWhereUniqueInput!): PlaceContact
  sectionItem(where: SectionItemWhereUniqueInput!): SectionItem
  stuff(where: StuffWhereUniqueInput!): Stuff
  tax(where: TaxWhereUniqueInput!): Tax
  vehicle(where: VehicleWhereUniqueInput!): Vehicle
  clientsConnection(where: ClientWhereInput, orderBy: ClientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClientConnection!
  communicationsConnection(where: CommunicationWhereInput, orderBy: CommunicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommunicationConnection!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  languagesConnection(where: LanguageWhereInput, orderBy: LanguageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LanguageConnection!
  offersConnection(where: OfferWhereInput, orderBy: OfferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OfferConnection!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  clientContactsConnection(where: ClientContactWhereInput, orderBy: ClientContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClientContactConnection!
  placesConnection(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlaceConnection!
  budgetLinesConnection(where: BudgetLineWhereInput, orderBy: BudgetLineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BudgetLineConnection!
  employeesConnection(where: EmployeeWhereInput, orderBy: EmployeeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EmployeeConnection!
  employeeEstimationsConnection(where: EmployeeEstimationWhereInput, orderBy: EmployeeEstimationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EmployeeEstimationConnection!
  eventTypesConnection(where: EventTypeWhereInput, orderBy: EventTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventTypeConnection!
  jobsConnection(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JobConnection!
  placeContactsConnection(where: PlaceContactWhereInput, orderBy: PlaceContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlaceContactConnection!
  sectionItemsConnection(where: SectionItemWhereInput, orderBy: SectionItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SectionItemConnection!
  stuffsConnection(where: StuffWhereInput, orderBy: StuffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StuffConnection!
  taxesConnection(where: TaxWhereInput, orderBy: TaxOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TaxConnection!
  vehiclesConnection(where: VehicleWhereInput, orderBy: VehicleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VehicleConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

enum Role {
  Admin
  Freelance
  Employee
}

type SectionItem implements Node {
  content: String
  h: Int!
  i: String!
  id: ID!
  isDraggable: Boolean
  isResizable: Boolean
  maxH: Int
  maxW: Int
  minH: Int
  minW: Int
  moved: Boolean
  offer(where: OfferWhereInput): Offer
  persons: Int
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
  price: Float
  static: Boolean
  time: DateTime
  title: String
  type: SectionTypes!
  w: Int!
  x: Int!
  y: Int!
}

"""A connection to a list of items."""
type SectionItemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SectionItemEdge]!
  aggregate: AggregateSectionItem!
}

input SectionItemCreateInput {
  content: String
  h: Int!
  i: String!
  isDraggable: Boolean
  isResizable: Boolean
  maxH: Int
  maxW: Int
  minH: Int
  minW: Int
  moved: Boolean
  persons: Int
  price: Float
  static: Boolean
  time: DateTime
  title: String
  type: SectionTypes
  w: Int!
  x: Int!
  y: Int
  offer: OfferCreateOneWithoutSectionItemsInput
  items: ItemCreateManyWithoutSectionItemsInput
}

input SectionItemCreateManyWithoutItemsInput {
  create: [SectionItemCreateWithoutItemsInput!]
  connect: [SectionItemWhereUniqueInput!]
}

input SectionItemCreateManyWithoutOfferInput {
  create: [SectionItemCreateWithoutOfferInput!]
  connect: [SectionItemWhereUniqueInput!]
}

input SectionItemCreateWithoutItemsInput {
  content: String
  h: Int!
  i: String!
  isDraggable: Boolean
  isResizable: Boolean
  maxH: Int
  maxW: Int
  minH: Int
  minW: Int
  moved: Boolean
  persons: Int
  price: Float
  static: Boolean
  time: DateTime
  title: String
  type: SectionTypes
  w: Int!
  x: Int!
  y: Int
  offer: OfferCreateOneWithoutSectionItemsInput
}

input SectionItemCreateWithoutOfferInput {
  content: String
  h: Int!
  i: String!
  isDraggable: Boolean
  isResizable: Boolean
  maxH: Int
  maxW: Int
  minH: Int
  minW: Int
  moved: Boolean
  persons: Int
  price: Float
  static: Boolean
  time: DateTime
  title: String
  type: SectionTypes
  w: Int!
  x: Int!
  y: Int
  items: ItemCreateManyWithoutSectionItemsInput
}

"""An edge in a connection."""
type SectionItemEdge {
  """The item at the end of the edge."""
  node: SectionItem!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SectionItemOrderByInput {
  content_ASC
  content_DESC
  h_ASC
  h_DESC
  i_ASC
  i_DESC
  id_ASC
  id_DESC
  isDraggable_ASC
  isDraggable_DESC
  isResizable_ASC
  isResizable_DESC
  maxH_ASC
  maxH_DESC
  maxW_ASC
  maxW_DESC
  minH_ASC
  minH_DESC
  minW_ASC
  minW_DESC
  moved_ASC
  moved_DESC
  persons_ASC
  persons_DESC
  price_ASC
  price_DESC
  static_ASC
  static_DESC
  time_ASC
  time_DESC
  title_ASC
  title_DESC
  type_ASC
  type_DESC
  w_ASC
  w_DESC
  x_ASC
  x_DESC
  y_ASC
  y_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type SectionItemPreviousValues {
  content: String
  h: Int!
  i: String!
  id: ID!
  isDraggable: Boolean
  isResizable: Boolean
  maxH: Int
  maxW: Int
  minH: Int
  minW: Int
  moved: Boolean
  persons: Int
  price: Float
  static: Boolean
  time: DateTime
  title: String
  type: SectionTypes!
  w: Int!
  x: Int!
  y: Int!
}

type SectionItemSubscriptionPayload {
  mutation: MutationType!
  node: SectionItem
  updatedFields: [String!]
  previousValues: SectionItemPreviousValues
}

input SectionItemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SectionItemSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SectionItemSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SectionItemSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SectionItemWhereInput
}

input SectionItemUpdateInput {
  content: String
  h: Int
  i: String
  isDraggable: Boolean
  isResizable: Boolean
  maxH: Int
  maxW: Int
  minH: Int
  minW: Int
  moved: Boolean
  persons: Int
  price: Float
  static: Boolean
  time: DateTime
  title: String
  type: SectionTypes
  w: Int
  x: Int
  y: Int
  offer: OfferUpdateOneWithoutSectionItemsInput
  items: ItemUpdateManyWithoutSectionItemsInput
}

input SectionItemUpdateManyWithoutItemsInput {
  create: [SectionItemCreateWithoutItemsInput!]
  connect: [SectionItemWhereUniqueInput!]
  disconnect: [SectionItemWhereUniqueInput!]
  delete: [SectionItemWhereUniqueInput!]
  update: [SectionItemUpdateWithWhereUniqueWithoutItemsInput!]
  upsert: [SectionItemUpsertWithWhereUniqueWithoutItemsInput!]
}

input SectionItemUpdateManyWithoutOfferInput {
  create: [SectionItemCreateWithoutOfferInput!]
  connect: [SectionItemWhereUniqueInput!]
  disconnect: [SectionItemWhereUniqueInput!]
  delete: [SectionItemWhereUniqueInput!]
  update: [SectionItemUpdateWithWhereUniqueWithoutOfferInput!]
  upsert: [SectionItemUpsertWithWhereUniqueWithoutOfferInput!]
}

input SectionItemUpdateWithoutItemsDataInput {
  content: String
  h: Int
  i: String
  isDraggable: Boolean
  isResizable: Boolean
  maxH: Int
  maxW: Int
  minH: Int
  minW: Int
  moved: Boolean
  persons: Int
  price: Float
  static: Boolean
  time: DateTime
  title: String
  type: SectionTypes
  w: Int
  x: Int
  y: Int
  offer: OfferUpdateOneWithoutSectionItemsInput
}

input SectionItemUpdateWithoutOfferDataInput {
  content: String
  h: Int
  i: String
  isDraggable: Boolean
  isResizable: Boolean
  maxH: Int
  maxW: Int
  minH: Int
  minW: Int
  moved: Boolean
  persons: Int
  price: Float
  static: Boolean
  time: DateTime
  title: String
  type: SectionTypes
  w: Int
  x: Int
  y: Int
  items: ItemUpdateManyWithoutSectionItemsInput
}

input SectionItemUpdateWithWhereUniqueWithoutItemsInput {
  where: SectionItemWhereUniqueInput!
  data: SectionItemUpdateWithoutItemsDataInput!
}

input SectionItemUpdateWithWhereUniqueWithoutOfferInput {
  where: SectionItemWhereUniqueInput!
  data: SectionItemUpdateWithoutOfferDataInput!
}

input SectionItemUpsertWithWhereUniqueWithoutItemsInput {
  where: SectionItemWhereUniqueInput!
  update: SectionItemUpdateWithoutItemsDataInput!
  create: SectionItemCreateWithoutItemsInput!
}

input SectionItemUpsertWithWhereUniqueWithoutOfferInput {
  where: SectionItemWhereUniqueInput!
  update: SectionItemUpdateWithoutOfferDataInput!
  create: SectionItemCreateWithoutOfferInput!
}

input SectionItemWhereInput {
  """Logical AND on all given filters."""
  AND: [SectionItemWhereInput!]

  """Logical OR on all given filters."""
  OR: [SectionItemWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SectionItemWhereInput!]
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values less than the given value."""
  content_lt: String

  """All values less than or equal the given value."""
  content_lte: String

  """All values greater than the given value."""
  content_gt: String

  """All values greater than or equal the given value."""
  content_gte: String

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string."""
  content_not_ends_with: String
  h: Int

  """All values that are not equal to given value."""
  h_not: Int

  """All values that are contained in given list."""
  h_in: [Int!]

  """All values that are not contained in given list."""
  h_not_in: [Int!]

  """All values less than the given value."""
  h_lt: Int

  """All values less than or equal the given value."""
  h_lte: Int

  """All values greater than the given value."""
  h_gt: Int

  """All values greater than or equal the given value."""
  h_gte: Int
  i: String

  """All values that are not equal to given value."""
  i_not: String

  """All values that are contained in given list."""
  i_in: [String!]

  """All values that are not contained in given list."""
  i_not_in: [String!]

  """All values less than the given value."""
  i_lt: String

  """All values less than or equal the given value."""
  i_lte: String

  """All values greater than the given value."""
  i_gt: String

  """All values greater than or equal the given value."""
  i_gte: String

  """All values containing the given string."""
  i_contains: String

  """All values not containing the given string."""
  i_not_contains: String

  """All values starting with the given string."""
  i_starts_with: String

  """All values not starting with the given string."""
  i_not_starts_with: String

  """All values ending with the given string."""
  i_ends_with: String

  """All values not ending with the given string."""
  i_not_ends_with: String
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  isDraggable: Boolean

  """All values that are not equal to given value."""
  isDraggable_not: Boolean
  isResizable: Boolean

  """All values that are not equal to given value."""
  isResizable_not: Boolean
  maxH: Int

  """All values that are not equal to given value."""
  maxH_not: Int

  """All values that are contained in given list."""
  maxH_in: [Int!]

  """All values that are not contained in given list."""
  maxH_not_in: [Int!]

  """All values less than the given value."""
  maxH_lt: Int

  """All values less than or equal the given value."""
  maxH_lte: Int

  """All values greater than the given value."""
  maxH_gt: Int

  """All values greater than or equal the given value."""
  maxH_gte: Int
  maxW: Int

  """All values that are not equal to given value."""
  maxW_not: Int

  """All values that are contained in given list."""
  maxW_in: [Int!]

  """All values that are not contained in given list."""
  maxW_not_in: [Int!]

  """All values less than the given value."""
  maxW_lt: Int

  """All values less than or equal the given value."""
  maxW_lte: Int

  """All values greater than the given value."""
  maxW_gt: Int

  """All values greater than or equal the given value."""
  maxW_gte: Int
  minH: Int

  """All values that are not equal to given value."""
  minH_not: Int

  """All values that are contained in given list."""
  minH_in: [Int!]

  """All values that are not contained in given list."""
  minH_not_in: [Int!]

  """All values less than the given value."""
  minH_lt: Int

  """All values less than or equal the given value."""
  minH_lte: Int

  """All values greater than the given value."""
  minH_gt: Int

  """All values greater than or equal the given value."""
  minH_gte: Int
  minW: Int

  """All values that are not equal to given value."""
  minW_not: Int

  """All values that are contained in given list."""
  minW_in: [Int!]

  """All values that are not contained in given list."""
  minW_not_in: [Int!]

  """All values less than the given value."""
  minW_lt: Int

  """All values less than or equal the given value."""
  minW_lte: Int

  """All values greater than the given value."""
  minW_gt: Int

  """All values greater than or equal the given value."""
  minW_gte: Int
  moved: Boolean

  """All values that are not equal to given value."""
  moved_not: Boolean
  persons: Int

  """All values that are not equal to given value."""
  persons_not: Int

  """All values that are contained in given list."""
  persons_in: [Int!]

  """All values that are not contained in given list."""
  persons_not_in: [Int!]

  """All values less than the given value."""
  persons_lt: Int

  """All values less than or equal the given value."""
  persons_lte: Int

  """All values greater than the given value."""
  persons_gt: Int

  """All values greater than or equal the given value."""
  persons_gte: Int
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  static: Boolean

  """All values that are not equal to given value."""
  static_not: Boolean
  time: DateTime

  """All values that are not equal to given value."""
  time_not: DateTime

  """All values that are contained in given list."""
  time_in: [DateTime!]

  """All values that are not contained in given list."""
  time_not_in: [DateTime!]

  """All values less than the given value."""
  time_lt: DateTime

  """All values less than or equal the given value."""
  time_lte: DateTime

  """All values greater than the given value."""
  time_gt: DateTime

  """All values greater than or equal the given value."""
  time_gte: DateTime
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  type: SectionTypes

  """All values that are not equal to given value."""
  type_not: SectionTypes

  """All values that are contained in given list."""
  type_in: [SectionTypes!]

  """All values that are not contained in given list."""
  type_not_in: [SectionTypes!]
  w: Int

  """All values that are not equal to given value."""
  w_not: Int

  """All values that are contained in given list."""
  w_in: [Int!]

  """All values that are not contained in given list."""
  w_not_in: [Int!]

  """All values less than the given value."""
  w_lt: Int

  """All values less than or equal the given value."""
  w_lte: Int

  """All values greater than the given value."""
  w_gt: Int

  """All values greater than or equal the given value."""
  w_gte: Int
  x: Int

  """All values that are not equal to given value."""
  x_not: Int

  """All values that are contained in given list."""
  x_in: [Int!]

  """All values that are not contained in given list."""
  x_not_in: [Int!]

  """All values less than the given value."""
  x_lt: Int

  """All values less than or equal the given value."""
  x_lte: Int

  """All values greater than the given value."""
  x_gt: Int

  """All values greater than or equal the given value."""
  x_gte: Int
  y: Int

  """All values that are not equal to given value."""
  y_not: Int

  """All values that are contained in given list."""
  y_in: [Int!]

  """All values that are not contained in given list."""
  y_not_in: [Int!]

  """All values less than the given value."""
  y_lt: Int

  """All values less than or equal the given value."""
  y_lte: Int

  """All values greater than the given value."""
  y_gt: Int

  """All values greater than or equal the given value."""
  y_gte: Int
  offer: OfferWhereInput
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
}

input SectionItemWhereUniqueInput {
  id: ID
}

enum SectionTypes {
  Title
  Subtitle
  Subheading
  Text
  Items
}

enum StatusOffer {
  Accepted
  Rejected
  Pending
  Template
}

type Stuff implements Node {
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  id: ID!
  name: String!
  quantity: Int!
}

"""A connection to a list of items."""
type StuffConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [StuffEdge]!
  aggregate: AggregateStuff!
}

input StuffCreateInput {
  name: String!
  quantity: Int
  events: EventCreateManyWithoutStuffsInput
}

input StuffCreateManyWithoutEventsInput {
  create: [StuffCreateWithoutEventsInput!]
  connect: [StuffWhereUniqueInput!]
}

input StuffCreateWithoutEventsInput {
  name: String!
  quantity: Int
}

"""An edge in a connection."""
type StuffEdge {
  """The item at the end of the edge."""
  node: Stuff!

  """A cursor for use in pagination."""
  cursor: String!
}

enum StuffOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  quantity_ASC
  quantity_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type StuffPreviousValues {
  id: ID!
  name: String!
  quantity: Int!
}

type StuffSubscriptionPayload {
  mutation: MutationType!
  node: Stuff
  updatedFields: [String!]
  previousValues: StuffPreviousValues
}

input StuffSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [StuffSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [StuffSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StuffSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: StuffWhereInput
}

input StuffUpdateInput {
  name: String
  quantity: Int
  events: EventUpdateManyWithoutStuffsInput
}

input StuffUpdateManyWithoutEventsInput {
  create: [StuffCreateWithoutEventsInput!]
  connect: [StuffWhereUniqueInput!]
  disconnect: [StuffWhereUniqueInput!]
  delete: [StuffWhereUniqueInput!]
  update: [StuffUpdateWithWhereUniqueWithoutEventsInput!]
  upsert: [StuffUpsertWithWhereUniqueWithoutEventsInput!]
}

input StuffUpdateWithoutEventsDataInput {
  name: String
  quantity: Int
}

input StuffUpdateWithWhereUniqueWithoutEventsInput {
  where: StuffWhereUniqueInput!
  data: StuffUpdateWithoutEventsDataInput!
}

input StuffUpsertWithWhereUniqueWithoutEventsInput {
  where: StuffWhereUniqueInput!
  update: StuffUpdateWithoutEventsDataInput!
  create: StuffCreateWithoutEventsInput!
}

input StuffWhereInput {
  """Logical AND on all given filters."""
  AND: [StuffWhereInput!]

  """Logical OR on all given filters."""
  OR: [StuffWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StuffWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  quantity: Int

  """All values that are not equal to given value."""
  quantity_not: Int

  """All values that are contained in given list."""
  quantity_in: [Int!]

  """All values that are not contained in given list."""
  quantity_not_in: [Int!]

  """All values less than the given value."""
  quantity_lt: Int

  """All values less than or equal the given value."""
  quantity_lte: Int

  """All values greater than the given value."""
  quantity_gt: Int

  """All values greater than or equal the given value."""
  quantity_gte: Int
  events_every: EventWhereInput
  events_some: EventWhereInput
  events_none: EventWhereInput
}

input StuffWhereUniqueInput {
  id: ID
}

type Subscription {
  client(where: ClientSubscriptionWhereInput): ClientSubscriptionPayload
  communication(where: CommunicationSubscriptionWhereInput): CommunicationSubscriptionPayload
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  language(where: LanguageSubscriptionWhereInput): LanguageSubscriptionPayload
  offer(where: OfferSubscriptionWhereInput): OfferSubscriptionPayload
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  clientContact(where: ClientContactSubscriptionWhereInput): ClientContactSubscriptionPayload
  place(where: PlaceSubscriptionWhereInput): PlaceSubscriptionPayload
  budgetLine(where: BudgetLineSubscriptionWhereInput): BudgetLineSubscriptionPayload
  employee(where: EmployeeSubscriptionWhereInput): EmployeeSubscriptionPayload
  employeeEstimation(where: EmployeeEstimationSubscriptionWhereInput): EmployeeEstimationSubscriptionPayload
  eventType(where: EventTypeSubscriptionWhereInput): EventTypeSubscriptionPayload
  job(where: JobSubscriptionWhereInput): JobSubscriptionPayload
  placeContact(where: PlaceContactSubscriptionWhereInput): PlaceContactSubscriptionPayload
  sectionItem(where: SectionItemSubscriptionWhereInput): SectionItemSubscriptionPayload
  stuff(where: StuffSubscriptionWhereInput): StuffSubscriptionPayload
  tax(where: TaxSubscriptionWhereInput): TaxSubscriptionPayload
  vehicle(where: VehicleSubscriptionWhereInput): VehicleSubscriptionPayload
}

type Tax implements Node {
  budgetLines(where: BudgetLineWhereInput, orderBy: BudgetLineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BudgetLine!]
  id: ID!
  name: String!
  value: Float!
}

"""A connection to a list of items."""
type TaxConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TaxEdge]!
  aggregate: AggregateTax!
}

input TaxCreateInput {
  name: String!
  value: Float!
  budgetLines: BudgetLineCreateManyWithoutTaxInput
}

input TaxCreateOneWithoutBudgetLinesInput {
  create: TaxCreateWithoutBudgetLinesInput
  connect: TaxWhereUniqueInput
}

input TaxCreateWithoutBudgetLinesInput {
  name: String!
  value: Float!
}

"""An edge in a connection."""
type TaxEdge {
  """The item at the end of the edge."""
  node: Tax!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TaxOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  value_ASC
  value_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TaxPreviousValues {
  id: ID!
  name: String!
  value: Float!
}

type TaxSubscriptionPayload {
  mutation: MutationType!
  node: Tax
  updatedFields: [String!]
  previousValues: TaxPreviousValues
}

input TaxSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TaxSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TaxSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TaxSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TaxWhereInput
}

input TaxUpdateInput {
  name: String
  value: Float
  budgetLines: BudgetLineUpdateManyWithoutTaxInput
}

input TaxUpdateOneWithoutBudgetLinesInput {
  create: TaxCreateWithoutBudgetLinesInput
  connect: TaxWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: TaxUpdateWithoutBudgetLinesDataInput
  upsert: TaxUpsertWithoutBudgetLinesInput
}

input TaxUpdateWithoutBudgetLinesDataInput {
  name: String
  value: Float
}

input TaxUpsertWithoutBudgetLinesInput {
  update: TaxUpdateWithoutBudgetLinesDataInput!
  create: TaxCreateWithoutBudgetLinesInput!
}

input TaxWhereInput {
  """Logical AND on all given filters."""
  AND: [TaxWhereInput!]

  """Logical OR on all given filters."""
  OR: [TaxWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TaxWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  value: Float

  """All values that are not equal to given value."""
  value_not: Float

  """All values that are contained in given list."""
  value_in: [Float!]

  """All values that are not contained in given list."""
  value_not_in: [Float!]

  """All values less than the given value."""
  value_lt: Float

  """All values less than or equal the given value."""
  value_lte: Float

  """All values greater than the given value."""
  value_gt: Float

  """All values greater than or equal the given value."""
  value_gte: Float
  budgetLines_every: BudgetLineWhereInput
  budgetLines_some: BudgetLineWhereInput
  budgetLines_none: BudgetLineWhereInput
}

input TaxWhereUniqueInput {
  id: ID
}

type User implements Node {
  createdAt: DateTime!
  id: ID!
  role: Role!
  updatedAt: DateTime!
  email: String!
  image: String
  name: String!
  password: String!
  employee(where: EmployeeWhereInput): Employee
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job!]
  language(where: LanguageWhereInput): Language
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  role: Role!
  email: String!
  image: String
  name: String!
  password: String!
  employee: EmployeeCreateOneWithoutUserInput
  jobs: JobCreateManyWithoutUsersInput
  language: LanguageCreateOneWithoutUsersInput
}

input UserCreateManyWithoutJobsInput {
  create: [UserCreateWithoutJobsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutLanguageInput {
  create: [UserCreateWithoutLanguageInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutEmployeeInput {
  create: UserCreateWithoutEmployeeInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutEmployeeInput {
  role: Role!
  email: String!
  image: String
  name: String!
  password: String!
  jobs: JobCreateManyWithoutUsersInput
  language: LanguageCreateOneWithoutUsersInput
}

input UserCreateWithoutJobsInput {
  role: Role!
  email: String!
  image: String
  name: String!
  password: String!
  employee: EmployeeCreateOneWithoutUserInput
  language: LanguageCreateOneWithoutUsersInput
}

input UserCreateWithoutLanguageInput {
  role: Role!
  email: String!
  image: String
  name: String!
  password: String!
  employee: EmployeeCreateOneWithoutUserInput
  jobs: JobCreateManyWithoutUsersInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
  role_ASC
  role_DESC
  updatedAt_ASC
  updatedAt_DESC
  email_ASC
  email_DESC
  image_ASC
  image_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  createdAt: DateTime!
  id: ID!
  role: Role!
  updatedAt: DateTime!
  email: String!
  image: String
  name: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  role: Role
  email: String
  image: String
  name: String
  password: String
  employee: EmployeeUpdateOneWithoutUserInput
  jobs: JobUpdateManyWithoutUsersInput
  language: LanguageUpdateOneWithoutUsersInput
}

input UserUpdateManyWithoutJobsInput {
  create: [UserCreateWithoutJobsInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutJobsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutJobsInput!]
}

input UserUpdateManyWithoutLanguageInput {
  create: [UserCreateWithoutLanguageInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutLanguageInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutLanguageInput!]
}

input UserUpdateOneWithoutEmployeeInput {
  create: UserCreateWithoutEmployeeInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutEmployeeDataInput
  upsert: UserUpsertWithoutEmployeeInput
}

input UserUpdateWithoutEmployeeDataInput {
  role: Role
  email: String
  image: String
  name: String
  password: String
  jobs: JobUpdateManyWithoutUsersInput
  language: LanguageUpdateOneWithoutUsersInput
}

input UserUpdateWithoutJobsDataInput {
  role: Role
  email: String
  image: String
  name: String
  password: String
  employee: EmployeeUpdateOneWithoutUserInput
  language: LanguageUpdateOneWithoutUsersInput
}

input UserUpdateWithoutLanguageDataInput {
  role: Role
  email: String
  image: String
  name: String
  password: String
  employee: EmployeeUpdateOneWithoutUserInput
  jobs: JobUpdateManyWithoutUsersInput
}

input UserUpdateWithWhereUniqueWithoutJobsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutJobsDataInput!
}

input UserUpdateWithWhereUniqueWithoutLanguageInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutLanguageDataInput!
}

input UserUpsertWithoutEmployeeInput {
  update: UserUpdateWithoutEmployeeDataInput!
  create: UserCreateWithoutEmployeeInput!
}

input UserUpsertWithWhereUniqueWithoutJobsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutJobsDataInput!
  create: UserCreateWithoutJobsInput!
}

input UserUpsertWithWhereUniqueWithoutLanguageInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutLanguageDataInput!
  create: UserCreateWithoutLanguageInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  role: Role

  """All values that are not equal to given value."""
  role_not: Role

  """All values that are contained in given list."""
  role_in: [Role!]

  """All values that are not contained in given list."""
  role_not_in: [Role!]
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  image: String

  """All values that are not equal to given value."""
  image_not: String

  """All values that are contained in given list."""
  image_in: [String!]

  """All values that are not contained in given list."""
  image_not_in: [String!]

  """All values less than the given value."""
  image_lt: String

  """All values less than or equal the given value."""
  image_lte: String

  """All values greater than the given value."""
  image_gt: String

  """All values greater than or equal the given value."""
  image_gte: String

  """All values containing the given string."""
  image_contains: String

  """All values not containing the given string."""
  image_not_contains: String

  """All values starting with the given string."""
  image_starts_with: String

  """All values not starting with the given string."""
  image_not_starts_with: String

  """All values ending with the given string."""
  image_ends_with: String

  """All values not ending with the given string."""
  image_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  employee: EmployeeWhereInput
  jobs_every: JobWhereInput
  jobs_some: JobWhereInput
  jobs_none: JobWhereInput
  language: LanguageWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Vehicle implements Node {
  color: String
  description: String
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  id: ID!
  name: String!
  plate: String!
  year: Int
}

"""A connection to a list of items."""
type VehicleConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [VehicleEdge]!
  aggregate: AggregateVehicle!
}

input VehicleCreateInput {
  color: String
  description: String
  name: String!
  plate: String!
  year: Int
  events: EventCreateManyWithoutVehiclesInput
}

input VehicleCreateManyWithoutEventsInput {
  create: [VehicleCreateWithoutEventsInput!]
  connect: [VehicleWhereUniqueInput!]
}

input VehicleCreateWithoutEventsInput {
  color: String
  description: String
  name: String!
  plate: String!
  year: Int
}

"""An edge in a connection."""
type VehicleEdge {
  """The item at the end of the edge."""
  node: Vehicle!

  """A cursor for use in pagination."""
  cursor: String!
}

enum VehicleOrderByInput {
  color_ASC
  color_DESC
  description_ASC
  description_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  plate_ASC
  plate_DESC
  year_ASC
  year_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type VehiclePreviousValues {
  color: String
  description: String
  id: ID!
  name: String!
  plate: String!
  year: Int
}

type VehicleSubscriptionPayload {
  mutation: MutationType!
  node: Vehicle
  updatedFields: [String!]
  previousValues: VehiclePreviousValues
}

input VehicleSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [VehicleSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [VehicleSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [VehicleSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: VehicleWhereInput
}

input VehicleUpdateInput {
  color: String
  description: String
  name: String
  plate: String
  year: Int
  events: EventUpdateManyWithoutVehiclesInput
}

input VehicleUpdateManyWithoutEventsInput {
  create: [VehicleCreateWithoutEventsInput!]
  connect: [VehicleWhereUniqueInput!]
  disconnect: [VehicleWhereUniqueInput!]
  delete: [VehicleWhereUniqueInput!]
  update: [VehicleUpdateWithWhereUniqueWithoutEventsInput!]
  upsert: [VehicleUpsertWithWhereUniqueWithoutEventsInput!]
}

input VehicleUpdateWithoutEventsDataInput {
  color: String
  description: String
  name: String
  plate: String
  year: Int
}

input VehicleUpdateWithWhereUniqueWithoutEventsInput {
  where: VehicleWhereUniqueInput!
  data: VehicleUpdateWithoutEventsDataInput!
}

input VehicleUpsertWithWhereUniqueWithoutEventsInput {
  where: VehicleWhereUniqueInput!
  update: VehicleUpdateWithoutEventsDataInput!
  create: VehicleCreateWithoutEventsInput!
}

input VehicleWhereInput {
  """Logical AND on all given filters."""
  AND: [VehicleWhereInput!]

  """Logical OR on all given filters."""
  OR: [VehicleWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [VehicleWhereInput!]
  color: String

  """All values that are not equal to given value."""
  color_not: String

  """All values that are contained in given list."""
  color_in: [String!]

  """All values that are not contained in given list."""
  color_not_in: [String!]

  """All values less than the given value."""
  color_lt: String

  """All values less than or equal the given value."""
  color_lte: String

  """All values greater than the given value."""
  color_gt: String

  """All values greater than or equal the given value."""
  color_gte: String

  """All values containing the given string."""
  color_contains: String

  """All values not containing the given string."""
  color_not_contains: String

  """All values starting with the given string."""
  color_starts_with: String

  """All values not starting with the given string."""
  color_not_starts_with: String

  """All values ending with the given string."""
  color_ends_with: String

  """All values not ending with the given string."""
  color_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  plate: String

  """All values that are not equal to given value."""
  plate_not: String

  """All values that are contained in given list."""
  plate_in: [String!]

  """All values that are not contained in given list."""
  plate_not_in: [String!]

  """All values less than the given value."""
  plate_lt: String

  """All values less than or equal the given value."""
  plate_lte: String

  """All values greater than the given value."""
  plate_gt: String

  """All values greater than or equal the given value."""
  plate_gte: String

  """All values containing the given string."""
  plate_contains: String

  """All values not containing the given string."""
  plate_not_contains: String

  """All values starting with the given string."""
  plate_starts_with: String

  """All values not starting with the given string."""
  plate_not_starts_with: String

  """All values ending with the given string."""
  plate_ends_with: String

  """All values not ending with the given string."""
  plate_not_ends_with: String
  year: Int

  """All values that are not equal to given value."""
  year_not: Int

  """All values that are contained in given list."""
  year_in: [Int!]

  """All values that are not contained in given list."""
  year_not_in: [Int!]

  """All values less than the given value."""
  year_lt: Int

  """All values less than or equal the given value."""
  year_lte: Int

  """All values greater than the given value."""
  year_gt: Int

  """All values greater than or equal the given value."""
  year_gte: Int
  events_every: EventWhereInput
  events_some: EventWhereInput
  events_none: EventWhereInput
}

input VehicleWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type SectionTypes =   'Title' |
  'Subtitle' |
  'Subheading' |
  'Text' |
  'Items'

export type Channel =   'Email' |
  'Phone' |
  'Call' |
  'Message'

export type BudgetLineOrderByInput =   'description_ASC' |
  'description_DESC' |
  'id_ASC' |
  'id_DESC' |
  'quantity_ASC' |
  'quantity_DESC' |
  'unitPrice_ASC' |
  'unitPrice_DESC' |
  'value_ASC' |
  'value_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type TaxOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'value_ASC' |
  'value_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type Role =   'Admin' |
  'Freelance' |
  'Employee'

export type EventTypeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type JobOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LanguageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'type_ASC' |
  'type_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type EmployeeOrderByInput =   'endedAt_ASC' |
  'endedAt_DESC' |
  'estimatedEndAt_ASC' |
  'estimatedEndAt_DESC' |
  'estimatedStartAt_ASC' |
  'estimatedStartAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'startedAt_ASC' |
  'startedAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CommunicationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'message_ASC' |
  'message_DESC' |
  'subject_ASC' |
  'subject_DESC' |
  'channel_ASC' |
  'channel_DESC' |
  'date_ASC' |
  'date_DESC' |
  'gmtOffset_ASC' |
  'gmtOffset_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type EmployeeEstimationOrderByInput =   'estimatedEndAt_ASC' |
  'estimatedEndAt_DESC' |
  'estimatedStartAt_ASC' |
  'estimatedStartAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'number_ASC' |
  'number_DESC' |
  'pricePerHour_ASC' |
  'pricePerHour_DESC' |
  'total_ASC' |
  'total_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ClientContactOrderByInput =   'email_ASC' |
  'email_DESC' |
  'id_ASC' |
  'id_DESC' |
  'mobilePhone_ASC' |
  'mobilePhone_DESC' |
  'name_ASC' |
  'name_DESC' |
  'phoneNumber_ASC' |
  'phoneNumber_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'id_ASC' |
  'id_DESC' |
  'role_ASC' |
  'role_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'email_ASC' |
  'email_DESC' |
  'image_ASC' |
  'image_DESC' |
  'name_ASC' |
  'name_DESC' |
  'password_ASC' |
  'password_DESC'

export type StuffOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'quantity_ASC' |
  'quantity_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type SectionItemOrderByInput =   'content_ASC' |
  'content_DESC' |
  'h_ASC' |
  'h_DESC' |
  'i_ASC' |
  'i_DESC' |
  'id_ASC' |
  'id_DESC' |
  'isDraggable_ASC' |
  'isDraggable_DESC' |
  'isResizable_ASC' |
  'isResizable_DESC' |
  'maxH_ASC' |
  'maxH_DESC' |
  'maxW_ASC' |
  'maxW_DESC' |
  'minH_ASC' |
  'minH_DESC' |
  'minW_ASC' |
  'minW_DESC' |
  'moved_ASC' |
  'moved_DESC' |
  'persons_ASC' |
  'persons_DESC' |
  'price_ASC' |
  'price_DESC' |
  'static_ASC' |
  'static_DESC' |
  'time_ASC' |
  'time_DESC' |
  'title_ASC' |
  'title_DESC' |
  'type_ASC' |
  'type_DESC' |
  'w_ASC' |
  'w_DESC' |
  'x_ASC' |
  'x_DESC' |
  'y_ASC' |
  'y_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type ItemOrderByInput =   'description_ASC' |
  'description_DESC' |
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'internalDescription_ASC' |
  'internalDescription_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PlaceOrderByInput =   'address_ASC' |
  'address_DESC' |
  'city_ASC' |
  'city_DESC' |
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'postalCode_ASC' |
  'postalCode_DESC' |
  'country_ASC' |
  'country_DESC' |
  'note_ASC' |
  'note_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ClientOrderByInput =   'address_ASC' |
  'address_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'email_ASC' |
  'email_DESC' |
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'phone_ASC' |
  'phone_DESC' |
  'tva_ASC' |
  'tva_DESC' |
  'type_ASC' |
  'type_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type Country =   'BE'

export type EventOrderByInput =   'id_ASC' |
  'id_DESC' |
  'endTime_ASC' |
  'endTime_DESC' |
  'gmtOffset_ASC' |
  'gmtOffset_DESC' |
  'startTime_ASC' |
  'startTime_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type OfferOrderByInput =   'version_ASC' |
  'version_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'customMessage_ASC' |
  'customMessage_DESC' |
  'id_ASC' |
  'id_DESC' |
  'status_ASC' |
  'status_DESC' |
  'address_ASC' |
  'address_DESC' |
  'city_ASC' |
  'city_DESC' |
  'endTime_ASC' |
  'endTime_DESC' |
  'gmtOffset_ASC' |
  'gmtOffset_DESC' |
  'maxPersons_ASC' |
  'maxPersons_DESC' |
  'minPersons_ASC' |
  'minPersons_DESC' |
  'name_ASC' |
  'name_DESC' |
  'postalCode_ASC' |
  'postalCode_DESC' |
  'startTime_ASC' |
  'startTime_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type StatusOffer =   'Accepted' |
  'Rejected' |
  'Pending' |
  'Template'

export type ClientType =   'Prive' |
  'Societe'

export type PlaceContactOrderByInput =   'email_ASC' |
  'email_DESC' |
  'id_ASC' |
  'id_DESC' |
  'mobilePhone_ASC' |
  'mobilePhone_DESC' |
  'name_ASC' |
  'name_DESC' |
  'phoneNumber_ASC' |
  'phoneNumber_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type VehicleOrderByInput =   'color_ASC' |
  'color_DESC' |
  'description_ASC' |
  'description_DESC' |
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'plate_ASC' |
  'plate_DESC' |
  'year_ASC' |
  'year_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LanguageEnum =   'FR' |
  'NL' |
  'EN'

export interface TaxCreateInput {
  name: String
  value: Float
  budgetLines?: BudgetLineCreateManyWithoutTaxInput
}

export interface ClientWhereInput {
  AND?: ClientWhereInput[] | ClientWhereInput
  OR?: ClientWhereInput[] | ClientWhereInput
  NOT?: ClientWhereInput[] | ClientWhereInput
  address?: String
  address_not?: String
  address_in?: String[] | String
  address_not_in?: String[] | String
  address_lt?: String
  address_lte?: String
  address_gt?: String
  address_gte?: String
  address_contains?: String
  address_not_contains?: String
  address_starts_with?: String
  address_not_starts_with?: String
  address_ends_with?: String
  address_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  phone?: String
  phone_not?: String
  phone_in?: String[] | String
  phone_not_in?: String[] | String
  phone_lt?: String
  phone_lte?: String
  phone_gt?: String
  phone_gte?: String
  phone_contains?: String
  phone_not_contains?: String
  phone_starts_with?: String
  phone_not_starts_with?: String
  phone_ends_with?: String
  phone_not_ends_with?: String
  tva?: String
  tva_not?: String
  tva_in?: String[] | String
  tva_not_in?: String[] | String
  tva_lt?: String
  tva_lte?: String
  tva_gt?: String
  tva_gte?: String
  tva_contains?: String
  tva_not_contains?: String
  tva_starts_with?: String
  tva_not_starts_with?: String
  tva_ends_with?: String
  tva_not_ends_with?: String
  type?: ClientType
  type_not?: ClientType
  type_in?: ClientType[] | ClientType
  type_not_in?: ClientType[] | ClientType
  events_every?: EventWhereInput
  events_some?: EventWhereInput
  events_none?: EventWhereInput
  offers_every?: OfferWhereInput
  offers_some?: OfferWhereInput
  offers_none?: OfferWhereInput
  clientContacts_every?: ClientContactWhereInput
  clientContacts_some?: ClientContactWhereInput
  clientContacts_none?: ClientContactWhereInput
  language?: LanguageWhereInput
  communications_every?: CommunicationWhereInput
  communications_some?: CommunicationWhereInput
  communications_none?: CommunicationWhereInput
}

export interface ClientContactUpdateManyWithoutClientInput {
  create?: ClientContactCreateWithoutClientInput[] | ClientContactCreateWithoutClientInput
  connect?: ClientContactWhereUniqueInput[] | ClientContactWhereUniqueInput
  disconnect?: ClientContactWhereUniqueInput[] | ClientContactWhereUniqueInput
  delete?: ClientContactWhereUniqueInput[] | ClientContactWhereUniqueInput
  update?: ClientContactUpdateWithWhereUniqueWithoutClientInput[] | ClientContactUpdateWithWhereUniqueWithoutClientInput
  upsert?: ClientContactUpsertWithWhereUniqueWithoutClientInput[] | ClientContactUpsertWithWhereUniqueWithoutClientInput
}

export interface VehicleWhereInput {
  AND?: VehicleWhereInput[] | VehicleWhereInput
  OR?: VehicleWhereInput[] | VehicleWhereInput
  NOT?: VehicleWhereInput[] | VehicleWhereInput
  color?: String
  color_not?: String
  color_in?: String[] | String
  color_not_in?: String[] | String
  color_lt?: String
  color_lte?: String
  color_gt?: String
  color_gte?: String
  color_contains?: String
  color_not_contains?: String
  color_starts_with?: String
  color_not_starts_with?: String
  color_ends_with?: String
  color_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  plate?: String
  plate_not?: String
  plate_in?: String[] | String
  plate_not_in?: String[] | String
  plate_lt?: String
  plate_lte?: String
  plate_gt?: String
  plate_gte?: String
  plate_contains?: String
  plate_not_contains?: String
  plate_starts_with?: String
  plate_not_starts_with?: String
  plate_ends_with?: String
  plate_not_ends_with?: String
  year?: Int
  year_not?: Int
  year_in?: Int[] | Int
  year_not_in?: Int[] | Int
  year_lt?: Int
  year_lte?: Int
  year_gt?: Int
  year_gte?: Int
  events_every?: EventWhereInput
  events_some?: EventWhereInput
  events_none?: EventWhereInput
}

export interface ClientContactUpdateWithWhereUniqueWithoutClientInput {
  where: ClientContactWhereUniqueInput
  data: ClientContactUpdateWithoutClientDataInput
}

export interface StuffWhereInput {
  AND?: StuffWhereInput[] | StuffWhereInput
  OR?: StuffWhereInput[] | StuffWhereInput
  NOT?: StuffWhereInput[] | StuffWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  quantity?: Int
  quantity_not?: Int
  quantity_in?: Int[] | Int
  quantity_not_in?: Int[] | Int
  quantity_lt?: Int
  quantity_lte?: Int
  quantity_gt?: Int
  quantity_gte?: Int
  events_every?: EventWhereInput
  events_some?: EventWhereInput
  events_none?: EventWhereInput
}

export interface ItemCreateManyWithoutSectionItemsInput {
  create?: ItemCreateWithoutSectionItemsInput[] | ItemCreateWithoutSectionItemsInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
}

export interface ClientContactUpsertWithoutOffersInput {
  update: ClientContactUpdateWithoutOffersDataInput
  create: ClientContactCreateWithoutOffersInput
}

export interface ItemCreateWithoutSectionItemsInput {
  description: String
  name: String
  internalDescription?: String
  language?: LanguageCreateOneWithoutItemsInput
}

export interface ClientContactUpdateWithoutClientDataInput {
  email?: String
  mobilePhone?: String
  name?: String
  phoneNumber?: String
  offers?: OfferUpdateManyWithoutClientContactInput
}

export interface LanguageCreateOneWithoutItemsInput {
  create?: LanguageCreateWithoutItemsInput
  connect?: LanguageWhereUniqueInput
}

export interface VehicleSubscriptionWhereInput {
  AND?: VehicleSubscriptionWhereInput[] | VehicleSubscriptionWhereInput
  OR?: VehicleSubscriptionWhereInput[] | VehicleSubscriptionWhereInput
  NOT?: VehicleSubscriptionWhereInput[] | VehicleSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: VehicleWhereInput
}

export interface LanguageCreateWithoutItemsInput {
  type: LanguageEnum
  clients?: ClientCreateManyWithoutLanguageInput
  offers?: OfferCreateManyWithoutLanguageInput
  users?: UserCreateManyWithoutLanguageInput
}

export interface StuffSubscriptionWhereInput {
  AND?: StuffSubscriptionWhereInput[] | StuffSubscriptionWhereInput
  OR?: StuffSubscriptionWhereInput[] | StuffSubscriptionWhereInput
  NOT?: StuffSubscriptionWhereInput[] | StuffSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: StuffWhereInput
}

export interface UserCreateManyWithoutLanguageInput {
  create?: UserCreateWithoutLanguageInput[] | UserCreateWithoutLanguageInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface ClientContactWhereInput {
  AND?: ClientContactWhereInput[] | ClientContactWhereInput
  OR?: ClientContactWhereInput[] | ClientContactWhereInput
  NOT?: ClientContactWhereInput[] | ClientContactWhereInput
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  mobilePhone?: String
  mobilePhone_not?: String
  mobilePhone_in?: String[] | String
  mobilePhone_not_in?: String[] | String
  mobilePhone_lt?: String
  mobilePhone_lte?: String
  mobilePhone_gt?: String
  mobilePhone_gte?: String
  mobilePhone_contains?: String
  mobilePhone_not_contains?: String
  mobilePhone_starts_with?: String
  mobilePhone_not_starts_with?: String
  mobilePhone_ends_with?: String
  mobilePhone_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  phoneNumber?: String
  phoneNumber_not?: String
  phoneNumber_in?: String[] | String
  phoneNumber_not_in?: String[] | String
  phoneNumber_lt?: String
  phoneNumber_lte?: String
  phoneNumber_gt?: String
  phoneNumber_gte?: String
  phoneNumber_contains?: String
  phoneNumber_not_contains?: String
  phoneNumber_starts_with?: String
  phoneNumber_not_starts_with?: String
  phoneNumber_ends_with?: String
  phoneNumber_not_ends_with?: String
  client?: ClientWhereInput
  offers_every?: OfferWhereInput
  offers_some?: OfferWhereInput
  offers_none?: OfferWhereInput
}

export interface UserCreateWithoutLanguageInput {
  role: Role
  email: String
  image?: String
  name: String
  password: String
  employee?: EmployeeCreateOneWithoutUserInput
  jobs?: JobCreateManyWithoutUsersInput
}

export interface TaxWhereInput {
  AND?: TaxWhereInput[] | TaxWhereInput
  OR?: TaxWhereInput[] | TaxWhereInput
  NOT?: TaxWhereInput[] | TaxWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  value?: Float
  value_not?: Float
  value_in?: Float[] | Float
  value_not_in?: Float[] | Float
  value_lt?: Float
  value_lte?: Float
  value_gt?: Float
  value_gte?: Float
  budgetLines_every?: BudgetLineWhereInput
  budgetLines_some?: BudgetLineWhereInput
  budgetLines_none?: BudgetLineWhereInput
}

export interface EmployeeCreateOneWithoutUserInput {
  create?: EmployeeCreateWithoutUserInput
  connect?: EmployeeWhereUniqueInput
}

export interface BudgetLineWhereInput {
  AND?: BudgetLineWhereInput[] | BudgetLineWhereInput
  OR?: BudgetLineWhereInput[] | BudgetLineWhereInput
  NOT?: BudgetLineWhereInput[] | BudgetLineWhereInput
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  quantity?: Int
  quantity_not?: Int
  quantity_in?: Int[] | Int
  quantity_not_in?: Int[] | Int
  quantity_lt?: Int
  quantity_lte?: Int
  quantity_gt?: Int
  quantity_gte?: Int
  unitPrice?: Float
  unitPrice_not?: Float
  unitPrice_in?: Float[] | Float
  unitPrice_not_in?: Float[] | Float
  unitPrice_lt?: Float
  unitPrice_lte?: Float
  unitPrice_gt?: Float
  unitPrice_gte?: Float
  value?: Float
  value_not?: Float
  value_in?: Float[] | Float
  value_not_in?: Float[] | Float
  value_lt?: Float
  value_lte?: Float
  value_gt?: Float
  value_gte?: Float
  offer?: OfferWhereInput
  tax?: TaxWhereInput
}

export interface EmployeeCreateWithoutUserInput {
  endedAt?: DateTime
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  startedAt?: DateTime
  event?: EventCreateOneWithoutEmployeesInput
  job?: JobCreateOneWithoutEmployeesInput
}

export interface EventTypeSubscriptionWhereInput {
  AND?: EventTypeSubscriptionWhereInput[] | EventTypeSubscriptionWhereInput
  OR?: EventTypeSubscriptionWhereInput[] | EventTypeSubscriptionWhereInput
  NOT?: EventTypeSubscriptionWhereInput[] | EventTypeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: EventTypeWhereInput
}

export interface JobCreateOneWithoutEmployeesInput {
  create?: JobCreateWithoutEmployeesInput
  connect?: JobWhereUniqueInput
}

export interface EmployeeEstimationWhereInput {
  AND?: EmployeeEstimationWhereInput[] | EmployeeEstimationWhereInput
  OR?: EmployeeEstimationWhereInput[] | EmployeeEstimationWhereInput
  NOT?: EmployeeEstimationWhereInput[] | EmployeeEstimationWhereInput
  estimatedEndAt?: DateTime
  estimatedEndAt_not?: DateTime
  estimatedEndAt_in?: DateTime[] | DateTime
  estimatedEndAt_not_in?: DateTime[] | DateTime
  estimatedEndAt_lt?: DateTime
  estimatedEndAt_lte?: DateTime
  estimatedEndAt_gt?: DateTime
  estimatedEndAt_gte?: DateTime
  estimatedStartAt?: DateTime
  estimatedStartAt_not?: DateTime
  estimatedStartAt_in?: DateTime[] | DateTime
  estimatedStartAt_not_in?: DateTime[] | DateTime
  estimatedStartAt_lt?: DateTime
  estimatedStartAt_lte?: DateTime
  estimatedStartAt_gt?: DateTime
  estimatedStartAt_gte?: DateTime
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  number?: Int
  number_not?: Int
  number_in?: Int[] | Int
  number_not_in?: Int[] | Int
  number_lt?: Int
  number_lte?: Int
  number_gt?: Int
  number_gte?: Int
  pricePerHour?: Float
  pricePerHour_not?: Float
  pricePerHour_in?: Float[] | Float
  pricePerHour_not_in?: Float[] | Float
  pricePerHour_lt?: Float
  pricePerHour_lte?: Float
  pricePerHour_gt?: Float
  pricePerHour_gte?: Float
  total?: Float
  total_not?: Float
  total_in?: Float[] | Float
  total_not_in?: Float[] | Float
  total_lt?: Float
  total_lte?: Float
  total_gt?: Float
  total_gte?: Float
  job?: JobWhereInput
  offer?: OfferWhereInput
}

export interface JobCreateWithoutEmployeesInput {
  name: String
  employeeEstimations?: EmployeeEstimationCreateManyWithoutJobInput
  users?: UserCreateManyWithoutJobsInput
}

export interface JobWhereInput {
  AND?: JobWhereInput[] | JobWhereInput
  OR?: JobWhereInput[] | JobWhereInput
  NOT?: JobWhereInput[] | JobWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  employeeEstimations_every?: EmployeeEstimationWhereInput
  employeeEstimations_some?: EmployeeEstimationWhereInput
  employeeEstimations_none?: EmployeeEstimationWhereInput
  employees_every?: EmployeeWhereInput
  employees_some?: EmployeeWhereInput
  employees_none?: EmployeeWhereInput
  users_every?: UserWhereInput
  users_some?: UserWhereInput
  users_none?: UserWhereInput
}

export interface UserCreateManyWithoutJobsInput {
  create?: UserCreateWithoutJobsInput[] | UserCreateWithoutJobsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  role?: Role
  role_not?: Role
  role_in?: Role[] | Role
  role_not_in?: Role[] | Role
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  image?: String
  image_not?: String
  image_in?: String[] | String
  image_not_in?: String[] | String
  image_lt?: String
  image_lte?: String
  image_gt?: String
  image_gte?: String
  image_contains?: String
  image_not_contains?: String
  image_starts_with?: String
  image_not_starts_with?: String
  image_ends_with?: String
  image_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  employee?: EmployeeWhereInput
  jobs_every?: JobWhereInput
  jobs_some?: JobWhereInput
  jobs_none?: JobWhereInput
  language?: LanguageWhereInput
}

export interface UserCreateWithoutJobsInput {
  role: Role
  email: String
  image?: String
  name: String
  password: String
  employee?: EmployeeCreateOneWithoutUserInput
  language?: LanguageCreateOneWithoutUsersInput
}

export interface PlaceSubscriptionWhereInput {
  AND?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput
  OR?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput
  NOT?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PlaceWhereInput
}

export interface LanguageCreateOneWithoutUsersInput {
  create?: LanguageCreateWithoutUsersInput
  connect?: LanguageWhereUniqueInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface LanguageCreateWithoutUsersInput {
  type: LanguageEnum
  clients?: ClientCreateManyWithoutLanguageInput
  offers?: OfferCreateManyWithoutLanguageInput
  items?: ItemCreateManyWithoutLanguageInput
}

export interface OfferSubscriptionWhereInput {
  AND?: OfferSubscriptionWhereInput[] | OfferSubscriptionWhereInput
  OR?: OfferSubscriptionWhereInput[] | OfferSubscriptionWhereInput
  NOT?: OfferSubscriptionWhereInput[] | OfferSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OfferWhereInput
}

export interface EmployeeCreateManyWithoutEventInput {
  create?: EmployeeCreateWithoutEventInput[] | EmployeeCreateWithoutEventInput
  connect?: EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput
}

export interface EventSubscriptionWhereInput {
  AND?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput
  OR?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput
  NOT?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: EventWhereInput
}

export interface EmployeeCreateWithoutEventInput {
  endedAt?: DateTime
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  startedAt?: DateTime
  job?: JobCreateOneWithoutEmployeesInput
  user?: UserCreateOneWithoutEmployeeInput
}

export interface SectionItemWhereInput {
  AND?: SectionItemWhereInput[] | SectionItemWhereInput
  OR?: SectionItemWhereInput[] | SectionItemWhereInput
  NOT?: SectionItemWhereInput[] | SectionItemWhereInput
  content?: String
  content_not?: String
  content_in?: String[] | String
  content_not_in?: String[] | String
  content_lt?: String
  content_lte?: String
  content_gt?: String
  content_gte?: String
  content_contains?: String
  content_not_contains?: String
  content_starts_with?: String
  content_not_starts_with?: String
  content_ends_with?: String
  content_not_ends_with?: String
  h?: Int
  h_not?: Int
  h_in?: Int[] | Int
  h_not_in?: Int[] | Int
  h_lt?: Int
  h_lte?: Int
  h_gt?: Int
  h_gte?: Int
  i?: String
  i_not?: String
  i_in?: String[] | String
  i_not_in?: String[] | String
  i_lt?: String
  i_lte?: String
  i_gt?: String
  i_gte?: String
  i_contains?: String
  i_not_contains?: String
  i_starts_with?: String
  i_not_starts_with?: String
  i_ends_with?: String
  i_not_ends_with?: String
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  isDraggable?: Boolean
  isDraggable_not?: Boolean
  isResizable?: Boolean
  isResizable_not?: Boolean
  maxH?: Int
  maxH_not?: Int
  maxH_in?: Int[] | Int
  maxH_not_in?: Int[] | Int
  maxH_lt?: Int
  maxH_lte?: Int
  maxH_gt?: Int
  maxH_gte?: Int
  maxW?: Int
  maxW_not?: Int
  maxW_in?: Int[] | Int
  maxW_not_in?: Int[] | Int
  maxW_lt?: Int
  maxW_lte?: Int
  maxW_gt?: Int
  maxW_gte?: Int
  minH?: Int
  minH_not?: Int
  minH_in?: Int[] | Int
  minH_not_in?: Int[] | Int
  minH_lt?: Int
  minH_lte?: Int
  minH_gt?: Int
  minH_gte?: Int
  minW?: Int
  minW_not?: Int
  minW_in?: Int[] | Int
  minW_not_in?: Int[] | Int
  minW_lt?: Int
  minW_lte?: Int
  minW_gt?: Int
  minW_gte?: Int
  moved?: Boolean
  moved_not?: Boolean
  persons?: Int
  persons_not?: Int
  persons_in?: Int[] | Int
  persons_not_in?: Int[] | Int
  persons_lt?: Int
  persons_lte?: Int
  persons_gt?: Int
  persons_gte?: Int
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  static?: Boolean
  static_not?: Boolean
  time?: DateTime
  time_not?: DateTime
  time_in?: DateTime[] | DateTime
  time_not_in?: DateTime[] | DateTime
  time_lt?: DateTime
  time_lte?: DateTime
  time_gt?: DateTime
  time_gte?: DateTime
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  type?: SectionTypes
  type_not?: SectionTypes
  type_in?: SectionTypes[] | SectionTypes
  type_not_in?: SectionTypes[] | SectionTypes
  w?: Int
  w_not?: Int
  w_in?: Int[] | Int
  w_not_in?: Int[] | Int
  w_lt?: Int
  w_lte?: Int
  w_gt?: Int
  w_gte?: Int
  x?: Int
  x_not?: Int
  x_in?: Int[] | Int
  x_not_in?: Int[] | Int
  x_lt?: Int
  x_lte?: Int
  x_gt?: Int
  x_gte?: Int
  y?: Int
  y_not?: Int
  y_in?: Int[] | Int
  y_not_in?: Int[] | Int
  y_lt?: Int
  y_lte?: Int
  y_gt?: Int
  y_gte?: Int
  offer?: OfferWhereInput
  items_every?: ItemWhereInput
  items_some?: ItemWhereInput
  items_none?: ItemWhereInput
}

export interface CommunicationCreateInput {
  message: String
  subject: String
  channel: Channel
  date: DateTime
  gmtOffset: String
  client?: ClientCreateOneWithoutCommunicationsInput
}

export interface ItemWhereInput {
  AND?: ItemWhereInput[] | ItemWhereInput
  OR?: ItemWhereInput[] | ItemWhereInput
  NOT?: ItemWhereInput[] | ItemWhereInput
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  internalDescription?: String
  internalDescription_not?: String
  internalDescription_in?: String[] | String
  internalDescription_not_in?: String[] | String
  internalDescription_lt?: String
  internalDescription_lte?: String
  internalDescription_gt?: String
  internalDescription_gte?: String
  internalDescription_contains?: String
  internalDescription_not_contains?: String
  internalDescription_starts_with?: String
  internalDescription_not_starts_with?: String
  internalDescription_ends_with?: String
  internalDescription_not_ends_with?: String
  language?: LanguageWhereInput
  sectionItems_every?: SectionItemWhereInput
  sectionItems_some?: SectionItemWhereInput
  sectionItems_none?: SectionItemWhereInput
}

export interface ClientCreateOneWithoutCommunicationsInput {
  create?: ClientCreateWithoutCommunicationsInput
  connect?: ClientWhereUniqueInput
}

export interface EventUpsertWithWhereUniqueWithoutVehiclesInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutVehiclesDataInput
  create: EventCreateWithoutVehiclesInput
}

export interface ClientCreateWithoutCommunicationsInput {
  address?: String
  email: String
  name: String
  phone: String
  tva?: String
  type?: ClientType
  events?: EventCreateManyWithoutClientInput
  offers?: OfferCreateManyWithoutClientInput
  clientContacts?: ClientContactCreateManyWithoutClientInput
  language?: LanguageCreateOneWithoutClientsInput
}

export interface OfferWhereInput {
  AND?: OfferWhereInput[] | OfferWhereInput
  OR?: OfferWhereInput[] | OfferWhereInput
  NOT?: OfferWhereInput[] | OfferWhereInput
  version?: Int
  version_not?: Int
  version_in?: Int[] | Int
  version_not_in?: Int[] | Int
  version_lt?: Int
  version_lte?: Int
  version_gt?: Int
  version_gte?: Int
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  customMessage?: String
  customMessage_not?: String
  customMessage_in?: String[] | String
  customMessage_not_in?: String[] | String
  customMessage_lt?: String
  customMessage_lte?: String
  customMessage_gt?: String
  customMessage_gte?: String
  customMessage_contains?: String
  customMessage_not_contains?: String
  customMessage_starts_with?: String
  customMessage_not_starts_with?: String
  customMessage_ends_with?: String
  customMessage_not_ends_with?: String
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  status?: StatusOffer
  status_not?: StatusOffer
  status_in?: StatusOffer[] | StatusOffer
  status_not_in?: StatusOffer[] | StatusOffer
  address?: String
  address_not?: String
  address_in?: String[] | String
  address_not_in?: String[] | String
  address_lt?: String
  address_lte?: String
  address_gt?: String
  address_gte?: String
  address_contains?: String
  address_not_contains?: String
  address_starts_with?: String
  address_not_starts_with?: String
  address_ends_with?: String
  address_not_ends_with?: String
  city?: String
  city_not?: String
  city_in?: String[] | String
  city_not_in?: String[] | String
  city_lt?: String
  city_lte?: String
  city_gt?: String
  city_gte?: String
  city_contains?: String
  city_not_contains?: String
  city_starts_with?: String
  city_not_starts_with?: String
  city_ends_with?: String
  city_not_ends_with?: String
  endTime?: DateTime
  endTime_not?: DateTime
  endTime_in?: DateTime[] | DateTime
  endTime_not_in?: DateTime[] | DateTime
  endTime_lt?: DateTime
  endTime_lte?: DateTime
  endTime_gt?: DateTime
  endTime_gte?: DateTime
  gmtOffset?: String
  gmtOffset_not?: String
  gmtOffset_in?: String[] | String
  gmtOffset_not_in?: String[] | String
  gmtOffset_lt?: String
  gmtOffset_lte?: String
  gmtOffset_gt?: String
  gmtOffset_gte?: String
  gmtOffset_contains?: String
  gmtOffset_not_contains?: String
  gmtOffset_starts_with?: String
  gmtOffset_not_starts_with?: String
  gmtOffset_ends_with?: String
  gmtOffset_not_ends_with?: String
  maxPersons?: Int
  maxPersons_not?: Int
  maxPersons_in?: Int[] | Int
  maxPersons_not_in?: Int[] | Int
  maxPersons_lt?: Int
  maxPersons_lte?: Int
  maxPersons_gt?: Int
  maxPersons_gte?: Int
  minPersons?: Int
  minPersons_not?: Int
  minPersons_in?: Int[] | Int
  minPersons_not_in?: Int[] | Int
  minPersons_lt?: Int
  minPersons_lte?: Int
  minPersons_gt?: Int
  minPersons_gte?: Int
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  postalCode?: String
  postalCode_not?: String
  postalCode_in?: String[] | String
  postalCode_not_in?: String[] | String
  postalCode_lt?: String
  postalCode_lte?: String
  postalCode_gt?: String
  postalCode_gte?: String
  postalCode_contains?: String
  postalCode_not_contains?: String
  postalCode_starts_with?: String
  postalCode_not_starts_with?: String
  postalCode_ends_with?: String
  postalCode_not_ends_with?: String
  startTime?: DateTime
  startTime_not?: DateTime
  startTime_in?: DateTime[] | DateTime
  startTime_not_in?: DateTime[] | DateTime
  startTime_lt?: DateTime
  startTime_lte?: DateTime
  startTime_gt?: DateTime
  startTime_gte?: DateTime
  client?: ClientWhereInput
  event?: EventWhereInput
  language?: LanguageWhereInput
  budgetLines_every?: BudgetLineWhereInput
  budgetLines_some?: BudgetLineWhereInput
  budgetLines_none?: BudgetLineWhereInput
  clientContact?: ClientContactWhereInput
  employeeEstimations_every?: EmployeeEstimationWhereInput
  employeeEstimations_some?: EmployeeEstimationWhereInput
  employeeEstimations_none?: EmployeeEstimationWhereInput
  eventType?: EventTypeWhereInput
  place?: PlaceWhereInput
  sectionItems_every?: SectionItemWhereInput
  sectionItems_some?: SectionItemWhereInput
  sectionItems_none?: SectionItemWhereInput
}

export interface EventCreateInput {
  endTime: DateTime
  gmtOffset: String
  startTime: DateTime
  client?: ClientCreateOneWithoutEventsInput
  offer?: OfferCreateOneWithoutEventInput
  employees?: EmployeeCreateManyWithoutEventInput
  stuffs?: StuffCreateManyWithoutEventsInput
  vehicles?: VehicleCreateManyWithoutEventsInput
}

export interface EventUpdateWithWhereUniqueWithoutVehiclesInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutVehiclesDataInput
}

export interface LanguageCreateInput {
  type: LanguageEnum
  clients?: ClientCreateManyWithoutLanguageInput
  offers?: OfferCreateManyWithoutLanguageInput
  items?: ItemCreateManyWithoutLanguageInput
  users?: UserCreateManyWithoutLanguageInput
}

export interface CommunicationWhereUniqueInput {
  id?: ID_Input
}

export interface OfferCreateInput {
  version?: Int
  customMessage?: String
  status: StatusOffer
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  startTime?: DateTime
  client?: ClientCreateOneWithoutOffersInput
  event?: EventCreateOneWithoutOfferInput
  language?: LanguageCreateOneWithoutOffersInput
  budgetLines?: BudgetLineCreateManyWithoutOfferInput
  clientContact?: ClientContactCreateOneWithoutOffersInput
  employeeEstimations?: EmployeeEstimationCreateManyWithoutOfferInput
  eventType?: EventTypeCreateOneWithoutOffersInput
  place?: PlaceCreateOneWithoutOfferInput
  sectionItems?: SectionItemCreateManyWithoutOfferInput
}

export interface LanguageWhereUniqueInput {
  id?: ID_Input
}

export interface ItemCreateInput {
  description: String
  name: String
  internalDescription?: String
  language?: LanguageCreateOneWithoutItemsInput
  sectionItems?: SectionItemCreateManyWithoutItemsInput
}

export interface ItemWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateInput {
  role: Role
  email: String
  image?: String
  name: String
  password: String
  employee?: EmployeeCreateOneWithoutUserInput
  jobs?: JobCreateManyWithoutUsersInput
  language?: LanguageCreateOneWithoutUsersInput
}

export interface ClientContactWhereUniqueInput {
  id?: ID_Input
}

export interface ClientContactCreateInput {
  email: String
  mobilePhone?: String
  name: String
  phoneNumber?: String
  client?: ClientCreateOneWithoutClientContactsInput
  offers?: OfferCreateManyWithoutClientContactInput
}

export interface BudgetLineWhereUniqueInput {
  id?: ID_Input
}

export interface PlaceCreateInput {
  address: String
  city: String
  name: String
  postalCode: String
  country?: Country
  note?: String
  offer?: OfferCreateOneWithoutPlaceInput
  placeContacts?: PlaceContactCreateManyWithoutPlaceInput
}

export interface EmployeeEstimationWhereUniqueInput {
  id?: ID_Input
}

export interface OfferCreateOneWithoutPlaceInput {
  create?: OfferCreateWithoutPlaceInput
  connect?: OfferWhereUniqueInput
}

export interface JobWhereUniqueInput {
  id?: ID_Input
}

export interface OfferCreateWithoutPlaceInput {
  version?: Int
  customMessage?: String
  status: StatusOffer
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  startTime?: DateTime
  client?: ClientCreateOneWithoutOffersInput
  event?: EventCreateOneWithoutOfferInput
  language?: LanguageCreateOneWithoutOffersInput
  budgetLines?: BudgetLineCreateManyWithoutOfferInput
  clientContact?: ClientContactCreateOneWithoutOffersInput
  employeeEstimations?: EmployeeEstimationCreateManyWithoutOfferInput
  eventType?: EventTypeCreateOneWithoutOffersInput
  sectionItems?: SectionItemCreateManyWithoutOfferInput
}

export interface SectionItemWhereUniqueInput {
  id?: ID_Input
}

export interface BudgetLineCreateInput {
  description: String
  quantity?: Int
  unitPrice?: Float
  value: Float
  offer?: OfferCreateOneWithoutBudgetLinesInput
  tax?: TaxCreateOneWithoutBudgetLinesInput
}

export interface TaxWhereUniqueInput {
  id?: ID_Input
}

export interface OfferCreateOneWithoutBudgetLinesInput {
  create?: OfferCreateWithoutBudgetLinesInput
  connect?: OfferWhereUniqueInput
}

export interface EventUpdateManyWithoutVehiclesInput {
  create?: EventCreateWithoutVehiclesInput[] | EventCreateWithoutVehiclesInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput
  update?: EventUpdateWithWhereUniqueWithoutVehiclesInput[] | EventUpdateWithWhereUniqueWithoutVehiclesInput
  upsert?: EventUpsertWithWhereUniqueWithoutVehiclesInput[] | EventUpsertWithWhereUniqueWithoutVehiclesInput
}

export interface OfferCreateWithoutBudgetLinesInput {
  version?: Int
  customMessage?: String
  status: StatusOffer
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  startTime?: DateTime
  client?: ClientCreateOneWithoutOffersInput
  event?: EventCreateOneWithoutOfferInput
  language?: LanguageCreateOneWithoutOffersInput
  clientContact?: ClientContactCreateOneWithoutOffersInput
  employeeEstimations?: EmployeeEstimationCreateManyWithoutOfferInput
  eventType?: EventTypeCreateOneWithoutOffersInput
  place?: PlaceCreateOneWithoutOfferInput
  sectionItems?: SectionItemCreateManyWithoutOfferInput
}

export interface BudgetLineUpsertWithWhereUniqueWithoutTaxInput {
  where: BudgetLineWhereUniqueInput
  update: BudgetLineUpdateWithoutTaxDataInput
  create: BudgetLineCreateWithoutTaxInput
}

export interface EmployeeCreateInput {
  endedAt?: DateTime
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  startedAt?: DateTime
  event?: EventCreateOneWithoutEmployeesInput
  job?: JobCreateOneWithoutEmployeesInput
  user?: UserCreateOneWithoutEmployeeInput
}

export interface BudgetLineUpdateWithWhereUniqueWithoutTaxInput {
  where: BudgetLineWhereUniqueInput
  data: BudgetLineUpdateWithoutTaxDataInput
}

export interface EmployeeEstimationCreateInput {
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  number: Int
  pricePerHour?: Float
  total?: Float
  job?: JobCreateOneWithoutEmployeeEstimationsInput
  offer?: OfferCreateOneWithoutEmployeeEstimationsInput
}

export interface TaxUpdateInput {
  name?: String
  value?: Float
  budgetLines?: BudgetLineUpdateManyWithoutTaxInput
}

export interface EventTypeCreateInput {
  name: String
  offers?: OfferCreateManyWithoutEventTypeInput
}

export interface EventUpdateWithoutStuffsDataInput {
  endTime?: DateTime
  gmtOffset?: String
  startTime?: DateTime
  client?: ClientUpdateOneWithoutEventsInput
  offer?: OfferUpdateOneWithoutEventInput
  employees?: EmployeeUpdateManyWithoutEventInput
  vehicles?: VehicleUpdateManyWithoutEventsInput
}

export interface OfferCreateManyWithoutEventTypeInput {
  create?: OfferCreateWithoutEventTypeInput[] | OfferCreateWithoutEventTypeInput
  connect?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
}

export interface EventUpdateManyWithoutStuffsInput {
  create?: EventCreateWithoutStuffsInput[] | EventCreateWithoutStuffsInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput
  update?: EventUpdateWithWhereUniqueWithoutStuffsInput[] | EventUpdateWithWhereUniqueWithoutStuffsInput
  upsert?: EventUpsertWithWhereUniqueWithoutStuffsInput[] | EventUpsertWithWhereUniqueWithoutStuffsInput
}

export interface OfferCreateWithoutEventTypeInput {
  version?: Int
  customMessage?: String
  status: StatusOffer
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  startTime?: DateTime
  client?: ClientCreateOneWithoutOffersInput
  event?: EventCreateOneWithoutOfferInput
  language?: LanguageCreateOneWithoutOffersInput
  budgetLines?: BudgetLineCreateManyWithoutOfferInput
  clientContact?: ClientContactCreateOneWithoutOffersInput
  employeeEstimations?: EmployeeEstimationCreateManyWithoutOfferInput
  place?: PlaceCreateOneWithoutOfferInput
  sectionItems?: SectionItemCreateManyWithoutOfferInput
}

export interface SectionItemUpdateInput {
  content?: String
  h?: Int
  i?: String
  isDraggable?: Boolean
  isResizable?: Boolean
  maxH?: Int
  maxW?: Int
  minH?: Int
  minW?: Int
  moved?: Boolean
  persons?: Int
  price?: Float
  static?: Boolean
  time?: DateTime
  title?: String
  type?: SectionTypes
  w?: Int
  x?: Int
  y?: Int
  offer?: OfferUpdateOneWithoutSectionItemsInput
  items?: ItemUpdateManyWithoutSectionItemsInput
}

export interface JobCreateInput {
  name: String
  employeeEstimations?: EmployeeEstimationCreateManyWithoutJobInput
  employees?: EmployeeCreateManyWithoutJobInput
  users?: UserCreateManyWithoutJobsInput
}

export interface PlaceUpdateWithoutPlaceContactsDataInput {
  address?: String
  city?: String
  name?: String
  postalCode?: String
  country?: Country
  note?: String
  offer?: OfferUpdateOneWithoutPlaceInput
}

export interface PlaceContactCreateInput {
  email?: String
  mobilePhone?: String
  name: String
  phoneNumber?: String
  place?: PlaceCreateOneWithoutPlaceContactsInput
}

export interface PlaceContactUpdateInput {
  email?: String
  mobilePhone?: String
  name?: String
  phoneNumber?: String
  place?: PlaceUpdateOneWithoutPlaceContactsInput
}

export interface PlaceCreateOneWithoutPlaceContactsInput {
  create?: PlaceCreateWithoutPlaceContactsInput
  connect?: PlaceWhereUniqueInput
}

export interface OfferUpsertWithWhereUniqueWithoutEventTypeInput {
  where: OfferWhereUniqueInput
  update: OfferUpdateWithoutEventTypeDataInput
  create: OfferCreateWithoutEventTypeInput
}

export interface PlaceCreateWithoutPlaceContactsInput {
  address: String
  city: String
  name: String
  postalCode: String
  country?: Country
  note?: String
  offer?: OfferCreateOneWithoutPlaceInput
}

export interface OfferUpdateWithWhereUniqueWithoutEventTypeInput {
  where: OfferWhereUniqueInput
  data: OfferUpdateWithoutEventTypeDataInput
}

export interface SectionItemCreateInput {
  content?: String
  h: Int
  i: String
  isDraggable?: Boolean
  isResizable?: Boolean
  maxH?: Int
  maxW?: Int
  minH?: Int
  minW?: Int
  moved?: Boolean
  persons?: Int
  price?: Float
  static?: Boolean
  time?: DateTime
  title?: String
  type?: SectionTypes
  w: Int
  x: Int
  y?: Int
  offer?: OfferCreateOneWithoutSectionItemsInput
  items?: ItemCreateManyWithoutSectionItemsInput
}

export interface EventTypeUpdateInput {
  name?: String
  offers?: OfferUpdateManyWithoutEventTypeInput
}

export interface StuffCreateInput {
  name: String
  quantity?: Int
  events?: EventCreateManyWithoutStuffsInput
}

export interface EmployeeUpdateInput {
  endedAt?: DateTime
  estimatedEndAt?: DateTime
  estimatedStartAt?: DateTime
  startedAt?: DateTime
  event?: EventUpdateOneWithoutEmployeesInput
  job?: JobUpdateOneWithoutEmployeesInput
  user?: UserUpdateOneWithoutEmployeeInput
}

export interface EventCreateManyWithoutStuffsInput {
  create?: EventCreateWithoutStuffsInput[] | EventCreateWithoutStuffsInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface OfferUpdateWithoutBudgetLinesDataInput {
  version?: Int
  customMessage?: String
  status?: StatusOffer
  address?: String
  city?: String
  endTime?: DateTime
  gmtOffset?: String
  maxPersons?: Int
  minPersons?: Int
  name?: String
  postalCode?: String
  startTime?: DateTime
  client?: ClientUpdateOneWithoutOffersInput
  event?: EventUpdateOneWithoutOfferInput
  language?: LanguageUpdateOneWithoutOffersInput
  clientContact?: ClientContactUpdateOneWithoutOffersInput
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType?: EventTypeUpdateOneWithoutOffersInput
  place?: PlaceUpdateOneWithoutOfferInput
  sectionItems?: SectionItemUpdateManyWithoutOfferInput
}

export interface EventCreateWithoutStuffsInput {
  endTime: DateTime
  gmtOffset: String
  startTime: DateTime
  client?: ClientCreateOneWithoutEventsInput
  offer?: OfferCreateOneWithoutEventInput
  employees?: EmployeeCreateManyWithoutEventInput
  vehicles?: VehicleCreateManyWithoutEventsInput
}

export interface BudgetLineUpdateInput {
  description?: String
  quantity?: Int
  unitPrice?: Float
  value?: Float
  offer?: OfferUpdateOneWithoutBudgetLinesInput
  tax?: TaxUpdateOneWithoutBudgetLinesInput
}

export interface OfferUpsertWithoutSectionItemsInput {
  update: OfferUpdateWithoutSectionItemsDataInput
  create: OfferCreateWithoutSectionItemsInput
}

export interface OfferUpdateWithoutPlaceDataInput {
  version?: Int
  customMessage?: String
  status?: StatusOffer
  address?: String
  city?: String
  endTime?: DateTime
  gmtOffset?: String
  maxPersons?: Int
  minPersons?: Int
  name?: String
  postalCode?: String
  startTime?: DateTime
  client?: ClientUpdateOneWithoutOffersInput
  event?: EventUpdateOneWithoutOfferInput
  language?: LanguageUpdateOneWithoutOffersInput
  budgetLines?: BudgetLineUpdateManyWithoutOfferInput
  clientContact?: ClientContactUpdateOneWithoutOffersInput
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType?: EventTypeUpdateOneWithoutOffersInput
  sectionItems?: SectionItemUpdateManyWithoutOfferInput
}

export interface BudgetLineCreateManyWithoutTaxInput {
  create?: BudgetLineCreateWithoutTaxInput[] | BudgetLineCreateWithoutTaxInput
  connect?: BudgetLineWhereUniqueInput[] | BudgetLineWhereUniqueInput
}

export interface PlaceUpdateInput {
  address?: String
  city?: String
  name?: String
  postalCode?: String
  country?: Country
  note?: String
  offer?: OfferUpdateOneWithoutPlaceInput
  placeContacts?: PlaceContactUpdateManyWithoutPlaceInput
}

export interface BudgetLineCreateWithoutTaxInput {
  description: String
  quantity?: Int
  unitPrice?: Float
  value: Float
  offer?: OfferCreateOneWithoutBudgetLinesInput
}

export interface UserUpdateInput {
  role?: Role
  email?: String
  image?: String
  name?: String
  password?: String
  employee?: EmployeeUpdateOneWithoutUserInput
  jobs?: JobUpdateManyWithoutUsersInput
  language?: LanguageUpdateOneWithoutUsersInput
}

export interface VehicleCreateInput {
  color?: String
  description?: String
  name: String
  plate: String
  year?: Int
  events?: EventCreateManyWithoutVehiclesInput
}

export interface OfferUpdateInput {
  version?: Int
  customMessage?: String
  status?: StatusOffer
  address?: String
  city?: String
  endTime?: DateTime
  gmtOffset?: String
  maxPersons?: Int
  minPersons?: Int
  name?: String
  postalCode?: String
  startTime?: DateTime
  client?: ClientUpdateOneWithoutOffersInput
  event?: EventUpdateOneWithoutOfferInput
  language?: LanguageUpdateOneWithoutOffersInput
  budgetLines?: BudgetLineUpdateManyWithoutOfferInput
  clientContact?: ClientContactUpdateOneWithoutOffersInput
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType?: EventTypeUpdateOneWithoutOffersInput
  place?: PlaceUpdateOneWithoutOfferInput
  sectionItems?: SectionItemUpdateManyWithoutOfferInput
}

export interface EventCreateManyWithoutVehiclesInput {
  create?: EventCreateWithoutVehiclesInput[] | EventCreateWithoutVehiclesInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface EventUpdateInput {
  endTime?: DateTime
  gmtOffset?: String
  startTime?: DateTime
  client?: ClientUpdateOneWithoutEventsInput
  offer?: OfferUpdateOneWithoutEventInput
  employees?: EmployeeUpdateManyWithoutEventInput
  stuffs?: StuffUpdateManyWithoutEventsInput
  vehicles?: VehicleUpdateManyWithoutEventsInput
}

export interface EventCreateWithoutVehiclesInput {
  endTime: DateTime
  gmtOffset: String
  startTime: DateTime
  client?: ClientCreateOneWithoutEventsInput
  offer?: OfferCreateOneWithoutEventInput
  employees?: EmployeeCreateManyWithoutEventInput
  stuffs?: StuffCreateManyWithoutEventsInput
}

export interface ClientUpdateWithoutCommunicationsDataInput {
  address?: String
  email?: String
  name?: String
  phone?: String
  tva?: String
  type?: ClientType
  events?: EventUpdateManyWithoutClientInput
  offers?: OfferUpdateManyWithoutClientInput
  clientContacts?: ClientContactUpdateManyWithoutClientInput
  language?: LanguageUpdateOneWithoutClientsInput
}

export interface ClientUpdateInput {
  address?: String
  email?: String
  name?: String
  phone?: String
  tva?: String
  type?: ClientType
  events?: EventUpdateManyWithoutClientInput
  offers?: OfferUpdateManyWithoutClientInput
  clientContacts?: ClientContactUpdateManyWithoutClientInput
  language?: LanguageUpdateOneWithoutClientsInput
  communications?: CommunicationUpdateManyWithoutClientInput
}

export interface CommunicationUpdateInput {
  message?: String
  subject?: String
  channel?: Channel
  date?: DateTime
  gmtOffset?: String
  client?: ClientUpdateOneWithoutCommunicationsInput
}

export interface EventUpdateManyWithoutClientInput {
  create?: EventCreateWithoutClientInput[] | EventCreateWithoutClientInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput
  update?: EventUpdateWithWhereUniqueWithoutClientInput[] | EventUpdateWithWhereUniqueWithoutClientInput
  upsert?: EventUpsertWithWhereUniqueWithoutClientInput[] | EventUpsertWithWhereUniqueWithoutClientInput
}

export interface OfferUpsertWithoutEventInput {
  update: OfferUpdateWithoutEventDataInput
  create: OfferCreateWithoutEventInput
}

export interface EventUpdateWithWhereUniqueWithoutClientInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutClientDataInput
}

export interface ClientContactUpsertWithWhereUniqueWithoutClientInput {
  where: ClientContactWhereUniqueInput
  update: ClientContactUpdateWithoutClientDataInput
  create: ClientContactCreateWithoutClientInput
}

export interface EventUpdateWithoutClientDataInput {
  endTime?: DateTime
  gmtOffset?: String
  startTime?: DateTime
  offer?: OfferUpdateOneWithoutEventInput
  employees?: EmployeeUpdateManyWithoutEventInput
  stuffs?: StuffUpdateManyWithoutEventsInput
  vehicles?: VehicleUpdateManyWithoutEventsInput
}

export interface EventUpsertWithoutOfferInput {
  update: EventUpdateWithoutOfferDataInput
  create: EventCreateWithoutOfferInput
}

export interface OfferUpdateOneWithoutEventInput {
  create?: OfferCreateWithoutEventInput
  connect?: OfferWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OfferUpdateWithoutEventDataInput
  upsert?: OfferUpsertWithoutEventInput
}

export interface EmployeeUpdateWithoutEventDataInput {
  endedAt?: DateTime
  estimatedEndAt?: DateTime
  estimatedStartAt?: DateTime
  startedAt?: DateTime
  job?: JobUpdateOneWithoutEmployeesInput
  user?: UserUpdateOneWithoutEmployeeInput
}

export interface OfferUpdateWithoutEventDataInput {
  version?: Int
  customMessage?: String
  status?: StatusOffer
  address?: String
  city?: String
  endTime?: DateTime
  gmtOffset?: String
  maxPersons?: Int
  minPersons?: Int
  name?: String
  postalCode?: String
  startTime?: DateTime
  client?: ClientUpdateOneWithoutOffersInput
  language?: LanguageUpdateOneWithoutOffersInput
  budgetLines?: BudgetLineUpdateManyWithoutOfferInput
  clientContact?: ClientContactUpdateOneWithoutOffersInput
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType?: EventTypeUpdateOneWithoutOffersInput
  place?: PlaceUpdateOneWithoutOfferInput
  sectionItems?: SectionItemUpdateManyWithoutOfferInput
}

export interface EmployeeUpdateManyWithoutEventInput {
  create?: EmployeeCreateWithoutEventInput[] | EmployeeCreateWithoutEventInput
  connect?: EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput
  disconnect?: EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput
  delete?: EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput
  update?: EmployeeUpdateWithWhereUniqueWithoutEventInput[] | EmployeeUpdateWithWhereUniqueWithoutEventInput
  upsert?: EmployeeUpsertWithWhereUniqueWithoutEventInput[] | EmployeeUpsertWithWhereUniqueWithoutEventInput
}

export interface ClientUpdateOneWithoutOffersInput {
  create?: ClientCreateWithoutOffersInput
  connect?: ClientWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ClientUpdateWithoutOffersDataInput
  upsert?: ClientUpsertWithoutOffersInput
}

export interface OfferUpsertWithWhereUniqueWithoutClientInput {
  where: OfferWhereUniqueInput
  update: OfferUpdateWithoutClientDataInput
  create: OfferCreateWithoutClientInput
}

export interface ClientUpdateWithoutOffersDataInput {
  address?: String
  email?: String
  name?: String
  phone?: String
  tva?: String
  type?: ClientType
  events?: EventUpdateManyWithoutClientInput
  clientContacts?: ClientContactUpdateManyWithoutClientInput
  language?: LanguageUpdateOneWithoutClientsInput
  communications?: CommunicationUpdateManyWithoutClientInput
}

export interface ItemUpsertWithWhereUniqueWithoutLanguageInput {
  where: ItemWhereUniqueInput
  update: ItemUpdateWithoutLanguageDataInput
  create: ItemCreateWithoutLanguageInput
}

export interface CommunicationWhereInput {
  AND?: CommunicationWhereInput[] | CommunicationWhereInput
  OR?: CommunicationWhereInput[] | CommunicationWhereInput
  NOT?: CommunicationWhereInput[] | CommunicationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  message?: String
  message_not?: String
  message_in?: String[] | String
  message_not_in?: String[] | String
  message_lt?: String
  message_lte?: String
  message_gt?: String
  message_gte?: String
  message_contains?: String
  message_not_contains?: String
  message_starts_with?: String
  message_not_starts_with?: String
  message_ends_with?: String
  message_not_ends_with?: String
  subject?: String
  subject_not?: String
  subject_in?: String[] | String
  subject_not_in?: String[] | String
  subject_lt?: String
  subject_lte?: String
  subject_gt?: String
  subject_gte?: String
  subject_contains?: String
  subject_not_contains?: String
  subject_starts_with?: String
  subject_not_starts_with?: String
  subject_ends_with?: String
  subject_not_ends_with?: String
  channel?: Channel
  channel_not?: Channel
  channel_in?: Channel[] | Channel
  channel_not_in?: Channel[] | Channel
  date?: DateTime
  date_not?: DateTime
  date_in?: DateTime[] | DateTime
  date_not_in?: DateTime[] | DateTime
  date_lt?: DateTime
  date_lte?: DateTime
  date_gt?: DateTime
  date_gte?: DateTime
  gmtOffset?: String
  gmtOffset_not?: String
  gmtOffset_in?: String[] | String
  gmtOffset_not_in?: String[] | String
  gmtOffset_lt?: String
  gmtOffset_lte?: String
  gmtOffset_gt?: String
  gmtOffset_gte?: String
  gmtOffset_contains?: String
  gmtOffset_not_contains?: String
  gmtOffset_starts_with?: String
  gmtOffset_not_starts_with?: String
  gmtOffset_ends_with?: String
  gmtOffset_not_ends_with?: String
  client?: ClientWhereInput
}

export interface ClientCreateInput {
  address?: String
  email: String
  name: String
  phone: String
  tva?: String
  type?: ClientType
  events?: EventCreateManyWithoutClientInput
  offers?: OfferCreateManyWithoutClientInput
  clientContacts?: ClientContactCreateManyWithoutClientInput
  language?: LanguageCreateOneWithoutClientsInput
  communications?: CommunicationCreateManyWithoutClientInput
}

export interface PlaceContactWhereInput {
  AND?: PlaceContactWhereInput[] | PlaceContactWhereInput
  OR?: PlaceContactWhereInput[] | PlaceContactWhereInput
  NOT?: PlaceContactWhereInput[] | PlaceContactWhereInput
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  mobilePhone?: String
  mobilePhone_not?: String
  mobilePhone_in?: String[] | String
  mobilePhone_not_in?: String[] | String
  mobilePhone_lt?: String
  mobilePhone_lte?: String
  mobilePhone_gt?: String
  mobilePhone_gte?: String
  mobilePhone_contains?: String
  mobilePhone_not_contains?: String
  mobilePhone_starts_with?: String
  mobilePhone_not_starts_with?: String
  mobilePhone_ends_with?: String
  mobilePhone_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  phoneNumber?: String
  phoneNumber_not?: String
  phoneNumber_in?: String[] | String
  phoneNumber_not_in?: String[] | String
  phoneNumber_lt?: String
  phoneNumber_lte?: String
  phoneNumber_gt?: String
  phoneNumber_gte?: String
  phoneNumber_contains?: String
  phoneNumber_not_contains?: String
  phoneNumber_starts_with?: String
  phoneNumber_not_starts_with?: String
  phoneNumber_ends_with?: String
  phoneNumber_not_ends_with?: String
  place?: PlaceWhereInput
}

export interface EventCreateWithoutClientInput {
  endTime: DateTime
  gmtOffset: String
  startTime: DateTime
  offer?: OfferCreateOneWithoutEventInput
  employees?: EmployeeCreateManyWithoutEventInput
  stuffs?: StuffCreateManyWithoutEventsInput
  vehicles?: VehicleCreateManyWithoutEventsInput
}

export interface OfferCreateWithoutEventInput {
  version?: Int
  customMessage?: String
  status: StatusOffer
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  startTime?: DateTime
  client?: ClientCreateOneWithoutOffersInput
  language?: LanguageCreateOneWithoutOffersInput
  budgetLines?: BudgetLineCreateManyWithoutOfferInput
  clientContact?: ClientContactCreateOneWithoutOffersInput
  employeeEstimations?: EmployeeEstimationCreateManyWithoutOfferInput
  eventType?: EventTypeCreateOneWithoutOffersInput
  place?: PlaceCreateOneWithoutOfferInput
  sectionItems?: SectionItemCreateManyWithoutOfferInput
}

export interface ClientCreateWithoutOffersInput {
  address?: String
  email: String
  name: String
  phone: String
  tva?: String
  type?: ClientType
  events?: EventCreateManyWithoutClientInput
  clientContacts?: ClientContactCreateManyWithoutClientInput
  language?: LanguageCreateOneWithoutClientsInput
  communications?: CommunicationCreateManyWithoutClientInput
}

export interface OfferUpdateManyWithoutClientContactInput {
  create?: OfferCreateWithoutClientContactInput[] | OfferCreateWithoutClientContactInput
  connect?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
  disconnect?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
  delete?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
  update?: OfferUpdateWithWhereUniqueWithoutClientContactInput[] | OfferUpdateWithWhereUniqueWithoutClientContactInput
  upsert?: OfferUpsertWithWhereUniqueWithoutClientContactInput[] | OfferUpsertWithWhereUniqueWithoutClientContactInput
}

export interface ClientContactCreateWithoutClientInput {
  email: String
  mobilePhone?: String
  name: String
  phoneNumber?: String
  offers?: OfferCreateManyWithoutClientContactInput
}

export interface OfferUpdateWithWhereUniqueWithoutClientContactInput {
  where: OfferWhereUniqueInput
  data: OfferUpdateWithoutClientContactDataInput
}

export interface OfferCreateWithoutClientContactInput {
  version?: Int
  customMessage?: String
  status: StatusOffer
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  startTime?: DateTime
  client?: ClientCreateOneWithoutOffersInput
  event?: EventCreateOneWithoutOfferInput
  language?: LanguageCreateOneWithoutOffersInput
  budgetLines?: BudgetLineCreateManyWithoutOfferInput
  employeeEstimations?: EmployeeEstimationCreateManyWithoutOfferInput
  eventType?: EventTypeCreateOneWithoutOffersInput
  place?: PlaceCreateOneWithoutOfferInput
  sectionItems?: SectionItemCreateManyWithoutOfferInput
}

export interface OfferUpdateWithoutClientContactDataInput {
  version?: Int
  customMessage?: String
  status?: StatusOffer
  address?: String
  city?: String
  endTime?: DateTime
  gmtOffset?: String
  maxPersons?: Int
  minPersons?: Int
  name?: String
  postalCode?: String
  startTime?: DateTime
  client?: ClientUpdateOneWithoutOffersInput
  event?: EventUpdateOneWithoutOfferInput
  language?: LanguageUpdateOneWithoutOffersInput
  budgetLines?: BudgetLineUpdateManyWithoutOfferInput
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType?: EventTypeUpdateOneWithoutOffersInput
  place?: PlaceUpdateOneWithoutOfferInput
  sectionItems?: SectionItemUpdateManyWithoutOfferInput
}

export interface EventCreateWithoutOfferInput {
  endTime: DateTime
  gmtOffset: String
  startTime: DateTime
  client?: ClientCreateOneWithoutEventsInput
  employees?: EmployeeCreateManyWithoutEventInput
  stuffs?: StuffCreateManyWithoutEventsInput
  vehicles?: VehicleCreateManyWithoutEventsInput
}

export interface EventUpdateOneWithoutOfferInput {
  create?: EventCreateWithoutOfferInput
  connect?: EventWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: EventUpdateWithoutOfferDataInput
  upsert?: EventUpsertWithoutOfferInput
}

export interface ClientCreateWithoutEventsInput {
  address?: String
  email: String
  name: String
  phone: String
  tva?: String
  type?: ClientType
  offers?: OfferCreateManyWithoutClientInput
  clientContacts?: ClientContactCreateManyWithoutClientInput
  language?: LanguageCreateOneWithoutClientsInput
  communications?: CommunicationCreateManyWithoutClientInput
}

export interface EventUpdateWithoutOfferDataInput {
  endTime?: DateTime
  gmtOffset?: String
  startTime?: DateTime
  client?: ClientUpdateOneWithoutEventsInput
  employees?: EmployeeUpdateManyWithoutEventInput
  stuffs?: StuffUpdateManyWithoutEventsInput
  vehicles?: VehicleUpdateManyWithoutEventsInput
}

export interface OfferCreateWithoutClientInput {
  version?: Int
  customMessage?: String
  status: StatusOffer
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  startTime?: DateTime
  event?: EventCreateOneWithoutOfferInput
  language?: LanguageCreateOneWithoutOffersInput
  budgetLines?: BudgetLineCreateManyWithoutOfferInput
  clientContact?: ClientContactCreateOneWithoutOffersInput
  employeeEstimations?: EmployeeEstimationCreateManyWithoutOfferInput
  eventType?: EventTypeCreateOneWithoutOffersInput
  place?: PlaceCreateOneWithoutOfferInput
  sectionItems?: SectionItemCreateManyWithoutOfferInput
}

export interface ClientUpdateOneWithoutEventsInput {
  create?: ClientCreateWithoutEventsInput
  connect?: ClientWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ClientUpdateWithoutEventsDataInput
  upsert?: ClientUpsertWithoutEventsInput
}

export interface LanguageCreateWithoutOffersInput {
  type: LanguageEnum
  clients?: ClientCreateManyWithoutLanguageInput
  items?: ItemCreateManyWithoutLanguageInput
  users?: UserCreateManyWithoutLanguageInput
}

export interface ClientUpdateWithoutEventsDataInput {
  address?: String
  email?: String
  name?: String
  phone?: String
  tva?: String
  type?: ClientType
  offers?: OfferUpdateManyWithoutClientInput
  clientContacts?: ClientContactUpdateManyWithoutClientInput
  language?: LanguageUpdateOneWithoutClientsInput
  communications?: CommunicationUpdateManyWithoutClientInput
}

export interface ClientCreateWithoutLanguageInput {
  address?: String
  email: String
  name: String
  phone: String
  tva?: String
  type?: ClientType
  events?: EventCreateManyWithoutClientInput
  offers?: OfferCreateManyWithoutClientInput
  clientContacts?: ClientContactCreateManyWithoutClientInput
  communications?: CommunicationCreateManyWithoutClientInput
}

export interface OfferUpdateManyWithoutClientInput {
  create?: OfferCreateWithoutClientInput[] | OfferCreateWithoutClientInput
  connect?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
  disconnect?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
  delete?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
  update?: OfferUpdateWithWhereUniqueWithoutClientInput[] | OfferUpdateWithWhereUniqueWithoutClientInput
  upsert?: OfferUpsertWithWhereUniqueWithoutClientInput[] | OfferUpsertWithWhereUniqueWithoutClientInput
}

export interface CommunicationCreateWithoutClientInput {
  message: String
  subject: String
  channel: Channel
  date: DateTime
  gmtOffset: String
}

export interface OfferUpdateWithWhereUniqueWithoutClientInput {
  where: OfferWhereUniqueInput
  data: OfferUpdateWithoutClientDataInput
}

export interface ItemCreateWithoutLanguageInput {
  description: String
  name: String
  internalDescription?: String
  sectionItems?: SectionItemCreateManyWithoutItemsInput
}

export interface OfferUpdateWithoutClientDataInput {
  version?: Int
  customMessage?: String
  status?: StatusOffer
  address?: String
  city?: String
  endTime?: DateTime
  gmtOffset?: String
  maxPersons?: Int
  minPersons?: Int
  name?: String
  postalCode?: String
  startTime?: DateTime
  event?: EventUpdateOneWithoutOfferInput
  language?: LanguageUpdateOneWithoutOffersInput
  budgetLines?: BudgetLineUpdateManyWithoutOfferInput
  clientContact?: ClientContactUpdateOneWithoutOffersInput
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType?: EventTypeUpdateOneWithoutOffersInput
  place?: PlaceUpdateOneWithoutOfferInput
  sectionItems?: SectionItemUpdateManyWithoutOfferInput
}

export interface SectionItemCreateWithoutItemsInput {
  content?: String
  h: Int
  i: String
  isDraggable?: Boolean
  isResizable?: Boolean
  maxH?: Int
  maxW?: Int
  minH?: Int
  minW?: Int
  moved?: Boolean
  persons?: Int
  price?: Float
  static?: Boolean
  time?: DateTime
  title?: String
  type?: SectionTypes
  w: Int
  x: Int
  y?: Int
  offer?: OfferCreateOneWithoutSectionItemsInput
}

export interface LanguageUpdateOneWithoutOffersInput {
  create?: LanguageCreateWithoutOffersInput
  connect?: LanguageWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LanguageUpdateWithoutOffersDataInput
  upsert?: LanguageUpsertWithoutOffersInput
}

export interface OfferCreateWithoutSectionItemsInput {
  version?: Int
  customMessage?: String
  status: StatusOffer
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  startTime?: DateTime
  client?: ClientCreateOneWithoutOffersInput
  event?: EventCreateOneWithoutOfferInput
  language?: LanguageCreateOneWithoutOffersInput
  budgetLines?: BudgetLineCreateManyWithoutOfferInput
  clientContact?: ClientContactCreateOneWithoutOffersInput
  employeeEstimations?: EmployeeEstimationCreateManyWithoutOfferInput
  eventType?: EventTypeCreateOneWithoutOffersInput
  place?: PlaceCreateOneWithoutOfferInput
}

export interface LanguageUpdateWithoutOffersDataInput {
  type?: LanguageEnum
  clients?: ClientUpdateManyWithoutLanguageInput
  items?: ItemUpdateManyWithoutLanguageInput
  users?: UserUpdateManyWithoutLanguageInput
}

export interface BudgetLineCreateWithoutOfferInput {
  description: String
  quantity?: Int
  unitPrice?: Float
  value: Float
  tax?: TaxCreateOneWithoutBudgetLinesInput
}

export interface ClientUpdateManyWithoutLanguageInput {
  create?: ClientCreateWithoutLanguageInput[] | ClientCreateWithoutLanguageInput
  connect?: ClientWhereUniqueInput[] | ClientWhereUniqueInput
  disconnect?: ClientWhereUniqueInput[] | ClientWhereUniqueInput
  delete?: ClientWhereUniqueInput[] | ClientWhereUniqueInput
  update?: ClientUpdateWithWhereUniqueWithoutLanguageInput[] | ClientUpdateWithWhereUniqueWithoutLanguageInput
  upsert?: ClientUpsertWithWhereUniqueWithoutLanguageInput[] | ClientUpsertWithWhereUniqueWithoutLanguageInput
}

export interface TaxCreateWithoutBudgetLinesInput {
  name: String
  value: Float
}

export interface ClientUpdateWithWhereUniqueWithoutLanguageInput {
  where: ClientWhereUniqueInput
  data: ClientUpdateWithoutLanguageDataInput
}

export interface ClientContactCreateWithoutOffersInput {
  email: String
  mobilePhone?: String
  name: String
  phoneNumber?: String
  client?: ClientCreateOneWithoutClientContactsInput
}

export interface ClientUpdateWithoutLanguageDataInput {
  address?: String
  email?: String
  name?: String
  phone?: String
  tva?: String
  type?: ClientType
  events?: EventUpdateManyWithoutClientInput
  offers?: OfferUpdateManyWithoutClientInput
  clientContacts?: ClientContactUpdateManyWithoutClientInput
  communications?: CommunicationUpdateManyWithoutClientInput
}

export interface ClientCreateWithoutClientContactsInput {
  address?: String
  email: String
  name: String
  phone: String
  tva?: String
  type?: ClientType
  events?: EventCreateManyWithoutClientInput
  offers?: OfferCreateManyWithoutClientInput
  language?: LanguageCreateOneWithoutClientsInput
  communications?: CommunicationCreateManyWithoutClientInput
}

export interface CommunicationUpdateManyWithoutClientInput {
  create?: CommunicationCreateWithoutClientInput[] | CommunicationCreateWithoutClientInput
  connect?: CommunicationWhereUniqueInput[] | CommunicationWhereUniqueInput
  disconnect?: CommunicationWhereUniqueInput[] | CommunicationWhereUniqueInput
  delete?: CommunicationWhereUniqueInput[] | CommunicationWhereUniqueInput
  update?: CommunicationUpdateWithWhereUniqueWithoutClientInput[] | CommunicationUpdateWithWhereUniqueWithoutClientInput
  upsert?: CommunicationUpsertWithWhereUniqueWithoutClientInput[] | CommunicationUpsertWithWhereUniqueWithoutClientInput
}

export interface LanguageCreateWithoutClientsInput {
  type: LanguageEnum
  offers?: OfferCreateManyWithoutLanguageInput
  items?: ItemCreateManyWithoutLanguageInput
  users?: UserCreateManyWithoutLanguageInput
}

export interface CommunicationUpdateWithWhereUniqueWithoutClientInput {
  where: CommunicationWhereUniqueInput
  data: CommunicationUpdateWithoutClientDataInput
}

export interface OfferCreateWithoutLanguageInput {
  version?: Int
  customMessage?: String
  status: StatusOffer
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  startTime?: DateTime
  client?: ClientCreateOneWithoutOffersInput
  event?: EventCreateOneWithoutOfferInput
  budgetLines?: BudgetLineCreateManyWithoutOfferInput
  clientContact?: ClientContactCreateOneWithoutOffersInput
  employeeEstimations?: EmployeeEstimationCreateManyWithoutOfferInput
  eventType?: EventTypeCreateOneWithoutOffersInput
  place?: PlaceCreateOneWithoutOfferInput
  sectionItems?: SectionItemCreateManyWithoutOfferInput
}

export interface CommunicationUpdateWithoutClientDataInput {
  message?: String
  subject?: String
  channel?: Channel
  date?: DateTime
  gmtOffset?: String
}

export interface EmployeeEstimationCreateWithoutOfferInput {
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  number: Int
  pricePerHour?: Float
  total?: Float
  job?: JobCreateOneWithoutEmployeeEstimationsInput
}

export interface CommunicationUpsertWithWhereUniqueWithoutClientInput {
  where: CommunicationWhereUniqueInput
  update: CommunicationUpdateWithoutClientDataInput
  create: CommunicationCreateWithoutClientInput
}

export interface JobCreateWithoutEmployeeEstimationsInput {
  name: String
  employees?: EmployeeCreateManyWithoutJobInput
  users?: UserCreateManyWithoutJobsInput
}

export interface ClientUpsertWithWhereUniqueWithoutLanguageInput {
  where: ClientWhereUniqueInput
  update: ClientUpdateWithoutLanguageDataInput
  create: ClientCreateWithoutLanguageInput
}

export interface EmployeeCreateWithoutJobInput {
  endedAt?: DateTime
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  startedAt?: DateTime
  event?: EventCreateOneWithoutEmployeesInput
  user?: UserCreateOneWithoutEmployeeInput
}

export interface ItemUpdateManyWithoutLanguageInput {
  create?: ItemCreateWithoutLanguageInput[] | ItemCreateWithoutLanguageInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  disconnect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  delete?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  update?: ItemUpdateWithWhereUniqueWithoutLanguageInput[] | ItemUpdateWithWhereUniqueWithoutLanguageInput
  upsert?: ItemUpsertWithWhereUniqueWithoutLanguageInput[] | ItemUpsertWithWhereUniqueWithoutLanguageInput
}

export interface EventCreateWithoutEmployeesInput {
  endTime: DateTime
  gmtOffset: String
  startTime: DateTime
  client?: ClientCreateOneWithoutEventsInput
  offer?: OfferCreateOneWithoutEventInput
  stuffs?: StuffCreateManyWithoutEventsInput
  vehicles?: VehicleCreateManyWithoutEventsInput
}

export interface ItemUpdateWithWhereUniqueWithoutLanguageInput {
  where: ItemWhereUniqueInput
  data: ItemUpdateWithoutLanguageDataInput
}

export interface StuffCreateWithoutEventsInput {
  name: String
  quantity?: Int
}

export interface ItemUpdateWithoutLanguageDataInput {
  description?: String
  name?: String
  internalDescription?: String
  sectionItems?: SectionItemUpdateManyWithoutItemsInput
}

export interface VehicleCreateWithoutEventsInput {
  color?: String
  description?: String
  name: String
  plate: String
  year?: Int
}

export interface SectionItemUpdateManyWithoutItemsInput {
  create?: SectionItemCreateWithoutItemsInput[] | SectionItemCreateWithoutItemsInput
  connect?: SectionItemWhereUniqueInput[] | SectionItemWhereUniqueInput
  disconnect?: SectionItemWhereUniqueInput[] | SectionItemWhereUniqueInput
  delete?: SectionItemWhereUniqueInput[] | SectionItemWhereUniqueInput
  update?: SectionItemUpdateWithWhereUniqueWithoutItemsInput[] | SectionItemUpdateWithWhereUniqueWithoutItemsInput
  upsert?: SectionItemUpsertWithWhereUniqueWithoutItemsInput[] | SectionItemUpsertWithWhereUniqueWithoutItemsInput
}

export interface UserCreateWithoutEmployeeInput {
  role: Role
  email: String
  image?: String
  name: String
  password: String
  jobs?: JobCreateManyWithoutUsersInput
  language?: LanguageCreateOneWithoutUsersInput
}

export interface SectionItemUpdateWithWhereUniqueWithoutItemsInput {
  where: SectionItemWhereUniqueInput
  data: SectionItemUpdateWithoutItemsDataInput
}

export interface JobCreateWithoutUsersInput {
  name: String
  employeeEstimations?: EmployeeEstimationCreateManyWithoutJobInput
  employees?: EmployeeCreateManyWithoutJobInput
}

export interface SectionItemUpdateWithoutItemsDataInput {
  content?: String
  h?: Int
  i?: String
  isDraggable?: Boolean
  isResizable?: Boolean
  maxH?: Int
  maxW?: Int
  minH?: Int
  minW?: Int
  moved?: Boolean
  persons?: Int
  price?: Float
  static?: Boolean
  time?: DateTime
  title?: String
  type?: SectionTypes
  w?: Int
  x?: Int
  y?: Int
  offer?: OfferUpdateOneWithoutSectionItemsInput
}

export interface EmployeeEstimationCreateWithoutJobInput {
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  number: Int
  pricePerHour?: Float
  total?: Float
  offer?: OfferCreateOneWithoutEmployeeEstimationsInput
}

export interface OfferUpdateOneWithoutSectionItemsInput {
  create?: OfferCreateWithoutSectionItemsInput
  connect?: OfferWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OfferUpdateWithoutSectionItemsDataInput
  upsert?: OfferUpsertWithoutSectionItemsInput
}

export interface OfferCreateWithoutEmployeeEstimationsInput {
  version?: Int
  customMessage?: String
  status: StatusOffer
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  startTime?: DateTime
  client?: ClientCreateOneWithoutOffersInput
  event?: EventCreateOneWithoutOfferInput
  language?: LanguageCreateOneWithoutOffersInput
  budgetLines?: BudgetLineCreateManyWithoutOfferInput
  clientContact?: ClientContactCreateOneWithoutOffersInput
  eventType?: EventTypeCreateOneWithoutOffersInput
  place?: PlaceCreateOneWithoutOfferInput
  sectionItems?: SectionItemCreateManyWithoutOfferInput
}

export interface OfferUpdateWithoutSectionItemsDataInput {
  version?: Int
  customMessage?: String
  status?: StatusOffer
  address?: String
  city?: String
  endTime?: DateTime
  gmtOffset?: String
  maxPersons?: Int
  minPersons?: Int
  name?: String
  postalCode?: String
  startTime?: DateTime
  client?: ClientUpdateOneWithoutOffersInput
  event?: EventUpdateOneWithoutOfferInput
  language?: LanguageUpdateOneWithoutOffersInput
  budgetLines?: BudgetLineUpdateManyWithoutOfferInput
  clientContact?: ClientContactUpdateOneWithoutOffersInput
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType?: EventTypeUpdateOneWithoutOffersInput
  place?: PlaceUpdateOneWithoutOfferInput
}

export interface EventTypeCreateWithoutOffersInput {
  name: String
}

export interface BudgetLineUpdateManyWithoutOfferInput {
  create?: BudgetLineCreateWithoutOfferInput[] | BudgetLineCreateWithoutOfferInput
  connect?: BudgetLineWhereUniqueInput[] | BudgetLineWhereUniqueInput
  disconnect?: BudgetLineWhereUniqueInput[] | BudgetLineWhereUniqueInput
  delete?: BudgetLineWhereUniqueInput[] | BudgetLineWhereUniqueInput
  update?: BudgetLineUpdateWithWhereUniqueWithoutOfferInput[] | BudgetLineUpdateWithWhereUniqueWithoutOfferInput
  upsert?: BudgetLineUpsertWithWhereUniqueWithoutOfferInput[] | BudgetLineUpsertWithWhereUniqueWithoutOfferInput
}

export interface PlaceCreateWithoutOfferInput {
  address: String
  city: String
  name: String
  postalCode: String
  country?: Country
  note?: String
  placeContacts?: PlaceContactCreateManyWithoutPlaceInput
}

export interface BudgetLineUpdateWithWhereUniqueWithoutOfferInput {
  where: BudgetLineWhereUniqueInput
  data: BudgetLineUpdateWithoutOfferDataInput
}

export interface PlaceContactCreateWithoutPlaceInput {
  email?: String
  mobilePhone?: String
  name: String
  phoneNumber?: String
}

export interface BudgetLineUpdateWithoutOfferDataInput {
  description?: String
  quantity?: Int
  unitPrice?: Float
  value?: Float
  tax?: TaxUpdateOneWithoutBudgetLinesInput
}

export interface SectionItemCreateWithoutOfferInput {
  content?: String
  h: Int
  i: String
  isDraggable?: Boolean
  isResizable?: Boolean
  maxH?: Int
  maxW?: Int
  minH?: Int
  minW?: Int
  moved?: Boolean
  persons?: Int
  price?: Float
  static?: Boolean
  time?: DateTime
  title?: String
  type?: SectionTypes
  w: Int
  x: Int
  y?: Int
  items?: ItemCreateManyWithoutSectionItemsInput
}

export interface TaxUpdateOneWithoutBudgetLinesInput {
  create?: TaxCreateWithoutBudgetLinesInput
  connect?: TaxWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: TaxUpdateWithoutBudgetLinesDataInput
  upsert?: TaxUpsertWithoutBudgetLinesInput
}

export interface TaxSubscriptionWhereInput {
  AND?: TaxSubscriptionWhereInput[] | TaxSubscriptionWhereInput
  OR?: TaxSubscriptionWhereInput[] | TaxSubscriptionWhereInput
  NOT?: TaxSubscriptionWhereInput[] | TaxSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TaxWhereInput
}

export interface TaxUpdateWithoutBudgetLinesDataInput {
  name?: String
  value?: Float
}

export interface SectionItemSubscriptionWhereInput {
  AND?: SectionItemSubscriptionWhereInput[] | SectionItemSubscriptionWhereInput
  OR?: SectionItemSubscriptionWhereInput[] | SectionItemSubscriptionWhereInput
  NOT?: SectionItemSubscriptionWhereInput[] | SectionItemSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SectionItemWhereInput
}

export interface TaxUpsertWithoutBudgetLinesInput {
  update: TaxUpdateWithoutBudgetLinesDataInput
  create: TaxCreateWithoutBudgetLinesInput
}

export interface JobSubscriptionWhereInput {
  AND?: JobSubscriptionWhereInput[] | JobSubscriptionWhereInput
  OR?: JobSubscriptionWhereInput[] | JobSubscriptionWhereInput
  NOT?: JobSubscriptionWhereInput[] | JobSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: JobWhereInput
}

export interface BudgetLineUpsertWithWhereUniqueWithoutOfferInput {
  where: BudgetLineWhereUniqueInput
  update: BudgetLineUpdateWithoutOfferDataInput
  create: BudgetLineCreateWithoutOfferInput
}

export interface EmployeeSubscriptionWhereInput {
  AND?: EmployeeSubscriptionWhereInput[] | EmployeeSubscriptionWhereInput
  OR?: EmployeeSubscriptionWhereInput[] | EmployeeSubscriptionWhereInput
  NOT?: EmployeeSubscriptionWhereInput[] | EmployeeSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: EmployeeWhereInput
}

export interface ClientContactUpdateOneWithoutOffersInput {
  create?: ClientContactCreateWithoutOffersInput
  connect?: ClientContactWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ClientContactUpdateWithoutOffersDataInput
  upsert?: ClientContactUpsertWithoutOffersInput
}

export interface BudgetLineSubscriptionWhereInput {
  AND?: BudgetLineSubscriptionWhereInput[] | BudgetLineSubscriptionWhereInput
  OR?: BudgetLineSubscriptionWhereInput[] | BudgetLineSubscriptionWhereInput
  NOT?: BudgetLineSubscriptionWhereInput[] | BudgetLineSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BudgetLineWhereInput
}

export interface ClientContactUpdateWithoutOffersDataInput {
  email?: String
  mobilePhone?: String
  name?: String
  phoneNumber?: String
  client?: ClientUpdateOneWithoutClientContactsInput
}

export interface ItemSubscriptionWhereInput {
  AND?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput
  OR?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput
  NOT?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ItemWhereInput
}

export interface ClientUpdateOneWithoutClientContactsInput {
  create?: ClientCreateWithoutClientContactsInput
  connect?: ClientWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ClientUpdateWithoutClientContactsDataInput
  upsert?: ClientUpsertWithoutClientContactsInput
}

export interface CommunicationSubscriptionWhereInput {
  AND?: CommunicationSubscriptionWhereInput[] | CommunicationSubscriptionWhereInput
  OR?: CommunicationSubscriptionWhereInput[] | CommunicationSubscriptionWhereInput
  NOT?: CommunicationSubscriptionWhereInput[] | CommunicationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CommunicationWhereInput
}

export interface ClientUpdateWithoutClientContactsDataInput {
  address?: String
  email?: String
  name?: String
  phone?: String
  tva?: String
  type?: ClientType
  events?: EventUpdateManyWithoutClientInput
  offers?: OfferUpdateManyWithoutClientInput
  language?: LanguageUpdateOneWithoutClientsInput
  communications?: CommunicationUpdateManyWithoutClientInput
}

export interface LanguageWhereInput {
  AND?: LanguageWhereInput[] | LanguageWhereInput
  OR?: LanguageWhereInput[] | LanguageWhereInput
  NOT?: LanguageWhereInput[] | LanguageWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  type?: LanguageEnum
  type_not?: LanguageEnum
  type_in?: LanguageEnum[] | LanguageEnum
  type_not_in?: LanguageEnum[] | LanguageEnum
  clients_every?: ClientWhereInput
  clients_some?: ClientWhereInput
  clients_none?: ClientWhereInput
  offers_every?: OfferWhereInput
  offers_some?: OfferWhereInput
  offers_none?: OfferWhereInput
  items_every?: ItemWhereInput
  items_some?: ItemWhereInput
  items_none?: ItemWhereInput
  users_every?: UserWhereInput
  users_some?: UserWhereInput
  users_none?: UserWhereInput
}

export interface LanguageUpdateOneWithoutClientsInput {
  create?: LanguageCreateWithoutClientsInput
  connect?: LanguageWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LanguageUpdateWithoutClientsDataInput
  upsert?: LanguageUpsertWithoutClientsInput
}

export interface EventWhereInput {
  AND?: EventWhereInput[] | EventWhereInput
  OR?: EventWhereInput[] | EventWhereInput
  NOT?: EventWhereInput[] | EventWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  endTime?: DateTime
  endTime_not?: DateTime
  endTime_in?: DateTime[] | DateTime
  endTime_not_in?: DateTime[] | DateTime
  endTime_lt?: DateTime
  endTime_lte?: DateTime
  endTime_gt?: DateTime
  endTime_gte?: DateTime
  gmtOffset?: String
  gmtOffset_not?: String
  gmtOffset_in?: String[] | String
  gmtOffset_not_in?: String[] | String
  gmtOffset_lt?: String
  gmtOffset_lte?: String
  gmtOffset_gt?: String
  gmtOffset_gte?: String
  gmtOffset_contains?: String
  gmtOffset_not_contains?: String
  gmtOffset_starts_with?: String
  gmtOffset_not_starts_with?: String
  gmtOffset_ends_with?: String
  gmtOffset_not_ends_with?: String
  startTime?: DateTime
  startTime_not?: DateTime
  startTime_in?: DateTime[] | DateTime
  startTime_not_in?: DateTime[] | DateTime
  startTime_lt?: DateTime
  startTime_lte?: DateTime
  startTime_gt?: DateTime
  startTime_gte?: DateTime
  client?: ClientWhereInput
  offer?: OfferWhereInput
  employees_every?: EmployeeWhereInput
  employees_some?: EmployeeWhereInput
  employees_none?: EmployeeWhereInput
  stuffs_every?: StuffWhereInput
  stuffs_some?: StuffWhereInput
  stuffs_none?: StuffWhereInput
  vehicles_every?: VehicleWhereInput
  vehicles_some?: VehicleWhereInput
  vehicles_none?: VehicleWhereInput
}

export interface LanguageUpdateWithoutClientsDataInput {
  type?: LanguageEnum
  offers?: OfferUpdateManyWithoutLanguageInput
  items?: ItemUpdateManyWithoutLanguageInput
  users?: UserUpdateManyWithoutLanguageInput
}

export interface EventWhereUniqueInput {
  id?: ID_Input
}

export interface OfferUpdateManyWithoutLanguageInput {
  create?: OfferCreateWithoutLanguageInput[] | OfferCreateWithoutLanguageInput
  connect?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
  disconnect?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
  delete?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
  update?: OfferUpdateWithWhereUniqueWithoutLanguageInput[] | OfferUpdateWithWhereUniqueWithoutLanguageInput
  upsert?: OfferUpsertWithWhereUniqueWithoutLanguageInput[] | OfferUpsertWithWhereUniqueWithoutLanguageInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface OfferUpdateWithWhereUniqueWithoutLanguageInput {
  where: OfferWhereUniqueInput
  data: OfferUpdateWithoutLanguageDataInput
}

export interface EmployeeWhereUniqueInput {
  id?: ID_Input
}

export interface OfferUpdateWithoutLanguageDataInput {
  version?: Int
  customMessage?: String
  status?: StatusOffer
  address?: String
  city?: String
  endTime?: DateTime
  gmtOffset?: String
  maxPersons?: Int
  minPersons?: Int
  name?: String
  postalCode?: String
  startTime?: DateTime
  client?: ClientUpdateOneWithoutOffersInput
  event?: EventUpdateOneWithoutOfferInput
  budgetLines?: BudgetLineUpdateManyWithoutOfferInput
  clientContact?: ClientContactUpdateOneWithoutOffersInput
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType?: EventTypeUpdateOneWithoutOffersInput
  place?: PlaceUpdateOneWithoutOfferInput
  sectionItems?: SectionItemUpdateManyWithoutOfferInput
}

export interface PlaceContactWhereUniqueInput {
  id?: ID_Input
}

export interface EmployeeEstimationUpdateManyWithoutOfferInput {
  create?: EmployeeEstimationCreateWithoutOfferInput[] | EmployeeEstimationCreateWithoutOfferInput
  connect?: EmployeeEstimationWhereUniqueInput[] | EmployeeEstimationWhereUniqueInput
  disconnect?: EmployeeEstimationWhereUniqueInput[] | EmployeeEstimationWhereUniqueInput
  delete?: EmployeeEstimationWhereUniqueInput[] | EmployeeEstimationWhereUniqueInput
  update?: EmployeeEstimationUpdateWithWhereUniqueWithoutOfferInput[] | EmployeeEstimationUpdateWithWhereUniqueWithoutOfferInput
  upsert?: EmployeeEstimationUpsertWithWhereUniqueWithoutOfferInput[] | EmployeeEstimationUpsertWithWhereUniqueWithoutOfferInput
}

export interface VehicleWhereUniqueInput {
  id?: ID_Input
}

export interface EmployeeEstimationUpdateWithWhereUniqueWithoutOfferInput {
  where: EmployeeEstimationWhereUniqueInput
  data: EmployeeEstimationUpdateWithoutOfferDataInput
}

export interface BudgetLineUpdateWithoutTaxDataInput {
  description?: String
  quantity?: Int
  unitPrice?: Float
  value?: Float
  offer?: OfferUpdateOneWithoutBudgetLinesInput
}

export interface EmployeeEstimationUpdateWithoutOfferDataInput {
  estimatedEndAt?: DateTime
  estimatedStartAt?: DateTime
  number?: Int
  pricePerHour?: Float
  total?: Float
  job?: JobUpdateOneWithoutEmployeeEstimationsInput
}

export interface EventUpsertWithWhereUniqueWithoutStuffsInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutStuffsDataInput
  create: EventCreateWithoutStuffsInput
}

export interface JobUpdateOneWithoutEmployeeEstimationsInput {
  create?: JobCreateWithoutEmployeeEstimationsInput
  connect?: JobWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: JobUpdateWithoutEmployeeEstimationsDataInput
  upsert?: JobUpsertWithoutEmployeeEstimationsInput
}

export interface StuffUpdateInput {
  name?: String
  quantity?: Int
  events?: EventUpdateManyWithoutStuffsInput
}

export interface JobUpdateWithoutEmployeeEstimationsDataInput {
  name?: String
  employees?: EmployeeUpdateManyWithoutJobInput
  users?: UserUpdateManyWithoutJobsInput
}

export interface PlaceUpdateOneWithoutPlaceContactsInput {
  create?: PlaceCreateWithoutPlaceContactsInput
  connect?: PlaceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PlaceUpdateWithoutPlaceContactsDataInput
  upsert?: PlaceUpsertWithoutPlaceContactsInput
}

export interface EmployeeUpdateManyWithoutJobInput {
  create?: EmployeeCreateWithoutJobInput[] | EmployeeCreateWithoutJobInput
  connect?: EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput
  disconnect?: EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput
  delete?: EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput
  update?: EmployeeUpdateWithWhereUniqueWithoutJobInput[] | EmployeeUpdateWithWhereUniqueWithoutJobInput
  upsert?: EmployeeUpsertWithWhereUniqueWithoutJobInput[] | EmployeeUpsertWithWhereUniqueWithoutJobInput
}

export interface OfferUpdateWithoutEventTypeDataInput {
  version?: Int
  customMessage?: String
  status?: StatusOffer
  address?: String
  city?: String
  endTime?: DateTime
  gmtOffset?: String
  maxPersons?: Int
  minPersons?: Int
  name?: String
  postalCode?: String
  startTime?: DateTime
  client?: ClientUpdateOneWithoutOffersInput
  event?: EventUpdateOneWithoutOfferInput
  language?: LanguageUpdateOneWithoutOffersInput
  budgetLines?: BudgetLineUpdateManyWithoutOfferInput
  clientContact?: ClientContactUpdateOneWithoutOffersInput
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutOfferInput
  place?: PlaceUpdateOneWithoutOfferInput
  sectionItems?: SectionItemUpdateManyWithoutOfferInput
}

export interface EmployeeUpdateWithWhereUniqueWithoutJobInput {
  where: EmployeeWhereUniqueInput
  data: EmployeeUpdateWithoutJobDataInput
}

export interface EmployeeEstimationUpdateInput {
  estimatedEndAt?: DateTime
  estimatedStartAt?: DateTime
  number?: Int
  pricePerHour?: Float
  total?: Float
  job?: JobUpdateOneWithoutEmployeeEstimationsInput
  offer?: OfferUpdateOneWithoutEmployeeEstimationsInput
}

export interface EmployeeUpdateWithoutJobDataInput {
  endedAt?: DateTime
  estimatedEndAt?: DateTime
  estimatedStartAt?: DateTime
  startedAt?: DateTime
  event?: EventUpdateOneWithoutEmployeesInput
  user?: UserUpdateOneWithoutEmployeeInput
}

export interface OfferUpdateOneWithoutBudgetLinesInput {
  create?: OfferCreateWithoutBudgetLinesInput
  connect?: OfferWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OfferUpdateWithoutBudgetLinesDataInput
  upsert?: OfferUpsertWithoutBudgetLinesInput
}

export interface EventUpdateOneWithoutEmployeesInput {
  create?: EventCreateWithoutEmployeesInput
  connect?: EventWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: EventUpdateWithoutEmployeesDataInput
  upsert?: EventUpsertWithoutEmployeesInput
}

export interface OfferUpdateOneWithoutPlaceInput {
  create?: OfferCreateWithoutPlaceInput
  connect?: OfferWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OfferUpdateWithoutPlaceDataInput
  upsert?: OfferUpsertWithoutPlaceInput
}

export interface EventUpdateWithoutEmployeesDataInput {
  endTime?: DateTime
  gmtOffset?: String
  startTime?: DateTime
  client?: ClientUpdateOneWithoutEventsInput
  offer?: OfferUpdateOneWithoutEventInput
  stuffs?: StuffUpdateManyWithoutEventsInput
  vehicles?: VehicleUpdateManyWithoutEventsInput
}

export interface ItemUpdateInput {
  description?: String
  name?: String
  internalDescription?: String
  language?: LanguageUpdateOneWithoutItemsInput
  sectionItems?: SectionItemUpdateManyWithoutItemsInput
}

export interface StuffUpdateManyWithoutEventsInput {
  create?: StuffCreateWithoutEventsInput[] | StuffCreateWithoutEventsInput
  connect?: StuffWhereUniqueInput[] | StuffWhereUniqueInput
  disconnect?: StuffWhereUniqueInput[] | StuffWhereUniqueInput
  delete?: StuffWhereUniqueInput[] | StuffWhereUniqueInput
  update?: StuffUpdateWithWhereUniqueWithoutEventsInput[] | StuffUpdateWithWhereUniqueWithoutEventsInput
  upsert?: StuffUpsertWithWhereUniqueWithoutEventsInput[] | StuffUpsertWithWhereUniqueWithoutEventsInput
}

export interface ClientUpsertWithoutCommunicationsInput {
  update: ClientUpdateWithoutCommunicationsDataInput
  create: ClientCreateWithoutCommunicationsInput
}

export interface StuffUpdateWithWhereUniqueWithoutEventsInput {
  where: StuffWhereUniqueInput
  data: StuffUpdateWithoutEventsDataInput
}

export interface EventUpsertWithWhereUniqueWithoutClientInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutClientDataInput
  create: EventCreateWithoutClientInput
}

export interface StuffUpdateWithoutEventsDataInput {
  name?: String
  quantity?: Int
}

export interface OfferUpsertWithWhereUniqueWithoutClientContactInput {
  where: OfferWhereUniqueInput
  update: OfferUpdateWithoutClientContactDataInput
  create: OfferCreateWithoutClientContactInput
}

export interface StuffUpsertWithWhereUniqueWithoutEventsInput {
  where: StuffWhereUniqueInput
  update: StuffUpdateWithoutEventsDataInput
  create: StuffCreateWithoutEventsInput
}

export interface EmployeeUpdateWithWhereUniqueWithoutEventInput {
  where: EmployeeWhereUniqueInput
  data: EmployeeUpdateWithoutEventDataInput
}

export interface VehicleUpdateManyWithoutEventsInput {
  create?: VehicleCreateWithoutEventsInput[] | VehicleCreateWithoutEventsInput
  connect?: VehicleWhereUniqueInput[] | VehicleWhereUniqueInput
  disconnect?: VehicleWhereUniqueInput[] | VehicleWhereUniqueInput
  delete?: VehicleWhereUniqueInput[] | VehicleWhereUniqueInput
  update?: VehicleUpdateWithWhereUniqueWithoutEventsInput[] | VehicleUpdateWithWhereUniqueWithoutEventsInput
  upsert?: VehicleUpsertWithWhereUniqueWithoutEventsInput[] | VehicleUpsertWithWhereUniqueWithoutEventsInput
}

export interface LanguageUpsertWithoutOffersInput {
  update: LanguageUpdateWithoutOffersDataInput
  create: LanguageCreateWithoutOffersInput
}

export interface VehicleUpdateWithWhereUniqueWithoutEventsInput {
  where: VehicleWhereUniqueInput
  data: VehicleUpdateWithoutEventsDataInput
}

export interface EventCreateManyWithoutClientInput {
  create?: EventCreateWithoutClientInput[] | EventCreateWithoutClientInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface VehicleUpdateWithoutEventsDataInput {
  color?: String
  description?: String
  name?: String
  plate?: String
  year?: Int
}

export interface ClientCreateOneWithoutOffersInput {
  create?: ClientCreateWithoutOffersInput
  connect?: ClientWhereUniqueInput
}

export interface VehicleUpsertWithWhereUniqueWithoutEventsInput {
  where: VehicleWhereUniqueInput
  update: VehicleUpdateWithoutEventsDataInput
  create: VehicleCreateWithoutEventsInput
}

export interface OfferCreateManyWithoutClientContactInput {
  create?: OfferCreateWithoutClientContactInput[] | OfferCreateWithoutClientContactInput
  connect?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
}

export interface EventUpsertWithoutEmployeesInput {
  update: EventUpdateWithoutEmployeesDataInput
  create: EventCreateWithoutEmployeesInput
}

export interface ClientCreateOneWithoutEventsInput {
  create?: ClientCreateWithoutEventsInput
  connect?: ClientWhereUniqueInput
}

export interface UserUpdateOneWithoutEmployeeInput {
  create?: UserCreateWithoutEmployeeInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutEmployeeDataInput
  upsert?: UserUpsertWithoutEmployeeInput
}

export interface LanguageCreateOneWithoutOffersInput {
  create?: LanguageCreateWithoutOffersInput
  connect?: LanguageWhereUniqueInput
}

export interface UserUpdateWithoutEmployeeDataInput {
  role?: Role
  email?: String
  image?: String
  name?: String
  password?: String
  jobs?: JobUpdateManyWithoutUsersInput
  language?: LanguageUpdateOneWithoutUsersInput
}

export interface CommunicationCreateManyWithoutClientInput {
  create?: CommunicationCreateWithoutClientInput[] | CommunicationCreateWithoutClientInput
  connect?: CommunicationWhereUniqueInput[] | CommunicationWhereUniqueInput
}

export interface JobUpdateManyWithoutUsersInput {
  create?: JobCreateWithoutUsersInput[] | JobCreateWithoutUsersInput
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput
  disconnect?: JobWhereUniqueInput[] | JobWhereUniqueInput
  delete?: JobWhereUniqueInput[] | JobWhereUniqueInput
  update?: JobUpdateWithWhereUniqueWithoutUsersInput[] | JobUpdateWithWhereUniqueWithoutUsersInput
  upsert?: JobUpsertWithWhereUniqueWithoutUsersInput[] | JobUpsertWithWhereUniqueWithoutUsersInput
}

export interface SectionItemCreateManyWithoutItemsInput {
  create?: SectionItemCreateWithoutItemsInput[] | SectionItemCreateWithoutItemsInput
  connect?: SectionItemWhereUniqueInput[] | SectionItemWhereUniqueInput
}

export interface JobUpdateWithWhereUniqueWithoutUsersInput {
  where: JobWhereUniqueInput
  data: JobUpdateWithoutUsersDataInput
}

export interface BudgetLineCreateManyWithoutOfferInput {
  create?: BudgetLineCreateWithoutOfferInput[] | BudgetLineCreateWithoutOfferInput
  connect?: BudgetLineWhereUniqueInput[] | BudgetLineWhereUniqueInput
}

export interface JobUpdateWithoutUsersDataInput {
  name?: String
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutJobInput
  employees?: EmployeeUpdateManyWithoutJobInput
}

export interface ClientContactCreateOneWithoutOffersInput {
  create?: ClientContactCreateWithoutOffersInput
  connect?: ClientContactWhereUniqueInput
}

export interface EmployeeEstimationUpdateManyWithoutJobInput {
  create?: EmployeeEstimationCreateWithoutJobInput[] | EmployeeEstimationCreateWithoutJobInput
  connect?: EmployeeEstimationWhereUniqueInput[] | EmployeeEstimationWhereUniqueInput
  disconnect?: EmployeeEstimationWhereUniqueInput[] | EmployeeEstimationWhereUniqueInput
  delete?: EmployeeEstimationWhereUniqueInput[] | EmployeeEstimationWhereUniqueInput
  update?: EmployeeEstimationUpdateWithWhereUniqueWithoutJobInput[] | EmployeeEstimationUpdateWithWhereUniqueWithoutJobInput
  upsert?: EmployeeEstimationUpsertWithWhereUniqueWithoutJobInput[] | EmployeeEstimationUpsertWithWhereUniqueWithoutJobInput
}

export interface LanguageCreateOneWithoutClientsInput {
  create?: LanguageCreateWithoutClientsInput
  connect?: LanguageWhereUniqueInput
}

export interface EmployeeEstimationUpdateWithWhereUniqueWithoutJobInput {
  where: EmployeeEstimationWhereUniqueInput
  data: EmployeeEstimationUpdateWithoutJobDataInput
}

export interface EmployeeEstimationCreateManyWithoutOfferInput {
  create?: EmployeeEstimationCreateWithoutOfferInput[] | EmployeeEstimationCreateWithoutOfferInput
  connect?: EmployeeEstimationWhereUniqueInput[] | EmployeeEstimationWhereUniqueInput
}

export interface EmployeeEstimationUpdateWithoutJobDataInput {
  estimatedEndAt?: DateTime
  estimatedStartAt?: DateTime
  number?: Int
  pricePerHour?: Float
  total?: Float
  offer?: OfferUpdateOneWithoutEmployeeEstimationsInput
}

export interface EmployeeCreateManyWithoutJobInput {
  create?: EmployeeCreateWithoutJobInput[] | EmployeeCreateWithoutJobInput
  connect?: EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput
}

export interface OfferUpdateOneWithoutEmployeeEstimationsInput {
  create?: OfferCreateWithoutEmployeeEstimationsInput
  connect?: OfferWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OfferUpdateWithoutEmployeeEstimationsDataInput
  upsert?: OfferUpsertWithoutEmployeeEstimationsInput
}

export interface StuffCreateManyWithoutEventsInput {
  create?: StuffCreateWithoutEventsInput[] | StuffCreateWithoutEventsInput
  connect?: StuffWhereUniqueInput[] | StuffWhereUniqueInput
}

export interface OfferUpdateWithoutEmployeeEstimationsDataInput {
  version?: Int
  customMessage?: String
  status?: StatusOffer
  address?: String
  city?: String
  endTime?: DateTime
  gmtOffset?: String
  maxPersons?: Int
  minPersons?: Int
  name?: String
  postalCode?: String
  startTime?: DateTime
  client?: ClientUpdateOneWithoutOffersInput
  event?: EventUpdateOneWithoutOfferInput
  language?: LanguageUpdateOneWithoutOffersInput
  budgetLines?: BudgetLineUpdateManyWithoutOfferInput
  clientContact?: ClientContactUpdateOneWithoutOffersInput
  eventType?: EventTypeUpdateOneWithoutOffersInput
  place?: PlaceUpdateOneWithoutOfferInput
  sectionItems?: SectionItemUpdateManyWithoutOfferInput
}

export interface UserCreateOneWithoutEmployeeInput {
  create?: UserCreateWithoutEmployeeInput
  connect?: UserWhereUniqueInput
}

export interface EventTypeUpdateOneWithoutOffersInput {
  create?: EventTypeCreateWithoutOffersInput
  connect?: EventTypeWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: EventTypeUpdateWithoutOffersDataInput
  upsert?: EventTypeUpsertWithoutOffersInput
}

export interface EmployeeEstimationCreateManyWithoutJobInput {
  create?: EmployeeEstimationCreateWithoutJobInput[] | EmployeeEstimationCreateWithoutJobInput
  connect?: EmployeeEstimationWhereUniqueInput[] | EmployeeEstimationWhereUniqueInput
}

export interface EventTypeUpdateWithoutOffersDataInput {
  name?: String
}

export interface EventTypeCreateOneWithoutOffersInput {
  create?: EventTypeCreateWithoutOffersInput
  connect?: EventTypeWhereUniqueInput
}

export interface EventTypeUpsertWithoutOffersInput {
  update: EventTypeUpdateWithoutOffersDataInput
  create: EventTypeCreateWithoutOffersInput
}

export interface PlaceContactCreateManyWithoutPlaceInput {
  create?: PlaceContactCreateWithoutPlaceInput[] | PlaceContactCreateWithoutPlaceInput
  connect?: PlaceContactWhereUniqueInput[] | PlaceContactWhereUniqueInput
}

export interface PlaceUpdateOneWithoutOfferInput {
  create?: PlaceCreateWithoutOfferInput
  connect?: PlaceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PlaceUpdateWithoutOfferDataInput
  upsert?: PlaceUpsertWithoutOfferInput
}

export interface PlaceWhereInput {
  AND?: PlaceWhereInput[] | PlaceWhereInput
  OR?: PlaceWhereInput[] | PlaceWhereInput
  NOT?: PlaceWhereInput[] | PlaceWhereInput
  address?: String
  address_not?: String
  address_in?: String[] | String
  address_not_in?: String[] | String
  address_lt?: String
  address_lte?: String
  address_gt?: String
  address_gte?: String
  address_contains?: String
  address_not_contains?: String
  address_starts_with?: String
  address_not_starts_with?: String
  address_ends_with?: String
  address_not_ends_with?: String
  city?: String
  city_not?: String
  city_in?: String[] | String
  city_not_in?: String[] | String
  city_lt?: String
  city_lte?: String
  city_gt?: String
  city_gte?: String
  city_contains?: String
  city_not_contains?: String
  city_starts_with?: String
  city_not_starts_with?: String
  city_ends_with?: String
  city_not_ends_with?: String
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  postalCode?: String
  postalCode_not?: String
  postalCode_in?: String[] | String
  postalCode_not_in?: String[] | String
  postalCode_lt?: String
  postalCode_lte?: String
  postalCode_gt?: String
  postalCode_gte?: String
  postalCode_contains?: String
  postalCode_not_contains?: String
  postalCode_starts_with?: String
  postalCode_not_starts_with?: String
  postalCode_ends_with?: String
  postalCode_not_ends_with?: String
  country?: Country
  country_not?: Country
  country_in?: Country[] | Country
  country_not_in?: Country[] | Country
  note?: String
  note_not?: String
  note_in?: String[] | String
  note_not_in?: String[] | String
  note_lt?: String
  note_lte?: String
  note_gt?: String
  note_gte?: String
  note_contains?: String
  note_not_contains?: String
  note_starts_with?: String
  note_not_starts_with?: String
  note_ends_with?: String
  note_not_ends_with?: String
  offer?: OfferWhereInput
  placeContacts_every?: PlaceContactWhereInput
  placeContacts_some?: PlaceContactWhereInput
  placeContacts_none?: PlaceContactWhereInput
}

export interface PlaceUpdateWithoutOfferDataInput {
  address?: String
  city?: String
  name?: String
  postalCode?: String
  country?: Country
  note?: String
  placeContacts?: PlaceContactUpdateManyWithoutPlaceInput
}

export interface PlaceContactSubscriptionWhereInput {
  AND?: PlaceContactSubscriptionWhereInput[] | PlaceContactSubscriptionWhereInput
  OR?: PlaceContactSubscriptionWhereInput[] | PlaceContactSubscriptionWhereInput
  NOT?: PlaceContactSubscriptionWhereInput[] | PlaceContactSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PlaceContactWhereInput
}

export interface PlaceContactUpdateManyWithoutPlaceInput {
  create?: PlaceContactCreateWithoutPlaceInput[] | PlaceContactCreateWithoutPlaceInput
  connect?: PlaceContactWhereUniqueInput[] | PlaceContactWhereUniqueInput
  disconnect?: PlaceContactWhereUniqueInput[] | PlaceContactWhereUniqueInput
  delete?: PlaceContactWhereUniqueInput[] | PlaceContactWhereUniqueInput
  update?: PlaceContactUpdateWithWhereUniqueWithoutPlaceInput[] | PlaceContactUpdateWithWhereUniqueWithoutPlaceInput
  upsert?: PlaceContactUpsertWithWhereUniqueWithoutPlaceInput[] | PlaceContactUpsertWithWhereUniqueWithoutPlaceInput
}

export interface EmployeeWhereInput {
  AND?: EmployeeWhereInput[] | EmployeeWhereInput
  OR?: EmployeeWhereInput[] | EmployeeWhereInput
  NOT?: EmployeeWhereInput[] | EmployeeWhereInput
  endedAt?: DateTime
  endedAt_not?: DateTime
  endedAt_in?: DateTime[] | DateTime
  endedAt_not_in?: DateTime[] | DateTime
  endedAt_lt?: DateTime
  endedAt_lte?: DateTime
  endedAt_gt?: DateTime
  endedAt_gte?: DateTime
  estimatedEndAt?: DateTime
  estimatedEndAt_not?: DateTime
  estimatedEndAt_in?: DateTime[] | DateTime
  estimatedEndAt_not_in?: DateTime[] | DateTime
  estimatedEndAt_lt?: DateTime
  estimatedEndAt_lte?: DateTime
  estimatedEndAt_gt?: DateTime
  estimatedEndAt_gte?: DateTime
  estimatedStartAt?: DateTime
  estimatedStartAt_not?: DateTime
  estimatedStartAt_in?: DateTime[] | DateTime
  estimatedStartAt_not_in?: DateTime[] | DateTime
  estimatedStartAt_lt?: DateTime
  estimatedStartAt_lte?: DateTime
  estimatedStartAt_gt?: DateTime
  estimatedStartAt_gte?: DateTime
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  startedAt?: DateTime
  startedAt_not?: DateTime
  startedAt_in?: DateTime[] | DateTime
  startedAt_not_in?: DateTime[] | DateTime
  startedAt_lt?: DateTime
  startedAt_lte?: DateTime
  startedAt_gt?: DateTime
  startedAt_gte?: DateTime
  event?: EventWhereInput
  job?: JobWhereInput
  user?: UserWhereInput
}

export interface PlaceContactUpdateWithWhereUniqueWithoutPlaceInput {
  where: PlaceContactWhereUniqueInput
  data: PlaceContactUpdateWithoutPlaceDataInput
}

export interface LanguageSubscriptionWhereInput {
  AND?: LanguageSubscriptionWhereInput[] | LanguageSubscriptionWhereInput
  OR?: LanguageSubscriptionWhereInput[] | LanguageSubscriptionWhereInput
  NOT?: LanguageSubscriptionWhereInput[] | LanguageSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LanguageWhereInput
}

export interface PlaceContactUpdateWithoutPlaceDataInput {
  email?: String
  mobilePhone?: String
  name?: String
  phoneNumber?: String
}

export interface EventUpdateWithoutVehiclesDataInput {
  endTime?: DateTime
  gmtOffset?: String
  startTime?: DateTime
  client?: ClientUpdateOneWithoutEventsInput
  offer?: OfferUpdateOneWithoutEventInput
  employees?: EmployeeUpdateManyWithoutEventInput
  stuffs?: StuffUpdateManyWithoutEventsInput
}

export interface PlaceContactUpsertWithWhereUniqueWithoutPlaceInput {
  where: PlaceContactWhereUniqueInput
  update: PlaceContactUpdateWithoutPlaceDataInput
  create: PlaceContactCreateWithoutPlaceInput
}

export interface OfferWhereUniqueInput {
  id?: ID_Input
}

export interface PlaceUpsertWithoutOfferInput {
  update: PlaceUpdateWithoutOfferDataInput
  create: PlaceCreateWithoutOfferInput
}

export interface EventTypeWhereUniqueInput {
  id?: ID_Input
}

export interface SectionItemUpdateManyWithoutOfferInput {
  create?: SectionItemCreateWithoutOfferInput[] | SectionItemCreateWithoutOfferInput
  connect?: SectionItemWhereUniqueInput[] | SectionItemWhereUniqueInput
  disconnect?: SectionItemWhereUniqueInput[] | SectionItemWhereUniqueInput
  delete?: SectionItemWhereUniqueInput[] | SectionItemWhereUniqueInput
  update?: SectionItemUpdateWithWhereUniqueWithoutOfferInput[] | SectionItemUpdateWithWhereUniqueWithoutOfferInput
  upsert?: SectionItemUpsertWithWhereUniqueWithoutOfferInput[] | SectionItemUpsertWithWhereUniqueWithoutOfferInput
}

export interface VehicleUpdateInput {
  color?: String
  description?: String
  name?: String
  plate?: String
  year?: Int
  events?: EventUpdateManyWithoutVehiclesInput
}

export interface SectionItemUpdateWithWhereUniqueWithoutOfferInput {
  where: SectionItemWhereUniqueInput
  data: SectionItemUpdateWithoutOfferDataInput
}

export interface EventUpdateWithWhereUniqueWithoutStuffsInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutStuffsDataInput
}

export interface SectionItemUpdateWithoutOfferDataInput {
  content?: String
  h?: Int
  i?: String
  isDraggable?: Boolean
  isResizable?: Boolean
  maxH?: Int
  maxW?: Int
  minH?: Int
  minW?: Int
  moved?: Boolean
  persons?: Int
  price?: Float
  static?: Boolean
  time?: DateTime
  title?: String
  type?: SectionTypes
  w?: Int
  x?: Int
  y?: Int
  items?: ItemUpdateManyWithoutSectionItemsInput
}

export interface JobUpdateInput {
  name?: String
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutJobInput
  employees?: EmployeeUpdateManyWithoutJobInput
  users?: UserUpdateManyWithoutJobsInput
}

export interface ItemUpdateManyWithoutSectionItemsInput {
  create?: ItemCreateWithoutSectionItemsInput[] | ItemCreateWithoutSectionItemsInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  disconnect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  delete?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  update?: ItemUpdateWithWhereUniqueWithoutSectionItemsInput[] | ItemUpdateWithWhereUniqueWithoutSectionItemsInput
  upsert?: ItemUpsertWithWhereUniqueWithoutSectionItemsInput[] | ItemUpsertWithWhereUniqueWithoutSectionItemsInput
}

export interface OfferUpsertWithoutBudgetLinesInput {
  update: OfferUpdateWithoutBudgetLinesDataInput
  create: OfferCreateWithoutBudgetLinesInput
}

export interface ItemUpdateWithWhereUniqueWithoutSectionItemsInput {
  where: ItemWhereUniqueInput
  data: ItemUpdateWithoutSectionItemsDataInput
}

export interface ClientContactUpdateInput {
  email?: String
  mobilePhone?: String
  name?: String
  phoneNumber?: String
  client?: ClientUpdateOneWithoutClientContactsInput
  offers?: OfferUpdateManyWithoutClientContactInput
}

export interface ItemUpdateWithoutSectionItemsDataInput {
  description?: String
  name?: String
  internalDescription?: String
  language?: LanguageUpdateOneWithoutItemsInput
}

export interface ClientUpdateOneWithoutCommunicationsInput {
  create?: ClientCreateWithoutCommunicationsInput
  connect?: ClientWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ClientUpdateWithoutCommunicationsDataInput
  upsert?: ClientUpsertWithoutCommunicationsInput
}

export interface LanguageUpdateOneWithoutItemsInput {
  create?: LanguageCreateWithoutItemsInput
  connect?: LanguageWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LanguageUpdateWithoutItemsDataInput
  upsert?: LanguageUpsertWithoutItemsInput
}

export interface EmployeeUpsertWithWhereUniqueWithoutEventInput {
  where: EmployeeWhereUniqueInput
  update: EmployeeUpdateWithoutEventDataInput
  create: EmployeeCreateWithoutEventInput
}

export interface LanguageUpdateWithoutItemsDataInput {
  type?: LanguageEnum
  clients?: ClientUpdateManyWithoutLanguageInput
  offers?: OfferUpdateManyWithoutLanguageInput
  users?: UserUpdateManyWithoutLanguageInput
}

export interface SectionItemUpsertWithWhereUniqueWithoutItemsInput {
  where: SectionItemWhereUniqueInput
  update: SectionItemUpdateWithoutItemsDataInput
  create: SectionItemCreateWithoutItemsInput
}

export interface UserUpdateManyWithoutLanguageInput {
  create?: UserCreateWithoutLanguageInput[] | UserCreateWithoutLanguageInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutLanguageInput[] | UserUpdateWithWhereUniqueWithoutLanguageInput
  upsert?: UserUpsertWithWhereUniqueWithoutLanguageInput[] | UserUpsertWithWhereUniqueWithoutLanguageInput
}

export interface ClientContactCreateManyWithoutClientInput {
  create?: ClientContactCreateWithoutClientInput[] | ClientContactCreateWithoutClientInput
  connect?: ClientContactWhereUniqueInput[] | ClientContactWhereUniqueInput
}

export interface UserUpdateWithWhereUniqueWithoutLanguageInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutLanguageDataInput
}

export interface OfferCreateManyWithoutClientInput {
  create?: OfferCreateWithoutClientInput[] | OfferCreateWithoutClientInput
  connect?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
}

export interface UserUpdateWithoutLanguageDataInput {
  role?: Role
  email?: String
  image?: String
  name?: String
  password?: String
  employee?: EmployeeUpdateOneWithoutUserInput
  jobs?: JobUpdateManyWithoutUsersInput
}

export interface ItemCreateManyWithoutLanguageInput {
  create?: ItemCreateWithoutLanguageInput[] | ItemCreateWithoutLanguageInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
}

export interface EmployeeUpdateOneWithoutUserInput {
  create?: EmployeeCreateWithoutUserInput
  connect?: EmployeeWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: EmployeeUpdateWithoutUserDataInput
  upsert?: EmployeeUpsertWithoutUserInput
}

export interface TaxCreateOneWithoutBudgetLinesInput {
  create?: TaxCreateWithoutBudgetLinesInput
  connect?: TaxWhereUniqueInput
}

export interface EmployeeUpdateWithoutUserDataInput {
  endedAt?: DateTime
  estimatedEndAt?: DateTime
  estimatedStartAt?: DateTime
  startedAt?: DateTime
  event?: EventUpdateOneWithoutEmployeesInput
  job?: JobUpdateOneWithoutEmployeesInput
}

export interface OfferCreateManyWithoutLanguageInput {
  create?: OfferCreateWithoutLanguageInput[] | OfferCreateWithoutLanguageInput
  connect?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
}

export interface JobUpdateOneWithoutEmployeesInput {
  create?: JobCreateWithoutEmployeesInput
  connect?: JobWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: JobUpdateWithoutEmployeesDataInput
  upsert?: JobUpsertWithoutEmployeesInput
}

export interface EventCreateOneWithoutEmployeesInput {
  create?: EventCreateWithoutEmployeesInput
  connect?: EventWhereUniqueInput
}

export interface JobUpdateWithoutEmployeesDataInput {
  name?: String
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutJobInput
  users?: UserUpdateManyWithoutJobsInput
}

export interface JobCreateManyWithoutUsersInput {
  create?: JobCreateWithoutUsersInput[] | JobCreateWithoutUsersInput
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput
}

export interface UserUpdateManyWithoutJobsInput {
  create?: UserCreateWithoutJobsInput[] | UserCreateWithoutJobsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutJobsInput[] | UserUpdateWithWhereUniqueWithoutJobsInput
  upsert?: UserUpsertWithWhereUniqueWithoutJobsInput[] | UserUpsertWithWhereUniqueWithoutJobsInput
}

export interface PlaceCreateOneWithoutOfferInput {
  create?: PlaceCreateWithoutOfferInput
  connect?: PlaceWhereUniqueInput
}

export interface UserUpdateWithWhereUniqueWithoutJobsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutJobsDataInput
}

export interface EventTypeWhereInput {
  AND?: EventTypeWhereInput[] | EventTypeWhereInput
  OR?: EventTypeWhereInput[] | EventTypeWhereInput
  NOT?: EventTypeWhereInput[] | EventTypeWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  offers_every?: OfferWhereInput
  offers_some?: OfferWhereInput
  offers_none?: OfferWhereInput
}

export interface UserUpdateWithoutJobsDataInput {
  role?: Role
  email?: String
  image?: String
  name?: String
  password?: String
  employee?: EmployeeUpdateOneWithoutUserInput
  language?: LanguageUpdateOneWithoutUsersInput
}

export interface ClientContactSubscriptionWhereInput {
  AND?: ClientContactSubscriptionWhereInput[] | ClientContactSubscriptionWhereInput
  OR?: ClientContactSubscriptionWhereInput[] | ClientContactSubscriptionWhereInput
  NOT?: ClientContactSubscriptionWhereInput[] | ClientContactSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ClientContactWhereInput
}

export interface LanguageUpdateOneWithoutUsersInput {
  create?: LanguageCreateWithoutUsersInput
  connect?: LanguageWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LanguageUpdateWithoutUsersDataInput
  upsert?: LanguageUpsertWithoutUsersInput
}

export interface ClientWhereUniqueInput {
  id?: ID_Input
}

export interface LanguageUpdateWithoutUsersDataInput {
  type?: LanguageEnum
  clients?: ClientUpdateManyWithoutLanguageInput
  offers?: OfferUpdateManyWithoutLanguageInput
  items?: ItemUpdateManyWithoutLanguageInput
}

export interface StuffWhereUniqueInput {
  id?: ID_Input
}

export interface LanguageUpsertWithoutUsersInput {
  update: LanguageUpdateWithoutUsersDataInput
  create: LanguageCreateWithoutUsersInput
}

export interface PlaceUpsertWithoutPlaceContactsInput {
  update: PlaceUpdateWithoutPlaceContactsDataInput
  create: PlaceCreateWithoutPlaceContactsInput
}

export interface UserUpsertWithWhereUniqueWithoutJobsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutJobsDataInput
  create: UserCreateWithoutJobsInput
}

export interface OfferUpsertWithoutPlaceInput {
  update: OfferUpdateWithoutPlaceDataInput
  create: OfferCreateWithoutPlaceInput
}

export interface JobUpsertWithoutEmployeesInput {
  update: JobUpdateWithoutEmployeesDataInput
  create: JobCreateWithoutEmployeesInput
}

export interface ClientUpsertWithoutOffersInput {
  update: ClientUpdateWithoutOffersDataInput
  create: ClientCreateWithoutOffersInput
}

export interface EmployeeUpsertWithoutUserInput {
  update: EmployeeUpdateWithoutUserDataInput
  create: EmployeeCreateWithoutUserInput
}

export interface OfferCreateOneWithoutEventInput {
  create?: OfferCreateWithoutEventInput
  connect?: OfferWhereUniqueInput
}

export interface UserUpsertWithWhereUniqueWithoutLanguageInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutLanguageDataInput
  create: UserCreateWithoutLanguageInput
}

export interface ClientCreateManyWithoutLanguageInput {
  create?: ClientCreateWithoutLanguageInput[] | ClientCreateWithoutLanguageInput
  connect?: ClientWhereUniqueInput[] | ClientWhereUniqueInput
}

export interface LanguageUpsertWithoutItemsInput {
  update: LanguageUpdateWithoutItemsDataInput
  create: LanguageCreateWithoutItemsInput
}

export interface ClientCreateOneWithoutClientContactsInput {
  create?: ClientCreateWithoutClientContactsInput
  connect?: ClientWhereUniqueInput
}

export interface ItemUpsertWithWhereUniqueWithoutSectionItemsInput {
  where: ItemWhereUniqueInput
  update: ItemUpdateWithoutSectionItemsDataInput
  create: ItemCreateWithoutSectionItemsInput
}

export interface VehicleCreateManyWithoutEventsInput {
  create?: VehicleCreateWithoutEventsInput[] | VehicleCreateWithoutEventsInput
  connect?: VehicleWhereUniqueInput[] | VehicleWhereUniqueInput
}

export interface SectionItemUpsertWithWhereUniqueWithoutOfferInput {
  where: SectionItemWhereUniqueInput
  update: SectionItemUpdateWithoutOfferDataInput
  create: SectionItemCreateWithoutOfferInput
}

export interface SectionItemCreateManyWithoutOfferInput {
  create?: SectionItemCreateWithoutOfferInput[] | SectionItemCreateWithoutOfferInput
  connect?: SectionItemWhereUniqueInput[] | SectionItemWhereUniqueInput
}

export interface OfferUpsertWithoutEmployeeEstimationsInput {
  update: OfferUpdateWithoutEmployeeEstimationsDataInput
  create: OfferCreateWithoutEmployeeEstimationsInput
}

export interface ClientSubscriptionWhereInput {
  AND?: ClientSubscriptionWhereInput[] | ClientSubscriptionWhereInput
  OR?: ClientSubscriptionWhereInput[] | ClientSubscriptionWhereInput
  NOT?: ClientSubscriptionWhereInput[] | ClientSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ClientWhereInput
}

export interface EmployeeEstimationUpsertWithWhereUniqueWithoutJobInput {
  where: EmployeeEstimationWhereUniqueInput
  update: EmployeeEstimationUpdateWithoutJobDataInput
  create: EmployeeEstimationCreateWithoutJobInput
}

export interface BudgetLineUpdateManyWithoutTaxInput {
  create?: BudgetLineCreateWithoutTaxInput[] | BudgetLineCreateWithoutTaxInput
  connect?: BudgetLineWhereUniqueInput[] | BudgetLineWhereUniqueInput
  disconnect?: BudgetLineWhereUniqueInput[] | BudgetLineWhereUniqueInput
  delete?: BudgetLineWhereUniqueInput[] | BudgetLineWhereUniqueInput
  update?: BudgetLineUpdateWithWhereUniqueWithoutTaxInput[] | BudgetLineUpdateWithWhereUniqueWithoutTaxInput
  upsert?: BudgetLineUpsertWithWhereUniqueWithoutTaxInput[] | BudgetLineUpsertWithWhereUniqueWithoutTaxInput
}

export interface JobUpsertWithWhereUniqueWithoutUsersInput {
  where: JobWhereUniqueInput
  update: JobUpdateWithoutUsersDataInput
  create: JobCreateWithoutUsersInput
}

export interface LanguageUpdateInput {
  type?: LanguageEnum
  clients?: ClientUpdateManyWithoutLanguageInput
  offers?: OfferUpdateManyWithoutLanguageInput
  items?: ItemUpdateManyWithoutLanguageInput
  users?: UserUpdateManyWithoutLanguageInput
}

export interface UserUpsertWithoutEmployeeInput {
  update: UserUpdateWithoutEmployeeDataInput
  create: UserCreateWithoutEmployeeInput
}

export interface EventCreateOneWithoutOfferInput {
  create?: EventCreateWithoutOfferInput
  connect?: EventWhereUniqueInput
}

export interface EmployeeUpsertWithWhereUniqueWithoutJobInput {
  where: EmployeeWhereUniqueInput
  update: EmployeeUpdateWithoutJobDataInput
  create: EmployeeCreateWithoutJobInput
}

export interface JobCreateOneWithoutEmployeeEstimationsInput {
  create?: JobCreateWithoutEmployeeEstimationsInput
  connect?: JobWhereUniqueInput
}

export interface JobUpsertWithoutEmployeeEstimationsInput {
  update: JobUpdateWithoutEmployeeEstimationsDataInput
  create: JobCreateWithoutEmployeeEstimationsInput
}

export interface EmployeeEstimationSubscriptionWhereInput {
  AND?: EmployeeEstimationSubscriptionWhereInput[] | EmployeeEstimationSubscriptionWhereInput
  OR?: EmployeeEstimationSubscriptionWhereInput[] | EmployeeEstimationSubscriptionWhereInput
  NOT?: EmployeeEstimationSubscriptionWhereInput[] | EmployeeEstimationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: EmployeeEstimationWhereInput
}

export interface ClientUpsertWithoutClientContactsInput {
  update: ClientUpdateWithoutClientContactsDataInput
  create: ClientCreateWithoutClientContactsInput
}

export interface LanguageUpsertWithoutClientsInput {
  update: LanguageUpdateWithoutClientsDataInput
  create: LanguageCreateWithoutClientsInput
}

export interface OfferUpsertWithWhereUniqueWithoutLanguageInput {
  where: OfferWhereUniqueInput
  update: OfferUpdateWithoutLanguageDataInput
  create: OfferCreateWithoutLanguageInput
}

export interface EmployeeEstimationUpsertWithWhereUniqueWithoutOfferInput {
  where: EmployeeEstimationWhereUniqueInput
  update: EmployeeEstimationUpdateWithoutOfferDataInput
  create: EmployeeEstimationCreateWithoutOfferInput
}

export interface PlaceWhereUniqueInput {
  id?: ID_Input
}

export interface OfferCreateOneWithoutEmployeeEstimationsInput {
  create?: OfferCreateWithoutEmployeeEstimationsInput
  connect?: OfferWhereUniqueInput
}

export interface OfferCreateOneWithoutSectionItemsInput {
  create?: OfferCreateWithoutSectionItemsInput
  connect?: OfferWhereUniqueInput
}

export interface ClientUpsertWithoutEventsInput {
  update: ClientUpdateWithoutEventsDataInput
  create: ClientCreateWithoutEventsInput
}

export interface OfferUpdateManyWithoutEventTypeInput {
  create?: OfferCreateWithoutEventTypeInput[] | OfferCreateWithoutEventTypeInput
  connect?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
  disconnect?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
  delete?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
  update?: OfferUpdateWithWhereUniqueWithoutEventTypeInput[] | OfferUpdateWithWhereUniqueWithoutEventTypeInput
  upsert?: OfferUpsertWithWhereUniqueWithoutEventTypeInput[] | OfferUpsertWithWhereUniqueWithoutEventTypeInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface VehiclePreviousValues {
  color?: String
  description?: String
  id: ID_Output
  name: String
  plate: String
  year?: Int
}

export interface Communication extends Node {
  id: ID_Output
  message: String
  subject: String
  channel: Channel
  client?: Client
  date: DateTime
  gmtOffset: String
}

export interface Client extends Node {
  address?: String
  createdAt: DateTime
  email: String
  events?: Event[]
  id: ID_Output
  name: String
  offers?: Offer[]
  phone: String
  tva?: String
  clientContacts?: ClientContact[]
  language?: Language
  communications?: Communication[]
  type?: ClientType
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface VehicleEdge {
  node: Vehicle
  cursor: String
}

export interface Event extends Node {
  client?: Client
  id: ID_Output
  offer?: Offer
  employees?: Employee[]
  endTime: DateTime
  gmtOffset: String
  startTime: DateTime
  stuffs?: Stuff[]
  vehicles?: Vehicle[]
}

export interface StuffPreviousValues {
  id: ID_Output
  name: String
  quantity: Int
}

export interface AggregateVehicle {
  count: Int
}

export interface AggregateTax {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface VehicleConnection {
  pageInfo: PageInfo
  edges: VehicleEdge[]
  aggregate: AggregateVehicle
}

export interface AggregateStuff {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface TaxEdge {
  node: Tax
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface StuffConnection {
  pageInfo: PageInfo
  edges: StuffEdge[]
  aggregate: AggregateStuff
}

export interface Vehicle extends Node {
  color?: String
  description?: String
  events?: Event[]
  id: ID_Output
  name: String
  plate: String
  year?: Int
}

/*
 * An edge in a connection.

 */
export interface SectionItemEdge {
  node: SectionItem
  cursor: String
}

export interface TaxPreviousValues {
  id: ID_Output
  name: String
  value: Float
}

export interface AggregatePlaceContact {
  count: Int
}

export interface ClientSubscriptionPayload {
  mutation: MutationType
  node?: Client
  updatedFields?: String[]
  previousValues?: ClientPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface PlaceContactConnection {
  pageInfo: PageInfo
  edges: PlaceContactEdge[]
  aggregate: AggregatePlaceContact
}

export interface ClientPreviousValues {
  address?: String
  createdAt: DateTime
  email: String
  id: ID_Output
  name: String
  phone: String
  tva?: String
  type?: ClientType
}

/*
 * An edge in a connection.

 */
export interface JobEdge {
  node: Job
  cursor: String
}

export interface Stuff extends Node {
  events?: Event[]
  id: ID_Output
  name: String
  quantity: Int
}

export interface AggregateEventType {
  count: Int
}

export interface CommunicationSubscriptionPayload {
  mutation: MutationType
  node?: Communication
  updatedFields?: String[]
  previousValues?: CommunicationPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface EventTypeConnection {
  pageInfo: PageInfo
  edges: EventTypeEdge[]
  aggregate: AggregateEventType
}

export interface CommunicationPreviousValues {
  id: ID_Output
  message: String
  subject: String
  channel: Channel
  date: DateTime
  gmtOffset: String
}

/*
 * An edge in a connection.

 */
export interface EmployeeEstimationEdge {
  node: EmployeeEstimation
  cursor: String
}

export interface TaxSubscriptionPayload {
  mutation: MutationType
  node?: Tax
  updatedFields?: String[]
  previousValues?: TaxPreviousValues
}

export interface AggregateEmployee {
  count: Int
}

export interface EventSubscriptionPayload {
  mutation: MutationType
  node?: Event
  updatedFields?: String[]
  previousValues?: EventPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface EmployeeConnection {
  pageInfo: PageInfo
  edges: EmployeeEdge[]
  aggregate: AggregateEmployee
}

export interface EventPreviousValues {
  id: ID_Output
  endTime: DateTime
  gmtOffset: String
  startTime: DateTime
}

/*
 * An edge in a connection.

 */
export interface BudgetLineEdge {
  node: BudgetLine
  cursor: String
}

export interface PlaceContact extends Node {
  email?: String
  id: ID_Output
  mobilePhone?: String
  name: String
  phoneNumber?: String
  place?: Place
}

export interface AggregatePlace {
  count: Int
}

export interface LanguageSubscriptionPayload {
  mutation: MutationType
  node?: Language
  updatedFields?: String[]
  previousValues?: LanguagePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface PlaceConnection {
  pageInfo: PageInfo
  edges: PlaceEdge[]
  aggregate: AggregatePlace
}

export interface LanguagePreviousValues {
  id: ID_Output
  type: LanguageEnum
}

/*
 * An edge in a connection.

 */
export interface ClientContactEdge {
  node: ClientContact
  cursor: String
}

export interface Offer extends Node {
  version?: Int
  client?: Client
  createdAt: DateTime
  customMessage?: String
  event?: Event
  id: ID_Output
  status: StatusOffer
  language?: Language
  address: String
  budgetLines?: BudgetLine[]
  city: String
  clientContact?: ClientContact
  employeeEstimations?: EmployeeEstimation[]
  endTime?: DateTime
  eventType?: EventType
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  place?: Place
  postalCode: String
  sectionItems?: SectionItem[]
  startTime?: DateTime
}

export interface AggregateUser {
  count: Int
}

export interface OfferSubscriptionPayload {
  mutation: MutationType
  node?: Offer
  updatedFields?: String[]
  previousValues?: OfferPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface OfferPreviousValues {
  version?: Int
  createdAt: DateTime
  customMessage?: String
  id: ID_Output
  status: StatusOffer
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  startTime?: DateTime
}

/*
 * An edge in a connection.

 */
export interface ItemEdge {
  node: Item
  cursor: String
}

export interface Place extends Node {
  address: String
  city: String
  id: ID_Output
  name: String
  postalCode: String
  country?: Country
  note?: String
  offer?: Offer
  placeContacts?: PlaceContact[]
}

export interface AggregateOffer {
  count: Int
}

export interface ItemSubscriptionPayload {
  mutation: MutationType
  node?: Item
  updatedFields?: String[]
  previousValues?: ItemPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface OfferConnection {
  pageInfo: PageInfo
  edges: OfferEdge[]
  aggregate: AggregateOffer
}

export interface ItemPreviousValues {
  description: String
  id: ID_Output
  name: String
  internalDescription?: String
}

/*
 * An edge in a connection.

 */
export interface LanguageEdge {
  node: Language
  cursor: String
}

export interface EventType extends Node {
  id: ID_Output
  name: String
  offers?: Offer[]
}

export interface AggregateEvent {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface EventConnection {
  pageInfo: PageInfo
  edges: EventEdge[]
  aggregate: AggregateEvent
}

export interface UserPreviousValues {
  createdAt: DateTime
  id: ID_Output
  role: Role
  updatedAt: DateTime
  email: String
  image?: String
  name: String
  password: String
}

/*
 * An edge in a connection.

 */
export interface CommunicationEdge {
  node: Communication
  cursor: String
}

export interface ClientContact extends Node {
  client?: Client
  email: String
  id: ID_Output
  mobilePhone?: String
  name: String
  phoneNumber?: String
  offers?: Offer[]
}

export interface AggregateClient {
  count: Int
}

export interface ClientContactSubscriptionPayload {
  mutation: MutationType
  node?: ClientContact
  updatedFields?: String[]
  previousValues?: ClientContactPreviousValues
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface ClientContactPreviousValues {
  email: String
  id: ID_Output
  mobilePhone?: String
  name: String
  phoneNumber?: String
}

export interface VehicleSubscriptionPayload {
  mutation: MutationType
  node?: Vehicle
  updatedFields?: String[]
  previousValues?: VehiclePreviousValues
}

export interface Tax extends Node {
  budgetLines?: BudgetLine[]
  id: ID_Output
  name: String
  value: Float
}

/*
 * An edge in a connection.

 */
export interface StuffEdge {
  node: Stuff
  cursor: String
}

export interface PlaceSubscriptionPayload {
  mutation: MutationType
  node?: Place
  updatedFields?: String[]
  previousValues?: PlacePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface SectionItemConnection {
  pageInfo: PageInfo
  edges: SectionItemEdge[]
  aggregate: AggregateSectionItem
}

export interface PlacePreviousValues {
  address: String
  city: String
  id: ID_Output
  name: String
  postalCode: String
  country?: Country
  note?: String
}

export interface AggregateJob {
  count: Int
}

export interface BudgetLine extends Node {
  description: String
  id: ID_Output
  offer?: Offer
  quantity?: Int
  tax?: Tax
  unitPrice?: Float
  value: Float
}

/*
 * An edge in a connection.

 */
export interface EventTypeEdge {
  node: EventType
  cursor: String
}

export interface BudgetLineSubscriptionPayload {
  mutation: MutationType
  node?: BudgetLine
  updatedFields?: String[]
  previousValues?: BudgetLinePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface EmployeeEstimationConnection {
  pageInfo: PageInfo
  edges: EmployeeEstimationEdge[]
  aggregate: AggregateEmployeeEstimation
}

export interface BudgetLinePreviousValues {
  description: String
  id: ID_Output
  quantity?: Int
  unitPrice?: Float
  value: Float
}

export interface AggregateBudgetLine {
  count: Int
}

export interface EmployeeEstimation extends Node {
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  id: ID_Output
  job?: Job
  number: Int
  offer?: Offer
  pricePerHour: Float
  total: Float
}

/*
 * An edge in a connection.

 */
export interface PlaceEdge {
  node: Place
  cursor: String
}

export interface EmployeeSubscriptionPayload {
  mutation: MutationType
  node?: Employee
  updatedFields?: String[]
  previousValues?: EmployeePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ClientContactConnection {
  pageInfo: PageInfo
  edges: ClientContactEdge[]
  aggregate: AggregateClientContact
}

export interface EmployeePreviousValues {
  endedAt?: DateTime
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  id: ID_Output
  startedAt?: DateTime
}

export interface AggregateItem {
  count: Int
}

export interface Job extends Node {
  employeeEstimations?: EmployeeEstimation[]
  employees?: Employee[]
  id: ID_Output
  name: String
  users?: User[]
}

/*
 * An edge in a connection.

 */
export interface OfferEdge {
  node: Offer
  cursor: String
}

export interface EmployeeEstimationSubscriptionPayload {
  mutation: MutationType
  node?: EmployeeEstimation
  updatedFields?: String[]
  previousValues?: EmployeeEstimationPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface LanguageConnection {
  pageInfo: PageInfo
  edges: LanguageEdge[]
  aggregate: AggregateLanguage
}

export interface EmployeeEstimationPreviousValues {
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  id: ID_Output
  number: Int
  pricePerHour: Float
  total: Float
}

export interface AggregateCommunication {
  count: Int
}

export interface Employee extends Node {
  endedAt?: DateTime
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  event?: Event
  id: ID_Output
  job?: Job
  startedAt?: DateTime
  user?: User
}

/*
 * An edge in a connection.

 */
export interface ClientEdge {
  node: Client
  cursor: String
}

export interface EventTypeSubscriptionPayload {
  mutation: MutationType
  node?: EventType
  updatedFields?: String[]
  previousValues?: EventTypePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface TaxConnection {
  pageInfo: PageInfo
  edges: TaxEdge[]
  aggregate: AggregateTax
}

export interface EventTypePreviousValues {
  id: ID_Output
  name: String
}

/*
 * An edge in a connection.

 */
export interface PlaceContactEdge {
  node: PlaceContact
  cursor: String
}

export interface User extends Node {
  createdAt: DateTime
  id: ID_Output
  role: Role
  updatedAt: DateTime
  email: String
  image?: String
  name: String
  password: String
  employee?: Employee
  jobs?: Job[]
  language?: Language
}

export interface AggregateEmployeeEstimation {
  count: Int
}

export interface JobSubscriptionPayload {
  mutation: MutationType
  node?: Job
  updatedFields?: String[]
  previousValues?: JobPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface BudgetLineConnection {
  pageInfo: PageInfo
  edges: BudgetLineEdge[]
  aggregate: AggregateBudgetLine
}

export interface JobPreviousValues {
  id: ID_Output
  name: String
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface SectionItem extends Node {
  content?: String
  h: Int
  i: String
  id: ID_Output
  isDraggable?: Boolean
  isResizable?: Boolean
  maxH?: Int
  maxW?: Int
  minH?: Int
  minW?: Int
  moved?: Boolean
  offer?: Offer
  persons?: Int
  items?: Item[]
  price?: Float
  static?: Boolean
  time?: DateTime
  title?: String
  type: SectionTypes
  w: Int
  x: Int
  y: Int
}

export interface AggregateLanguage {
  count: Int
}

export interface PlaceContactSubscriptionPayload {
  mutation: MutationType
  node?: PlaceContact
  updatedFields?: String[]
  previousValues?: PlaceContactPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface CommunicationConnection {
  pageInfo: PageInfo
  edges: CommunicationEdge[]
  aggregate: AggregateCommunication
}

export interface PlaceContactPreviousValues {
  email?: String
  id: ID_Output
  mobilePhone?: String
  name: String
  phoneNumber?: String
}

export interface AggregateSectionItem {
  count: Int
}

export interface Item extends Node {
  description: String
  id: ID_Output
  name: String
  internalDescription?: String
  language?: Language
  sectionItems?: SectionItem[]
}

/*
 * An edge in a connection.

 */
export interface EmployeeEdge {
  node: Employee
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface ItemConnection {
  pageInfo: PageInfo
  edges: ItemEdge[]
  aggregate: AggregateItem
}

export interface StuffSubscriptionPayload {
  mutation: MutationType
  node?: Stuff
  updatedFields?: String[]
  previousValues?: StuffPreviousValues
}

export interface Language extends Node {
  id: ID_Output
  type: LanguageEnum
  clients?: Client[]
  offers?: Offer[]
  items?: Item[]
  users?: User[]
}

export interface SectionItemPreviousValues {
  content?: String
  h: Int
  i: String
  id: ID_Output
  isDraggable?: Boolean
  isResizable?: Boolean
  maxH?: Int
  maxW?: Int
  minH?: Int
  minW?: Int
  moved?: Boolean
  persons?: Int
  price?: Float
  static?: Boolean
  time?: DateTime
  title?: String
  type: SectionTypes
  w: Int
  x: Int
  y: Int
}

export interface SectionItemSubscriptionPayload {
  mutation: MutationType
  node?: SectionItem
  updatedFields?: String[]
  previousValues?: SectionItemPreviousValues
}

/*
 * An edge in a connection.

 */
export interface EventEdge {
  node: Event
  cursor: String
}

export interface AggregateClientContact {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface JobConnection {
  pageInfo: PageInfo
  edges: JobEdge[]
  aggregate: AggregateJob
}

/*
 * A connection to a list of items.

 */
export interface ClientConnection {
  pageInfo: PageInfo
  edges: ClientEdge[]
  aggregate: AggregateClient
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

export type DateTime = Date | string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number