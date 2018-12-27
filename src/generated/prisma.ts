import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    clients: <T = Client[]>(args: { where?: ClientWhereInput, orderBy?: ClientOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    communications: <T = Communication[]>(args: { where?: CommunicationWhereInput, orderBy?: CommunicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    offers: <T = Offer[]>(args: { where?: OfferWhereInput, orderBy?: OfferOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    itemTranslations: <T = ItemTranslation[]>(args: { where?: ItemTranslationWhereInput, orderBy?: ItemTranslationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clientContacts: <T = ClientContact[]>(args: { where?: ClientContactWhereInput, orderBy?: ClientContactOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    places: <T = Place[]>(args: { where?: PlaceWhereInput, orderBy?: PlaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    budgets: <T = Budget[]>(args: { where?: BudgetWhereInput, orderBy?: BudgetOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    budgetLines: <T = BudgetLine[]>(args: { where?: BudgetLineWhereInput, orderBy?: BudgetLineOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    categories: <T = Category[]>(args: { where?: CategoryWhereInput, orderBy?: CategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    employees: <T = Employee[]>(args: { where?: EmployeeWhereInput, orderBy?: EmployeeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    employeeEstimations: <T = EmployeeEstimation[]>(args: { where?: EmployeeEstimationWhereInput, orderBy?: EmployeeEstimationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    eventStuffs: <T = EventStuff[]>(args: { where?: EventStuffWhereInput, orderBy?: EventStuffOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    eventTypes: <T = EventType[]>(args: { where?: EventTypeWhereInput, orderBy?: EventTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invoices: <T = Invoice[]>(args: { where?: InvoiceWhereInput, orderBy?: InvoiceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobs: <T = Job[]>(args: { where?: JobWhereInput, orderBy?: JobOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    placeContacts: <T = PlaceContact[]>(args: { where?: PlaceContactWhereInput, orderBy?: PlaceContactOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stuffs: <T = Stuff[]>(args: { where?: StuffWhereInput, orderBy?: StuffOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    taxes: <T = Tax[]>(args: { where?: TaxWhereInput, orderBy?: TaxOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    vehicles: <T = Vehicle[]>(args: { where?: VehicleWhereInput, orderBy?: VehicleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    itemProposals: <T = ItemProposal[]>(args: { where?: ItemProposalWhereInput, orderBy?: ItemProposalOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    menus: <T = Menu[]>(args: { where?: MenuWhereInput, orderBy?: MenuOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sections: <T = Section[]>(args: { where?: SectionWhereInput, orderBy?: SectionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sectionItems: <T = SectionItem[]>(args: { where?: SectionItemWhereInput, orderBy?: SectionItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    events: <T = Event[]>(args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    items: <T = Item[]>(args: { where?: ItemWhereInput, orderBy?: ItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    client: <T = Client | null>(args: { where: ClientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    communication: <T = Communication | null>(args: { where: CommunicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    offer: <T = Offer | null>(args: { where: OfferWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    itemTranslation: <T = ItemTranslation | null>(args: { where: ItemTranslationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clientContact: <T = ClientContact | null>(args: { where: ClientContactWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    place: <T = Place | null>(args: { where: PlaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    budget: <T = Budget | null>(args: { where: BudgetWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    budgetLine: <T = BudgetLine | null>(args: { where: BudgetLineWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    category: <T = Category | null>(args: { where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    employee: <T = Employee | null>(args: { where: EmployeeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    employeeEstimation: <T = EmployeeEstimation | null>(args: { where: EmployeeEstimationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    eventStuff: <T = EventStuff | null>(args: { where: EventStuffWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    eventType: <T = EventType | null>(args: { where: EventTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invoice: <T = Invoice | null>(args: { where: InvoiceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    job: <T = Job | null>(args: { where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    placeContact: <T = PlaceContact | null>(args: { where: PlaceContactWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stuff: <T = Stuff | null>(args: { where: StuffWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    tax: <T = Tax | null>(args: { where: TaxWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    vehicle: <T = Vehicle | null>(args: { where: VehicleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    itemProposal: <T = ItemProposal | null>(args: { where: ItemProposalWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    menu: <T = Menu | null>(args: { where: MenuWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    section: <T = Section | null>(args: { where: SectionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sectionItem: <T = SectionItem | null>(args: { where: SectionItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    event: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    item: <T = Item | null>(args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clientsConnection: <T = ClientConnection>(args: { where?: ClientWhereInput, orderBy?: ClientOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    communicationsConnection: <T = CommunicationConnection>(args: { where?: CommunicationWhereInput, orderBy?: CommunicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    offersConnection: <T = OfferConnection>(args: { where?: OfferWhereInput, orderBy?: OfferOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    itemTranslationsConnection: <T = ItemTranslationConnection>(args: { where?: ItemTranslationWhereInput, orderBy?: ItemTranslationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clientContactsConnection: <T = ClientContactConnection>(args: { where?: ClientContactWhereInput, orderBy?: ClientContactOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    placesConnection: <T = PlaceConnection>(args: { where?: PlaceWhereInput, orderBy?: PlaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    budgetsConnection: <T = BudgetConnection>(args: { where?: BudgetWhereInput, orderBy?: BudgetOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    budgetLinesConnection: <T = BudgetLineConnection>(args: { where?: BudgetLineWhereInput, orderBy?: BudgetLineOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    categoriesConnection: <T = CategoryConnection>(args: { where?: CategoryWhereInput, orderBy?: CategoryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    employeesConnection: <T = EmployeeConnection>(args: { where?: EmployeeWhereInput, orderBy?: EmployeeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    employeeEstimationsConnection: <T = EmployeeEstimationConnection>(args: { where?: EmployeeEstimationWhereInput, orderBy?: EmployeeEstimationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    eventStuffsConnection: <T = EventStuffConnection>(args: { where?: EventStuffWhereInput, orderBy?: EventStuffOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    eventTypesConnection: <T = EventTypeConnection>(args: { where?: EventTypeWhereInput, orderBy?: EventTypeOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    invoicesConnection: <T = InvoiceConnection>(args: { where?: InvoiceWhereInput, orderBy?: InvoiceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobsConnection: <T = JobConnection>(args: { where?: JobWhereInput, orderBy?: JobOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    placeContactsConnection: <T = PlaceContactConnection>(args: { where?: PlaceContactWhereInput, orderBy?: PlaceContactOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stuffsConnection: <T = StuffConnection>(args: { where?: StuffWhereInput, orderBy?: StuffOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    taxesConnection: <T = TaxConnection>(args: { where?: TaxWhereInput, orderBy?: TaxOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    vehiclesConnection: <T = VehicleConnection>(args: { where?: VehicleWhereInput, orderBy?: VehicleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    itemProposalsConnection: <T = ItemProposalConnection>(args: { where?: ItemProposalWhereInput, orderBy?: ItemProposalOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    menusConnection: <T = MenuConnection>(args: { where?: MenuWhereInput, orderBy?: MenuOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sectionsConnection: <T = SectionConnection>(args: { where?: SectionWhereInput, orderBy?: SectionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    sectionItemsConnection: <T = SectionItemConnection>(args: { where?: SectionItemWhereInput, orderBy?: SectionItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    eventsConnection: <T = EventConnection>(args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    itemsConnection: <T = ItemConnection>(args: { where?: ItemWhereInput, orderBy?: ItemOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createClient: <T = Client>(args: { data: ClientCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCommunication: <T = Communication>(args: { data: CommunicationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOffer: <T = Offer>(args: { data: OfferCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createItemTranslation: <T = ItemTranslation>(args: { data: ItemTranslationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createClientContact: <T = ClientContact>(args: { data: ClientContactCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPlace: <T = Place>(args: { data: PlaceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBudget: <T = Budget>(args: { data: BudgetCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBudgetLine: <T = BudgetLine>(args: { data: BudgetLineCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCategory: <T = Category>(args: { data: CategoryCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEmployee: <T = Employee>(args: { data: EmployeeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEmployeeEstimation: <T = EmployeeEstimation>(args: { data: EmployeeEstimationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEventStuff: <T = EventStuff>(args: { data: EventStuffCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEventType: <T = EventType>(args: { data: EventTypeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createInvoice: <T = Invoice>(args: { data: InvoiceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createJob: <T = Job>(args: { data: JobCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPlaceContact: <T = PlaceContact>(args: { data: PlaceContactCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createStuff: <T = Stuff>(args: { data: StuffCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTax: <T = Tax>(args: { data: TaxCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createVehicle: <T = Vehicle>(args: { data: VehicleCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createItemProposal: <T = ItemProposal>(args: { data: ItemProposalCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMenu: <T = Menu>(args: { data: MenuCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSection: <T = Section>(args: { data: SectionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSectionItem: <T = SectionItem>(args: { data: SectionItemCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEvent: <T = Event>(args: { data: EventCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createItem: <T = Item>(args: { data: ItemCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateClient: <T = Client | null>(args: { data: ClientUpdateInput, where: ClientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCommunication: <T = Communication | null>(args: { data: CommunicationUpdateInput, where: CommunicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOffer: <T = Offer | null>(args: { data: OfferUpdateInput, where: OfferWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateItemTranslation: <T = ItemTranslation | null>(args: { data: ItemTranslationUpdateInput, where: ItemTranslationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateClientContact: <T = ClientContact | null>(args: { data: ClientContactUpdateInput, where: ClientContactWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePlace: <T = Place | null>(args: { data: PlaceUpdateInput, where: PlaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBudget: <T = Budget | null>(args: { data: BudgetUpdateInput, where: BudgetWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBudgetLine: <T = BudgetLine | null>(args: { data: BudgetLineUpdateInput, where: BudgetLineWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCategory: <T = Category | null>(args: { data: CategoryUpdateInput, where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEmployee: <T = Employee | null>(args: { data: EmployeeUpdateInput, where: EmployeeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEmployeeEstimation: <T = EmployeeEstimation | null>(args: { data: EmployeeEstimationUpdateInput, where: EmployeeEstimationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEventStuff: <T = EventStuff | null>(args: { data: EventStuffUpdateInput, where: EventStuffWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEventType: <T = EventType | null>(args: { data: EventTypeUpdateInput, where: EventTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateInvoice: <T = Invoice | null>(args: { data: InvoiceUpdateInput, where: InvoiceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateJob: <T = Job | null>(args: { data: JobUpdateInput, where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePlaceContact: <T = PlaceContact | null>(args: { data: PlaceContactUpdateInput, where: PlaceContactWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateStuff: <T = Stuff | null>(args: { data: StuffUpdateInput, where: StuffWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTax: <T = Tax | null>(args: { data: TaxUpdateInput, where: TaxWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateVehicle: <T = Vehicle | null>(args: { data: VehicleUpdateInput, where: VehicleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateItemProposal: <T = ItemProposal | null>(args: { data: ItemProposalUpdateInput, where: ItemProposalWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateMenu: <T = Menu | null>(args: { data: MenuUpdateInput, where: MenuWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSection: <T = Section | null>(args: { data: SectionUpdateInput, where: SectionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSectionItem: <T = SectionItem | null>(args: { data: SectionItemUpdateInput, where: SectionItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEvent: <T = Event | null>(args: { data: EventUpdateInput, where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateItem: <T = Item | null>(args: { data: ItemUpdateInput, where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteClient: <T = Client | null>(args: { where: ClientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCommunication: <T = Communication | null>(args: { where: CommunicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOffer: <T = Offer | null>(args: { where: OfferWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteItemTranslation: <T = ItemTranslation | null>(args: { where: ItemTranslationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteClientContact: <T = ClientContact | null>(args: { where: ClientContactWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePlace: <T = Place | null>(args: { where: PlaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBudget: <T = Budget | null>(args: { where: BudgetWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBudgetLine: <T = BudgetLine | null>(args: { where: BudgetLineWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCategory: <T = Category | null>(args: { where: CategoryWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEmployee: <T = Employee | null>(args: { where: EmployeeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEmployeeEstimation: <T = EmployeeEstimation | null>(args: { where: EmployeeEstimationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEventStuff: <T = EventStuff | null>(args: { where: EventStuffWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEventType: <T = EventType | null>(args: { where: EventTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteInvoice: <T = Invoice | null>(args: { where: InvoiceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteJob: <T = Job | null>(args: { where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePlaceContact: <T = PlaceContact | null>(args: { where: PlaceContactWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteStuff: <T = Stuff | null>(args: { where: StuffWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTax: <T = Tax | null>(args: { where: TaxWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteVehicle: <T = Vehicle | null>(args: { where: VehicleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteItemProposal: <T = ItemProposal | null>(args: { where: ItemProposalWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteMenu: <T = Menu | null>(args: { where: MenuWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSection: <T = Section | null>(args: { where: SectionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSectionItem: <T = SectionItem | null>(args: { where: SectionItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEvent: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteItem: <T = Item | null>(args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertClient: <T = Client>(args: { where: ClientWhereUniqueInput, create: ClientCreateInput, update: ClientUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCommunication: <T = Communication>(args: { where: CommunicationWhereUniqueInput, create: CommunicationCreateInput, update: CommunicationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOffer: <T = Offer>(args: { where: OfferWhereUniqueInput, create: OfferCreateInput, update: OfferUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertItemTranslation: <T = ItemTranslation>(args: { where: ItemTranslationWhereUniqueInput, create: ItemTranslationCreateInput, update: ItemTranslationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertClientContact: <T = ClientContact>(args: { where: ClientContactWhereUniqueInput, create: ClientContactCreateInput, update: ClientContactUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPlace: <T = Place>(args: { where: PlaceWhereUniqueInput, create: PlaceCreateInput, update: PlaceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBudget: <T = Budget>(args: { where: BudgetWhereUniqueInput, create: BudgetCreateInput, update: BudgetUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBudgetLine: <T = BudgetLine>(args: { where: BudgetLineWhereUniqueInput, create: BudgetLineCreateInput, update: BudgetLineUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCategory: <T = Category>(args: { where: CategoryWhereUniqueInput, create: CategoryCreateInput, update: CategoryUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEmployee: <T = Employee>(args: { where: EmployeeWhereUniqueInput, create: EmployeeCreateInput, update: EmployeeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEmployeeEstimation: <T = EmployeeEstimation>(args: { where: EmployeeEstimationWhereUniqueInput, create: EmployeeEstimationCreateInput, update: EmployeeEstimationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEventStuff: <T = EventStuff>(args: { where: EventStuffWhereUniqueInput, create: EventStuffCreateInput, update: EventStuffUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEventType: <T = EventType>(args: { where: EventTypeWhereUniqueInput, create: EventTypeCreateInput, update: EventTypeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertInvoice: <T = Invoice>(args: { where: InvoiceWhereUniqueInput, create: InvoiceCreateInput, update: InvoiceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertJob: <T = Job>(args: { where: JobWhereUniqueInput, create: JobCreateInput, update: JobUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPlaceContact: <T = PlaceContact>(args: { where: PlaceContactWhereUniqueInput, create: PlaceContactCreateInput, update: PlaceContactUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertStuff: <T = Stuff>(args: { where: StuffWhereUniqueInput, create: StuffCreateInput, update: StuffUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTax: <T = Tax>(args: { where: TaxWhereUniqueInput, create: TaxCreateInput, update: TaxUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertVehicle: <T = Vehicle>(args: { where: VehicleWhereUniqueInput, create: VehicleCreateInput, update: VehicleUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertItemProposal: <T = ItemProposal>(args: { where: ItemProposalWhereUniqueInput, create: ItemProposalCreateInput, update: ItemProposalUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMenu: <T = Menu>(args: { where: MenuWhereUniqueInput, create: MenuCreateInput, update: MenuUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSection: <T = Section>(args: { where: SectionWhereUniqueInput, create: SectionCreateInput, update: SectionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSectionItem: <T = SectionItem>(args: { where: SectionItemWhereUniqueInput, create: SectionItemCreateInput, update: SectionItemUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEvent: <T = Event>(args: { where: EventWhereUniqueInput, create: EventCreateInput, update: EventUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertItem: <T = Item>(args: { where: ItemWhereUniqueInput, create: ItemCreateInput, update: ItemUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyClients: <T = BatchPayload>(args: { data: ClientUpdateInput, where?: ClientWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCommunications: <T = BatchPayload>(args: { data: CommunicationUpdateInput, where?: CommunicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOffers: <T = BatchPayload>(args: { data: OfferUpdateInput, where?: OfferWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyItemTranslations: <T = BatchPayload>(args: { data: ItemTranslationUpdateInput, where?: ItemTranslationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyClientContacts: <T = BatchPayload>(args: { data: ClientContactUpdateInput, where?: ClientContactWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPlaces: <T = BatchPayload>(args: { data: PlaceUpdateInput, where?: PlaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBudgets: <T = BatchPayload>(args: { data: BudgetUpdateInput, where?: BudgetWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBudgetLines: <T = BatchPayload>(args: { data: BudgetLineUpdateInput, where?: BudgetLineWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCategories: <T = BatchPayload>(args: { data: CategoryUpdateInput, where?: CategoryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEmployees: <T = BatchPayload>(args: { data: EmployeeUpdateInput, where?: EmployeeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEmployeeEstimations: <T = BatchPayload>(args: { data: EmployeeEstimationUpdateInput, where?: EmployeeEstimationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEventStuffs: <T = BatchPayload>(args: { data: EventStuffUpdateInput, where?: EventStuffWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEventTypes: <T = BatchPayload>(args: { data: EventTypeUpdateInput, where?: EventTypeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyInvoices: <T = BatchPayload>(args: { data: InvoiceUpdateInput, where?: InvoiceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyJobs: <T = BatchPayload>(args: { data: JobUpdateInput, where?: JobWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPlaceContacts: <T = BatchPayload>(args: { data: PlaceContactUpdateInput, where?: PlaceContactWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyStuffs: <T = BatchPayload>(args: { data: StuffUpdateInput, where?: StuffWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTaxes: <T = BatchPayload>(args: { data: TaxUpdateInput, where?: TaxWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyVehicles: <T = BatchPayload>(args: { data: VehicleUpdateInput, where?: VehicleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyItemProposals: <T = BatchPayload>(args: { data: ItemProposalUpdateInput, where?: ItemProposalWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMenus: <T = BatchPayload>(args: { data: MenuUpdateInput, where?: MenuWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySections: <T = BatchPayload>(args: { data: SectionUpdateInput, where?: SectionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySectionItems: <T = BatchPayload>(args: { data: SectionItemUpdateInput, where?: SectionItemWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEvents: <T = BatchPayload>(args: { data: EventUpdateInput, where?: EventWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyItems: <T = BatchPayload>(args: { data: ItemUpdateInput, where?: ItemWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyClients: <T = BatchPayload>(args: { where?: ClientWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCommunications: <T = BatchPayload>(args: { where?: CommunicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOffers: <T = BatchPayload>(args: { where?: OfferWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyItemTranslations: <T = BatchPayload>(args: { where?: ItemTranslationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyClientContacts: <T = BatchPayload>(args: { where?: ClientContactWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPlaces: <T = BatchPayload>(args: { where?: PlaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBudgets: <T = BatchPayload>(args: { where?: BudgetWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBudgetLines: <T = BatchPayload>(args: { where?: BudgetLineWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCategories: <T = BatchPayload>(args: { where?: CategoryWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEmployees: <T = BatchPayload>(args: { where?: EmployeeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEmployeeEstimations: <T = BatchPayload>(args: { where?: EmployeeEstimationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEventStuffs: <T = BatchPayload>(args: { where?: EventStuffWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEventTypes: <T = BatchPayload>(args: { where?: EventTypeWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyInvoices: <T = BatchPayload>(args: { where?: InvoiceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyJobs: <T = BatchPayload>(args: { where?: JobWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPlaceContacts: <T = BatchPayload>(args: { where?: PlaceContactWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyStuffs: <T = BatchPayload>(args: { where?: StuffWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTaxes: <T = BatchPayload>(args: { where?: TaxWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyVehicles: <T = BatchPayload>(args: { where?: VehicleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyItemProposals: <T = BatchPayload>(args: { where?: ItemProposalWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMenus: <T = BatchPayload>(args: { where?: MenuWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySections: <T = BatchPayload>(args: { where?: SectionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySectionItems: <T = BatchPayload>(args: { where?: SectionItemWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEvents: <T = BatchPayload>(args: { where?: EventWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyItems: <T = BatchPayload>(args: { where?: ItemWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    client: <T = ClientSubscriptionPayload | null>(args: { where?: ClientSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    communication: <T = CommunicationSubscriptionPayload | null>(args: { where?: CommunicationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    offer: <T = OfferSubscriptionPayload | null>(args: { where?: OfferSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    itemTranslation: <T = ItemTranslationSubscriptionPayload | null>(args: { where?: ItemTranslationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    clientContact: <T = ClientContactSubscriptionPayload | null>(args: { where?: ClientContactSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    place: <T = PlaceSubscriptionPayload | null>(args: { where?: PlaceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    budget: <T = BudgetSubscriptionPayload | null>(args: { where?: BudgetSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    budgetLine: <T = BudgetLineSubscriptionPayload | null>(args: { where?: BudgetLineSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    category: <T = CategorySubscriptionPayload | null>(args: { where?: CategorySubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    employee: <T = EmployeeSubscriptionPayload | null>(args: { where?: EmployeeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    employeeEstimation: <T = EmployeeEstimationSubscriptionPayload | null>(args: { where?: EmployeeEstimationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    eventStuff: <T = EventStuffSubscriptionPayload | null>(args: { where?: EventStuffSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    eventType: <T = EventTypeSubscriptionPayload | null>(args: { where?: EventTypeSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    invoice: <T = InvoiceSubscriptionPayload | null>(args: { where?: InvoiceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    job: <T = JobSubscriptionPayload | null>(args: { where?: JobSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    placeContact: <T = PlaceContactSubscriptionPayload | null>(args: { where?: PlaceContactSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    stuff: <T = StuffSubscriptionPayload | null>(args: { where?: StuffSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    tax: <T = TaxSubscriptionPayload | null>(args: { where?: TaxSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    vehicle: <T = VehicleSubscriptionPayload | null>(args: { where?: VehicleSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    itemProposal: <T = ItemProposalSubscriptionPayload | null>(args: { where?: ItemProposalSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    menu: <T = MenuSubscriptionPayload | null>(args: { where?: MenuSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    section: <T = SectionSubscriptionPayload | null>(args: { where?: SectionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    sectionItem: <T = SectionItemSubscriptionPayload | null>(args: { where?: SectionItemSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    event: <T = EventSubscriptionPayload | null>(args: { where?: EventSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    item: <T = ItemSubscriptionPayload | null>(args: { where?: ItemSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Client: (where?: ClientWhereInput) => Promise<boolean>
  Communication: (where?: CommunicationWhereInput) => Promise<boolean>
  Offer: (where?: OfferWhereInput) => Promise<boolean>
  ItemTranslation: (where?: ItemTranslationWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  ClientContact: (where?: ClientContactWhereInput) => Promise<boolean>
  Place: (where?: PlaceWhereInput) => Promise<boolean>
  Budget: (where?: BudgetWhereInput) => Promise<boolean>
  BudgetLine: (where?: BudgetLineWhereInput) => Promise<boolean>
  Category: (where?: CategoryWhereInput) => Promise<boolean>
  Employee: (where?: EmployeeWhereInput) => Promise<boolean>
  EmployeeEstimation: (where?: EmployeeEstimationWhereInput) => Promise<boolean>
  EventStuff: (where?: EventStuffWhereInput) => Promise<boolean>
  EventType: (where?: EventTypeWhereInput) => Promise<boolean>
  Invoice: (where?: InvoiceWhereInput) => Promise<boolean>
  Job: (where?: JobWhereInput) => Promise<boolean>
  PlaceContact: (where?: PlaceContactWhereInput) => Promise<boolean>
  Stuff: (where?: StuffWhereInput) => Promise<boolean>
  Tax: (where?: TaxWhereInput) => Promise<boolean>
  Vehicle: (where?: VehicleWhereInput) => Promise<boolean>
  ItemProposal: (where?: ItemProposalWhereInput) => Promise<boolean>
  Menu: (where?: MenuWhereInput) => Promise<boolean>
  Section: (where?: SectionWhereInput) => Promise<boolean>
  SectionItem: (where?: SectionItemWhereInput) => Promise<boolean>
  Event: (where?: EventWhereInput) => Promise<boolean>
  Item: (where?: ItemWhereInput) => Promise<boolean>
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

const typeDefs = `enum Account {
  Invoice
  CreditNote
}

type AggregateBudget {
  count: Int!
}

type AggregateBudgetLine {
  count: Int!
}

type AggregateCategory {
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

type AggregateEventStuff {
  count: Int!
}

type AggregateEventType {
  count: Int!
}

type AggregateInvoice {
  count: Int!
}

type AggregateItem {
  count: Int!
}

type AggregateItemProposal {
  count: Int!
}

type AggregateItemTranslation {
  count: Int!
}

type AggregateJob {
  count: Int!
}

type AggregateMenu {
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

type AggregateSection {
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

type Budget implements Node {
  description: String!
  id: ID!
  invoice(where: InvoiceWhereInput): Invoice
  quantity: Int!
  tax(where: TaxWhereInput): Tax
  total: Float!
  unitPrice: Float!
}

"""A connection to a list of items."""
type BudgetConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BudgetEdge]!
  aggregate: AggregateBudget!
}

input BudgetCreateInput {
  description: String!
  quantity: Int!
  total: Float!
  unitPrice: Float!
  invoice: InvoiceCreateOneWithoutBudgetsInput
  tax: TaxCreateOneWithoutBudgetsInput
}

input BudgetCreateManyWithoutInvoiceInput {
  create: [BudgetCreateWithoutInvoiceInput!]
  connect: [BudgetWhereUniqueInput!]
}

input BudgetCreateManyWithoutTaxInput {
  create: [BudgetCreateWithoutTaxInput!]
  connect: [BudgetWhereUniqueInput!]
}

input BudgetCreateWithoutInvoiceInput {
  description: String!
  quantity: Int!
  total: Float!
  unitPrice: Float!
  tax: TaxCreateOneWithoutBudgetsInput
}

input BudgetCreateWithoutTaxInput {
  description: String!
  quantity: Int!
  total: Float!
  unitPrice: Float!
  invoice: InvoiceCreateOneWithoutBudgetsInput
}

"""An edge in a connection."""
type BudgetEdge {
  """The item at the end of the edge."""
  node: Budget!

  """A cursor for use in pagination."""
  cursor: String!
}

type BudgetLine implements Node {
  description: String!
  id: ID!
  offer(where: OfferWhereInput): Offer
  quantity: Int
  tax(where: TaxWhereInput): Tax
  total: Float
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
  total: Float
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
  total: Float
  unitPrice: Float
  value: Float!
  tax: TaxCreateOneWithoutBudgetLinesInput
}

input BudgetLineCreateWithoutTaxInput {
  description: String!
  quantity: Int
  total: Float
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
  total_ASC
  total_DESC
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
  total: Float
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
  total: Float
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
  total: Float
  unitPrice: Float
  value: Float
  tax: TaxUpdateOneWithoutBudgetLinesInput
}

input BudgetLineUpdateWithoutTaxDataInput {
  description: String
  quantity: Int
  total: Float
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

enum BudgetOrderByInput {
  description_ASC
  description_DESC
  id_ASC
  id_DESC
  quantity_ASC
  quantity_DESC
  total_ASC
  total_DESC
  unitPrice_ASC
  unitPrice_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BudgetPreviousValues {
  description: String!
  id: ID!
  quantity: Int!
  total: Float!
  unitPrice: Float!
}

type BudgetSubscriptionPayload {
  mutation: MutationType!
  node: Budget
  updatedFields: [String!]
  previousValues: BudgetPreviousValues
}

input BudgetSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BudgetSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BudgetSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BudgetSubscriptionWhereInput!]

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
  node: BudgetWhereInput
}

input BudgetUpdateInput {
  description: String
  quantity: Int
  total: Float
  unitPrice: Float
  invoice: InvoiceUpdateOneWithoutBudgetsInput
  tax: TaxUpdateOneWithoutBudgetsInput
}

input BudgetUpdateManyWithoutInvoiceInput {
  create: [BudgetCreateWithoutInvoiceInput!]
  connect: [BudgetWhereUniqueInput!]
  disconnect: [BudgetWhereUniqueInput!]
  delete: [BudgetWhereUniqueInput!]
  update: [BudgetUpdateWithWhereUniqueWithoutInvoiceInput!]
  upsert: [BudgetUpsertWithWhereUniqueWithoutInvoiceInput!]
}

input BudgetUpdateManyWithoutTaxInput {
  create: [BudgetCreateWithoutTaxInput!]
  connect: [BudgetWhereUniqueInput!]
  disconnect: [BudgetWhereUniqueInput!]
  delete: [BudgetWhereUniqueInput!]
  update: [BudgetUpdateWithWhereUniqueWithoutTaxInput!]
  upsert: [BudgetUpsertWithWhereUniqueWithoutTaxInput!]
}

input BudgetUpdateWithoutInvoiceDataInput {
  description: String
  quantity: Int
  total: Float
  unitPrice: Float
  tax: TaxUpdateOneWithoutBudgetsInput
}

input BudgetUpdateWithoutTaxDataInput {
  description: String
  quantity: Int
  total: Float
  unitPrice: Float
  invoice: InvoiceUpdateOneWithoutBudgetsInput
}

input BudgetUpdateWithWhereUniqueWithoutInvoiceInput {
  where: BudgetWhereUniqueInput!
  data: BudgetUpdateWithoutInvoiceDataInput!
}

input BudgetUpdateWithWhereUniqueWithoutTaxInput {
  where: BudgetWhereUniqueInput!
  data: BudgetUpdateWithoutTaxDataInput!
}

input BudgetUpsertWithWhereUniqueWithoutInvoiceInput {
  where: BudgetWhereUniqueInput!
  update: BudgetUpdateWithoutInvoiceDataInput!
  create: BudgetCreateWithoutInvoiceInput!
}

input BudgetUpsertWithWhereUniqueWithoutTaxInput {
  where: BudgetWhereUniqueInput!
  update: BudgetUpdateWithoutTaxDataInput!
  create: BudgetCreateWithoutTaxInput!
}

input BudgetWhereInput {
  """Logical AND on all given filters."""
  AND: [BudgetWhereInput!]

  """Logical OR on all given filters."""
  OR: [BudgetWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BudgetWhereInput!]
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
  invoice: InvoiceWhereInput
  tax: TaxWhereInput
}

input BudgetWhereUniqueInput {
  id: ID
}

type Category implements Node {
  id: ID!
  name: String!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
}

"""A connection to a list of items."""
type CategoryConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  name: String!
  items: ItemCreateManyWithoutCategoriesInput
}

input CategoryCreateManyWithoutItemsInput {
  create: [CategoryCreateWithoutItemsInput!]
  connect: [CategoryWhereUniqueInput!]
}

input CategoryCreateWithoutItemsInput {
  name: String!
}

"""An edge in a connection."""
type CategoryEdge {
  """The item at the end of the edge."""
  node: Category!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CategoryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CategoryPreviousValues {
  id: ID!
  name: String!
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CategorySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CategorySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CategorySubscriptionWhereInput!]

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
  node: CategoryWhereInput
}

input CategoryUpdateInput {
  name: String
  items: ItemUpdateManyWithoutCategoriesInput
}

input CategoryUpdateManyWithoutItemsInput {
  create: [CategoryCreateWithoutItemsInput!]
  connect: [CategoryWhereUniqueInput!]
  disconnect: [CategoryWhereUniqueInput!]
  delete: [CategoryWhereUniqueInput!]
  update: [CategoryUpdateWithWhereUniqueWithoutItemsInput!]
  upsert: [CategoryUpsertWithWhereUniqueWithoutItemsInput!]
}

input CategoryUpdateWithoutItemsDataInput {
  name: String
}

input CategoryUpdateWithWhereUniqueWithoutItemsInput {
  where: CategoryWhereUniqueInput!
  data: CategoryUpdateWithoutItemsDataInput!
}

input CategoryUpsertWithWhereUniqueWithoutItemsInput {
  where: CategoryWhereUniqueInput!
  update: CategoryUpdateWithoutItemsDataInput!
  create: CategoryCreateWithoutItemsInput!
}

input CategoryWhereInput {
  """Logical AND on all given filters."""
  AND: [CategoryWhereInput!]

  """Logical OR on all given filters."""
  OR: [CategoryWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CategoryWhereInput!]
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
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
}

input CategoryWhereUniqueInput {
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
  language: LanguageEnum
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
  language: LanguageEnum
  type: ClientType
  events: EventCreateManyInput
  offers: OfferCreateManyWithoutClientInput
  clientContacts: ClientContactCreateManyWithoutClientInput
}

input ClientCreateOneWithoutClientContactsInput {
  create: ClientCreateWithoutClientContactsInput
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
  language: LanguageEnum
  type: ClientType
  events: EventCreateManyInput
  offers: OfferCreateManyWithoutClientInput
}

input ClientCreateWithoutOffersInput {
  address: String
  email: String!
  name: String!
  phone: String!
  tva: String
  language: LanguageEnum
  type: ClientType
  events: EventCreateManyInput
  clientContacts: ClientContactCreateManyWithoutClientInput
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
  language_ASC
  language_DESC
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
  language: LanguageEnum
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
  language: LanguageEnum
  type: ClientType
  events: EventUpdateManyInput
  offers: OfferUpdateManyWithoutClientInput
  clientContacts: ClientContactUpdateManyWithoutClientInput
}

input ClientUpdateOneWithoutClientContactsInput {
  create: ClientCreateWithoutClientContactsInput
  connect: ClientWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ClientUpdateWithoutClientContactsDataInput
  upsert: ClientUpsertWithoutClientContactsInput
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
  language: LanguageEnum
  type: ClientType
  events: EventUpdateManyInput
  offers: OfferUpdateManyWithoutClientInput
}

input ClientUpdateWithoutOffersDataInput {
  address: String
  email: String
  name: String
  phone: String
  tva: String
  language: LanguageEnum
  type: ClientType
  events: EventUpdateManyInput
  clientContacts: ClientContactUpdateManyWithoutClientInput
}

input ClientUpsertWithoutClientContactsInput {
  update: ClientUpdateWithoutClientContactsDataInput!
  create: ClientCreateWithoutClientContactsInput!
}

input ClientUpsertWithoutOffersInput {
  update: ClientUpdateWithoutOffersDataInput!
  create: ClientCreateWithoutOffersInput!
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
  language: LanguageEnum

  """All values that are not equal to given value."""
  language_not: LanguageEnum

  """All values that are contained in given list."""
  language_in: [LanguageEnum!]

  """All values that are not contained in given list."""
  language_not_in: [LanguageEnum!]
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
}

input ClientWhereUniqueInput {
  id: ID
}

type Communication implements Node {
  id: ID!
  message: String!
  subject: String!
  channel: Channel!
  date: DateTime!
  gmtOffset: String!
  offer(where: OfferWhereInput): Offer
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
  offer: OfferCreateOneWithoutCommunicationsInput
}

input CommunicationCreateManyWithoutOfferInput {
  create: [CommunicationCreateWithoutOfferInput!]
  connect: [CommunicationWhereUniqueInput!]
}

input CommunicationCreateWithoutOfferInput {
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
  offer: OfferUpdateOneWithoutCommunicationsInput
}

input CommunicationUpdateManyWithoutOfferInput {
  create: [CommunicationCreateWithoutOfferInput!]
  connect: [CommunicationWhereUniqueInput!]
  disconnect: [CommunicationWhereUniqueInput!]
  delete: [CommunicationWhereUniqueInput!]
  update: [CommunicationUpdateWithWhereUniqueWithoutOfferInput!]
  upsert: [CommunicationUpsertWithWhereUniqueWithoutOfferInput!]
}

input CommunicationUpdateWithoutOfferDataInput {
  message: String
  subject: String
  channel: Channel
  date: DateTime
  gmtOffset: String
}

input CommunicationUpdateWithWhereUniqueWithoutOfferInput {
  where: CommunicationWhereUniqueInput!
  data: CommunicationUpdateWithoutOfferDataInput!
}

input CommunicationUpsertWithWhereUniqueWithoutOfferInput {
  where: CommunicationWhereUniqueInput!
  update: CommunicationUpdateWithoutOfferDataInput!
  create: CommunicationCreateWithoutOfferInput!
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
  offer: OfferWhereInput
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
  id: ID!
  offer(where: OfferWhereInput): Offer
  employees(where: EmployeeWhereInput, orderBy: EmployeeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Employee!]
  eventStuffs(where: EventStuffWhereInput, orderBy: EventStuffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EventStuff!]
  invoice(where: InvoiceWhereInput): Invoice
  vehicles(where: VehicleWhereInput, orderBy: VehicleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vehicle!]
  canceled: Boolean
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
  canceled: Boolean
  offer: OfferCreateOneWithoutEventInput
  employees: EmployeeCreateManyWithoutEventInput
  eventStuffs: EventStuffCreateManyWithoutEventInput
  invoice: InvoiceCreateOneWithoutEventInput
  vehicles: VehicleCreateManyWithoutEventsInput
}

input EventCreateManyInput {
  create: [EventCreateInput!]
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

input EventCreateOneWithoutEventStuffsInput {
  create: EventCreateWithoutEventStuffsInput
  connect: EventWhereUniqueInput
}

input EventCreateOneWithoutInvoiceInput {
  create: EventCreateWithoutInvoiceInput
  connect: EventWhereUniqueInput
}

input EventCreateOneWithoutOfferInput {
  create: EventCreateWithoutOfferInput
  connect: EventWhereUniqueInput
}

input EventCreateWithoutEmployeesInput {
  canceled: Boolean
  offer: OfferCreateOneWithoutEventInput
  eventStuffs: EventStuffCreateManyWithoutEventInput
  invoice: InvoiceCreateOneWithoutEventInput
  vehicles: VehicleCreateManyWithoutEventsInput
}

input EventCreateWithoutEventStuffsInput {
  canceled: Boolean
  offer: OfferCreateOneWithoutEventInput
  employees: EmployeeCreateManyWithoutEventInput
  invoice: InvoiceCreateOneWithoutEventInput
  vehicles: VehicleCreateManyWithoutEventsInput
}

input EventCreateWithoutInvoiceInput {
  canceled: Boolean
  offer: OfferCreateOneWithoutEventInput
  employees: EmployeeCreateManyWithoutEventInput
  eventStuffs: EventStuffCreateManyWithoutEventInput
  vehicles: VehicleCreateManyWithoutEventsInput
}

input EventCreateWithoutOfferInput {
  canceled: Boolean
  employees: EmployeeCreateManyWithoutEventInput
  eventStuffs: EventStuffCreateManyWithoutEventInput
  invoice: InvoiceCreateOneWithoutEventInput
  vehicles: VehicleCreateManyWithoutEventsInput
}

input EventCreateWithoutVehiclesInput {
  canceled: Boolean
  offer: OfferCreateOneWithoutEventInput
  employees: EmployeeCreateManyWithoutEventInput
  eventStuffs: EventStuffCreateManyWithoutEventInput
  invoice: InvoiceCreateOneWithoutEventInput
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
  canceled_ASC
  canceled_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type EventPreviousValues {
  id: ID!
  canceled: Boolean
}

type EventStuff implements Node {
  event(where: EventWhereInput): Event
  id: ID!
  quantity: Int!
  stuff(where: StuffWhereInput): Stuff
}

"""A connection to a list of items."""
type EventStuffConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [EventStuffEdge]!
  aggregate: AggregateEventStuff!
}

input EventStuffCreateInput {
  quantity: Int
  event: EventCreateOneWithoutEventStuffsInput
  stuff: StuffCreateOneWithoutEventStuffsInput
}

input EventStuffCreateManyWithoutEventInput {
  create: [EventStuffCreateWithoutEventInput!]
  connect: [EventStuffWhereUniqueInput!]
}

input EventStuffCreateManyWithoutStuffInput {
  create: [EventStuffCreateWithoutStuffInput!]
  connect: [EventStuffWhereUniqueInput!]
}

input EventStuffCreateWithoutEventInput {
  quantity: Int
  stuff: StuffCreateOneWithoutEventStuffsInput
}

input EventStuffCreateWithoutStuffInput {
  quantity: Int
  event: EventCreateOneWithoutEventStuffsInput
}

"""An edge in a connection."""
type EventStuffEdge {
  """The item at the end of the edge."""
  node: EventStuff!

  """A cursor for use in pagination."""
  cursor: String!
}

enum EventStuffOrderByInput {
  id_ASC
  id_DESC
  quantity_ASC
  quantity_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type EventStuffPreviousValues {
  id: ID!
  quantity: Int!
}

type EventStuffSubscriptionPayload {
  mutation: MutationType!
  node: EventStuff
  updatedFields: [String!]
  previousValues: EventStuffPreviousValues
}

input EventStuffSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [EventStuffSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [EventStuffSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EventStuffSubscriptionWhereInput!]

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
  node: EventStuffWhereInput
}

input EventStuffUpdateInput {
  quantity: Int
  event: EventUpdateOneWithoutEventStuffsInput
  stuff: StuffUpdateOneWithoutEventStuffsInput
}

input EventStuffUpdateManyWithoutEventInput {
  create: [EventStuffCreateWithoutEventInput!]
  connect: [EventStuffWhereUniqueInput!]
  disconnect: [EventStuffWhereUniqueInput!]
  delete: [EventStuffWhereUniqueInput!]
  update: [EventStuffUpdateWithWhereUniqueWithoutEventInput!]
  upsert: [EventStuffUpsertWithWhereUniqueWithoutEventInput!]
}

input EventStuffUpdateManyWithoutStuffInput {
  create: [EventStuffCreateWithoutStuffInput!]
  connect: [EventStuffWhereUniqueInput!]
  disconnect: [EventStuffWhereUniqueInput!]
  delete: [EventStuffWhereUniqueInput!]
  update: [EventStuffUpdateWithWhereUniqueWithoutStuffInput!]
  upsert: [EventStuffUpsertWithWhereUniqueWithoutStuffInput!]
}

input EventStuffUpdateWithoutEventDataInput {
  quantity: Int
  stuff: StuffUpdateOneWithoutEventStuffsInput
}

input EventStuffUpdateWithoutStuffDataInput {
  quantity: Int
  event: EventUpdateOneWithoutEventStuffsInput
}

input EventStuffUpdateWithWhereUniqueWithoutEventInput {
  where: EventStuffWhereUniqueInput!
  data: EventStuffUpdateWithoutEventDataInput!
}

input EventStuffUpdateWithWhereUniqueWithoutStuffInput {
  where: EventStuffWhereUniqueInput!
  data: EventStuffUpdateWithoutStuffDataInput!
}

input EventStuffUpsertWithWhereUniqueWithoutEventInput {
  where: EventStuffWhereUniqueInput!
  update: EventStuffUpdateWithoutEventDataInput!
  create: EventStuffCreateWithoutEventInput!
}

input EventStuffUpsertWithWhereUniqueWithoutStuffInput {
  where: EventStuffWhereUniqueInput!
  update: EventStuffUpdateWithoutStuffDataInput!
  create: EventStuffCreateWithoutStuffInput!
}

input EventStuffWhereInput {
  """Logical AND on all given filters."""
  AND: [EventStuffWhereInput!]

  """Logical OR on all given filters."""
  OR: [EventStuffWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EventStuffWhereInput!]
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
  event: EventWhereInput
  stuff: StuffWhereInput
}

input EventStuffWhereUniqueInput {
  id: ID
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

input EventUpdateDataInput {
  canceled: Boolean
  offer: OfferUpdateOneWithoutEventInput
  employees: EmployeeUpdateManyWithoutEventInput
  eventStuffs: EventStuffUpdateManyWithoutEventInput
  invoice: InvoiceUpdateOneWithoutEventInput
  vehicles: VehicleUpdateManyWithoutEventsInput
}

input EventUpdateInput {
  canceled: Boolean
  offer: OfferUpdateOneWithoutEventInput
  employees: EmployeeUpdateManyWithoutEventInput
  eventStuffs: EventStuffUpdateManyWithoutEventInput
  invoice: InvoiceUpdateOneWithoutEventInput
  vehicles: VehicleUpdateManyWithoutEventsInput
}

input EventUpdateManyInput {
  create: [EventCreateInput!]
  connect: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  delete: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueNestedInput!]
  upsert: [EventUpsertWithWhereUniqueNestedInput!]
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

input EventUpdateOneWithoutEventStuffsInput {
  create: EventCreateWithoutEventStuffsInput
  connect: EventWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: EventUpdateWithoutEventStuffsDataInput
  upsert: EventUpsertWithoutEventStuffsInput
}

input EventUpdateOneWithoutInvoiceInput {
  create: EventCreateWithoutInvoiceInput
  connect: EventWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: EventUpdateWithoutInvoiceDataInput
  upsert: EventUpsertWithoutInvoiceInput
}

input EventUpdateOneWithoutOfferInput {
  create: EventCreateWithoutOfferInput
  connect: EventWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: EventUpdateWithoutOfferDataInput
  upsert: EventUpsertWithoutOfferInput
}

input EventUpdateWithoutEmployeesDataInput {
  canceled: Boolean
  offer: OfferUpdateOneWithoutEventInput
  eventStuffs: EventStuffUpdateManyWithoutEventInput
  invoice: InvoiceUpdateOneWithoutEventInput
  vehicles: VehicleUpdateManyWithoutEventsInput
}

input EventUpdateWithoutEventStuffsDataInput {
  canceled: Boolean
  offer: OfferUpdateOneWithoutEventInput
  employees: EmployeeUpdateManyWithoutEventInput
  invoice: InvoiceUpdateOneWithoutEventInput
  vehicles: VehicleUpdateManyWithoutEventsInput
}

input EventUpdateWithoutInvoiceDataInput {
  canceled: Boolean
  offer: OfferUpdateOneWithoutEventInput
  employees: EmployeeUpdateManyWithoutEventInput
  eventStuffs: EventStuffUpdateManyWithoutEventInput
  vehicles: VehicleUpdateManyWithoutEventsInput
}

input EventUpdateWithoutOfferDataInput {
  canceled: Boolean
  employees: EmployeeUpdateManyWithoutEventInput
  eventStuffs: EventStuffUpdateManyWithoutEventInput
  invoice: InvoiceUpdateOneWithoutEventInput
  vehicles: VehicleUpdateManyWithoutEventsInput
}

input EventUpdateWithoutVehiclesDataInput {
  canceled: Boolean
  offer: OfferUpdateOneWithoutEventInput
  employees: EmployeeUpdateManyWithoutEventInput
  eventStuffs: EventStuffUpdateManyWithoutEventInput
  invoice: InvoiceUpdateOneWithoutEventInput
}

input EventUpdateWithWhereUniqueNestedInput {
  where: EventWhereUniqueInput!
  data: EventUpdateDataInput!
}

input EventUpdateWithWhereUniqueWithoutVehiclesInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutVehiclesDataInput!
}

input EventUpsertWithoutEmployeesInput {
  update: EventUpdateWithoutEmployeesDataInput!
  create: EventCreateWithoutEmployeesInput!
}

input EventUpsertWithoutEventStuffsInput {
  update: EventUpdateWithoutEventStuffsDataInput!
  create: EventCreateWithoutEventStuffsInput!
}

input EventUpsertWithoutInvoiceInput {
  update: EventUpdateWithoutInvoiceDataInput!
  create: EventCreateWithoutInvoiceInput!
}

input EventUpsertWithoutOfferInput {
  update: EventUpdateWithoutOfferDataInput!
  create: EventCreateWithoutOfferInput!
}

input EventUpsertWithWhereUniqueNestedInput {
  where: EventWhereUniqueInput!
  update: EventUpdateDataInput!
  create: EventCreateInput!
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
  canceled: Boolean

  """All values that are not equal to given value."""
  canceled_not: Boolean
  offer: OfferWhereInput
  employees_every: EmployeeWhereInput
  employees_some: EmployeeWhereInput
  employees_none: EmployeeWhereInput
  eventStuffs_every: EventStuffWhereInput
  eventStuffs_some: EventStuffWhereInput
  eventStuffs_none: EventStuffWhereInput
  invoice: InvoiceWhereInput
  vehicles_every: VehicleWhereInput
  vehicles_some: VehicleWhereInput
  vehicles_none: VehicleWhereInput
}

input EventWhereUniqueInput {
  id: ID
}

type Invoice implements Node {
  address: String
  budgets(where: BudgetWhereInput, orderBy: BudgetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Budget!]
  date: DateTime
  event(where: EventWhereInput): Event
  id: ID!
  name: String
  paid: Boolean!
  tva: String
  number: Int
  type: Account
}

"""A connection to a list of items."""
type InvoiceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [InvoiceEdge]!
  aggregate: AggregateInvoice!
}

input InvoiceCreateInput {
  address: String
  date: DateTime
  name: String
  paid: Boolean
  tva: String
  number: Int
  type: Account
  budgets: BudgetCreateManyWithoutInvoiceInput
  event: EventCreateOneWithoutInvoiceInput
}

input InvoiceCreateOneWithoutBudgetsInput {
  create: InvoiceCreateWithoutBudgetsInput
  connect: InvoiceWhereUniqueInput
}

input InvoiceCreateOneWithoutEventInput {
  create: InvoiceCreateWithoutEventInput
  connect: InvoiceWhereUniqueInput
}

input InvoiceCreateWithoutBudgetsInput {
  address: String
  date: DateTime
  name: String
  paid: Boolean
  tva: String
  number: Int
  type: Account
  event: EventCreateOneWithoutInvoiceInput
}

input InvoiceCreateWithoutEventInput {
  address: String
  date: DateTime
  name: String
  paid: Boolean
  tva: String
  number: Int
  type: Account
  budgets: BudgetCreateManyWithoutInvoiceInput
}

"""An edge in a connection."""
type InvoiceEdge {
  """The item at the end of the edge."""
  node: Invoice!

  """A cursor for use in pagination."""
  cursor: String!
}

enum InvoiceOrderByInput {
  address_ASC
  address_DESC
  date_ASC
  date_DESC
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  paid_ASC
  paid_DESC
  tva_ASC
  tva_DESC
  number_ASC
  number_DESC
  type_ASC
  type_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type InvoicePreviousValues {
  address: String
  date: DateTime
  id: ID!
  name: String
  paid: Boolean!
  tva: String
  number: Int
  type: Account
}

type InvoiceSubscriptionPayload {
  mutation: MutationType!
  node: Invoice
  updatedFields: [String!]
  previousValues: InvoicePreviousValues
}

input InvoiceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [InvoiceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [InvoiceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [InvoiceSubscriptionWhereInput!]

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
  node: InvoiceWhereInput
}

input InvoiceUpdateInput {
  address: String
  date: DateTime
  name: String
  paid: Boolean
  tva: String
  number: Int
  type: Account
  budgets: BudgetUpdateManyWithoutInvoiceInput
  event: EventUpdateOneWithoutInvoiceInput
}

input InvoiceUpdateOneWithoutBudgetsInput {
  create: InvoiceCreateWithoutBudgetsInput
  connect: InvoiceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: InvoiceUpdateWithoutBudgetsDataInput
  upsert: InvoiceUpsertWithoutBudgetsInput
}

input InvoiceUpdateOneWithoutEventInput {
  create: InvoiceCreateWithoutEventInput
  connect: InvoiceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: InvoiceUpdateWithoutEventDataInput
  upsert: InvoiceUpsertWithoutEventInput
}

input InvoiceUpdateWithoutBudgetsDataInput {
  address: String
  date: DateTime
  name: String
  paid: Boolean
  tva: String
  number: Int
  type: Account
  event: EventUpdateOneWithoutInvoiceInput
}

input InvoiceUpdateWithoutEventDataInput {
  address: String
  date: DateTime
  name: String
  paid: Boolean
  tva: String
  number: Int
  type: Account
  budgets: BudgetUpdateManyWithoutInvoiceInput
}

input InvoiceUpsertWithoutBudgetsInput {
  update: InvoiceUpdateWithoutBudgetsDataInput!
  create: InvoiceCreateWithoutBudgetsInput!
}

input InvoiceUpsertWithoutEventInput {
  update: InvoiceUpdateWithoutEventDataInput!
  create: InvoiceCreateWithoutEventInput!
}

input InvoiceWhereInput {
  """Logical AND on all given filters."""
  AND: [InvoiceWhereInput!]

  """Logical OR on all given filters."""
  OR: [InvoiceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [InvoiceWhereInput!]
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
  paid: Boolean

  """All values that are not equal to given value."""
  paid_not: Boolean
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
  type: Account

  """All values that are not equal to given value."""
  type_not: Account

  """All values that are contained in given list."""
  type_in: [Account!]

  """All values that are not contained in given list."""
  type_not_in: [Account!]
  budgets_every: BudgetWhereInput
  budgets_some: BudgetWhereInput
  budgets_none: BudgetWhereInput
  event: EventWhereInput
}

input InvoiceWhereUniqueInput {
  id: ID
}

type Item implements Node {
  id: ID!
  itemTranslations(where: ItemTranslationWhereInput, orderBy: ItemTranslationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ItemTranslation!]
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category!]
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
  itemTranslations: ItemTranslationCreateManyWithoutItemsInput
  categories: CategoryCreateManyWithoutItemsInput
  sectionItems: SectionItemCreateManyInput
}

input ItemCreateManyInput {
  create: [ItemCreateInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateManyWithoutCategoriesInput {
  create: [ItemCreateWithoutCategoriesInput!]
  connect: [ItemWhereUniqueInput!]
}

input ItemCreateOneWithoutItemTranslationsInput {
  create: ItemCreateWithoutItemTranslationsInput
  connect: ItemWhereUniqueInput
}

input ItemCreateWithoutCategoriesInput {
  itemTranslations: ItemTranslationCreateManyWithoutItemsInput
  sectionItems: SectionItemCreateManyInput
}

input ItemCreateWithoutItemTranslationsInput {
  categories: CategoryCreateManyWithoutItemsInput
  sectionItems: SectionItemCreateManyInput
}

"""An edge in a connection."""
type ItemEdge {
  """The item at the end of the edge."""
  node: Item!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ItemPreviousValues {
  id: ID!
}

type ItemProposal implements Node {
  id: ID!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
  section(where: SectionWhereInput): Section
  status: ItemProposalStatus!
}

"""A connection to a list of items."""
type ItemProposalConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ItemProposalEdge]!
  aggregate: AggregateItemProposal!
}

input ItemProposalCreateInput {
  status: ItemProposalStatus!
  items: ItemCreateManyInput
  section: SectionCreateOneWithoutItemProposalsInput
}

input ItemProposalCreateManyWithoutSectionInput {
  create: [ItemProposalCreateWithoutSectionInput!]
  connect: [ItemProposalWhereUniqueInput!]
}

input ItemProposalCreateWithoutSectionInput {
  status: ItemProposalStatus!
  items: ItemCreateManyInput
}

"""An edge in a connection."""
type ItemProposalEdge {
  """The item at the end of the edge."""
  node: ItemProposal!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ItemProposalOrderByInput {
  id_ASC
  id_DESC
  status_ASC
  status_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ItemProposalPreviousValues {
  id: ID!
  status: ItemProposalStatus!
}

enum ItemProposalStatus {
  PENDING
  ACCEPTED
  REJECTED
}

type ItemProposalSubscriptionPayload {
  mutation: MutationType!
  node: ItemProposal
  updatedFields: [String!]
  previousValues: ItemProposalPreviousValues
}

input ItemProposalSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemProposalSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemProposalSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemProposalSubscriptionWhereInput!]

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
  node: ItemProposalWhereInput
}

input ItemProposalUpdateInput {
  status: ItemProposalStatus
  items: ItemUpdateManyInput
  section: SectionUpdateOneWithoutItemProposalsInput
}

input ItemProposalUpdateManyWithoutSectionInput {
  create: [ItemProposalCreateWithoutSectionInput!]
  connect: [ItemProposalWhereUniqueInput!]
  disconnect: [ItemProposalWhereUniqueInput!]
  delete: [ItemProposalWhereUniqueInput!]
  update: [ItemProposalUpdateWithWhereUniqueWithoutSectionInput!]
  upsert: [ItemProposalUpsertWithWhereUniqueWithoutSectionInput!]
}

input ItemProposalUpdateWithoutSectionDataInput {
  status: ItemProposalStatus
  items: ItemUpdateManyInput
}

input ItemProposalUpdateWithWhereUniqueWithoutSectionInput {
  where: ItemProposalWhereUniqueInput!
  data: ItemProposalUpdateWithoutSectionDataInput!
}

input ItemProposalUpsertWithWhereUniqueWithoutSectionInput {
  where: ItemProposalWhereUniqueInput!
  update: ItemProposalUpdateWithoutSectionDataInput!
  create: ItemProposalCreateWithoutSectionInput!
}

input ItemProposalWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemProposalWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemProposalWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemProposalWhereInput!]
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
  status: ItemProposalStatus

  """All values that are not equal to given value."""
  status_not: ItemProposalStatus

  """All values that are contained in given list."""
  status_in: [ItemProposalStatus!]

  """All values that are not contained in given list."""
  status_not_in: [ItemProposalStatus!]
  items_every: ItemWhereInput
  items_some: ItemWhereInput
  items_none: ItemWhereInput
  section: SectionWhereInput
}

input ItemProposalWhereUniqueInput {
  id: ID
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

type ItemTranslation implements Node {
  description: String
  id: ID!
  items(where: ItemWhereInput): Item
  internalDescription: String
  language: LanguageEnum!
  name: String
}

"""A connection to a list of items."""
type ItemTranslationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ItemTranslationEdge]!
  aggregate: AggregateItemTranslation!
}

input ItemTranslationCreateInput {
  description: String
  internalDescription: String
  language: LanguageEnum!
  name: String
  items: ItemCreateOneWithoutItemTranslationsInput
}

input ItemTranslationCreateManyWithoutItemsInput {
  create: [ItemTranslationCreateWithoutItemsInput!]
  connect: [ItemTranslationWhereUniqueInput!]
}

input ItemTranslationCreateWithoutItemsInput {
  description: String
  internalDescription: String
  language: LanguageEnum!
  name: String
}

"""An edge in a connection."""
type ItemTranslationEdge {
  """The item at the end of the edge."""
  node: ItemTranslation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ItemTranslationOrderByInput {
  description_ASC
  description_DESC
  id_ASC
  id_DESC
  internalDescription_ASC
  internalDescription_DESC
  language_ASC
  language_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ItemTranslationPreviousValues {
  description: String
  id: ID!
  internalDescription: String
  language: LanguageEnum!
  name: String
}

type ItemTranslationSubscriptionPayload {
  mutation: MutationType!
  node: ItemTranslation
  updatedFields: [String!]
  previousValues: ItemTranslationPreviousValues
}

input ItemTranslationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemTranslationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemTranslationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemTranslationSubscriptionWhereInput!]

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
  node: ItemTranslationWhereInput
}

input ItemTranslationUpdateInput {
  description: String
  internalDescription: String
  language: LanguageEnum
  name: String
  items: ItemUpdateOneWithoutItemTranslationsInput
}

input ItemTranslationUpdateManyWithoutItemsInput {
  create: [ItemTranslationCreateWithoutItemsInput!]
  connect: [ItemTranslationWhereUniqueInput!]
  disconnect: [ItemTranslationWhereUniqueInput!]
  delete: [ItemTranslationWhereUniqueInput!]
  update: [ItemTranslationUpdateWithWhereUniqueWithoutItemsInput!]
  upsert: [ItemTranslationUpsertWithWhereUniqueWithoutItemsInput!]
}

input ItemTranslationUpdateWithoutItemsDataInput {
  description: String
  internalDescription: String
  language: LanguageEnum
  name: String
}

input ItemTranslationUpdateWithWhereUniqueWithoutItemsInput {
  where: ItemTranslationWhereUniqueInput!
  data: ItemTranslationUpdateWithoutItemsDataInput!
}

input ItemTranslationUpsertWithWhereUniqueWithoutItemsInput {
  where: ItemTranslationWhereUniqueInput!
  update: ItemTranslationUpdateWithoutItemsDataInput!
  create: ItemTranslationCreateWithoutItemsInput!
}

input ItemTranslationWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemTranslationWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemTranslationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemTranslationWhereInput!]
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
  language: LanguageEnum

  """All values that are not equal to given value."""
  language_not: LanguageEnum

  """All values that are contained in given list."""
  language_in: [LanguageEnum!]

  """All values that are not contained in given list."""
  language_not_in: [LanguageEnum!]
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
  items: ItemWhereInput
}

input ItemTranslationWhereUniqueInput {
  id: ID
}

input ItemUpdateDataInput {
  itemTranslations: ItemTranslationUpdateManyWithoutItemsInput
  categories: CategoryUpdateManyWithoutItemsInput
  sectionItems: SectionItemUpdateManyInput
}

input ItemUpdateInput {
  itemTranslations: ItemTranslationUpdateManyWithoutItemsInput
  categories: CategoryUpdateManyWithoutItemsInput
  sectionItems: SectionItemUpdateManyInput
}

input ItemUpdateManyInput {
  create: [ItemCreateInput!]
  connect: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  delete: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithWhereUniqueNestedInput!]
  upsert: [ItemUpsertWithWhereUniqueNestedInput!]
}

input ItemUpdateManyWithoutCategoriesInput {
  create: [ItemCreateWithoutCategoriesInput!]
  connect: [ItemWhereUniqueInput!]
  disconnect: [ItemWhereUniqueInput!]
  delete: [ItemWhereUniqueInput!]
  update: [ItemUpdateWithWhereUniqueWithoutCategoriesInput!]
  upsert: [ItemUpsertWithWhereUniqueWithoutCategoriesInput!]
}

input ItemUpdateOneWithoutItemTranslationsInput {
  create: ItemCreateWithoutItemTranslationsInput
  connect: ItemWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ItemUpdateWithoutItemTranslationsDataInput
  upsert: ItemUpsertWithoutItemTranslationsInput
}

input ItemUpdateWithoutCategoriesDataInput {
  itemTranslations: ItemTranslationUpdateManyWithoutItemsInput
  sectionItems: SectionItemUpdateManyInput
}

input ItemUpdateWithoutItemTranslationsDataInput {
  categories: CategoryUpdateManyWithoutItemsInput
  sectionItems: SectionItemUpdateManyInput
}

input ItemUpdateWithWhereUniqueNestedInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateDataInput!
}

input ItemUpdateWithWhereUniqueWithoutCategoriesInput {
  where: ItemWhereUniqueInput!
  data: ItemUpdateWithoutCategoriesDataInput!
}

input ItemUpsertWithoutItemTranslationsInput {
  update: ItemUpdateWithoutItemTranslationsDataInput!
  create: ItemCreateWithoutItemTranslationsInput!
}

input ItemUpsertWithWhereUniqueNestedInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateDataInput!
  create: ItemCreateInput!
}

input ItemUpsertWithWhereUniqueWithoutCategoriesInput {
  where: ItemWhereUniqueInput!
  update: ItemUpdateWithoutCategoriesDataInput!
  create: ItemCreateWithoutCategoriesInput!
}

input ItemWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemWhereInput!]
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
  itemTranslations_every: ItemTranslationWhereInput
  itemTranslations_some: ItemTranslationWhereInput
  itemTranslations_none: ItemTranslationWhereInput
  categories_every: CategoryWhereInput
  categories_some: CategoryWhereInput
  categories_none: CategoryWhereInput
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

enum LanguageEnum {
  FR
  NL
  EN
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Menu implements Node {
  comment: String
  endDate: DateTime
  hasItemsCold: Boolean
  hasItemsDessert: Boolean
  hasItemsHot: Boolean
  hasItemsZCold: Boolean
  hasItemsZHot: Boolean
  id: ID!
  kitchenNotes: String
  name: String!
  offer(where: OfferWhereInput): Offer
  people: Int
  price: Float
  sectionItem(where: SectionItemWhereInput): SectionItem
  sections(where: SectionWhereInput, orderBy: SectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Section!]
  startDate: DateTime
}

"""A connection to a list of items."""
type MenuConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MenuEdge]!
  aggregate: AggregateMenu!
}

input MenuCreateInput {
  comment: String
  endDate: DateTime
  hasItemsCold: Boolean
  hasItemsDessert: Boolean
  hasItemsHot: Boolean
  hasItemsZCold: Boolean
  hasItemsZHot: Boolean
  kitchenNotes: String
  name: String!
  people: Int
  price: Float
  startDate: DateTime
  offer: OfferCreateOneWithoutMenusInput
  sectionItem: SectionItemCreateOneWithoutMenuInput
  sections: SectionCreateManyWithoutMenuInput
}

input MenuCreateManyWithoutOfferInput {
  create: [MenuCreateWithoutOfferInput!]
  connect: [MenuWhereUniqueInput!]
}

input MenuCreateOneWithoutSectionItemInput {
  create: MenuCreateWithoutSectionItemInput
  connect: MenuWhereUniqueInput
}

input MenuCreateOneWithoutSectionsInput {
  create: MenuCreateWithoutSectionsInput
  connect: MenuWhereUniqueInput
}

input MenuCreateWithoutOfferInput {
  comment: String
  endDate: DateTime
  hasItemsCold: Boolean
  hasItemsDessert: Boolean
  hasItemsHot: Boolean
  hasItemsZCold: Boolean
  hasItemsZHot: Boolean
  kitchenNotes: String
  name: String!
  people: Int
  price: Float
  startDate: DateTime
  sectionItem: SectionItemCreateOneWithoutMenuInput
  sections: SectionCreateManyWithoutMenuInput
}

input MenuCreateWithoutSectionItemInput {
  comment: String
  endDate: DateTime
  hasItemsCold: Boolean
  hasItemsDessert: Boolean
  hasItemsHot: Boolean
  hasItemsZCold: Boolean
  hasItemsZHot: Boolean
  kitchenNotes: String
  name: String!
  people: Int
  price: Float
  startDate: DateTime
  offer: OfferCreateOneWithoutMenusInput
  sections: SectionCreateManyWithoutMenuInput
}

input MenuCreateWithoutSectionsInput {
  comment: String
  endDate: DateTime
  hasItemsCold: Boolean
  hasItemsDessert: Boolean
  hasItemsHot: Boolean
  hasItemsZCold: Boolean
  hasItemsZHot: Boolean
  kitchenNotes: String
  name: String!
  people: Int
  price: Float
  startDate: DateTime
  offer: OfferCreateOneWithoutMenusInput
  sectionItem: SectionItemCreateOneWithoutMenuInput
}

"""An edge in a connection."""
type MenuEdge {
  """The item at the end of the edge."""
  node: Menu!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MenuOrderByInput {
  comment_ASC
  comment_DESC
  endDate_ASC
  endDate_DESC
  hasItemsCold_ASC
  hasItemsCold_DESC
  hasItemsDessert_ASC
  hasItemsDessert_DESC
  hasItemsHot_ASC
  hasItemsHot_DESC
  hasItemsZCold_ASC
  hasItemsZCold_DESC
  hasItemsZHot_ASC
  hasItemsZHot_DESC
  id_ASC
  id_DESC
  kitchenNotes_ASC
  kitchenNotes_DESC
  name_ASC
  name_DESC
  people_ASC
  people_DESC
  price_ASC
  price_DESC
  startDate_ASC
  startDate_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type MenuPreviousValues {
  comment: String
  endDate: DateTime
  hasItemsCold: Boolean
  hasItemsDessert: Boolean
  hasItemsHot: Boolean
  hasItemsZCold: Boolean
  hasItemsZHot: Boolean
  id: ID!
  kitchenNotes: String
  name: String!
  people: Int
  price: Float
  startDate: DateTime
}

type MenuSubscriptionPayload {
  mutation: MutationType!
  node: Menu
  updatedFields: [String!]
  previousValues: MenuPreviousValues
}

input MenuSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MenuSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MenuSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MenuSubscriptionWhereInput!]

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
  node: MenuWhereInput
}

input MenuUpdateInput {
  comment: String
  endDate: DateTime
  hasItemsCold: Boolean
  hasItemsDessert: Boolean
  hasItemsHot: Boolean
  hasItemsZCold: Boolean
  hasItemsZHot: Boolean
  kitchenNotes: String
  name: String
  people: Int
  price: Float
  startDate: DateTime
  offer: OfferUpdateOneWithoutMenusInput
  sectionItem: SectionItemUpdateOneWithoutMenuInput
  sections: SectionUpdateManyWithoutMenuInput
}

input MenuUpdateManyWithoutOfferInput {
  create: [MenuCreateWithoutOfferInput!]
  connect: [MenuWhereUniqueInput!]
  disconnect: [MenuWhereUniqueInput!]
  delete: [MenuWhereUniqueInput!]
  update: [MenuUpdateWithWhereUniqueWithoutOfferInput!]
  upsert: [MenuUpsertWithWhereUniqueWithoutOfferInput!]
}

input MenuUpdateOneWithoutSectionItemInput {
  create: MenuCreateWithoutSectionItemInput
  connect: MenuWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: MenuUpdateWithoutSectionItemDataInput
  upsert: MenuUpsertWithoutSectionItemInput
}

input MenuUpdateOneWithoutSectionsInput {
  create: MenuCreateWithoutSectionsInput
  connect: MenuWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: MenuUpdateWithoutSectionsDataInput
  upsert: MenuUpsertWithoutSectionsInput
}

input MenuUpdateWithoutOfferDataInput {
  comment: String
  endDate: DateTime
  hasItemsCold: Boolean
  hasItemsDessert: Boolean
  hasItemsHot: Boolean
  hasItemsZCold: Boolean
  hasItemsZHot: Boolean
  kitchenNotes: String
  name: String
  people: Int
  price: Float
  startDate: DateTime
  sectionItem: SectionItemUpdateOneWithoutMenuInput
  sections: SectionUpdateManyWithoutMenuInput
}

input MenuUpdateWithoutSectionItemDataInput {
  comment: String
  endDate: DateTime
  hasItemsCold: Boolean
  hasItemsDessert: Boolean
  hasItemsHot: Boolean
  hasItemsZCold: Boolean
  hasItemsZHot: Boolean
  kitchenNotes: String
  name: String
  people: Int
  price: Float
  startDate: DateTime
  offer: OfferUpdateOneWithoutMenusInput
  sections: SectionUpdateManyWithoutMenuInput
}

input MenuUpdateWithoutSectionsDataInput {
  comment: String
  endDate: DateTime
  hasItemsCold: Boolean
  hasItemsDessert: Boolean
  hasItemsHot: Boolean
  hasItemsZCold: Boolean
  hasItemsZHot: Boolean
  kitchenNotes: String
  name: String
  people: Int
  price: Float
  startDate: DateTime
  offer: OfferUpdateOneWithoutMenusInput
  sectionItem: SectionItemUpdateOneWithoutMenuInput
}

input MenuUpdateWithWhereUniqueWithoutOfferInput {
  where: MenuWhereUniqueInput!
  data: MenuUpdateWithoutOfferDataInput!
}

input MenuUpsertWithoutSectionItemInput {
  update: MenuUpdateWithoutSectionItemDataInput!
  create: MenuCreateWithoutSectionItemInput!
}

input MenuUpsertWithoutSectionsInput {
  update: MenuUpdateWithoutSectionsDataInput!
  create: MenuCreateWithoutSectionsInput!
}

input MenuUpsertWithWhereUniqueWithoutOfferInput {
  where: MenuWhereUniqueInput!
  update: MenuUpdateWithoutOfferDataInput!
  create: MenuCreateWithoutOfferInput!
}

input MenuWhereInput {
  """Logical AND on all given filters."""
  AND: [MenuWhereInput!]

  """Logical OR on all given filters."""
  OR: [MenuWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MenuWhereInput!]
  comment: String

  """All values that are not equal to given value."""
  comment_not: String

  """All values that are contained in given list."""
  comment_in: [String!]

  """All values that are not contained in given list."""
  comment_not_in: [String!]

  """All values less than the given value."""
  comment_lt: String

  """All values less than or equal the given value."""
  comment_lte: String

  """All values greater than the given value."""
  comment_gt: String

  """All values greater than or equal the given value."""
  comment_gte: String

  """All values containing the given string."""
  comment_contains: String

  """All values not containing the given string."""
  comment_not_contains: String

  """All values starting with the given string."""
  comment_starts_with: String

  """All values not starting with the given string."""
  comment_not_starts_with: String

  """All values ending with the given string."""
  comment_ends_with: String

  """All values not ending with the given string."""
  comment_not_ends_with: String
  endDate: DateTime

  """All values that are not equal to given value."""
  endDate_not: DateTime

  """All values that are contained in given list."""
  endDate_in: [DateTime!]

  """All values that are not contained in given list."""
  endDate_not_in: [DateTime!]

  """All values less than the given value."""
  endDate_lt: DateTime

  """All values less than or equal the given value."""
  endDate_lte: DateTime

  """All values greater than the given value."""
  endDate_gt: DateTime

  """All values greater than or equal the given value."""
  endDate_gte: DateTime
  hasItemsCold: Boolean

  """All values that are not equal to given value."""
  hasItemsCold_not: Boolean
  hasItemsDessert: Boolean

  """All values that are not equal to given value."""
  hasItemsDessert_not: Boolean
  hasItemsHot: Boolean

  """All values that are not equal to given value."""
  hasItemsHot_not: Boolean
  hasItemsZCold: Boolean

  """All values that are not equal to given value."""
  hasItemsZCold_not: Boolean
  hasItemsZHot: Boolean

  """All values that are not equal to given value."""
  hasItemsZHot_not: Boolean
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
  kitchenNotes: String

  """All values that are not equal to given value."""
  kitchenNotes_not: String

  """All values that are contained in given list."""
  kitchenNotes_in: [String!]

  """All values that are not contained in given list."""
  kitchenNotes_not_in: [String!]

  """All values less than the given value."""
  kitchenNotes_lt: String

  """All values less than or equal the given value."""
  kitchenNotes_lte: String

  """All values greater than the given value."""
  kitchenNotes_gt: String

  """All values greater than or equal the given value."""
  kitchenNotes_gte: String

  """All values containing the given string."""
  kitchenNotes_contains: String

  """All values not containing the given string."""
  kitchenNotes_not_contains: String

  """All values starting with the given string."""
  kitchenNotes_starts_with: String

  """All values not starting with the given string."""
  kitchenNotes_not_starts_with: String

  """All values ending with the given string."""
  kitchenNotes_ends_with: String

  """All values not ending with the given string."""
  kitchenNotes_not_ends_with: String
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
  people: Int

  """All values that are not equal to given value."""
  people_not: Int

  """All values that are contained in given list."""
  people_in: [Int!]

  """All values that are not contained in given list."""
  people_not_in: [Int!]

  """All values less than the given value."""
  people_lt: Int

  """All values less than or equal the given value."""
  people_lte: Int

  """All values greater than the given value."""
  people_gt: Int

  """All values greater than or equal the given value."""
  people_gte: Int
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
  startDate: DateTime

  """All values that are not equal to given value."""
  startDate_not: DateTime

  """All values that are contained in given list."""
  startDate_in: [DateTime!]

  """All values that are not contained in given list."""
  startDate_not_in: [DateTime!]

  """All values less than the given value."""
  startDate_lt: DateTime

  """All values less than or equal the given value."""
  startDate_lte: DateTime

  """All values greater than the given value."""
  startDate_gt: DateTime

  """All values greater than or equal the given value."""
  startDate_gte: DateTime
  offer: OfferWhereInput
  sectionItem: SectionItemWhereInput
  sections_every: SectionWhereInput
  sections_some: SectionWhereInput
  sections_none: SectionWhereInput
}

input MenuWhereUniqueInput {
  id: ID
}

type Mutation {
  createClient(data: ClientCreateInput!): Client!
  createCommunication(data: CommunicationCreateInput!): Communication!
  createOffer(data: OfferCreateInput!): Offer!
  createItemTranslation(data: ItemTranslationCreateInput!): ItemTranslation!
  createUser(data: UserCreateInput!): User!
  createClientContact(data: ClientContactCreateInput!): ClientContact!
  createPlace(data: PlaceCreateInput!): Place!
  createBudget(data: BudgetCreateInput!): Budget!
  createBudgetLine(data: BudgetLineCreateInput!): BudgetLine!
  createCategory(data: CategoryCreateInput!): Category!
  createEmployee(data: EmployeeCreateInput!): Employee!
  createEmployeeEstimation(data: EmployeeEstimationCreateInput!): EmployeeEstimation!
  createEventStuff(data: EventStuffCreateInput!): EventStuff!
  createEventType(data: EventTypeCreateInput!): EventType!
  createInvoice(data: InvoiceCreateInput!): Invoice!
  createJob(data: JobCreateInput!): Job!
  createPlaceContact(data: PlaceContactCreateInput!): PlaceContact!
  createStuff(data: StuffCreateInput!): Stuff!
  createTax(data: TaxCreateInput!): Tax!
  createVehicle(data: VehicleCreateInput!): Vehicle!
  createItemProposal(data: ItemProposalCreateInput!): ItemProposal!
  createMenu(data: MenuCreateInput!): Menu!
  createSection(data: SectionCreateInput!): Section!
  createSectionItem(data: SectionItemCreateInput!): SectionItem!
  createEvent(data: EventCreateInput!): Event!
  createItem(data: ItemCreateInput!): Item!
  updateClient(data: ClientUpdateInput!, where: ClientWhereUniqueInput!): Client
  updateCommunication(data: CommunicationUpdateInput!, where: CommunicationWhereUniqueInput!): Communication
  updateOffer(data: OfferUpdateInput!, where: OfferWhereUniqueInput!): Offer
  updateItemTranslation(data: ItemTranslationUpdateInput!, where: ItemTranslationWhereUniqueInput!): ItemTranslation
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateClientContact(data: ClientContactUpdateInput!, where: ClientContactWhereUniqueInput!): ClientContact
  updatePlace(data: PlaceUpdateInput!, where: PlaceWhereUniqueInput!): Place
  updateBudget(data: BudgetUpdateInput!, where: BudgetWhereUniqueInput!): Budget
  updateBudgetLine(data: BudgetLineUpdateInput!, where: BudgetLineWhereUniqueInput!): BudgetLine
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateEmployee(data: EmployeeUpdateInput!, where: EmployeeWhereUniqueInput!): Employee
  updateEmployeeEstimation(data: EmployeeEstimationUpdateInput!, where: EmployeeEstimationWhereUniqueInput!): EmployeeEstimation
  updateEventStuff(data: EventStuffUpdateInput!, where: EventStuffWhereUniqueInput!): EventStuff
  updateEventType(data: EventTypeUpdateInput!, where: EventTypeWhereUniqueInput!): EventType
  updateInvoice(data: InvoiceUpdateInput!, where: InvoiceWhereUniqueInput!): Invoice
  updateJob(data: JobUpdateInput!, where: JobWhereUniqueInput!): Job
  updatePlaceContact(data: PlaceContactUpdateInput!, where: PlaceContactWhereUniqueInput!): PlaceContact
  updateStuff(data: StuffUpdateInput!, where: StuffWhereUniqueInput!): Stuff
  updateTax(data: TaxUpdateInput!, where: TaxWhereUniqueInput!): Tax
  updateVehicle(data: VehicleUpdateInput!, where: VehicleWhereUniqueInput!): Vehicle
  updateItemProposal(data: ItemProposalUpdateInput!, where: ItemProposalWhereUniqueInput!): ItemProposal
  updateMenu(data: MenuUpdateInput!, where: MenuWhereUniqueInput!): Menu
  updateSection(data: SectionUpdateInput!, where: SectionWhereUniqueInput!): Section
  updateSectionItem(data: SectionItemUpdateInput!, where: SectionItemWhereUniqueInput!): SectionItem
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  deleteClient(where: ClientWhereUniqueInput!): Client
  deleteCommunication(where: CommunicationWhereUniqueInput!): Communication
  deleteOffer(where: OfferWhereUniqueInput!): Offer
  deleteItemTranslation(where: ItemTranslationWhereUniqueInput!): ItemTranslation
  deleteUser(where: UserWhereUniqueInput!): User
  deleteClientContact(where: ClientContactWhereUniqueInput!): ClientContact
  deletePlace(where: PlaceWhereUniqueInput!): Place
  deleteBudget(where: BudgetWhereUniqueInput!): Budget
  deleteBudgetLine(where: BudgetLineWhereUniqueInput!): BudgetLine
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteEmployee(where: EmployeeWhereUniqueInput!): Employee
  deleteEmployeeEstimation(where: EmployeeEstimationWhereUniqueInput!): EmployeeEstimation
  deleteEventStuff(where: EventStuffWhereUniqueInput!): EventStuff
  deleteEventType(where: EventTypeWhereUniqueInput!): EventType
  deleteInvoice(where: InvoiceWhereUniqueInput!): Invoice
  deleteJob(where: JobWhereUniqueInput!): Job
  deletePlaceContact(where: PlaceContactWhereUniqueInput!): PlaceContact
  deleteStuff(where: StuffWhereUniqueInput!): Stuff
  deleteTax(where: TaxWhereUniqueInput!): Tax
  deleteVehicle(where: VehicleWhereUniqueInput!): Vehicle
  deleteItemProposal(where: ItemProposalWhereUniqueInput!): ItemProposal
  deleteMenu(where: MenuWhereUniqueInput!): Menu
  deleteSection(where: SectionWhereUniqueInput!): Section
  deleteSectionItem(where: SectionItemWhereUniqueInput!): SectionItem
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteItem(where: ItemWhereUniqueInput!): Item
  upsertClient(where: ClientWhereUniqueInput!, create: ClientCreateInput!, update: ClientUpdateInput!): Client!
  upsertCommunication(where: CommunicationWhereUniqueInput!, create: CommunicationCreateInput!, update: CommunicationUpdateInput!): Communication!
  upsertOffer(where: OfferWhereUniqueInput!, create: OfferCreateInput!, update: OfferUpdateInput!): Offer!
  upsertItemTranslation(where: ItemTranslationWhereUniqueInput!, create: ItemTranslationCreateInput!, update: ItemTranslationUpdateInput!): ItemTranslation!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertClientContact(where: ClientContactWhereUniqueInput!, create: ClientContactCreateInput!, update: ClientContactUpdateInput!): ClientContact!
  upsertPlace(where: PlaceWhereUniqueInput!, create: PlaceCreateInput!, update: PlaceUpdateInput!): Place!
  upsertBudget(where: BudgetWhereUniqueInput!, create: BudgetCreateInput!, update: BudgetUpdateInput!): Budget!
  upsertBudgetLine(where: BudgetLineWhereUniqueInput!, create: BudgetLineCreateInput!, update: BudgetLineUpdateInput!): BudgetLine!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  upsertEmployee(where: EmployeeWhereUniqueInput!, create: EmployeeCreateInput!, update: EmployeeUpdateInput!): Employee!
  upsertEmployeeEstimation(where: EmployeeEstimationWhereUniqueInput!, create: EmployeeEstimationCreateInput!, update: EmployeeEstimationUpdateInput!): EmployeeEstimation!
  upsertEventStuff(where: EventStuffWhereUniqueInput!, create: EventStuffCreateInput!, update: EventStuffUpdateInput!): EventStuff!
  upsertEventType(where: EventTypeWhereUniqueInput!, create: EventTypeCreateInput!, update: EventTypeUpdateInput!): EventType!
  upsertInvoice(where: InvoiceWhereUniqueInput!, create: InvoiceCreateInput!, update: InvoiceUpdateInput!): Invoice!
  upsertJob(where: JobWhereUniqueInput!, create: JobCreateInput!, update: JobUpdateInput!): Job!
  upsertPlaceContact(where: PlaceContactWhereUniqueInput!, create: PlaceContactCreateInput!, update: PlaceContactUpdateInput!): PlaceContact!
  upsertStuff(where: StuffWhereUniqueInput!, create: StuffCreateInput!, update: StuffUpdateInput!): Stuff!
  upsertTax(where: TaxWhereUniqueInput!, create: TaxCreateInput!, update: TaxUpdateInput!): Tax!
  upsertVehicle(where: VehicleWhereUniqueInput!, create: VehicleCreateInput!, update: VehicleUpdateInput!): Vehicle!
  upsertItemProposal(where: ItemProposalWhereUniqueInput!, create: ItemProposalCreateInput!, update: ItemProposalUpdateInput!): ItemProposal!
  upsertMenu(where: MenuWhereUniqueInput!, create: MenuCreateInput!, update: MenuUpdateInput!): Menu!
  upsertSection(where: SectionWhereUniqueInput!, create: SectionCreateInput!, update: SectionUpdateInput!): Section!
  upsertSectionItem(where: SectionItemWhereUniqueInput!, create: SectionItemCreateInput!, update: SectionItemUpdateInput!): SectionItem!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  updateManyClients(data: ClientUpdateInput!, where: ClientWhereInput): BatchPayload!
  updateManyCommunications(data: CommunicationUpdateInput!, where: CommunicationWhereInput): BatchPayload!
  updateManyOffers(data: OfferUpdateInput!, where: OfferWhereInput): BatchPayload!
  updateManyItemTranslations(data: ItemTranslationUpdateInput!, where: ItemTranslationWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyClientContacts(data: ClientContactUpdateInput!, where: ClientContactWhereInput): BatchPayload!
  updateManyPlaces(data: PlaceUpdateInput!, where: PlaceWhereInput): BatchPayload!
  updateManyBudgets(data: BudgetUpdateInput!, where: BudgetWhereInput): BatchPayload!
  updateManyBudgetLines(data: BudgetLineUpdateInput!, where: BudgetLineWhereInput): BatchPayload!
  updateManyCategories(data: CategoryUpdateInput!, where: CategoryWhereInput): BatchPayload!
  updateManyEmployees(data: EmployeeUpdateInput!, where: EmployeeWhereInput): BatchPayload!
  updateManyEmployeeEstimations(data: EmployeeEstimationUpdateInput!, where: EmployeeEstimationWhereInput): BatchPayload!
  updateManyEventStuffs(data: EventStuffUpdateInput!, where: EventStuffWhereInput): BatchPayload!
  updateManyEventTypes(data: EventTypeUpdateInput!, where: EventTypeWhereInput): BatchPayload!
  updateManyInvoices(data: InvoiceUpdateInput!, where: InvoiceWhereInput): BatchPayload!
  updateManyJobs(data: JobUpdateInput!, where: JobWhereInput): BatchPayload!
  updateManyPlaceContacts(data: PlaceContactUpdateInput!, where: PlaceContactWhereInput): BatchPayload!
  updateManyStuffs(data: StuffUpdateInput!, where: StuffWhereInput): BatchPayload!
  updateManyTaxes(data: TaxUpdateInput!, where: TaxWhereInput): BatchPayload!
  updateManyVehicles(data: VehicleUpdateInput!, where: VehicleWhereInput): BatchPayload!
  updateManyItemProposals(data: ItemProposalUpdateInput!, where: ItemProposalWhereInput): BatchPayload!
  updateManyMenus(data: MenuUpdateInput!, where: MenuWhereInput): BatchPayload!
  updateManySections(data: SectionUpdateInput!, where: SectionWhereInput): BatchPayload!
  updateManySectionItems(data: SectionItemUpdateInput!, where: SectionItemWhereInput): BatchPayload!
  updateManyEvents(data: EventUpdateInput!, where: EventWhereInput): BatchPayload!
  updateManyItems(data: ItemUpdateInput!, where: ItemWhereInput): BatchPayload!
  deleteManyClients(where: ClientWhereInput): BatchPayload!
  deleteManyCommunications(where: CommunicationWhereInput): BatchPayload!
  deleteManyOffers(where: OfferWhereInput): BatchPayload!
  deleteManyItemTranslations(where: ItemTranslationWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyClientContacts(where: ClientContactWhereInput): BatchPayload!
  deleteManyPlaces(where: PlaceWhereInput): BatchPayload!
  deleteManyBudgets(where: BudgetWhereInput): BatchPayload!
  deleteManyBudgetLines(where: BudgetLineWhereInput): BatchPayload!
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  deleteManyEmployees(where: EmployeeWhereInput): BatchPayload!
  deleteManyEmployeeEstimations(where: EmployeeEstimationWhereInput): BatchPayload!
  deleteManyEventStuffs(where: EventStuffWhereInput): BatchPayload!
  deleteManyEventTypes(where: EventTypeWhereInput): BatchPayload!
  deleteManyInvoices(where: InvoiceWhereInput): BatchPayload!
  deleteManyJobs(where: JobWhereInput): BatchPayload!
  deleteManyPlaceContacts(where: PlaceContactWhereInput): BatchPayload!
  deleteManyStuffs(where: StuffWhereInput): BatchPayload!
  deleteManyTaxes(where: TaxWhereInput): BatchPayload!
  deleteManyVehicles(where: VehicleWhereInput): BatchPayload!
  deleteManyItemProposals(where: ItemProposalWhereInput): BatchPayload!
  deleteManyMenus(where: MenuWhereInput): BatchPayload!
  deleteManySections(where: SectionWhereInput): BatchPayload!
  deleteManySectionItems(where: SectionItemWhereInput): BatchPayload!
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  deleteManyItems(where: ItemWhereInput): BatchPayload!
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
  client(where: ClientWhereInput): Client
  createdAt: DateTime!
  customMessage: String
  event(where: EventWhereInput): Event
  id: ID!
  status: StatusOffer!
  language: LanguageEnum
  address: String!
  budgetLines(where: BudgetLineWhereInput, orderBy: BudgetLineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BudgetLine!]
  city: String!
  clientContact(where: ClientContactWhereInput): ClientContact
  communications(where: CommunicationWhereInput, orderBy: CommunicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Communication!]
  employeeEstimations(where: EmployeeEstimationWhereInput, orderBy: EmployeeEstimationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EmployeeEstimation!]
  endTime: DateTime
  eventType(where: EventTypeWhereInput): EventType
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  place(where: PlaceWhereInput): Place
  postalCode: String!
  rev: String
  sectionItems(where: SectionItemWhereInput, orderBy: SectionItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SectionItem!]
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  menus(where: MenuWhereInput, orderBy: MenuOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Menu!]
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
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  client: ClientCreateOneWithoutOffersInput
  event: EventCreateOneWithoutOfferInput
  budgetLines: BudgetLineCreateManyWithoutOfferInput
  clientContact: ClientContactCreateOneWithoutOffersInput
  communications: CommunicationCreateManyWithoutOfferInput
  employeeEstimations: EmployeeEstimationCreateManyWithoutOfferInput
  eventType: EventTypeCreateOneWithoutOffersInput
  place: PlaceCreateOneWithoutOfferInput
  sectionItems: SectionItemCreateManyWithoutOfferInput
  menus: MenuCreateManyWithoutOfferInput
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

input OfferCreateOneWithoutBudgetLinesInput {
  create: OfferCreateWithoutBudgetLinesInput
  connect: OfferWhereUniqueInput
}

input OfferCreateOneWithoutCommunicationsInput {
  create: OfferCreateWithoutCommunicationsInput
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

input OfferCreateOneWithoutMenusInput {
  create: OfferCreateWithoutMenusInput
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
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  client: ClientCreateOneWithoutOffersInput
  event: EventCreateOneWithoutOfferInput
  clientContact: ClientContactCreateOneWithoutOffersInput
  communications: CommunicationCreateManyWithoutOfferInput
  employeeEstimations: EmployeeEstimationCreateManyWithoutOfferInput
  eventType: EventTypeCreateOneWithoutOffersInput
  place: PlaceCreateOneWithoutOfferInput
  sectionItems: SectionItemCreateManyWithoutOfferInput
  menus: MenuCreateManyWithoutOfferInput
}

input OfferCreateWithoutClientContactInput {
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  client: ClientCreateOneWithoutOffersInput
  event: EventCreateOneWithoutOfferInput
  budgetLines: BudgetLineCreateManyWithoutOfferInput
  communications: CommunicationCreateManyWithoutOfferInput
  employeeEstimations: EmployeeEstimationCreateManyWithoutOfferInput
  eventType: EventTypeCreateOneWithoutOffersInput
  place: PlaceCreateOneWithoutOfferInput
  sectionItems: SectionItemCreateManyWithoutOfferInput
  menus: MenuCreateManyWithoutOfferInput
}

input OfferCreateWithoutClientInput {
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  event: EventCreateOneWithoutOfferInput
  budgetLines: BudgetLineCreateManyWithoutOfferInput
  clientContact: ClientContactCreateOneWithoutOffersInput
  communications: CommunicationCreateManyWithoutOfferInput
  employeeEstimations: EmployeeEstimationCreateManyWithoutOfferInput
  eventType: EventTypeCreateOneWithoutOffersInput
  place: PlaceCreateOneWithoutOfferInput
  sectionItems: SectionItemCreateManyWithoutOfferInput
  menus: MenuCreateManyWithoutOfferInput
}

input OfferCreateWithoutCommunicationsInput {
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  client: ClientCreateOneWithoutOffersInput
  event: EventCreateOneWithoutOfferInput
  budgetLines: BudgetLineCreateManyWithoutOfferInput
  clientContact: ClientContactCreateOneWithoutOffersInput
  employeeEstimations: EmployeeEstimationCreateManyWithoutOfferInput
  eventType: EventTypeCreateOneWithoutOffersInput
  place: PlaceCreateOneWithoutOfferInput
  sectionItems: SectionItemCreateManyWithoutOfferInput
  menus: MenuCreateManyWithoutOfferInput
}

input OfferCreateWithoutEmployeeEstimationsInput {
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  client: ClientCreateOneWithoutOffersInput
  event: EventCreateOneWithoutOfferInput
  budgetLines: BudgetLineCreateManyWithoutOfferInput
  clientContact: ClientContactCreateOneWithoutOffersInput
  communications: CommunicationCreateManyWithoutOfferInput
  eventType: EventTypeCreateOneWithoutOffersInput
  place: PlaceCreateOneWithoutOfferInput
  sectionItems: SectionItemCreateManyWithoutOfferInput
  menus: MenuCreateManyWithoutOfferInput
}

input OfferCreateWithoutEventInput {
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  client: ClientCreateOneWithoutOffersInput
  budgetLines: BudgetLineCreateManyWithoutOfferInput
  clientContact: ClientContactCreateOneWithoutOffersInput
  communications: CommunicationCreateManyWithoutOfferInput
  employeeEstimations: EmployeeEstimationCreateManyWithoutOfferInput
  eventType: EventTypeCreateOneWithoutOffersInput
  place: PlaceCreateOneWithoutOfferInput
  sectionItems: SectionItemCreateManyWithoutOfferInput
  menus: MenuCreateManyWithoutOfferInput
}

input OfferCreateWithoutEventTypeInput {
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  client: ClientCreateOneWithoutOffersInput
  event: EventCreateOneWithoutOfferInput
  budgetLines: BudgetLineCreateManyWithoutOfferInput
  clientContact: ClientContactCreateOneWithoutOffersInput
  communications: CommunicationCreateManyWithoutOfferInput
  employeeEstimations: EmployeeEstimationCreateManyWithoutOfferInput
  place: PlaceCreateOneWithoutOfferInput
  sectionItems: SectionItemCreateManyWithoutOfferInput
  menus: MenuCreateManyWithoutOfferInput
}

input OfferCreateWithoutMenusInput {
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  client: ClientCreateOneWithoutOffersInput
  event: EventCreateOneWithoutOfferInput
  budgetLines: BudgetLineCreateManyWithoutOfferInput
  clientContact: ClientContactCreateOneWithoutOffersInput
  communications: CommunicationCreateManyWithoutOfferInput
  employeeEstimations: EmployeeEstimationCreateManyWithoutOfferInput
  eventType: EventTypeCreateOneWithoutOffersInput
  place: PlaceCreateOneWithoutOfferInput
  sectionItems: SectionItemCreateManyWithoutOfferInput
}

input OfferCreateWithoutPlaceInput {
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  client: ClientCreateOneWithoutOffersInput
  event: EventCreateOneWithoutOfferInput
  budgetLines: BudgetLineCreateManyWithoutOfferInput
  clientContact: ClientContactCreateOneWithoutOffersInput
  communications: CommunicationCreateManyWithoutOfferInput
  employeeEstimations: EmployeeEstimationCreateManyWithoutOfferInput
  eventType: EventTypeCreateOneWithoutOffersInput
  sectionItems: SectionItemCreateManyWithoutOfferInput
  menus: MenuCreateManyWithoutOfferInput
}

input OfferCreateWithoutSectionItemsInput {
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  client: ClientCreateOneWithoutOffersInput
  event: EventCreateOneWithoutOfferInput
  budgetLines: BudgetLineCreateManyWithoutOfferInput
  clientContact: ClientContactCreateOneWithoutOffersInput
  communications: CommunicationCreateManyWithoutOfferInput
  employeeEstimations: EmployeeEstimationCreateManyWithoutOfferInput
  eventType: EventTypeCreateOneWithoutOffersInput
  place: PlaceCreateOneWithoutOfferInput
  menus: MenuCreateManyWithoutOfferInput
}

"""An edge in a connection."""
type OfferEdge {
  """The item at the end of the edge."""
  node: Offer!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OfferOrderByInput {
  createdAt_ASC
  createdAt_DESC
  customMessage_ASC
  customMessage_DESC
  id_ASC
  id_DESC
  status_ASC
  status_DESC
  language_ASC
  language_DESC
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
  rev_ASC
  rev_DESC
  showTotalBudgetsPdf_ASC
  showTotalBudgetsPdf_DESC
  startTime_ASC
  startTime_DESC
  version_ASC
  version_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OfferPreviousValues {
  createdAt: DateTime!
  customMessage: String
  id: ID!
  status: StatusOffer!
  language: LanguageEnum
  address: String!
  city: String!
  endTime: DateTime
  gmtOffset: String!
  maxPersons: Int
  minPersons: Int
  name: String!
  postalCode: String!
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
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
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String
  city: String
  endTime: DateTime
  gmtOffset: String
  maxPersons: Int
  minPersons: Int
  name: String
  postalCode: String
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  client: ClientUpdateOneWithoutOffersInput
  event: EventUpdateOneWithoutOfferInput
  budgetLines: BudgetLineUpdateManyWithoutOfferInput
  clientContact: ClientContactUpdateOneWithoutOffersInput
  communications: CommunicationUpdateManyWithoutOfferInput
  employeeEstimations: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType: EventTypeUpdateOneWithoutOffersInput
  place: PlaceUpdateOneWithoutOfferInput
  sectionItems: SectionItemUpdateManyWithoutOfferInput
  menus: MenuUpdateManyWithoutOfferInput
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

input OfferUpdateOneWithoutBudgetLinesInput {
  create: OfferCreateWithoutBudgetLinesInput
  connect: OfferWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: OfferUpdateWithoutBudgetLinesDataInput
  upsert: OfferUpsertWithoutBudgetLinesInput
}

input OfferUpdateOneWithoutCommunicationsInput {
  create: OfferCreateWithoutCommunicationsInput
  connect: OfferWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: OfferUpdateWithoutCommunicationsDataInput
  upsert: OfferUpsertWithoutCommunicationsInput
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

input OfferUpdateOneWithoutMenusInput {
  create: OfferCreateWithoutMenusInput
  connect: OfferWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: OfferUpdateWithoutMenusDataInput
  upsert: OfferUpsertWithoutMenusInput
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
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String
  city: String
  endTime: DateTime
  gmtOffset: String
  maxPersons: Int
  minPersons: Int
  name: String
  postalCode: String
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  client: ClientUpdateOneWithoutOffersInput
  event: EventUpdateOneWithoutOfferInput
  clientContact: ClientContactUpdateOneWithoutOffersInput
  communications: CommunicationUpdateManyWithoutOfferInput
  employeeEstimations: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType: EventTypeUpdateOneWithoutOffersInput
  place: PlaceUpdateOneWithoutOfferInput
  sectionItems: SectionItemUpdateManyWithoutOfferInput
  menus: MenuUpdateManyWithoutOfferInput
}

input OfferUpdateWithoutClientContactDataInput {
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String
  city: String
  endTime: DateTime
  gmtOffset: String
  maxPersons: Int
  minPersons: Int
  name: String
  postalCode: String
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  client: ClientUpdateOneWithoutOffersInput
  event: EventUpdateOneWithoutOfferInput
  budgetLines: BudgetLineUpdateManyWithoutOfferInput
  communications: CommunicationUpdateManyWithoutOfferInput
  employeeEstimations: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType: EventTypeUpdateOneWithoutOffersInput
  place: PlaceUpdateOneWithoutOfferInput
  sectionItems: SectionItemUpdateManyWithoutOfferInput
  menus: MenuUpdateManyWithoutOfferInput
}

input OfferUpdateWithoutClientDataInput {
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String
  city: String
  endTime: DateTime
  gmtOffset: String
  maxPersons: Int
  minPersons: Int
  name: String
  postalCode: String
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  event: EventUpdateOneWithoutOfferInput
  budgetLines: BudgetLineUpdateManyWithoutOfferInput
  clientContact: ClientContactUpdateOneWithoutOffersInput
  communications: CommunicationUpdateManyWithoutOfferInput
  employeeEstimations: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType: EventTypeUpdateOneWithoutOffersInput
  place: PlaceUpdateOneWithoutOfferInput
  sectionItems: SectionItemUpdateManyWithoutOfferInput
  menus: MenuUpdateManyWithoutOfferInput
}

input OfferUpdateWithoutCommunicationsDataInput {
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String
  city: String
  endTime: DateTime
  gmtOffset: String
  maxPersons: Int
  minPersons: Int
  name: String
  postalCode: String
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  client: ClientUpdateOneWithoutOffersInput
  event: EventUpdateOneWithoutOfferInput
  budgetLines: BudgetLineUpdateManyWithoutOfferInput
  clientContact: ClientContactUpdateOneWithoutOffersInput
  employeeEstimations: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType: EventTypeUpdateOneWithoutOffersInput
  place: PlaceUpdateOneWithoutOfferInput
  sectionItems: SectionItemUpdateManyWithoutOfferInput
  menus: MenuUpdateManyWithoutOfferInput
}

input OfferUpdateWithoutEmployeeEstimationsDataInput {
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String
  city: String
  endTime: DateTime
  gmtOffset: String
  maxPersons: Int
  minPersons: Int
  name: String
  postalCode: String
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  client: ClientUpdateOneWithoutOffersInput
  event: EventUpdateOneWithoutOfferInput
  budgetLines: BudgetLineUpdateManyWithoutOfferInput
  clientContact: ClientContactUpdateOneWithoutOffersInput
  communications: CommunicationUpdateManyWithoutOfferInput
  eventType: EventTypeUpdateOneWithoutOffersInput
  place: PlaceUpdateOneWithoutOfferInput
  sectionItems: SectionItemUpdateManyWithoutOfferInput
  menus: MenuUpdateManyWithoutOfferInput
}

input OfferUpdateWithoutEventDataInput {
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String
  city: String
  endTime: DateTime
  gmtOffset: String
  maxPersons: Int
  minPersons: Int
  name: String
  postalCode: String
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  client: ClientUpdateOneWithoutOffersInput
  budgetLines: BudgetLineUpdateManyWithoutOfferInput
  clientContact: ClientContactUpdateOneWithoutOffersInput
  communications: CommunicationUpdateManyWithoutOfferInput
  employeeEstimations: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType: EventTypeUpdateOneWithoutOffersInput
  place: PlaceUpdateOneWithoutOfferInput
  sectionItems: SectionItemUpdateManyWithoutOfferInput
  menus: MenuUpdateManyWithoutOfferInput
}

input OfferUpdateWithoutEventTypeDataInput {
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String
  city: String
  endTime: DateTime
  gmtOffset: String
  maxPersons: Int
  minPersons: Int
  name: String
  postalCode: String
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  client: ClientUpdateOneWithoutOffersInput
  event: EventUpdateOneWithoutOfferInput
  budgetLines: BudgetLineUpdateManyWithoutOfferInput
  clientContact: ClientContactUpdateOneWithoutOffersInput
  communications: CommunicationUpdateManyWithoutOfferInput
  employeeEstimations: EmployeeEstimationUpdateManyWithoutOfferInput
  place: PlaceUpdateOneWithoutOfferInput
  sectionItems: SectionItemUpdateManyWithoutOfferInput
  menus: MenuUpdateManyWithoutOfferInput
}

input OfferUpdateWithoutMenusDataInput {
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String
  city: String
  endTime: DateTime
  gmtOffset: String
  maxPersons: Int
  minPersons: Int
  name: String
  postalCode: String
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  client: ClientUpdateOneWithoutOffersInput
  event: EventUpdateOneWithoutOfferInput
  budgetLines: BudgetLineUpdateManyWithoutOfferInput
  clientContact: ClientContactUpdateOneWithoutOffersInput
  communications: CommunicationUpdateManyWithoutOfferInput
  employeeEstimations: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType: EventTypeUpdateOneWithoutOffersInput
  place: PlaceUpdateOneWithoutOfferInput
  sectionItems: SectionItemUpdateManyWithoutOfferInput
}

input OfferUpdateWithoutPlaceDataInput {
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String
  city: String
  endTime: DateTime
  gmtOffset: String
  maxPersons: Int
  minPersons: Int
  name: String
  postalCode: String
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  client: ClientUpdateOneWithoutOffersInput
  event: EventUpdateOneWithoutOfferInput
  budgetLines: BudgetLineUpdateManyWithoutOfferInput
  clientContact: ClientContactUpdateOneWithoutOffersInput
  communications: CommunicationUpdateManyWithoutOfferInput
  employeeEstimations: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType: EventTypeUpdateOneWithoutOffersInput
  sectionItems: SectionItemUpdateManyWithoutOfferInput
  menus: MenuUpdateManyWithoutOfferInput
}

input OfferUpdateWithoutSectionItemsDataInput {
  customMessage: String
  status: StatusOffer
  language: LanguageEnum
  address: String
  city: String
  endTime: DateTime
  gmtOffset: String
  maxPersons: Int
  minPersons: Int
  name: String
  postalCode: String
  rev: String
  showTotalBudgetsPdf: Boolean
  startTime: DateTime
  version: Int
  client: ClientUpdateOneWithoutOffersInput
  event: EventUpdateOneWithoutOfferInput
  budgetLines: BudgetLineUpdateManyWithoutOfferInput
  clientContact: ClientContactUpdateOneWithoutOffersInput
  communications: CommunicationUpdateManyWithoutOfferInput
  employeeEstimations: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType: EventTypeUpdateOneWithoutOffersInput
  place: PlaceUpdateOneWithoutOfferInput
  menus: MenuUpdateManyWithoutOfferInput
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

input OfferUpsertWithoutBudgetLinesInput {
  update: OfferUpdateWithoutBudgetLinesDataInput!
  create: OfferCreateWithoutBudgetLinesInput!
}

input OfferUpsertWithoutCommunicationsInput {
  update: OfferUpdateWithoutCommunicationsDataInput!
  create: OfferCreateWithoutCommunicationsInput!
}

input OfferUpsertWithoutEmployeeEstimationsInput {
  update: OfferUpdateWithoutEmployeeEstimationsDataInput!
  create: OfferCreateWithoutEmployeeEstimationsInput!
}

input OfferUpsertWithoutEventInput {
  update: OfferUpdateWithoutEventDataInput!
  create: OfferCreateWithoutEventInput!
}

input OfferUpsertWithoutMenusInput {
  update: OfferUpdateWithoutMenusDataInput!
  create: OfferCreateWithoutMenusInput!
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

input OfferWhereInput {
  """Logical AND on all given filters."""
  AND: [OfferWhereInput!]

  """Logical OR on all given filters."""
  OR: [OfferWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OfferWhereInput!]
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
  language: LanguageEnum

  """All values that are not equal to given value."""
  language_not: LanguageEnum

  """All values that are contained in given list."""
  language_in: [LanguageEnum!]

  """All values that are not contained in given list."""
  language_not_in: [LanguageEnum!]
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
  rev: String

  """All values that are not equal to given value."""
  rev_not: String

  """All values that are contained in given list."""
  rev_in: [String!]

  """All values that are not contained in given list."""
  rev_not_in: [String!]

  """All values less than the given value."""
  rev_lt: String

  """All values less than or equal the given value."""
  rev_lte: String

  """All values greater than the given value."""
  rev_gt: String

  """All values greater than or equal the given value."""
  rev_gte: String

  """All values containing the given string."""
  rev_contains: String

  """All values not containing the given string."""
  rev_not_contains: String

  """All values starting with the given string."""
  rev_starts_with: String

  """All values not starting with the given string."""
  rev_not_starts_with: String

  """All values ending with the given string."""
  rev_ends_with: String

  """All values not ending with the given string."""
  rev_not_ends_with: String
  showTotalBudgetsPdf: Boolean

  """All values that are not equal to given value."""
  showTotalBudgetsPdf_not: Boolean
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
  client: ClientWhereInput
  event: EventWhereInput
  budgetLines_every: BudgetLineWhereInput
  budgetLines_some: BudgetLineWhereInput
  budgetLines_none: BudgetLineWhereInput
  clientContact: ClientContactWhereInput
  communications_every: CommunicationWhereInput
  communications_some: CommunicationWhereInput
  communications_none: CommunicationWhereInput
  employeeEstimations_every: EmployeeEstimationWhereInput
  employeeEstimations_some: EmployeeEstimationWhereInput
  employeeEstimations_none: EmployeeEstimationWhereInput
  eventType: EventTypeWhereInput
  place: PlaceWhereInput
  sectionItems_every: SectionItemWhereInput
  sectionItems_some: SectionItemWhereInput
  sectionItems_none: SectionItemWhereInput
  menus_every: MenuWhereInput
  menus_some: MenuWhereInput
  menus_none: MenuWhereInput
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
  offers(where: OfferWhereInput, orderBy: OfferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Offer]!
  itemTranslations(where: ItemTranslationWhereInput, orderBy: ItemTranslationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ItemTranslation]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  clientContacts(where: ClientContactWhereInput, orderBy: ClientContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClientContact]!
  places(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place]!
  budgets(where: BudgetWhereInput, orderBy: BudgetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Budget]!
  budgetLines(where: BudgetLineWhereInput, orderBy: BudgetLineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BudgetLine]!
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  employees(where: EmployeeWhereInput, orderBy: EmployeeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Employee]!
  employeeEstimations(where: EmployeeEstimationWhereInput, orderBy: EmployeeEstimationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EmployeeEstimation]!
  eventStuffs(where: EventStuffWhereInput, orderBy: EventStuffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EventStuff]!
  eventTypes(where: EventTypeWhereInput, orderBy: EventTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EventType]!
  invoices(where: InvoiceWhereInput, orderBy: InvoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invoice]!
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job]!
  placeContacts(where: PlaceContactWhereInput, orderBy: PlaceContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PlaceContact]!
  stuffs(where: StuffWhereInput, orderBy: StuffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stuff]!
  taxes(where: TaxWhereInput, orderBy: TaxOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tax]!
  vehicles(where: VehicleWhereInput, orderBy: VehicleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vehicle]!
  itemProposals(where: ItemProposalWhereInput, orderBy: ItemProposalOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ItemProposal]!
  menus(where: MenuWhereInput, orderBy: MenuOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Menu]!
  sections(where: SectionWhereInput, orderBy: SectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Section]!
  sectionItems(where: SectionItemWhereInput, orderBy: SectionItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SectionItem]!
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  client(where: ClientWhereUniqueInput!): Client
  communication(where: CommunicationWhereUniqueInput!): Communication
  offer(where: OfferWhereUniqueInput!): Offer
  itemTranslation(where: ItemTranslationWhereUniqueInput!): ItemTranslation
  user(where: UserWhereUniqueInput!): User
  clientContact(where: ClientContactWhereUniqueInput!): ClientContact
  place(where: PlaceWhereUniqueInput!): Place
  budget(where: BudgetWhereUniqueInput!): Budget
  budgetLine(where: BudgetLineWhereUniqueInput!): BudgetLine
  category(where: CategoryWhereUniqueInput!): Category
  employee(where: EmployeeWhereUniqueInput!): Employee
  employeeEstimation(where: EmployeeEstimationWhereUniqueInput!): EmployeeEstimation
  eventStuff(where: EventStuffWhereUniqueInput!): EventStuff
  eventType(where: EventTypeWhereUniqueInput!): EventType
  invoice(where: InvoiceWhereUniqueInput!): Invoice
  job(where: JobWhereUniqueInput!): Job
  placeContact(where: PlaceContactWhereUniqueInput!): PlaceContact
  stuff(where: StuffWhereUniqueInput!): Stuff
  tax(where: TaxWhereUniqueInput!): Tax
  vehicle(where: VehicleWhereUniqueInput!): Vehicle
  itemProposal(where: ItemProposalWhereUniqueInput!): ItemProposal
  menu(where: MenuWhereUniqueInput!): Menu
  section(where: SectionWhereUniqueInput!): Section
  sectionItem(where: SectionItemWhereUniqueInput!): SectionItem
  event(where: EventWhereUniqueInput!): Event
  item(where: ItemWhereUniqueInput!): Item
  clientsConnection(where: ClientWhereInput, orderBy: ClientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClientConnection!
  communicationsConnection(where: CommunicationWhereInput, orderBy: CommunicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommunicationConnection!
  offersConnection(where: OfferWhereInput, orderBy: OfferOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OfferConnection!
  itemTranslationsConnection(where: ItemTranslationWhereInput, orderBy: ItemTranslationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemTranslationConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  clientContactsConnection(where: ClientContactWhereInput, orderBy: ClientContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClientContactConnection!
  placesConnection(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlaceConnection!
  budgetsConnection(where: BudgetWhereInput, orderBy: BudgetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BudgetConnection!
  budgetLinesConnection(where: BudgetLineWhereInput, orderBy: BudgetLineOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BudgetLineConnection!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  employeesConnection(where: EmployeeWhereInput, orderBy: EmployeeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EmployeeConnection!
  employeeEstimationsConnection(where: EmployeeEstimationWhereInput, orderBy: EmployeeEstimationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EmployeeEstimationConnection!
  eventStuffsConnection(where: EventStuffWhereInput, orderBy: EventStuffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventStuffConnection!
  eventTypesConnection(where: EventTypeWhereInput, orderBy: EventTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventTypeConnection!
  invoicesConnection(where: InvoiceWhereInput, orderBy: InvoiceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InvoiceConnection!
  jobsConnection(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JobConnection!
  placeContactsConnection(where: PlaceContactWhereInput, orderBy: PlaceContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlaceContactConnection!
  stuffsConnection(where: StuffWhereInput, orderBy: StuffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StuffConnection!
  taxesConnection(where: TaxWhereInput, orderBy: TaxOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TaxConnection!
  vehiclesConnection(where: VehicleWhereInput, orderBy: VehicleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VehicleConnection!
  itemProposalsConnection(where: ItemProposalWhereInput, orderBy: ItemProposalOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemProposalConnection!
  menusConnection(where: MenuWhereInput, orderBy: MenuOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MenuConnection!
  sectionsConnection(where: SectionWhereInput, orderBy: SectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SectionConnection!
  sectionItemsConnection(where: SectionItemWhereInput, orderBy: SectionItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SectionItemConnection!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!

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

type Section implements Node {
  id: ID!
  itemProposals(where: ItemProposalWhereInput, orderBy: ItemProposalOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ItemProposal!]
  menu(where: MenuWhereInput): Menu
  name: String
  showPdf: Boolean
}

"""A connection to a list of items."""
type SectionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SectionEdge]!
  aggregate: AggregateSection!
}

input SectionCreateInput {
  name: String
  showPdf: Boolean
  itemProposals: ItemProposalCreateManyWithoutSectionInput
  menu: MenuCreateOneWithoutSectionsInput
}

input SectionCreateManyWithoutMenuInput {
  create: [SectionCreateWithoutMenuInput!]
  connect: [SectionWhereUniqueInput!]
}

input SectionCreateOneWithoutItemProposalsInput {
  create: SectionCreateWithoutItemProposalsInput
  connect: SectionWhereUniqueInput
}

input SectionCreateWithoutItemProposalsInput {
  name: String
  showPdf: Boolean
  menu: MenuCreateOneWithoutSectionsInput
}

input SectionCreateWithoutMenuInput {
  name: String
  showPdf: Boolean
  itemProposals: ItemProposalCreateManyWithoutSectionInput
}

"""An edge in a connection."""
type SectionEdge {
  """The item at the end of the edge."""
  node: Section!

  """A cursor for use in pagination."""
  cursor: String!
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
  static: Boolean
  type: SectionTypes!
  w: Int!
  x: Int!
  y: Int!
  menu(where: MenuWhereInput): Menu
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
  static: Boolean
  type: SectionTypes
  w: Int!
  x: Int!
  y: Int
  offer: OfferCreateOneWithoutSectionItemsInput
  menu: MenuCreateOneWithoutSectionItemInput
}

input SectionItemCreateManyInput {
  create: [SectionItemCreateInput!]
  connect: [SectionItemWhereUniqueInput!]
}

input SectionItemCreateManyWithoutOfferInput {
  create: [SectionItemCreateWithoutOfferInput!]
  connect: [SectionItemWhereUniqueInput!]
}

input SectionItemCreateOneWithoutMenuInput {
  create: SectionItemCreateWithoutMenuInput
  connect: SectionItemWhereUniqueInput
}

input SectionItemCreateWithoutMenuInput {
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
  static: Boolean
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
  static: Boolean
  type: SectionTypes
  w: Int!
  x: Int!
  y: Int
  menu: MenuCreateOneWithoutSectionItemInput
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
  static_ASC
  static_DESC
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
  static: Boolean
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

input SectionItemUpdateDataInput {
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
  static: Boolean
  type: SectionTypes
  w: Int
  x: Int
  y: Int
  offer: OfferUpdateOneWithoutSectionItemsInput
  menu: MenuUpdateOneWithoutSectionItemInput
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
  static: Boolean
  type: SectionTypes
  w: Int
  x: Int
  y: Int
  offer: OfferUpdateOneWithoutSectionItemsInput
  menu: MenuUpdateOneWithoutSectionItemInput
}

input SectionItemUpdateManyInput {
  create: [SectionItemCreateInput!]
  connect: [SectionItemWhereUniqueInput!]
  disconnect: [SectionItemWhereUniqueInput!]
  delete: [SectionItemWhereUniqueInput!]
  update: [SectionItemUpdateWithWhereUniqueNestedInput!]
  upsert: [SectionItemUpsertWithWhereUniqueNestedInput!]
}

input SectionItemUpdateManyWithoutOfferInput {
  create: [SectionItemCreateWithoutOfferInput!]
  connect: [SectionItemWhereUniqueInput!]
  disconnect: [SectionItemWhereUniqueInput!]
  delete: [SectionItemWhereUniqueInput!]
  update: [SectionItemUpdateWithWhereUniqueWithoutOfferInput!]
  upsert: [SectionItemUpsertWithWhereUniqueWithoutOfferInput!]
}

input SectionItemUpdateOneWithoutMenuInput {
  create: SectionItemCreateWithoutMenuInput
  connect: SectionItemWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: SectionItemUpdateWithoutMenuDataInput
  upsert: SectionItemUpsertWithoutMenuInput
}

input SectionItemUpdateWithoutMenuDataInput {
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
  static: Boolean
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
  static: Boolean
  type: SectionTypes
  w: Int
  x: Int
  y: Int
  menu: MenuUpdateOneWithoutSectionItemInput
}

input SectionItemUpdateWithWhereUniqueNestedInput {
  where: SectionItemWhereUniqueInput!
  data: SectionItemUpdateDataInput!
}

input SectionItemUpdateWithWhereUniqueWithoutOfferInput {
  where: SectionItemWhereUniqueInput!
  data: SectionItemUpdateWithoutOfferDataInput!
}

input SectionItemUpsertWithoutMenuInput {
  update: SectionItemUpdateWithoutMenuDataInput!
  create: SectionItemCreateWithoutMenuInput!
}

input SectionItemUpsertWithWhereUniqueNestedInput {
  where: SectionItemWhereUniqueInput!
  update: SectionItemUpdateDataInput!
  create: SectionItemCreateInput!
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
  static: Boolean

  """All values that are not equal to given value."""
  static_not: Boolean
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
  menu: MenuWhereInput
}

input SectionItemWhereUniqueInput {
  id: ID
}

enum SectionOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  showPdf_ASC
  showPdf_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type SectionPreviousValues {
  id: ID!
  name: String
  showPdf: Boolean
}

type SectionSubscriptionPayload {
  mutation: MutationType!
  node: Section
  updatedFields: [String!]
  previousValues: SectionPreviousValues
}

input SectionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SectionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SectionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SectionSubscriptionWhereInput!]

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
  node: SectionWhereInput
}

enum SectionTypes {
  Title
  Subtitle
  Subheading
  Text
  Menu
}

input SectionUpdateInput {
  name: String
  showPdf: Boolean
  itemProposals: ItemProposalUpdateManyWithoutSectionInput
  menu: MenuUpdateOneWithoutSectionsInput
}

input SectionUpdateManyWithoutMenuInput {
  create: [SectionCreateWithoutMenuInput!]
  connect: [SectionWhereUniqueInput!]
  disconnect: [SectionWhereUniqueInput!]
  delete: [SectionWhereUniqueInput!]
  update: [SectionUpdateWithWhereUniqueWithoutMenuInput!]
  upsert: [SectionUpsertWithWhereUniqueWithoutMenuInput!]
}

input SectionUpdateOneWithoutItemProposalsInput {
  create: SectionCreateWithoutItemProposalsInput
  connect: SectionWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: SectionUpdateWithoutItemProposalsDataInput
  upsert: SectionUpsertWithoutItemProposalsInput
}

input SectionUpdateWithoutItemProposalsDataInput {
  name: String
  showPdf: Boolean
  menu: MenuUpdateOneWithoutSectionsInput
}

input SectionUpdateWithoutMenuDataInput {
  name: String
  showPdf: Boolean
  itemProposals: ItemProposalUpdateManyWithoutSectionInput
}

input SectionUpdateWithWhereUniqueWithoutMenuInput {
  where: SectionWhereUniqueInput!
  data: SectionUpdateWithoutMenuDataInput!
}

input SectionUpsertWithoutItemProposalsInput {
  update: SectionUpdateWithoutItemProposalsDataInput!
  create: SectionCreateWithoutItemProposalsInput!
}

input SectionUpsertWithWhereUniqueWithoutMenuInput {
  where: SectionWhereUniqueInput!
  update: SectionUpdateWithoutMenuDataInput!
  create: SectionCreateWithoutMenuInput!
}

input SectionWhereInput {
  """Logical AND on all given filters."""
  AND: [SectionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SectionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SectionWhereInput!]
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
  showPdf: Boolean

  """All values that are not equal to given value."""
  showPdf_not: Boolean
  itemProposals_every: ItemProposalWhereInput
  itemProposals_some: ItemProposalWhereInput
  itemProposals_none: ItemProposalWhereInput
  menu: MenuWhereInput
}

input SectionWhereUniqueInput {
  id: ID
}

enum StatusOffer {
  Accepted
  Rejected
  Pending
  Template
  ChangedAfterAccepted
}

type Stuff implements Node {
  eventStuffs(where: EventStuffWhereInput, orderBy: EventStuffOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EventStuff!]
  id: ID!
  name: String!
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
  eventStuffs: EventStuffCreateManyWithoutStuffInput
}

input StuffCreateOneWithoutEventStuffsInput {
  create: StuffCreateWithoutEventStuffsInput
  connect: StuffWhereUniqueInput
}

input StuffCreateWithoutEventStuffsInput {
  name: String!
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
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type StuffPreviousValues {
  id: ID!
  name: String!
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
  eventStuffs: EventStuffUpdateManyWithoutStuffInput
}

input StuffUpdateOneWithoutEventStuffsInput {
  create: StuffCreateWithoutEventStuffsInput
  connect: StuffWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: StuffUpdateWithoutEventStuffsDataInput
  upsert: StuffUpsertWithoutEventStuffsInput
}

input StuffUpdateWithoutEventStuffsDataInput {
  name: String
}

input StuffUpsertWithoutEventStuffsInput {
  update: StuffUpdateWithoutEventStuffsDataInput!
  create: StuffCreateWithoutEventStuffsInput!
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
  eventStuffs_every: EventStuffWhereInput
  eventStuffs_some: EventStuffWhereInput
  eventStuffs_none: EventStuffWhereInput
}

input StuffWhereUniqueInput {
  id: ID
}

type Subscription {
  client(where: ClientSubscriptionWhereInput): ClientSubscriptionPayload
  communication(where: CommunicationSubscriptionWhereInput): CommunicationSubscriptionPayload
  offer(where: OfferSubscriptionWhereInput): OfferSubscriptionPayload
  itemTranslation(where: ItemTranslationSubscriptionWhereInput): ItemTranslationSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  clientContact(where: ClientContactSubscriptionWhereInput): ClientContactSubscriptionPayload
  place(where: PlaceSubscriptionWhereInput): PlaceSubscriptionPayload
  budget(where: BudgetSubscriptionWhereInput): BudgetSubscriptionPayload
  budgetLine(where: BudgetLineSubscriptionWhereInput): BudgetLineSubscriptionPayload
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  employee(where: EmployeeSubscriptionWhereInput): EmployeeSubscriptionPayload
  employeeEstimation(where: EmployeeEstimationSubscriptionWhereInput): EmployeeEstimationSubscriptionPayload
  eventStuff(where: EventStuffSubscriptionWhereInput): EventStuffSubscriptionPayload
  eventType(where: EventTypeSubscriptionWhereInput): EventTypeSubscriptionPayload
  invoice(where: InvoiceSubscriptionWhereInput): InvoiceSubscriptionPayload
  job(where: JobSubscriptionWhereInput): JobSubscriptionPayload
  placeContact(where: PlaceContactSubscriptionWhereInput): PlaceContactSubscriptionPayload
  stuff(where: StuffSubscriptionWhereInput): StuffSubscriptionPayload
  tax(where: TaxSubscriptionWhereInput): TaxSubscriptionPayload
  vehicle(where: VehicleSubscriptionWhereInput): VehicleSubscriptionPayload
  itemProposal(where: ItemProposalSubscriptionWhereInput): ItemProposalSubscriptionPayload
  menu(where: MenuSubscriptionWhereInput): MenuSubscriptionPayload
  section(where: SectionSubscriptionWhereInput): SectionSubscriptionPayload
  sectionItem(where: SectionItemSubscriptionWhereInput): SectionItemSubscriptionPayload
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
}

type Tax implements Node {
  budgets(where: BudgetWhereInput, orderBy: BudgetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Budget!]
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
  budgets: BudgetCreateManyWithoutTaxInput
  budgetLines: BudgetLineCreateManyWithoutTaxInput
}

input TaxCreateOneWithoutBudgetLinesInput {
  create: TaxCreateWithoutBudgetLinesInput
  connect: TaxWhereUniqueInput
}

input TaxCreateOneWithoutBudgetsInput {
  create: TaxCreateWithoutBudgetsInput
  connect: TaxWhereUniqueInput
}

input TaxCreateWithoutBudgetLinesInput {
  name: String!
  value: Float!
  budgets: BudgetCreateManyWithoutTaxInput
}

input TaxCreateWithoutBudgetsInput {
  name: String!
  value: Float!
  budgetLines: BudgetLineCreateManyWithoutTaxInput
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
  budgets: BudgetUpdateManyWithoutTaxInput
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

input TaxUpdateOneWithoutBudgetsInput {
  create: TaxCreateWithoutBudgetsInput
  connect: TaxWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: TaxUpdateWithoutBudgetsDataInput
  upsert: TaxUpsertWithoutBudgetsInput
}

input TaxUpdateWithoutBudgetLinesDataInput {
  name: String
  value: Float
  budgets: BudgetUpdateManyWithoutTaxInput
}

input TaxUpdateWithoutBudgetsDataInput {
  name: String
  value: Float
  budgetLines: BudgetLineUpdateManyWithoutTaxInput
}

input TaxUpsertWithoutBudgetLinesInput {
  update: TaxUpdateWithoutBudgetLinesDataInput!
  create: TaxCreateWithoutBudgetLinesInput!
}

input TaxUpsertWithoutBudgetsInput {
  update: TaxUpdateWithoutBudgetsDataInput!
  create: TaxCreateWithoutBudgetsInput!
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
  budgets_every: BudgetWhereInput
  budgets_some: BudgetWhereInput
  budgets_none: BudgetWhereInput
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
  language: LanguageEnum
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
  language: LanguageEnum
  employee: EmployeeCreateOneWithoutUserInput
  jobs: JobCreateManyWithoutUsersInput
}

input UserCreateManyWithoutJobsInput {
  create: [UserCreateWithoutJobsInput!]
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
  language: LanguageEnum
  jobs: JobCreateManyWithoutUsersInput
}

input UserCreateWithoutJobsInput {
  role: Role!
  email: String!
  image: String
  name: String!
  password: String!
  language: LanguageEnum
  employee: EmployeeCreateOneWithoutUserInput
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
  language_ASC
  language_DESC
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
  language: LanguageEnum
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
  language: LanguageEnum
  employee: EmployeeUpdateOneWithoutUserInput
  jobs: JobUpdateManyWithoutUsersInput
}

input UserUpdateManyWithoutJobsInput {
  create: [UserCreateWithoutJobsInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutJobsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutJobsInput!]
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
  language: LanguageEnum
  jobs: JobUpdateManyWithoutUsersInput
}

input UserUpdateWithoutJobsDataInput {
  role: Role
  email: String
  image: String
  name: String
  password: String
  language: LanguageEnum
  employee: EmployeeUpdateOneWithoutUserInput
}

input UserUpdateWithWhereUniqueWithoutJobsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutJobsDataInput!
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
  language: LanguageEnum

  """All values that are not equal to given value."""
  language_not: LanguageEnum

  """All values that are contained in given list."""
  language_in: [LanguageEnum!]

  """All values that are not contained in given list."""
  language_not_in: [LanguageEnum!]
  employee: EmployeeWhereInput
  jobs_every: JobWhereInput
  jobs_some: JobWhereInput
  jobs_none: JobWhereInput
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

export type Channel =   'Email' |
  'Phone' |
  'Call' |
  'Message'

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
  'language_ASC' |
  'language_DESC' |
  'type_ASC' |
  'type_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type ItemProposalOrderByInput =   'id_ASC' |
  'id_DESC' |
  'status_ASC' |
  'status_DESC' |
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

export type SectionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'showPdf_ASC' |
  'showPdf_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ClientType =   'Prive' |
  'Societe'

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
  'static_ASC' |
  'static_DESC' |
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

export type InvoiceOrderByInput =   'address_ASC' |
  'address_DESC' |
  'date_ASC' |
  'date_DESC' |
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'paid_ASC' |
  'paid_DESC' |
  'tva_ASC' |
  'tva_DESC' |
  'number_ASC' |
  'number_DESC' |
  'type_ASC' |
  'type_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

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

export type StatusOffer =   'Accepted' |
  'Rejected' |
  'Pending' |
  'Template' |
  'ChangedAfterAccepted'

export type Role =   'Admin' |
  'Freelance' |
  'Employee'

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
  'password_DESC' |
  'language_ASC' |
  'language_DESC'

export type EventStuffOrderByInput =   'id_ASC' |
  'id_DESC' |
  'quantity_ASC' |
  'quantity_DESC' |
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

export type CategoryOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type Country =   'BE'

export type ItemTranslationOrderByInput =   'description_ASC' |
  'description_DESC' |
  'id_ASC' |
  'id_DESC' |
  'internalDescription_ASC' |
  'internalDescription_DESC' |
  'language_ASC' |
  'language_DESC' |
  'name_ASC' |
  'name_DESC' |
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

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

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

export type StuffOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type SectionTypes =   'Title' |
  'Subtitle' |
  'Subheading' |
  'Text' |
  'Menu'

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

export type MenuOrderByInput =   'comment_ASC' |
  'comment_DESC' |
  'endDate_ASC' |
  'endDate_DESC' |
  'hasItemsCold_ASC' |
  'hasItemsCold_DESC' |
  'hasItemsDessert_ASC' |
  'hasItemsDessert_DESC' |
  'hasItemsHot_ASC' |
  'hasItemsHot_DESC' |
  'hasItemsZCold_ASC' |
  'hasItemsZCold_DESC' |
  'hasItemsZHot_ASC' |
  'hasItemsZHot_DESC' |
  'id_ASC' |
  'id_DESC' |
  'kitchenNotes_ASC' |
  'kitchenNotes_DESC' |
  'name_ASC' |
  'name_DESC' |
  'people_ASC' |
  'people_DESC' |
  'price_ASC' |
  'price_DESC' |
  'startDate_ASC' |
  'startDate_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type OfferOrderByInput =   'createdAt_ASC' |
  'createdAt_DESC' |
  'customMessage_ASC' |
  'customMessage_DESC' |
  'id_ASC' |
  'id_DESC' |
  'status_ASC' |
  'status_DESC' |
  'language_ASC' |
  'language_DESC' |
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
  'rev_ASC' |
  'rev_DESC' |
  'showTotalBudgetsPdf_ASC' |
  'showTotalBudgetsPdf_DESC' |
  'startTime_ASC' |
  'startTime_DESC' |
  'version_ASC' |
  'version_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type ItemOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type EventOrderByInput =   'id_ASC' |
  'id_DESC' |
  'canceled_ASC' |
  'canceled_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BudgetLineOrderByInput =   'description_ASC' |
  'description_DESC' |
  'id_ASC' |
  'id_DESC' |
  'quantity_ASC' |
  'quantity_DESC' |
  'total_ASC' |
  'total_DESC' |
  'unitPrice_ASC' |
  'unitPrice_DESC' |
  'value_ASC' |
  'value_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ItemProposalStatus =   'PENDING' |
  'ACCEPTED' |
  'REJECTED'

export type BudgetOrderByInput =   'description_ASC' |
  'description_DESC' |
  'id_ASC' |
  'id_DESC' |
  'quantity_ASC' |
  'quantity_DESC' |
  'total_ASC' |
  'total_DESC' |
  'unitPrice_ASC' |
  'unitPrice_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LanguageEnum =   'FR' |
  'NL' |
  'EN'

export type Account =   'Invoice' |
  'CreditNote'

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

export type EventTypeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface EventStuffCreateWithoutStuffInput {
  quantity?: Int
  event?: EventCreateOneWithoutEventStuffsInput
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
  language?: LanguageEnum
  language_not?: LanguageEnum
  language_in?: LanguageEnum[] | LanguageEnum
  language_not_in?: LanguageEnum[] | LanguageEnum
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
}

export interface ClientUpdateWithoutOffersDataInput {
  address?: String
  email?: String
  name?: String
  phone?: String
  tva?: String
  language?: LanguageEnum
  type?: ClientType
  events?: EventUpdateManyInput
  clientContacts?: ClientContactUpdateManyWithoutClientInput
}

export interface EventStuffWhereInput {
  AND?: EventStuffWhereInput[] | EventStuffWhereInput
  OR?: EventStuffWhereInput[] | EventStuffWhereInput
  NOT?: EventStuffWhereInput[] | EventStuffWhereInput
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
  event?: EventWhereInput
  stuff?: StuffWhereInput
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

export interface MenuCreateWithoutSectionItemInput {
  comment?: String
  endDate?: DateTime
  hasItemsCold?: Boolean
  hasItemsDessert?: Boolean
  hasItemsHot?: Boolean
  hasItemsZCold?: Boolean
  hasItemsZHot?: Boolean
  kitchenNotes?: String
  name: String
  people?: Int
  price?: Float
  startDate?: DateTime
  offer?: OfferCreateOneWithoutMenusInput
  sections?: SectionCreateManyWithoutMenuInput
}

export interface UserUpdateManyWithoutJobsInput {
  create?: UserCreateWithoutJobsInput[] | UserCreateWithoutJobsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutJobsInput[] | UserUpdateWithWhereUniqueWithoutJobsInput
  upsert?: UserUpsertWithWhereUniqueWithoutJobsInput[] | UserUpsertWithWhereUniqueWithoutJobsInput
}

export interface OfferCreateOneWithoutMenusInput {
  create?: OfferCreateWithoutMenusInput
  connect?: OfferWhereUniqueInput
}

export interface ClientContactUpdateWithWhereUniqueWithoutClientInput {
  where: ClientContactWhereUniqueInput
  data: ClientContactUpdateWithoutClientDataInput
}

export interface OfferCreateWithoutMenusInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  client?: ClientCreateOneWithoutOffersInput
  event?: EventCreateOneWithoutOfferInput
  budgetLines?: BudgetLineCreateManyWithoutOfferInput
  clientContact?: ClientContactCreateOneWithoutOffersInput
  communications?: CommunicationCreateManyWithoutOfferInput
  employeeEstimations?: EmployeeEstimationCreateManyWithoutOfferInput
  eventType?: EventTypeCreateOneWithoutOffersInput
  place?: PlaceCreateOneWithoutOfferInput
  sectionItems?: SectionItemCreateManyWithoutOfferInput
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

export interface SectionCreateManyWithoutMenuInput {
  create?: SectionCreateWithoutMenuInput[] | SectionCreateWithoutMenuInput
  connect?: SectionWhereUniqueInput[] | SectionWhereUniqueInput
}

export interface ItemWhereInput {
  AND?: ItemWhereInput[] | ItemWhereInput
  OR?: ItemWhereInput[] | ItemWhereInput
  NOT?: ItemWhereInput[] | ItemWhereInput
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
  itemTranslations_every?: ItemTranslationWhereInput
  itemTranslations_some?: ItemTranslationWhereInput
  itemTranslations_none?: ItemTranslationWhereInput
  categories_every?: CategoryWhereInput
  categories_some?: CategoryWhereInput
  categories_none?: CategoryWhereInput
  sectionItems_every?: SectionItemWhereInput
  sectionItems_some?: SectionItemWhereInput
  sectionItems_none?: SectionItemWhereInput
}

export interface SectionCreateWithoutMenuInput {
  name?: String
  showPdf?: Boolean
  itemProposals?: ItemProposalCreateManyWithoutSectionInput
}

export interface SectionSubscriptionWhereInput {
  AND?: SectionSubscriptionWhereInput[] | SectionSubscriptionWhereInput
  OR?: SectionSubscriptionWhereInput[] | SectionSubscriptionWhereInput
  NOT?: SectionSubscriptionWhereInput[] | SectionSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SectionWhereInput
}

export interface ItemProposalCreateManyWithoutSectionInput {
  create?: ItemProposalCreateWithoutSectionInput[] | ItemProposalCreateWithoutSectionInput
  connect?: ItemProposalWhereUniqueInput[] | ItemProposalWhereUniqueInput
}

export interface MenuSubscriptionWhereInput {
  AND?: MenuSubscriptionWhereInput[] | MenuSubscriptionWhereInput
  OR?: MenuSubscriptionWhereInput[] | MenuSubscriptionWhereInput
  NOT?: MenuSubscriptionWhereInput[] | MenuSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: MenuWhereInput
}

export interface ItemProposalCreateWithoutSectionInput {
  status: ItemProposalStatus
  items?: ItemCreateManyInput
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

export interface ItemCreateManyInput {
  create?: ItemCreateInput[] | ItemCreateInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
}

export interface MenuWhereInput {
  AND?: MenuWhereInput[] | MenuWhereInput
  OR?: MenuWhereInput[] | MenuWhereInput
  NOT?: MenuWhereInput[] | MenuWhereInput
  comment?: String
  comment_not?: String
  comment_in?: String[] | String
  comment_not_in?: String[] | String
  comment_lt?: String
  comment_lte?: String
  comment_gt?: String
  comment_gte?: String
  comment_contains?: String
  comment_not_contains?: String
  comment_starts_with?: String
  comment_not_starts_with?: String
  comment_ends_with?: String
  comment_not_ends_with?: String
  endDate?: DateTime
  endDate_not?: DateTime
  endDate_in?: DateTime[] | DateTime
  endDate_not_in?: DateTime[] | DateTime
  endDate_lt?: DateTime
  endDate_lte?: DateTime
  endDate_gt?: DateTime
  endDate_gte?: DateTime
  hasItemsCold?: Boolean
  hasItemsCold_not?: Boolean
  hasItemsDessert?: Boolean
  hasItemsDessert_not?: Boolean
  hasItemsHot?: Boolean
  hasItemsHot_not?: Boolean
  hasItemsZCold?: Boolean
  hasItemsZCold_not?: Boolean
  hasItemsZHot?: Boolean
  hasItemsZHot_not?: Boolean
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
  kitchenNotes?: String
  kitchenNotes_not?: String
  kitchenNotes_in?: String[] | String
  kitchenNotes_not_in?: String[] | String
  kitchenNotes_lt?: String
  kitchenNotes_lte?: String
  kitchenNotes_gt?: String
  kitchenNotes_gte?: String
  kitchenNotes_contains?: String
  kitchenNotes_not_contains?: String
  kitchenNotes_starts_with?: String
  kitchenNotes_not_starts_with?: String
  kitchenNotes_ends_with?: String
  kitchenNotes_not_ends_with?: String
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
  people?: Int
  people_not?: Int
  people_in?: Int[] | Int
  people_not_in?: Int[] | Int
  people_lt?: Int
  people_lte?: Int
  people_gt?: Int
  people_gte?: Int
  price?: Float
  price_not?: Float
  price_in?: Float[] | Float
  price_not_in?: Float[] | Float
  price_lt?: Float
  price_lte?: Float
  price_gt?: Float
  price_gte?: Float
  startDate?: DateTime
  startDate_not?: DateTime
  startDate_in?: DateTime[] | DateTime
  startDate_not_in?: DateTime[] | DateTime
  startDate_lt?: DateTime
  startDate_lte?: DateTime
  startDate_gt?: DateTime
  startDate_gte?: DateTime
  offer?: OfferWhereInput
  sectionItem?: SectionItemWhereInput
  sections_every?: SectionWhereInput
  sections_some?: SectionWhereInput
  sections_none?: SectionWhereInput
}

export interface ItemCreateInput {
  itemTranslations?: ItemTranslationCreateManyWithoutItemsInput
  categories?: CategoryCreateManyWithoutItemsInput
  sectionItems?: SectionItemCreateManyInput
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
  static?: Boolean
  static_not?: Boolean
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
  menu?: MenuWhereInput
}

export interface ItemTranslationCreateManyWithoutItemsInput {
  create?: ItemTranslationCreateWithoutItemsInput[] | ItemTranslationCreateWithoutItemsInput
  connect?: ItemTranslationWhereUniqueInput[] | ItemTranslationWhereUniqueInput
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

export interface ItemTranslationCreateWithoutItemsInput {
  description?: String
  internalDescription?: String
  language: LanguageEnum
  name?: String
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

export interface CategoryCreateManyWithoutItemsInput {
  create?: CategoryCreateWithoutItemsInput[] | CategoryCreateWithoutItemsInput
  connect?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput
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

export interface CategoryCreateWithoutItemsInput {
  name: String
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

export interface SectionItemCreateManyInput {
  create?: SectionItemCreateInput[] | SectionItemCreateInput
  connect?: SectionItemWhereUniqueInput[] | SectionItemWhereUniqueInput
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
  language?: LanguageEnum
  language_not?: LanguageEnum
  language_in?: LanguageEnum[] | LanguageEnum
  language_not_in?: LanguageEnum[] | LanguageEnum
  employee?: EmployeeWhereInput
  jobs_every?: JobWhereInput
  jobs_some?: JobWhereInput
  jobs_none?: JobWhereInput
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
  static?: Boolean
  type?: SectionTypes
  w: Int
  x: Int
  y?: Int
  offer?: OfferCreateOneWithoutSectionItemsInput
  menu?: MenuCreateOneWithoutSectionItemInput
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

export interface OfferCreateOneWithoutSectionItemsInput {
  create?: OfferCreateWithoutSectionItemsInput
  connect?: OfferWhereUniqueInput
}

export interface CategorySubscriptionWhereInput {
  AND?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  OR?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  NOT?: CategorySubscriptionWhereInput[] | CategorySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CategoryWhereInput
}

export interface OfferCreateWithoutSectionItemsInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  client?: ClientCreateOneWithoutOffersInput
  event?: EventCreateOneWithoutOfferInput
  budgetLines?: BudgetLineCreateManyWithoutOfferInput
  clientContact?: ClientContactCreateOneWithoutOffersInput
  communications?: CommunicationCreateManyWithoutOfferInput
  employeeEstimations?: EmployeeEstimationCreateManyWithoutOfferInput
  eventType?: EventTypeCreateOneWithoutOffersInput
  place?: PlaceCreateOneWithoutOfferInput
  menus?: MenuCreateManyWithoutOfferInput
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

export interface MenuCreateManyWithoutOfferInput {
  create?: MenuCreateWithoutOfferInput[] | MenuCreateWithoutOfferInput
  connect?: MenuWhereUniqueInput[] | MenuWhereUniqueInput
}

export interface BudgetSubscriptionWhereInput {
  AND?: BudgetSubscriptionWhereInput[] | BudgetSubscriptionWhereInput
  OR?: BudgetSubscriptionWhereInput[] | BudgetSubscriptionWhereInput
  NOT?: BudgetSubscriptionWhereInput[] | BudgetSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BudgetWhereInput
}

export interface MenuCreateWithoutOfferInput {
  comment?: String
  endDate?: DateTime
  hasItemsCold?: Boolean
  hasItemsDessert?: Boolean
  hasItemsHot?: Boolean
  hasItemsZCold?: Boolean
  hasItemsZHot?: Boolean
  kitchenNotes?: String
  name: String
  people?: Int
  price?: Float
  startDate?: DateTime
  sectionItem?: SectionItemCreateOneWithoutMenuInput
  sections?: SectionCreateManyWithoutMenuInput
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

export interface SectionItemCreateOneWithoutMenuInput {
  create?: SectionItemCreateWithoutMenuInput
  connect?: SectionItemWhereUniqueInput
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

export interface SectionItemCreateWithoutMenuInput {
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
  static?: Boolean
  type?: SectionTypes
  w: Int
  x: Int
  y?: Int
  offer?: OfferCreateOneWithoutSectionItemsInput
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

export interface UserCreateOneWithoutEmployeeInput {
  create?: UserCreateWithoutEmployeeInput
  connect?: UserWhereUniqueInput
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
  budgets_every?: BudgetWhereInput
  budgets_some?: BudgetWhereInput
  budgets_none?: BudgetWhereInput
  budgetLines_every?: BudgetLineWhereInput
  budgetLines_some?: BudgetLineWhereInput
  budgetLines_none?: BudgetLineWhereInput
}

export interface UserCreateWithoutEmployeeInput {
  role: Role
  email: String
  image?: String
  name: String
  password: String
  language?: LanguageEnum
  jobs?: JobCreateManyWithoutUsersInput
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

export interface JobCreateManyWithoutUsersInput {
  create?: JobCreateWithoutUsersInput[] | JobCreateWithoutUsersInput
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput
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

export interface JobCreateWithoutUsersInput {
  name: String
  employeeEstimations?: EmployeeEstimationCreateManyWithoutJobInput
  employees?: EmployeeCreateManyWithoutJobInput
}

export interface ItemUpdateInput {
  itemTranslations?: ItemTranslationUpdateManyWithoutItemsInput
  categories?: CategoryUpdateManyWithoutItemsInput
  sectionItems?: SectionItemUpdateManyInput
}

export interface UserCreateManyWithoutJobsInput {
  create?: UserCreateWithoutJobsInput[] | UserCreateWithoutJobsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface EventUpdateInput {
  canceled?: Boolean
  offer?: OfferUpdateOneWithoutEventInput
  employees?: EmployeeUpdateManyWithoutEventInput
  eventStuffs?: EventStuffUpdateManyWithoutEventInput
  invoice?: InvoiceUpdateOneWithoutEventInput
  vehicles?: VehicleUpdateManyWithoutEventsInput
}

export interface UserCreateWithoutJobsInput {
  role: Role
  email: String
  image?: String
  name: String
  password: String
  language?: LanguageEnum
  employee?: EmployeeCreateOneWithoutUserInput
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
  static?: Boolean
  type?: SectionTypes
  w?: Int
  x?: Int
  y?: Int
  offer?: OfferUpdateOneWithoutSectionItemsInput
  menu?: MenuUpdateOneWithoutSectionItemInput
}

export interface EmployeeCreateOneWithoutUserInput {
  create?: EmployeeCreateWithoutUserInput
  connect?: EmployeeWhereUniqueInput
}

export interface CommunicationWhereUniqueInput {
  id?: ID_Input
}

export interface EmployeeCreateWithoutUserInput {
  endedAt?: DateTime
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  startedAt?: DateTime
  event?: EventCreateOneWithoutEmployeesInput
  job?: JobCreateOneWithoutEmployeesInput
}

export interface ItemTranslationWhereUniqueInput {
  id?: ID_Input
}

export interface CommunicationCreateInput {
  message: String
  subject: String
  channel: Channel
  date: DateTime
  gmtOffset: String
  offer?: OfferCreateOneWithoutCommunicationsInput
}

export interface ClientContactWhereUniqueInput {
  id?: ID_Input
}

export interface OfferCreateOneWithoutCommunicationsInput {
  create?: OfferCreateWithoutCommunicationsInput
  connect?: OfferWhereUniqueInput
}

export interface BudgetWhereUniqueInput {
  id?: ID_Input
}

export interface OfferCreateWithoutCommunicationsInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  client?: ClientCreateOneWithoutOffersInput
  event?: EventCreateOneWithoutOfferInput
  budgetLines?: BudgetLineCreateManyWithoutOfferInput
  clientContact?: ClientContactCreateOneWithoutOffersInput
  employeeEstimations?: EmployeeEstimationCreateManyWithoutOfferInput
  eventType?: EventTypeCreateOneWithoutOffersInput
  place?: PlaceCreateOneWithoutOfferInput
  sectionItems?: SectionItemCreateManyWithoutOfferInput
  menus?: MenuCreateManyWithoutOfferInput
}

export interface CategoryWhereUniqueInput {
  id?: ID_Input
}

export interface OfferCreateInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  client?: ClientCreateOneWithoutOffersInput
  event?: EventCreateOneWithoutOfferInput
  budgetLines?: BudgetLineCreateManyWithoutOfferInput
  clientContact?: ClientContactCreateOneWithoutOffersInput
  communications?: CommunicationCreateManyWithoutOfferInput
  employeeEstimations?: EmployeeEstimationCreateManyWithoutOfferInput
  eventType?: EventTypeCreateOneWithoutOffersInput
  place?: PlaceCreateOneWithoutOfferInput
  sectionItems?: SectionItemCreateManyWithoutOfferInput
  menus?: MenuCreateManyWithoutOfferInput
}

export interface EmployeeEstimationWhereUniqueInput {
  id?: ID_Input
}

export interface ItemTranslationCreateInput {
  description?: String
  internalDescription?: String
  language: LanguageEnum
  name?: String
  items?: ItemCreateOneWithoutItemTranslationsInput
}

export interface EventTypeWhereUniqueInput {
  id?: ID_Input
}

export interface ItemCreateOneWithoutItemTranslationsInput {
  create?: ItemCreateWithoutItemTranslationsInput
  connect?: ItemWhereUniqueInput
}

export interface JobWhereUniqueInput {
  id?: ID_Input
}

export interface ItemCreateWithoutItemTranslationsInput {
  categories?: CategoryCreateManyWithoutItemsInput
  sectionItems?: SectionItemCreateManyInput
}

export interface StuffWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateInput {
  role: Role
  email: String
  image?: String
  name: String
  password: String
  language?: LanguageEnum
  employee?: EmployeeCreateOneWithoutUserInput
  jobs?: JobCreateManyWithoutUsersInput
}

export interface VehicleWhereUniqueInput {
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

export interface MenuWhereUniqueInput {
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

export interface SectionItemWhereUniqueInput {
  id?: ID_Input
}

export interface OfferCreateOneWithoutPlaceInput {
  create?: OfferCreateWithoutPlaceInput
  connect?: OfferWhereUniqueInput
}

export interface ItemWhereUniqueInput {
  id?: ID_Input
}

export interface OfferCreateWithoutPlaceInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  client?: ClientCreateOneWithoutOffersInput
  event?: EventCreateOneWithoutOfferInput
  budgetLines?: BudgetLineCreateManyWithoutOfferInput
  clientContact?: ClientContactCreateOneWithoutOffersInput
  communications?: CommunicationCreateManyWithoutOfferInput
  employeeEstimations?: EmployeeEstimationCreateManyWithoutOfferInput
  eventType?: EventTypeCreateOneWithoutOffersInput
  sectionItems?: SectionItemCreateManyWithoutOfferInput
  menus?: MenuCreateManyWithoutOfferInput
}

export interface MenuUpdateInput {
  comment?: String
  endDate?: DateTime
  hasItemsCold?: Boolean
  hasItemsDessert?: Boolean
  hasItemsHot?: Boolean
  hasItemsZCold?: Boolean
  hasItemsZHot?: Boolean
  kitchenNotes?: String
  name?: String
  people?: Int
  price?: Float
  startDate?: DateTime
  offer?: OfferUpdateOneWithoutMenusInput
  sectionItem?: SectionItemUpdateOneWithoutMenuInput
  sections?: SectionUpdateManyWithoutMenuInput
}

export interface BudgetCreateInput {
  description: String
  quantity: Int
  total: Float
  unitPrice: Float
  invoice?: InvoiceCreateOneWithoutBudgetsInput
  tax?: TaxCreateOneWithoutBudgetsInput
}

export interface MenuUpsertWithoutSectionsInput {
  update: MenuUpdateWithoutSectionsDataInput
  create: MenuCreateWithoutSectionsInput
}

export interface BudgetLineCreateInput {
  description: String
  quantity?: Int
  total?: Float
  unitPrice?: Float
  value: Float
  offer?: OfferCreateOneWithoutBudgetLinesInput
  tax?: TaxCreateOneWithoutBudgetLinesInput
}

export interface MenuUpdateOneWithoutSectionsInput {
  create?: MenuCreateWithoutSectionsInput
  connect?: MenuWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: MenuUpdateWithoutSectionsDataInput
  upsert?: MenuUpsertWithoutSectionsInput
}

export interface CategoryCreateInput {
  name: String
  items?: ItemCreateManyWithoutCategoriesInput
}

export interface SectionUpdateOneWithoutItemProposalsInput {
  create?: SectionCreateWithoutItemProposalsInput
  connect?: SectionWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: SectionUpdateWithoutItemProposalsDataInput
  upsert?: SectionUpsertWithoutItemProposalsInput
}

export interface ItemCreateManyWithoutCategoriesInput {
  create?: ItemCreateWithoutCategoriesInput[] | ItemCreateWithoutCategoriesInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
}

export interface EventUpsertWithWhereUniqueWithoutVehiclesInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutVehiclesDataInput
  create: EventCreateWithoutVehiclesInput
}

export interface ItemCreateWithoutCategoriesInput {
  itemTranslations?: ItemTranslationCreateManyWithoutItemsInput
  sectionItems?: SectionItemCreateManyInput
}

export interface EventUpdateWithWhereUniqueWithoutVehiclesInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutVehiclesDataInput
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

export interface VehicleUpdateInput {
  color?: String
  description?: String
  name?: String
  plate?: String
  year?: Int
  events?: EventUpdateManyWithoutVehiclesInput
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

export interface EventStuffUpsertWithWhereUniqueWithoutStuffInput {
  where: EventStuffWhereUniqueInput
  update: EventStuffUpdateWithoutStuffDataInput
  create: EventStuffCreateWithoutStuffInput
}

export interface EventStuffCreateInput {
  quantity?: Int
  event?: EventCreateOneWithoutEventStuffsInput
  stuff?: StuffCreateOneWithoutEventStuffsInput
}

export interface EventStuffUpdateWithWhereUniqueWithoutStuffInput {
  where: EventStuffWhereUniqueInput
  data: EventStuffUpdateWithoutStuffDataInput
}

export interface EventCreateOneWithoutEventStuffsInput {
  create?: EventCreateWithoutEventStuffsInput
  connect?: EventWhereUniqueInput
}

export interface StuffUpdateInput {
  name?: String
  eventStuffs?: EventStuffUpdateManyWithoutStuffInput
}

export interface EventCreateWithoutEventStuffsInput {
  canceled?: Boolean
  offer?: OfferCreateOneWithoutEventInput
  employees?: EmployeeCreateManyWithoutEventInput
  invoice?: InvoiceCreateOneWithoutEventInput
  vehicles?: VehicleCreateManyWithoutEventsInput
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

export interface EventTypeCreateInput {
  name: String
  offers?: OfferCreateManyWithoutEventTypeInput
}

export interface PlaceContactUpdateInput {
  email?: String
  mobilePhone?: String
  name?: String
  phoneNumber?: String
  place?: PlaceUpdateOneWithoutPlaceContactsInput
}

export interface OfferCreateManyWithoutEventTypeInput {
  create?: OfferCreateWithoutEventTypeInput[] | OfferCreateWithoutEventTypeInput
  connect?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
}

export interface InvoiceUpdateInput {
  address?: String
  date?: DateTime
  name?: String
  paid?: Boolean
  tva?: String
  number?: Int
  type?: Account
  budgets?: BudgetUpdateManyWithoutInvoiceInput
  event?: EventUpdateOneWithoutInvoiceInput
}

export interface OfferCreateWithoutEventTypeInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  client?: ClientCreateOneWithoutOffersInput
  event?: EventCreateOneWithoutOfferInput
  budgetLines?: BudgetLineCreateManyWithoutOfferInput
  clientContact?: ClientContactCreateOneWithoutOffersInput
  communications?: CommunicationCreateManyWithoutOfferInput
  employeeEstimations?: EmployeeEstimationCreateManyWithoutOfferInput
  place?: PlaceCreateOneWithoutOfferInput
  sectionItems?: SectionItemCreateManyWithoutOfferInput
  menus?: MenuCreateManyWithoutOfferInput
}

export interface OfferUpdateWithoutEventTypeDataInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address?: String
  city?: String
  endTime?: DateTime
  gmtOffset?: String
  maxPersons?: Int
  minPersons?: Int
  name?: String
  postalCode?: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  client?: ClientUpdateOneWithoutOffersInput
  event?: EventUpdateOneWithoutOfferInput
  budgetLines?: BudgetLineUpdateManyWithoutOfferInput
  clientContact?: ClientContactUpdateOneWithoutOffersInput
  communications?: CommunicationUpdateManyWithoutOfferInput
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutOfferInput
  place?: PlaceUpdateOneWithoutOfferInput
  sectionItems?: SectionItemUpdateManyWithoutOfferInput
  menus?: MenuUpdateManyWithoutOfferInput
}

export interface InvoiceCreateInput {
  address?: String
  date?: DateTime
  name?: String
  paid?: Boolean
  tva?: String
  number?: Int
  type?: Account
  budgets?: BudgetCreateManyWithoutInvoiceInput
  event?: EventCreateOneWithoutInvoiceInput
}

export interface OfferUpdateManyWithoutEventTypeInput {
  create?: OfferCreateWithoutEventTypeInput[] | OfferCreateWithoutEventTypeInput
  connect?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
  disconnect?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
  delete?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
  update?: OfferUpdateWithWhereUniqueWithoutEventTypeInput[] | OfferUpdateWithWhereUniqueWithoutEventTypeInput
  upsert?: OfferUpsertWithWhereUniqueWithoutEventTypeInput[] | OfferUpsertWithWhereUniqueWithoutEventTypeInput
}

export interface JobCreateInput {
  name: String
  employeeEstimations?: EmployeeEstimationCreateManyWithoutJobInput
  employees?: EmployeeCreateManyWithoutJobInput
  users?: UserCreateManyWithoutJobsInput
}

export interface EventUpsertWithoutEventStuffsInput {
  update: EventUpdateWithoutEventStuffsDataInput
  create: EventCreateWithoutEventStuffsInput
}

export interface PlaceContactCreateInput {
  email?: String
  mobilePhone?: String
  name: String
  phoneNumber?: String
  place?: PlaceCreateOneWithoutPlaceContactsInput
}

export interface EventUpdateOneWithoutEventStuffsInput {
  create?: EventCreateWithoutEventStuffsInput
  connect?: EventWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: EventUpdateWithoutEventStuffsDataInput
  upsert?: EventUpsertWithoutEventStuffsInput
}

export interface PlaceCreateOneWithoutPlaceContactsInput {
  create?: PlaceCreateWithoutPlaceContactsInput
  connect?: PlaceWhereUniqueInput
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

export interface PlaceCreateWithoutPlaceContactsInput {
  address: String
  city: String
  name: String
  postalCode: String
  country?: Country
  note?: String
  offer?: OfferCreateOneWithoutPlaceInput
}

export interface ItemUpsertWithWhereUniqueWithoutCategoriesInput {
  where: ItemWhereUniqueInput
  update: ItemUpdateWithoutCategoriesDataInput
  create: ItemCreateWithoutCategoriesInput
}

export interface StuffCreateInput {
  name: String
  eventStuffs?: EventStuffCreateManyWithoutStuffInput
}

export interface ItemUpdateWithWhereUniqueWithoutCategoriesInput {
  where: ItemWhereUniqueInput
  data: ItemUpdateWithoutCategoriesDataInput
}

export interface EventStuffCreateManyWithoutStuffInput {
  create?: EventStuffCreateWithoutStuffInput[] | EventStuffCreateWithoutStuffInput
  connect?: EventStuffWhereUniqueInput[] | EventStuffWhereUniqueInput
}

export interface CategoryUpdateInput {
  name?: String
  items?: ItemUpdateManyWithoutCategoriesInput
}

export interface UserUpdateWithWhereUniqueWithoutJobsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutJobsDataInput
}

export interface BudgetUpdateInput {
  description?: String
  quantity?: Int
  total?: Float
  unitPrice?: Float
  invoice?: InvoiceUpdateOneWithoutBudgetsInput
  tax?: TaxUpdateOneWithoutBudgetsInput
}

export interface TaxCreateInput {
  name: String
  value: Float
  budgets?: BudgetCreateManyWithoutTaxInput
  budgetLines?: BudgetLineCreateManyWithoutTaxInput
}

export interface OfferUpdateWithoutPlaceDataInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address?: String
  city?: String
  endTime?: DateTime
  gmtOffset?: String
  maxPersons?: Int
  minPersons?: Int
  name?: String
  postalCode?: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  client?: ClientUpdateOneWithoutOffersInput
  event?: EventUpdateOneWithoutOfferInput
  budgetLines?: BudgetLineUpdateManyWithoutOfferInput
  clientContact?: ClientContactUpdateOneWithoutOffersInput
  communications?: CommunicationUpdateManyWithoutOfferInput
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType?: EventTypeUpdateOneWithoutOffersInput
  sectionItems?: SectionItemUpdateManyWithoutOfferInput
  menus?: MenuUpdateManyWithoutOfferInput
}

export interface VehicleCreateInput {
  color?: String
  description?: String
  name: String
  plate: String
  year?: Int
  events?: EventCreateManyWithoutVehiclesInput
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

export interface EventCreateManyWithoutVehiclesInput {
  create?: EventCreateWithoutVehiclesInput[] | EventCreateWithoutVehiclesInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface UserUpdateInput {
  role?: Role
  email?: String
  image?: String
  name?: String
  password?: String
  language?: LanguageEnum
  employee?: EmployeeUpdateOneWithoutUserInput
  jobs?: JobUpdateManyWithoutUsersInput
}

export interface EventCreateWithoutVehiclesInput {
  canceled?: Boolean
  offer?: OfferCreateOneWithoutEventInput
  employees?: EmployeeCreateManyWithoutEventInput
  eventStuffs?: EventStuffCreateManyWithoutEventInput
  invoice?: InvoiceCreateOneWithoutEventInput
}

export interface ItemUpdateWithoutItemTranslationsDataInput {
  categories?: CategoryUpdateManyWithoutItemsInput
  sectionItems?: SectionItemUpdateManyInput
}

export interface ItemProposalCreateInput {
  status: ItemProposalStatus
  items?: ItemCreateManyInput
  section?: SectionCreateOneWithoutItemProposalsInput
}

export interface ItemTranslationUpdateInput {
  description?: String
  internalDescription?: String
  language?: LanguageEnum
  name?: String
  items?: ItemUpdateOneWithoutItemTranslationsInput
}

export interface SectionCreateOneWithoutItemProposalsInput {
  create?: SectionCreateWithoutItemProposalsInput
  connect?: SectionWhereUniqueInput
}

export interface OfferUpsertWithoutCommunicationsInput {
  update: OfferUpdateWithoutCommunicationsDataInput
  create: OfferCreateWithoutCommunicationsInput
}

export interface SectionCreateWithoutItemProposalsInput {
  name?: String
  showPdf?: Boolean
  menu?: MenuCreateOneWithoutSectionsInput
}

export interface OfferUpdateOneWithoutCommunicationsInput {
  create?: OfferCreateWithoutCommunicationsInput
  connect?: OfferWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OfferUpdateWithoutCommunicationsDataInput
  upsert?: OfferUpsertWithoutCommunicationsInput
}

export interface MenuCreateOneWithoutSectionsInput {
  create?: MenuCreateWithoutSectionsInput
  connect?: MenuWhereUniqueInput
}

export interface EventUpsertWithWhereUniqueNestedInput {
  where: EventWhereUniqueInput
  update: EventUpdateDataInput
  create: EventCreateInput
}

export interface MenuCreateWithoutSectionsInput {
  comment?: String
  endDate?: DateTime
  hasItemsCold?: Boolean
  hasItemsDessert?: Boolean
  hasItemsHot?: Boolean
  hasItemsZCold?: Boolean
  hasItemsZHot?: Boolean
  kitchenNotes?: String
  name: String
  people?: Int
  price?: Float
  startDate?: DateTime
  offer?: OfferCreateOneWithoutMenusInput
  sectionItem?: SectionItemCreateOneWithoutMenuInput
}

export interface ClientUpsertWithoutOffersInput {
  update: ClientUpdateWithoutOffersDataInput
  create: ClientCreateWithoutOffersInput
}

export interface MenuCreateInput {
  comment?: String
  endDate?: DateTime
  hasItemsCold?: Boolean
  hasItemsDessert?: Boolean
  hasItemsHot?: Boolean
  hasItemsZCold?: Boolean
  hasItemsZHot?: Boolean
  kitchenNotes?: String
  name: String
  people?: Int
  price?: Float
  startDate?: DateTime
  offer?: OfferCreateOneWithoutMenusInput
  sectionItem?: SectionItemCreateOneWithoutMenuInput
  sections?: SectionCreateManyWithoutMenuInput
}

export interface OfferUpsertWithWhereUniqueWithoutClientContactInput {
  where: OfferWhereUniqueInput
  update: OfferUpdateWithoutClientContactDataInput
  create: OfferCreateWithoutClientContactInput
}

export interface SectionCreateInput {
  name?: String
  showPdf?: Boolean
  itemProposals?: ItemProposalCreateManyWithoutSectionInput
  menu?: MenuCreateOneWithoutSectionsInput
}

export interface EmployeeUpsertWithWhereUniqueWithoutEventInput {
  where: EmployeeWhereUniqueInput
  update: EmployeeUpdateWithoutEventDataInput
  create: EmployeeCreateWithoutEventInput
}

export interface ClientUpdateInput {
  address?: String
  email?: String
  name?: String
  phone?: String
  tva?: String
  language?: LanguageEnum
  type?: ClientType
  events?: EventUpdateManyInput
  offers?: OfferUpdateManyWithoutClientInput
  clientContacts?: ClientContactUpdateManyWithoutClientInput
}

export interface EmployeeEstimationUpsertWithWhereUniqueWithoutJobInput {
  where: EmployeeEstimationWhereUniqueInput
  update: EmployeeEstimationUpdateWithoutJobDataInput
  create: EmployeeEstimationCreateWithoutJobInput
}

export interface EventUpdateManyInput {
  create?: EventCreateInput[] | EventCreateInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput
  update?: EventUpdateWithWhereUniqueNestedInput[] | EventUpdateWithWhereUniqueNestedInput
  upsert?: EventUpsertWithWhereUniqueNestedInput[] | EventUpsertWithWhereUniqueNestedInput
}

export interface ClientContactUpsertWithoutOffersInput {
  update: ClientContactUpdateWithoutOffersDataInput
  create: ClientContactCreateWithoutOffersInput
}

export interface EventUpdateWithWhereUniqueNestedInput {
  where: EventWhereUniqueInput
  data: EventUpdateDataInput
}

export interface OfferUpsertWithWhereUniqueWithoutClientInput {
  where: OfferWhereUniqueInput
  update: OfferUpdateWithoutClientDataInput
  create: OfferCreateWithoutClientInput
}

export interface EventUpdateDataInput {
  canceled?: Boolean
  offer?: OfferUpdateOneWithoutEventInput
  employees?: EmployeeUpdateManyWithoutEventInput
  eventStuffs?: EventStuffUpdateManyWithoutEventInput
  invoice?: InvoiceUpdateOneWithoutEventInput
  vehicles?: VehicleUpdateManyWithoutEventsInput
}

export interface JobUpsertWithoutEmployeeEstimationsInput {
  update: JobUpdateWithoutEmployeeEstimationsDataInput
  create: JobCreateWithoutEmployeeEstimationsInput
}

export interface OfferUpdateOneWithoutEventInput {
  create?: OfferCreateWithoutEventInput
  connect?: OfferWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OfferUpdateWithoutEventDataInput
  upsert?: OfferUpsertWithoutEventInput
}

export interface EmployeeUpsertWithoutUserInput {
  update: EmployeeUpdateWithoutUserDataInput
  create: EmployeeCreateWithoutUserInput
}

export interface OfferUpdateWithoutEventDataInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address?: String
  city?: String
  endTime?: DateTime
  gmtOffset?: String
  maxPersons?: Int
  minPersons?: Int
  name?: String
  postalCode?: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  client?: ClientUpdateOneWithoutOffersInput
  budgetLines?: BudgetLineUpdateManyWithoutOfferInput
  clientContact?: ClientContactUpdateOneWithoutOffersInput
  communications?: CommunicationUpdateManyWithoutOfferInput
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType?: EventTypeUpdateOneWithoutOffersInput
  place?: PlaceUpdateOneWithoutOfferInput
  sectionItems?: SectionItemUpdateManyWithoutOfferInput
  menus?: MenuUpdateManyWithoutOfferInput
}

export interface EmployeeUpdateOneWithoutUserInput {
  create?: EmployeeCreateWithoutUserInput
  connect?: EmployeeWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: EmployeeUpdateWithoutUserDataInput
  upsert?: EmployeeUpsertWithoutUserInput
}

export interface ClientUpdateOneWithoutOffersInput {
  create?: ClientCreateWithoutOffersInput
  connect?: ClientWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ClientUpdateWithoutOffersDataInput
  upsert?: ClientUpsertWithoutOffersInput
}

export interface ClientCreateInput {
  address?: String
  email: String
  name: String
  phone: String
  tva?: String
  language?: LanguageEnum
  type?: ClientType
  events?: EventCreateManyInput
  offers?: OfferCreateManyWithoutClientInput
  clientContacts?: ClientContactCreateManyWithoutClientInput
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
  eventStuffs_every?: EventStuffWhereInput
  eventStuffs_some?: EventStuffWhereInput
  eventStuffs_none?: EventStuffWhereInput
}

export interface EventCreateInput {
  canceled?: Boolean
  offer?: OfferCreateOneWithoutEventInput
  employees?: EmployeeCreateManyWithoutEventInput
  eventStuffs?: EventStuffCreateManyWithoutEventInput
  invoice?: InvoiceCreateOneWithoutEventInput
  vehicles?: VehicleCreateManyWithoutEventsInput
}

export interface CategoryWhereInput {
  AND?: CategoryWhereInput[] | CategoryWhereInput
  OR?: CategoryWhereInput[] | CategoryWhereInput
  NOT?: CategoryWhereInput[] | CategoryWhereInput
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
  items_every?: ItemWhereInput
  items_some?: ItemWhereInput
  items_none?: ItemWhereInput
}

export interface OfferCreateWithoutEventInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  client?: ClientCreateOneWithoutOffersInput
  budgetLines?: BudgetLineCreateManyWithoutOfferInput
  clientContact?: ClientContactCreateOneWithoutOffersInput
  communications?: CommunicationCreateManyWithoutOfferInput
  employeeEstimations?: EmployeeEstimationCreateManyWithoutOfferInput
  eventType?: EventTypeCreateOneWithoutOffersInput
  place?: PlaceCreateOneWithoutOfferInput
  sectionItems?: SectionItemCreateManyWithoutOfferInput
  menus?: MenuCreateManyWithoutOfferInput
}

export interface ClientCreateWithoutOffersInput {
  address?: String
  email: String
  name: String
  phone: String
  tva?: String
  language?: LanguageEnum
  type?: ClientType
  events?: EventCreateManyInput
  clientContacts?: ClientContactCreateManyWithoutClientInput
}

export interface ClientContactCreateWithoutClientInput {
  email: String
  mobilePhone?: String
  name: String
  phoneNumber?: String
  offers?: OfferCreateManyWithoutClientContactInput
}

export interface ClientContactUpdateWithoutClientDataInput {
  email?: String
  mobilePhone?: String
  name?: String
  phoneNumber?: String
  offers?: OfferUpdateManyWithoutClientContactInput
}

export interface OfferCreateWithoutClientContactInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  client?: ClientCreateOneWithoutOffersInput
  event?: EventCreateOneWithoutOfferInput
  budgetLines?: BudgetLineCreateManyWithoutOfferInput
  communications?: CommunicationCreateManyWithoutOfferInput
  employeeEstimations?: EmployeeEstimationCreateManyWithoutOfferInput
  eventType?: EventTypeCreateOneWithoutOffersInput
  place?: PlaceCreateOneWithoutOfferInput
  sectionItems?: SectionItemCreateManyWithoutOfferInput
  menus?: MenuCreateManyWithoutOfferInput
}

export interface OfferUpdateManyWithoutClientContactInput {
  create?: OfferCreateWithoutClientContactInput[] | OfferCreateWithoutClientContactInput
  connect?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
  disconnect?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
  delete?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
  update?: OfferUpdateWithWhereUniqueWithoutClientContactInput[] | OfferUpdateWithWhereUniqueWithoutClientContactInput
  upsert?: OfferUpsertWithWhereUniqueWithoutClientContactInput[] | OfferUpsertWithWhereUniqueWithoutClientContactInput
}

export interface EventCreateWithoutOfferInput {
  canceled?: Boolean
  employees?: EmployeeCreateManyWithoutEventInput
  eventStuffs?: EventStuffCreateManyWithoutEventInput
  invoice?: InvoiceCreateOneWithoutEventInput
  vehicles?: VehicleCreateManyWithoutEventsInput
}

export interface OfferUpdateWithWhereUniqueWithoutClientContactInput {
  where: OfferWhereUniqueInput
  data: OfferUpdateWithoutClientContactDataInput
}

export interface EmployeeCreateWithoutEventInput {
  endedAt?: DateTime
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  startedAt?: DateTime
  job?: JobCreateOneWithoutEmployeesInput
  user?: UserCreateOneWithoutEmployeeInput
}

export interface OfferUpdateWithoutClientContactDataInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address?: String
  city?: String
  endTime?: DateTime
  gmtOffset?: String
  maxPersons?: Int
  minPersons?: Int
  name?: String
  postalCode?: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  client?: ClientUpdateOneWithoutOffersInput
  event?: EventUpdateOneWithoutOfferInput
  budgetLines?: BudgetLineUpdateManyWithoutOfferInput
  communications?: CommunicationUpdateManyWithoutOfferInput
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType?: EventTypeUpdateOneWithoutOffersInput
  place?: PlaceUpdateOneWithoutOfferInput
  sectionItems?: SectionItemUpdateManyWithoutOfferInput
  menus?: MenuUpdateManyWithoutOfferInput
}

export interface JobCreateWithoutEmployeesInput {
  name: String
  employeeEstimations?: EmployeeEstimationCreateManyWithoutJobInput
  users?: UserCreateManyWithoutJobsInput
}

export interface EventUpdateOneWithoutOfferInput {
  create?: EventCreateWithoutOfferInput
  connect?: EventWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: EventUpdateWithoutOfferDataInput
  upsert?: EventUpsertWithoutOfferInput
}

export interface EmployeeEstimationCreateWithoutJobInput {
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  number: Int
  pricePerHour?: Float
  total?: Float
  offer?: OfferCreateOneWithoutEmployeeEstimationsInput
}

export interface EventUpdateWithoutOfferDataInput {
  canceled?: Boolean
  employees?: EmployeeUpdateManyWithoutEventInput
  eventStuffs?: EventStuffUpdateManyWithoutEventInput
  invoice?: InvoiceUpdateOneWithoutEventInput
  vehicles?: VehicleUpdateManyWithoutEventsInput
}

export interface OfferCreateWithoutEmployeeEstimationsInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  client?: ClientCreateOneWithoutOffersInput
  event?: EventCreateOneWithoutOfferInput
  budgetLines?: BudgetLineCreateManyWithoutOfferInput
  clientContact?: ClientContactCreateOneWithoutOffersInput
  communications?: CommunicationCreateManyWithoutOfferInput
  eventType?: EventTypeCreateOneWithoutOffersInput
  place?: PlaceCreateOneWithoutOfferInput
  sectionItems?: SectionItemCreateManyWithoutOfferInput
  menus?: MenuCreateManyWithoutOfferInput
}

export interface EmployeeUpdateManyWithoutEventInput {
  create?: EmployeeCreateWithoutEventInput[] | EmployeeCreateWithoutEventInput
  connect?: EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput
  disconnect?: EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput
  delete?: EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput
  update?: EmployeeUpdateWithWhereUniqueWithoutEventInput[] | EmployeeUpdateWithWhereUniqueWithoutEventInput
  upsert?: EmployeeUpsertWithWhereUniqueWithoutEventInput[] | EmployeeUpsertWithWhereUniqueWithoutEventInput
}

export interface BudgetLineCreateWithoutOfferInput {
  description: String
  quantity?: Int
  total?: Float
  unitPrice?: Float
  value: Float
  tax?: TaxCreateOneWithoutBudgetLinesInput
}

export interface EmployeeUpdateWithWhereUniqueWithoutEventInput {
  where: EmployeeWhereUniqueInput
  data: EmployeeUpdateWithoutEventDataInput
}

export interface TaxCreateWithoutBudgetLinesInput {
  name: String
  value: Float
  budgets?: BudgetCreateManyWithoutTaxInput
}

export interface EmployeeUpdateWithoutEventDataInput {
  endedAt?: DateTime
  estimatedEndAt?: DateTime
  estimatedStartAt?: DateTime
  startedAt?: DateTime
  job?: JobUpdateOneWithoutEmployeesInput
  user?: UserUpdateOneWithoutEmployeeInput
}

export interface BudgetCreateWithoutTaxInput {
  description: String
  quantity: Int
  total: Float
  unitPrice: Float
  invoice?: InvoiceCreateOneWithoutBudgetsInput
}

export interface JobUpdateOneWithoutEmployeesInput {
  create?: JobCreateWithoutEmployeesInput
  connect?: JobWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: JobUpdateWithoutEmployeesDataInput
  upsert?: JobUpsertWithoutEmployeesInput
}

export interface InvoiceCreateWithoutBudgetsInput {
  address?: String
  date?: DateTime
  name?: String
  paid?: Boolean
  tva?: String
  number?: Int
  type?: Account
  event?: EventCreateOneWithoutInvoiceInput
}

export interface JobUpdateWithoutEmployeesDataInput {
  name?: String
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutJobInput
  users?: UserUpdateManyWithoutJobsInput
}

export interface EventCreateWithoutInvoiceInput {
  canceled?: Boolean
  offer?: OfferCreateOneWithoutEventInput
  employees?: EmployeeCreateManyWithoutEventInput
  eventStuffs?: EventStuffCreateManyWithoutEventInput
  vehicles?: VehicleCreateManyWithoutEventsInput
}

export interface EmployeeEstimationUpdateManyWithoutJobInput {
  create?: EmployeeEstimationCreateWithoutJobInput[] | EmployeeEstimationCreateWithoutJobInput
  connect?: EmployeeEstimationWhereUniqueInput[] | EmployeeEstimationWhereUniqueInput
  disconnect?: EmployeeEstimationWhereUniqueInput[] | EmployeeEstimationWhereUniqueInput
  delete?: EmployeeEstimationWhereUniqueInput[] | EmployeeEstimationWhereUniqueInput
  update?: EmployeeEstimationUpdateWithWhereUniqueWithoutJobInput[] | EmployeeEstimationUpdateWithWhereUniqueWithoutJobInput
  upsert?: EmployeeEstimationUpsertWithWhereUniqueWithoutJobInput[] | EmployeeEstimationUpsertWithWhereUniqueWithoutJobInput
}

export interface EventStuffCreateWithoutEventInput {
  quantity?: Int
  stuff?: StuffCreateOneWithoutEventStuffsInput
}

export interface EmployeeEstimationUpdateWithWhereUniqueWithoutJobInput {
  where: EmployeeEstimationWhereUniqueInput
  data: EmployeeEstimationUpdateWithoutJobDataInput
}

export interface StuffCreateWithoutEventStuffsInput {
  name: String
}

export interface EmployeeEstimationUpdateWithoutJobDataInput {
  estimatedEndAt?: DateTime
  estimatedStartAt?: DateTime
  number?: Int
  pricePerHour?: Float
  total?: Float
  offer?: OfferUpdateOneWithoutEmployeeEstimationsInput
}

export interface VehicleCreateWithoutEventsInput {
  color?: String
  description?: String
  name: String
  plate: String
  year?: Int
}

export interface OfferUpdateOneWithoutEmployeeEstimationsInput {
  create?: OfferCreateWithoutEmployeeEstimationsInput
  connect?: OfferWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OfferUpdateWithoutEmployeeEstimationsDataInput
  upsert?: OfferUpsertWithoutEmployeeEstimationsInput
}

export interface ClientContactCreateWithoutOffersInput {
  email: String
  mobilePhone?: String
  name: String
  phoneNumber?: String
  client?: ClientCreateOneWithoutClientContactsInput
}

export interface OfferUpdateWithoutEmployeeEstimationsDataInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address?: String
  city?: String
  endTime?: DateTime
  gmtOffset?: String
  maxPersons?: Int
  minPersons?: Int
  name?: String
  postalCode?: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  client?: ClientUpdateOneWithoutOffersInput
  event?: EventUpdateOneWithoutOfferInput
  budgetLines?: BudgetLineUpdateManyWithoutOfferInput
  clientContact?: ClientContactUpdateOneWithoutOffersInput
  communications?: CommunicationUpdateManyWithoutOfferInput
  eventType?: EventTypeUpdateOneWithoutOffersInput
  place?: PlaceUpdateOneWithoutOfferInput
  sectionItems?: SectionItemUpdateManyWithoutOfferInput
  menus?: MenuUpdateManyWithoutOfferInput
}

export interface ClientCreateWithoutClientContactsInput {
  address?: String
  email: String
  name: String
  phone: String
  tva?: String
  language?: LanguageEnum
  type?: ClientType
  events?: EventCreateManyInput
  offers?: OfferCreateManyWithoutClientInput
}

export interface BudgetLineUpdateManyWithoutOfferInput {
  create?: BudgetLineCreateWithoutOfferInput[] | BudgetLineCreateWithoutOfferInput
  connect?: BudgetLineWhereUniqueInput[] | BudgetLineWhereUniqueInput
  disconnect?: BudgetLineWhereUniqueInput[] | BudgetLineWhereUniqueInput
  delete?: BudgetLineWhereUniqueInput[] | BudgetLineWhereUniqueInput
  update?: BudgetLineUpdateWithWhereUniqueWithoutOfferInput[] | BudgetLineUpdateWithWhereUniqueWithoutOfferInput
  upsert?: BudgetLineUpsertWithWhereUniqueWithoutOfferInput[] | BudgetLineUpsertWithWhereUniqueWithoutOfferInput
}

export interface OfferCreateWithoutClientInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  event?: EventCreateOneWithoutOfferInput
  budgetLines?: BudgetLineCreateManyWithoutOfferInput
  clientContact?: ClientContactCreateOneWithoutOffersInput
  communications?: CommunicationCreateManyWithoutOfferInput
  employeeEstimations?: EmployeeEstimationCreateManyWithoutOfferInput
  eventType?: EventTypeCreateOneWithoutOffersInput
  place?: PlaceCreateOneWithoutOfferInput
  sectionItems?: SectionItemCreateManyWithoutOfferInput
  menus?: MenuCreateManyWithoutOfferInput
}

export interface BudgetLineUpdateWithWhereUniqueWithoutOfferInput {
  where: BudgetLineWhereUniqueInput
  data: BudgetLineUpdateWithoutOfferDataInput
}

export interface CommunicationCreateWithoutOfferInput {
  message: String
  subject: String
  channel: Channel
  date: DateTime
  gmtOffset: String
}

export interface BudgetLineUpdateWithoutOfferDataInput {
  description?: String
  quantity?: Int
  total?: Float
  unitPrice?: Float
  value?: Float
  tax?: TaxUpdateOneWithoutBudgetLinesInput
}

export interface EmployeeEstimationCreateWithoutOfferInput {
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  number: Int
  pricePerHour?: Float
  total?: Float
  job?: JobCreateOneWithoutEmployeeEstimationsInput
}

export interface TaxUpdateOneWithoutBudgetLinesInput {
  create?: TaxCreateWithoutBudgetLinesInput
  connect?: TaxWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: TaxUpdateWithoutBudgetLinesDataInput
  upsert?: TaxUpsertWithoutBudgetLinesInput
}

export interface JobCreateWithoutEmployeeEstimationsInput {
  name: String
  employees?: EmployeeCreateManyWithoutJobInput
  users?: UserCreateManyWithoutJobsInput
}

export interface TaxUpdateWithoutBudgetLinesDataInput {
  name?: String
  value?: Float
  budgets?: BudgetUpdateManyWithoutTaxInput
}

export interface EmployeeCreateWithoutJobInput {
  endedAt?: DateTime
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  startedAt?: DateTime
  event?: EventCreateOneWithoutEmployeesInput
  user?: UserCreateOneWithoutEmployeeInput
}

export interface BudgetUpdateManyWithoutTaxInput {
  create?: BudgetCreateWithoutTaxInput[] | BudgetCreateWithoutTaxInput
  connect?: BudgetWhereUniqueInput[] | BudgetWhereUniqueInput
  disconnect?: BudgetWhereUniqueInput[] | BudgetWhereUniqueInput
  delete?: BudgetWhereUniqueInput[] | BudgetWhereUniqueInput
  update?: BudgetUpdateWithWhereUniqueWithoutTaxInput[] | BudgetUpdateWithWhereUniqueWithoutTaxInput
  upsert?: BudgetUpsertWithWhereUniqueWithoutTaxInput[] | BudgetUpsertWithWhereUniqueWithoutTaxInput
}

export interface EventCreateWithoutEmployeesInput {
  canceled?: Boolean
  offer?: OfferCreateOneWithoutEventInput
  eventStuffs?: EventStuffCreateManyWithoutEventInput
  invoice?: InvoiceCreateOneWithoutEventInput
  vehicles?: VehicleCreateManyWithoutEventsInput
}

export interface BudgetUpdateWithWhereUniqueWithoutTaxInput {
  where: BudgetWhereUniqueInput
  data: BudgetUpdateWithoutTaxDataInput
}

export interface InvoiceCreateWithoutEventInput {
  address?: String
  date?: DateTime
  name?: String
  paid?: Boolean
  tva?: String
  number?: Int
  type?: Account
  budgets?: BudgetCreateManyWithoutInvoiceInput
}

export interface BudgetUpdateWithoutTaxDataInput {
  description?: String
  quantity?: Int
  total?: Float
  unitPrice?: Float
  invoice?: InvoiceUpdateOneWithoutBudgetsInput
}

export interface BudgetCreateWithoutInvoiceInput {
  description: String
  quantity: Int
  total: Float
  unitPrice: Float
  tax?: TaxCreateOneWithoutBudgetsInput
}

export interface InvoiceUpdateOneWithoutBudgetsInput {
  create?: InvoiceCreateWithoutBudgetsInput
  connect?: InvoiceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: InvoiceUpdateWithoutBudgetsDataInput
  upsert?: InvoiceUpsertWithoutBudgetsInput
}

export interface TaxCreateWithoutBudgetsInput {
  name: String
  value: Float
  budgetLines?: BudgetLineCreateManyWithoutTaxInput
}

export interface InvoiceUpdateWithoutBudgetsDataInput {
  address?: String
  date?: DateTime
  name?: String
  paid?: Boolean
  tva?: String
  number?: Int
  type?: Account
  event?: EventUpdateOneWithoutInvoiceInput
}

export interface BudgetLineCreateWithoutTaxInput {
  description: String
  quantity?: Int
  total?: Float
  unitPrice?: Float
  value: Float
  offer?: OfferCreateOneWithoutBudgetLinesInput
}

export interface EventUpdateOneWithoutInvoiceInput {
  create?: EventCreateWithoutInvoiceInput
  connect?: EventWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: EventUpdateWithoutInvoiceDataInput
  upsert?: EventUpsertWithoutInvoiceInput
}

export interface OfferCreateWithoutBudgetLinesInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  client?: ClientCreateOneWithoutOffersInput
  event?: EventCreateOneWithoutOfferInput
  clientContact?: ClientContactCreateOneWithoutOffersInput
  communications?: CommunicationCreateManyWithoutOfferInput
  employeeEstimations?: EmployeeEstimationCreateManyWithoutOfferInput
  eventType?: EventTypeCreateOneWithoutOffersInput
  place?: PlaceCreateOneWithoutOfferInput
  sectionItems?: SectionItemCreateManyWithoutOfferInput
  menus?: MenuCreateManyWithoutOfferInput
}

export interface EventUpdateWithoutInvoiceDataInput {
  canceled?: Boolean
  offer?: OfferUpdateOneWithoutEventInput
  employees?: EmployeeUpdateManyWithoutEventInput
  eventStuffs?: EventStuffUpdateManyWithoutEventInput
  vehicles?: VehicleUpdateManyWithoutEventsInput
}

export interface EventTypeCreateWithoutOffersInput {
  name: String
}

export interface EventStuffUpdateManyWithoutEventInput {
  create?: EventStuffCreateWithoutEventInput[] | EventStuffCreateWithoutEventInput
  connect?: EventStuffWhereUniqueInput[] | EventStuffWhereUniqueInput
  disconnect?: EventStuffWhereUniqueInput[] | EventStuffWhereUniqueInput
  delete?: EventStuffWhereUniqueInput[] | EventStuffWhereUniqueInput
  update?: EventStuffUpdateWithWhereUniqueWithoutEventInput[] | EventStuffUpdateWithWhereUniqueWithoutEventInput
  upsert?: EventStuffUpsertWithWhereUniqueWithoutEventInput[] | EventStuffUpsertWithWhereUniqueWithoutEventInput
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

export interface EventStuffUpdateWithWhereUniqueWithoutEventInput {
  where: EventStuffWhereUniqueInput
  data: EventStuffUpdateWithoutEventDataInput
}

export interface PlaceContactCreateWithoutPlaceInput {
  email?: String
  mobilePhone?: String
  name: String
  phoneNumber?: String
}

export interface EventStuffUpdateWithoutEventDataInput {
  quantity?: Int
  stuff?: StuffUpdateOneWithoutEventStuffsInput
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
  static?: Boolean
  type?: SectionTypes
  w: Int
  x: Int
  y?: Int
  menu?: MenuCreateOneWithoutSectionItemInput
}

export interface StuffUpdateOneWithoutEventStuffsInput {
  create?: StuffCreateWithoutEventStuffsInput
  connect?: StuffWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: StuffUpdateWithoutEventStuffsDataInput
  upsert?: StuffUpsertWithoutEventStuffsInput
}

export interface ItemTranslationWhereInput {
  AND?: ItemTranslationWhereInput[] | ItemTranslationWhereInput
  OR?: ItemTranslationWhereInput[] | ItemTranslationWhereInput
  NOT?: ItemTranslationWhereInput[] | ItemTranslationWhereInput
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
  language?: LanguageEnum
  language_not?: LanguageEnum
  language_in?: LanguageEnum[] | LanguageEnum
  language_not_in?: LanguageEnum[] | LanguageEnum
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
  items?: ItemWhereInput
}

export interface StuffUpdateWithoutEventStuffsDataInput {
  name?: String
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

export interface StuffUpsertWithoutEventStuffsInput {
  update: StuffUpdateWithoutEventStuffsDataInput
  create: StuffCreateWithoutEventStuffsInput
}

export interface ItemProposalSubscriptionWhereInput {
  AND?: ItemProposalSubscriptionWhereInput[] | ItemProposalSubscriptionWhereInput
  OR?: ItemProposalSubscriptionWhereInput[] | ItemProposalSubscriptionWhereInput
  NOT?: ItemProposalSubscriptionWhereInput[] | ItemProposalSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ItemProposalWhereInput
}

export interface EventStuffUpsertWithWhereUniqueWithoutEventInput {
  where: EventStuffWhereUniqueInput
  update: EventStuffUpdateWithoutEventDataInput
  create: EventStuffCreateWithoutEventInput
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

export interface VehicleUpdateManyWithoutEventsInput {
  create?: VehicleCreateWithoutEventsInput[] | VehicleCreateWithoutEventsInput
  connect?: VehicleWhereUniqueInput[] | VehicleWhereUniqueInput
  disconnect?: VehicleWhereUniqueInput[] | VehicleWhereUniqueInput
  delete?: VehicleWhereUniqueInput[] | VehicleWhereUniqueInput
  update?: VehicleUpdateWithWhereUniqueWithoutEventsInput[] | VehicleUpdateWithWhereUniqueWithoutEventsInput
  upsert?: VehicleUpsertWithWhereUniqueWithoutEventsInput[] | VehicleUpsertWithWhereUniqueWithoutEventsInput
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

export interface VehicleUpdateWithWhereUniqueWithoutEventsInput {
  where: VehicleWhereUniqueInput
  data: VehicleUpdateWithoutEventsDataInput
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

export interface VehicleUpdateWithoutEventsDataInput {
  color?: String
  description?: String
  name?: String
  plate?: String
  year?: Int
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

export interface VehicleUpsertWithWhereUniqueWithoutEventsInput {
  where: VehicleWhereUniqueInput
  update: VehicleUpdateWithoutEventsDataInput
  create: VehicleCreateWithoutEventsInput
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

export interface EventUpsertWithoutInvoiceInput {
  update: EventUpdateWithoutInvoiceDataInput
  create: EventCreateWithoutInvoiceInput
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
  offer?: OfferWhereInput
}

export interface InvoiceUpsertWithoutBudgetsInput {
  update: InvoiceUpdateWithoutBudgetsDataInput
  create: InvoiceCreateWithoutBudgetsInput
}

export interface InvoiceWhereInput {
  AND?: InvoiceWhereInput[] | InvoiceWhereInput
  OR?: InvoiceWhereInput[] | InvoiceWhereInput
  NOT?: InvoiceWhereInput[] | InvoiceWhereInput
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
  date?: DateTime
  date_not?: DateTime
  date_in?: DateTime[] | DateTime
  date_not_in?: DateTime[] | DateTime
  date_lt?: DateTime
  date_lte?: DateTime
  date_gt?: DateTime
  date_gte?: DateTime
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
  paid?: Boolean
  paid_not?: Boolean
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
  number?: Int
  number_not?: Int
  number_in?: Int[] | Int
  number_not_in?: Int[] | Int
  number_lt?: Int
  number_lte?: Int
  number_gt?: Int
  number_gte?: Int
  type?: Account
  type_not?: Account
  type_in?: Account[] | Account
  type_not_in?: Account[] | Account
  budgets_every?: BudgetWhereInput
  budgets_some?: BudgetWhereInput
  budgets_none?: BudgetWhereInput
  event?: EventWhereInput
}

export interface BudgetUpsertWithWhereUniqueWithoutTaxInput {
  where: BudgetWhereUniqueInput
  update: BudgetUpdateWithoutTaxDataInput
  create: BudgetCreateWithoutTaxInput
}

export interface ItemTranslationSubscriptionWhereInput {
  AND?: ItemTranslationSubscriptionWhereInput[] | ItemTranslationSubscriptionWhereInput
  OR?: ItemTranslationSubscriptionWhereInput[] | ItemTranslationSubscriptionWhereInput
  NOT?: ItemTranslationSubscriptionWhereInput[] | ItemTranslationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ItemTranslationWhereInput
}

export interface TaxUpsertWithoutBudgetLinesInput {
  update: TaxUpdateWithoutBudgetLinesDataInput
  create: TaxCreateWithoutBudgetLinesInput
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
  total?: Float
  total_not?: Float
  total_in?: Float[] | Float
  total_not_in?: Float[] | Float
  total_lt?: Float
  total_lte?: Float
  total_gt?: Float
  total_gte?: Float
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

export interface BudgetLineUpsertWithWhereUniqueWithoutOfferInput {
  where: BudgetLineWhereUniqueInput
  update: BudgetLineUpdateWithoutOfferDataInput
  create: BudgetLineCreateWithoutOfferInput
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
  canceled?: Boolean
  canceled_not?: Boolean
  offer?: OfferWhereInput
  employees_every?: EmployeeWhereInput
  employees_some?: EmployeeWhereInput
  employees_none?: EmployeeWhereInput
  eventStuffs_every?: EventStuffWhereInput
  eventStuffs_some?: EventStuffWhereInput
  eventStuffs_none?: EventStuffWhereInput
  invoice?: InvoiceWhereInput
  vehicles_every?: VehicleWhereInput
  vehicles_some?: VehicleWhereInput
  vehicles_none?: VehicleWhereInput
}

export interface ClientContactUpdateOneWithoutOffersInput {
  create?: ClientContactCreateWithoutOffersInput
  connect?: ClientContactWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ClientContactUpdateWithoutOffersDataInput
  upsert?: ClientContactUpsertWithoutOffersInput
}

export interface OfferWhereUniqueInput {
  id?: ID_Input
}

export interface ClientContactUpdateWithoutOffersDataInput {
  email?: String
  mobilePhone?: String
  name?: String
  phoneNumber?: String
  client?: ClientUpdateOneWithoutClientContactsInput
}

export interface PlaceWhereUniqueInput {
  id?: ID_Input
}

export interface ClientUpdateOneWithoutClientContactsInput {
  create?: ClientCreateWithoutClientContactsInput
  connect?: ClientWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ClientUpdateWithoutClientContactsDataInput
  upsert?: ClientUpsertWithoutClientContactsInput
}

export interface EmployeeWhereUniqueInput {
  id?: ID_Input
}

export interface ClientUpdateWithoutClientContactsDataInput {
  address?: String
  email?: String
  name?: String
  phone?: String
  tva?: String
  language?: LanguageEnum
  type?: ClientType
  events?: EventUpdateManyInput
  offers?: OfferUpdateManyWithoutClientInput
}

export interface InvoiceWhereUniqueInput {
  id?: ID_Input
}

export interface OfferUpdateManyWithoutClientInput {
  create?: OfferCreateWithoutClientInput[] | OfferCreateWithoutClientInput
  connect?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
  disconnect?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
  delete?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
  update?: OfferUpdateWithWhereUniqueWithoutClientInput[] | OfferUpdateWithWhereUniqueWithoutClientInput
  upsert?: OfferUpsertWithWhereUniqueWithoutClientInput[] | OfferUpsertWithWhereUniqueWithoutClientInput
}

export interface TaxWhereUniqueInput {
  id?: ID_Input
}

export interface OfferUpdateWithWhereUniqueWithoutClientInput {
  where: OfferWhereUniqueInput
  data: OfferUpdateWithoutClientDataInput
}

export interface SectionWhereUniqueInput {
  id?: ID_Input
}

export interface OfferUpdateWithoutClientDataInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address?: String
  city?: String
  endTime?: DateTime
  gmtOffset?: String
  maxPersons?: Int
  minPersons?: Int
  name?: String
  postalCode?: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  event?: EventUpdateOneWithoutOfferInput
  budgetLines?: BudgetLineUpdateManyWithoutOfferInput
  clientContact?: ClientContactUpdateOneWithoutOffersInput
  communications?: CommunicationUpdateManyWithoutOfferInput
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType?: EventTypeUpdateOneWithoutOffersInput
  place?: PlaceUpdateOneWithoutOfferInput
  sectionItems?: SectionItemUpdateManyWithoutOfferInput
  menus?: MenuUpdateManyWithoutOfferInput
}

export interface SectionUpdateInput {
  name?: String
  showPdf?: Boolean
  itemProposals?: ItemProposalUpdateManyWithoutSectionInput
  menu?: MenuUpdateOneWithoutSectionsInput
}

export interface CommunicationUpdateManyWithoutOfferInput {
  create?: CommunicationCreateWithoutOfferInput[] | CommunicationCreateWithoutOfferInput
  connect?: CommunicationWhereUniqueInput[] | CommunicationWhereUniqueInput
  disconnect?: CommunicationWhereUniqueInput[] | CommunicationWhereUniqueInput
  delete?: CommunicationWhereUniqueInput[] | CommunicationWhereUniqueInput
  update?: CommunicationUpdateWithWhereUniqueWithoutOfferInput[] | CommunicationUpdateWithWhereUniqueWithoutOfferInput
  upsert?: CommunicationUpsertWithWhereUniqueWithoutOfferInput[] | CommunicationUpsertWithWhereUniqueWithoutOfferInput
}

export interface MenuUpdateWithoutSectionsDataInput {
  comment?: String
  endDate?: DateTime
  hasItemsCold?: Boolean
  hasItemsDessert?: Boolean
  hasItemsHot?: Boolean
  hasItemsZCold?: Boolean
  hasItemsZHot?: Boolean
  kitchenNotes?: String
  name?: String
  people?: Int
  price?: Float
  startDate?: DateTime
  offer?: OfferUpdateOneWithoutMenusInput
  sectionItem?: SectionItemUpdateOneWithoutMenuInput
}

export interface CommunicationUpdateWithWhereUniqueWithoutOfferInput {
  where: CommunicationWhereUniqueInput
  data: CommunicationUpdateWithoutOfferDataInput
}

export interface ItemProposalUpdateInput {
  status?: ItemProposalStatus
  items?: ItemUpdateManyInput
  section?: SectionUpdateOneWithoutItemProposalsInput
}

export interface CommunicationUpdateWithoutOfferDataInput {
  message?: String
  subject?: String
  channel?: Channel
  date?: DateTime
  gmtOffset?: String
}

export interface EventUpdateManyWithoutVehiclesInput {
  create?: EventCreateWithoutVehiclesInput[] | EventCreateWithoutVehiclesInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput
  update?: EventUpdateWithWhereUniqueWithoutVehiclesInput[] | EventUpdateWithWhereUniqueWithoutVehiclesInput
  upsert?: EventUpsertWithWhereUniqueWithoutVehiclesInput[] | EventUpsertWithWhereUniqueWithoutVehiclesInput
}

export interface CommunicationUpsertWithWhereUniqueWithoutOfferInput {
  where: CommunicationWhereUniqueInput
  update: CommunicationUpdateWithoutOfferDataInput
  create: CommunicationCreateWithoutOfferInput
}

export interface EventStuffUpdateWithoutStuffDataInput {
  quantity?: Int
  event?: EventUpdateOneWithoutEventStuffsInput
}

export interface EmployeeEstimationUpdateManyWithoutOfferInput {
  create?: EmployeeEstimationCreateWithoutOfferInput[] | EmployeeEstimationCreateWithoutOfferInput
  connect?: EmployeeEstimationWhereUniqueInput[] | EmployeeEstimationWhereUniqueInput
  disconnect?: EmployeeEstimationWhereUniqueInput[] | EmployeeEstimationWhereUniqueInput
  delete?: EmployeeEstimationWhereUniqueInput[] | EmployeeEstimationWhereUniqueInput
  update?: EmployeeEstimationUpdateWithWhereUniqueWithoutOfferInput[] | EmployeeEstimationUpdateWithWhereUniqueWithoutOfferInput
  upsert?: EmployeeEstimationUpsertWithWhereUniqueWithoutOfferInput[] | EmployeeEstimationUpsertWithWhereUniqueWithoutOfferInput
}

export interface PlaceUpsertWithoutPlaceContactsInput {
  update: PlaceUpdateWithoutPlaceContactsDataInput
  create: PlaceCreateWithoutPlaceContactsInput
}

export interface EmployeeEstimationUpdateWithWhereUniqueWithoutOfferInput {
  where: EmployeeEstimationWhereUniqueInput
  data: EmployeeEstimationUpdateWithoutOfferDataInput
}

export interface JobUpdateInput {
  name?: String
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutJobInput
  employees?: EmployeeUpdateManyWithoutJobInput
  users?: UserUpdateManyWithoutJobsInput
}

export interface EmployeeEstimationUpdateWithoutOfferDataInput {
  estimatedEndAt?: DateTime
  estimatedStartAt?: DateTime
  number?: Int
  pricePerHour?: Float
  total?: Float
  job?: JobUpdateOneWithoutEmployeeEstimationsInput
}

export interface OfferUpdateWithWhereUniqueWithoutEventTypeInput {
  where: OfferWhereUniqueInput
  data: OfferUpdateWithoutEventTypeDataInput
}

export interface JobUpdateOneWithoutEmployeeEstimationsInput {
  create?: JobCreateWithoutEmployeeEstimationsInput
  connect?: JobWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: JobUpdateWithoutEmployeeEstimationsDataInput
  upsert?: JobUpsertWithoutEmployeeEstimationsInput
}

export interface EventUpdateWithoutEventStuffsDataInput {
  canceled?: Boolean
  offer?: OfferUpdateOneWithoutEventInput
  employees?: EmployeeUpdateManyWithoutEventInput
  invoice?: InvoiceUpdateOneWithoutEventInput
  vehicles?: VehicleUpdateManyWithoutEventsInput
}

export interface JobUpdateWithoutEmployeeEstimationsDataInput {
  name?: String
  employees?: EmployeeUpdateManyWithoutJobInput
  users?: UserUpdateManyWithoutJobsInput
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

export interface EmployeeUpdateManyWithoutJobInput {
  create?: EmployeeCreateWithoutJobInput[] | EmployeeCreateWithoutJobInput
  connect?: EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput
  disconnect?: EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput
  delete?: EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput
  update?: EmployeeUpdateWithWhereUniqueWithoutJobInput[] | EmployeeUpdateWithWhereUniqueWithoutJobInput
  upsert?: EmployeeUpsertWithWhereUniqueWithoutJobInput[] | EmployeeUpsertWithWhereUniqueWithoutJobInput
}

export interface ItemUpdateManyWithoutCategoriesInput {
  create?: ItemCreateWithoutCategoriesInput[] | ItemCreateWithoutCategoriesInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  disconnect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  delete?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  update?: ItemUpdateWithWhereUniqueWithoutCategoriesInput[] | ItemUpdateWithWhereUniqueWithoutCategoriesInput
  upsert?: ItemUpsertWithWhereUniqueWithoutCategoriesInput[] | ItemUpsertWithWhereUniqueWithoutCategoriesInput
}

export interface EmployeeUpdateWithWhereUniqueWithoutJobInput {
  where: EmployeeWhereUniqueInput
  data: EmployeeUpdateWithoutJobDataInput
}

export interface OfferUpsertWithoutPlaceInput {
  update: OfferUpdateWithoutPlaceDataInput
  create: OfferCreateWithoutPlaceInput
}

export interface EmployeeUpdateWithoutJobDataInput {
  endedAt?: DateTime
  estimatedEndAt?: DateTime
  estimatedStartAt?: DateTime
  startedAt?: DateTime
  event?: EventUpdateOneWithoutEmployeesInput
  user?: UserUpdateOneWithoutEmployeeInput
}

export interface ClientContactUpdateInput {
  email?: String
  mobilePhone?: String
  name?: String
  phoneNumber?: String
  client?: ClientUpdateOneWithoutClientContactsInput
  offers?: OfferUpdateManyWithoutClientContactInput
}

export interface EventUpdateOneWithoutEmployeesInput {
  create?: EventCreateWithoutEmployeesInput
  connect?: EventWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: EventUpdateWithoutEmployeesDataInput
  upsert?: EventUpsertWithoutEmployeesInput
}

export interface ItemUpdateOneWithoutItemTranslationsInput {
  create?: ItemCreateWithoutItemTranslationsInput
  connect?: ItemWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ItemUpdateWithoutItemTranslationsDataInput
  upsert?: ItemUpsertWithoutItemTranslationsInput
}

export interface EventUpdateWithoutEmployeesDataInput {
  canceled?: Boolean
  offer?: OfferUpdateOneWithoutEventInput
  eventStuffs?: EventStuffUpdateManyWithoutEventInput
  invoice?: InvoiceUpdateOneWithoutEventInput
  vehicles?: VehicleUpdateManyWithoutEventsInput
}

export interface OfferUpdateWithoutCommunicationsDataInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address?: String
  city?: String
  endTime?: DateTime
  gmtOffset?: String
  maxPersons?: Int
  minPersons?: Int
  name?: String
  postalCode?: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  client?: ClientUpdateOneWithoutOffersInput
  event?: EventUpdateOneWithoutOfferInput
  budgetLines?: BudgetLineUpdateManyWithoutOfferInput
  clientContact?: ClientContactUpdateOneWithoutOffersInput
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType?: EventTypeUpdateOneWithoutOffersInput
  place?: PlaceUpdateOneWithoutOfferInput
  sectionItems?: SectionItemUpdateManyWithoutOfferInput
  menus?: MenuUpdateManyWithoutOfferInput
}

export interface InvoiceUpdateOneWithoutEventInput {
  create?: InvoiceCreateWithoutEventInput
  connect?: InvoiceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: InvoiceUpdateWithoutEventDataInput
  upsert?: InvoiceUpsertWithoutEventInput
}

export interface OfferUpsertWithoutEventInput {
  update: OfferUpdateWithoutEventDataInput
  create: OfferCreateWithoutEventInput
}

export interface InvoiceUpdateWithoutEventDataInput {
  address?: String
  date?: DateTime
  name?: String
  paid?: Boolean
  tva?: String
  number?: Int
  type?: Account
  budgets?: BudgetUpdateManyWithoutInvoiceInput
}

export interface EventUpsertWithoutOfferInput {
  update: EventUpdateWithoutOfferDataInput
  create: EventCreateWithoutOfferInput
}

export interface BudgetUpdateManyWithoutInvoiceInput {
  create?: BudgetCreateWithoutInvoiceInput[] | BudgetCreateWithoutInvoiceInput
  connect?: BudgetWhereUniqueInput[] | BudgetWhereUniqueInput
  disconnect?: BudgetWhereUniqueInput[] | BudgetWhereUniqueInput
  delete?: BudgetWhereUniqueInput[] | BudgetWhereUniqueInput
  update?: BudgetUpdateWithWhereUniqueWithoutInvoiceInput[] | BudgetUpdateWithWhereUniqueWithoutInvoiceInput
  upsert?: BudgetUpsertWithWhereUniqueWithoutInvoiceInput[] | BudgetUpsertWithWhereUniqueWithoutInvoiceInput
}

export interface OfferUpsertWithoutEmployeeEstimationsInput {
  update: OfferUpdateWithoutEmployeeEstimationsDataInput
  create: OfferCreateWithoutEmployeeEstimationsInput
}

export interface BudgetUpdateWithWhereUniqueWithoutInvoiceInput {
  where: BudgetWhereUniqueInput
  data: BudgetUpdateWithoutInvoiceDataInput
}

export interface EmployeeEstimationUpsertWithWhereUniqueWithoutOfferInput {
  where: EmployeeEstimationWhereUniqueInput
  update: EmployeeEstimationUpdateWithoutOfferDataInput
  create: EmployeeEstimationCreateWithoutOfferInput
}

export interface BudgetUpdateWithoutInvoiceDataInput {
  description?: String
  quantity?: Int
  total?: Float
  unitPrice?: Float
  tax?: TaxUpdateOneWithoutBudgetsInput
}

export interface EmployeeUpdateWithoutUserDataInput {
  endedAt?: DateTime
  estimatedEndAt?: DateTime
  estimatedStartAt?: DateTime
  startedAt?: DateTime
  event?: EventUpdateOneWithoutEmployeesInput
  job?: JobUpdateOneWithoutEmployeesInput
}

export interface TaxUpdateOneWithoutBudgetsInput {
  create?: TaxCreateWithoutBudgetsInput
  connect?: TaxWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: TaxUpdateWithoutBudgetsDataInput
  upsert?: TaxUpsertWithoutBudgetsInput
}

export interface EventCreateManyInput {
  create?: EventCreateInput[] | EventCreateInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface TaxUpdateWithoutBudgetsDataInput {
  name?: String
  value?: Float
  budgetLines?: BudgetLineUpdateManyWithoutTaxInput
}

export interface ClientCreateOneWithoutOffersInput {
  create?: ClientCreateWithoutOffersInput
  connect?: ClientWhereUniqueInput
}

export interface BudgetLineUpdateManyWithoutTaxInput {
  create?: BudgetLineCreateWithoutTaxInput[] | BudgetLineCreateWithoutTaxInput
  connect?: BudgetLineWhereUniqueInput[] | BudgetLineWhereUniqueInput
  disconnect?: BudgetLineWhereUniqueInput[] | BudgetLineWhereUniqueInput
  delete?: BudgetLineWhereUniqueInput[] | BudgetLineWhereUniqueInput
  update?: BudgetLineUpdateWithWhereUniqueWithoutTaxInput[] | BudgetLineUpdateWithWhereUniqueWithoutTaxInput
  upsert?: BudgetLineUpsertWithWhereUniqueWithoutTaxInput[] | BudgetLineUpsertWithWhereUniqueWithoutTaxInput
}

export interface OfferCreateManyWithoutClientContactInput {
  create?: OfferCreateWithoutClientContactInput[] | OfferCreateWithoutClientContactInput
  connect?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
}

export interface BudgetLineUpdateWithWhereUniqueWithoutTaxInput {
  where: BudgetLineWhereUniqueInput
  data: BudgetLineUpdateWithoutTaxDataInput
}

export interface EmployeeCreateManyWithoutEventInput {
  create?: EmployeeCreateWithoutEventInput[] | EmployeeCreateWithoutEventInput
  connect?: EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput
}

export interface BudgetLineUpdateWithoutTaxDataInput {
  description?: String
  quantity?: Int
  total?: Float
  unitPrice?: Float
  value?: Float
  offer?: OfferUpdateOneWithoutBudgetLinesInput
}

export interface EmployeeEstimationCreateManyWithoutJobInput {
  create?: EmployeeEstimationCreateWithoutJobInput[] | EmployeeEstimationCreateWithoutJobInput
  connect?: EmployeeEstimationWhereUniqueInput[] | EmployeeEstimationWhereUniqueInput
}

export interface OfferUpdateOneWithoutBudgetLinesInput {
  create?: OfferCreateWithoutBudgetLinesInput
  connect?: OfferWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OfferUpdateWithoutBudgetLinesDataInput
  upsert?: OfferUpsertWithoutBudgetLinesInput
}

export interface BudgetLineCreateManyWithoutOfferInput {
  create?: BudgetLineCreateWithoutOfferInput[] | BudgetLineCreateWithoutOfferInput
  connect?: BudgetLineWhereUniqueInput[] | BudgetLineWhereUniqueInput
}

export interface OfferUpdateWithoutBudgetLinesDataInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address?: String
  city?: String
  endTime?: DateTime
  gmtOffset?: String
  maxPersons?: Int
  minPersons?: Int
  name?: String
  postalCode?: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  client?: ClientUpdateOneWithoutOffersInput
  event?: EventUpdateOneWithoutOfferInput
  clientContact?: ClientContactUpdateOneWithoutOffersInput
  communications?: CommunicationUpdateManyWithoutOfferInput
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType?: EventTypeUpdateOneWithoutOffersInput
  place?: PlaceUpdateOneWithoutOfferInput
  sectionItems?: SectionItemUpdateManyWithoutOfferInput
  menus?: MenuUpdateManyWithoutOfferInput
}

export interface BudgetCreateManyWithoutTaxInput {
  create?: BudgetCreateWithoutTaxInput[] | BudgetCreateWithoutTaxInput
  connect?: BudgetWhereUniqueInput[] | BudgetWhereUniqueInput
}

export interface EventTypeUpdateOneWithoutOffersInput {
  create?: EventTypeCreateWithoutOffersInput
  connect?: EventTypeWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: EventTypeUpdateWithoutOffersDataInput
  upsert?: EventTypeUpsertWithoutOffersInput
}

export interface EventCreateOneWithoutInvoiceInput {
  create?: EventCreateWithoutInvoiceInput
  connect?: EventWhereUniqueInput
}

export interface EventTypeUpdateWithoutOffersDataInput {
  name?: String
}

export interface StuffCreateOneWithoutEventStuffsInput {
  create?: StuffCreateWithoutEventStuffsInput
  connect?: StuffWhereUniqueInput
}

export interface EventTypeUpsertWithoutOffersInput {
  update: EventTypeUpdateWithoutOffersDataInput
  create: EventTypeCreateWithoutOffersInput
}

export interface ClientContactCreateOneWithoutOffersInput {
  create?: ClientContactCreateWithoutOffersInput
  connect?: ClientContactWhereUniqueInput
}

export interface PlaceUpdateOneWithoutOfferInput {
  create?: PlaceCreateWithoutOfferInput
  connect?: PlaceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PlaceUpdateWithoutOfferDataInput
  upsert?: PlaceUpsertWithoutOfferInput
}

export interface OfferCreateManyWithoutClientInput {
  create?: OfferCreateWithoutClientInput[] | OfferCreateWithoutClientInput
  connect?: OfferWhereUniqueInput[] | OfferWhereUniqueInput
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

export interface EmployeeEstimationCreateManyWithoutOfferInput {
  create?: EmployeeEstimationCreateWithoutOfferInput[] | EmployeeEstimationCreateWithoutOfferInput
  connect?: EmployeeEstimationWhereUniqueInput[] | EmployeeEstimationWhereUniqueInput
}

export interface PlaceContactUpdateManyWithoutPlaceInput {
  create?: PlaceContactCreateWithoutPlaceInput[] | PlaceContactCreateWithoutPlaceInput
  connect?: PlaceContactWhereUniqueInput[] | PlaceContactWhereUniqueInput
  disconnect?: PlaceContactWhereUniqueInput[] | PlaceContactWhereUniqueInput
  delete?: PlaceContactWhereUniqueInput[] | PlaceContactWhereUniqueInput
  update?: PlaceContactUpdateWithWhereUniqueWithoutPlaceInput[] | PlaceContactUpdateWithWhereUniqueWithoutPlaceInput
  upsert?: PlaceContactUpsertWithWhereUniqueWithoutPlaceInput[] | PlaceContactUpsertWithWhereUniqueWithoutPlaceInput
}

export interface EmployeeCreateManyWithoutJobInput {
  create?: EmployeeCreateWithoutJobInput[] | EmployeeCreateWithoutJobInput
  connect?: EmployeeWhereUniqueInput[] | EmployeeWhereUniqueInput
}

export interface PlaceContactUpdateWithWhereUniqueWithoutPlaceInput {
  where: PlaceContactWhereUniqueInput
  data: PlaceContactUpdateWithoutPlaceDataInput
}

export interface InvoiceCreateOneWithoutEventInput {
  create?: InvoiceCreateWithoutEventInput
  connect?: InvoiceWhereUniqueInput
}

export interface PlaceContactUpdateWithoutPlaceDataInput {
  email?: String
  mobilePhone?: String
  name?: String
  phoneNumber?: String
}

export interface TaxCreateOneWithoutBudgetsInput {
  create?: TaxCreateWithoutBudgetsInput
  connect?: TaxWhereUniqueInput
}

export interface PlaceContactUpsertWithWhereUniqueWithoutPlaceInput {
  where: PlaceContactWhereUniqueInput
  update: PlaceContactUpdateWithoutPlaceDataInput
  create: PlaceContactCreateWithoutPlaceInput
}

export interface OfferCreateOneWithoutBudgetLinesInput {
  create?: OfferCreateWithoutBudgetLinesInput
  connect?: OfferWhereUniqueInput
}

export interface PlaceUpsertWithoutOfferInput {
  update: PlaceUpdateWithoutOfferDataInput
  create: PlaceCreateWithoutOfferInput
}

export interface PlaceCreateOneWithoutOfferInput {
  create?: PlaceCreateWithoutOfferInput
  connect?: PlaceWhereUniqueInput
}

export interface SectionItemUpdateManyWithoutOfferInput {
  create?: SectionItemCreateWithoutOfferInput[] | SectionItemCreateWithoutOfferInput
  connect?: SectionItemWhereUniqueInput[] | SectionItemWhereUniqueInput
  disconnect?: SectionItemWhereUniqueInput[] | SectionItemWhereUniqueInput
  delete?: SectionItemWhereUniqueInput[] | SectionItemWhereUniqueInput
  update?: SectionItemUpdateWithWhereUniqueWithoutOfferInput[] | SectionItemUpdateWithWhereUniqueWithoutOfferInput
  upsert?: SectionItemUpsertWithWhereUniqueWithoutOfferInput[] | SectionItemUpsertWithWhereUniqueWithoutOfferInput
}

export interface SectionItemCreateManyWithoutOfferInput {
  create?: SectionItemCreateWithoutOfferInput[] | SectionItemCreateWithoutOfferInput
  connect?: SectionItemWhereUniqueInput[] | SectionItemWhereUniqueInput
}

export interface SectionItemUpdateWithWhereUniqueWithoutOfferInput {
  where: SectionItemWhereUniqueInput
  data: SectionItemUpdateWithoutOfferDataInput
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
  static?: Boolean
  type?: SectionTypes
  w?: Int
  x?: Int
  y?: Int
  menu?: MenuUpdateOneWithoutSectionItemInput
}

export interface SectionWhereInput {
  AND?: SectionWhereInput[] | SectionWhereInput
  OR?: SectionWhereInput[] | SectionWhereInput
  NOT?: SectionWhereInput[] | SectionWhereInput
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
  showPdf?: Boolean
  showPdf_not?: Boolean
  itemProposals_every?: ItemProposalWhereInput
  itemProposals_some?: ItemProposalWhereInput
  itemProposals_none?: ItemProposalWhereInput
  menu?: MenuWhereInput
}

export interface MenuUpdateOneWithoutSectionItemInput {
  create?: MenuCreateWithoutSectionItemInput
  connect?: MenuWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: MenuUpdateWithoutSectionItemDataInput
  upsert?: MenuUpsertWithoutSectionItemInput
}

export interface InvoiceSubscriptionWhereInput {
  AND?: InvoiceSubscriptionWhereInput[] | InvoiceSubscriptionWhereInput
  OR?: InvoiceSubscriptionWhereInput[] | InvoiceSubscriptionWhereInput
  NOT?: InvoiceSubscriptionWhereInput[] | InvoiceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: InvoiceWhereInput
}

export interface MenuUpdateWithoutSectionItemDataInput {
  comment?: String
  endDate?: DateTime
  hasItemsCold?: Boolean
  hasItemsDessert?: Boolean
  hasItemsHot?: Boolean
  hasItemsZCold?: Boolean
  hasItemsZHot?: Boolean
  kitchenNotes?: String
  name?: String
  people?: Int
  price?: Float
  startDate?: DateTime
  offer?: OfferUpdateOneWithoutMenusInput
  sections?: SectionUpdateManyWithoutMenuInput
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

export interface OfferUpdateOneWithoutMenusInput {
  create?: OfferCreateWithoutMenusInput
  connect?: OfferWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OfferUpdateWithoutMenusDataInput
  upsert?: OfferUpsertWithoutMenusInput
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

export interface OfferUpdateWithoutMenusDataInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address?: String
  city?: String
  endTime?: DateTime
  gmtOffset?: String
  maxPersons?: Int
  minPersons?: Int
  name?: String
  postalCode?: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  client?: ClientUpdateOneWithoutOffersInput
  event?: EventUpdateOneWithoutOfferInput
  budgetLines?: BudgetLineUpdateManyWithoutOfferInput
  clientContact?: ClientContactUpdateOneWithoutOffersInput
  communications?: CommunicationUpdateManyWithoutOfferInput
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType?: EventTypeUpdateOneWithoutOffersInput
  place?: PlaceUpdateOneWithoutOfferInput
  sectionItems?: SectionItemUpdateManyWithoutOfferInput
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

export interface OfferUpsertWithoutMenusInput {
  update: OfferUpdateWithoutMenusDataInput
  create: OfferCreateWithoutMenusInput
}

export interface ClientWhereUniqueInput {
  id?: ID_Input
}

export interface SectionUpdateManyWithoutMenuInput {
  create?: SectionCreateWithoutMenuInput[] | SectionCreateWithoutMenuInput
  connect?: SectionWhereUniqueInput[] | SectionWhereUniqueInput
  disconnect?: SectionWhereUniqueInput[] | SectionWhereUniqueInput
  delete?: SectionWhereUniqueInput[] | SectionWhereUniqueInput
  update?: SectionUpdateWithWhereUniqueWithoutMenuInput[] | SectionUpdateWithWhereUniqueWithoutMenuInput
  upsert?: SectionUpsertWithWhereUniqueWithoutMenuInput[] | SectionUpsertWithWhereUniqueWithoutMenuInput
}

export interface BudgetLineWhereUniqueInput {
  id?: ID_Input
}

export interface SectionUpdateWithWhereUniqueWithoutMenuInput {
  where: SectionWhereUniqueInput
  data: SectionUpdateWithoutMenuDataInput
}

export interface PlaceContactWhereUniqueInput {
  id?: ID_Input
}

export interface SectionUpdateWithoutMenuDataInput {
  name?: String
  showPdf?: Boolean
  itemProposals?: ItemProposalUpdateManyWithoutSectionInput
}

export interface EventWhereUniqueInput {
  id?: ID_Input
}

export interface ItemProposalUpdateManyWithoutSectionInput {
  create?: ItemProposalCreateWithoutSectionInput[] | ItemProposalCreateWithoutSectionInput
  connect?: ItemProposalWhereUniqueInput[] | ItemProposalWhereUniqueInput
  disconnect?: ItemProposalWhereUniqueInput[] | ItemProposalWhereUniqueInput
  delete?: ItemProposalWhereUniqueInput[] | ItemProposalWhereUniqueInput
  update?: ItemProposalUpdateWithWhereUniqueWithoutSectionInput[] | ItemProposalUpdateWithWhereUniqueWithoutSectionInput
  upsert?: ItemProposalUpsertWithWhereUniqueWithoutSectionInput[] | ItemProposalUpsertWithWhereUniqueWithoutSectionInput
}

export interface SectionUpdateWithoutItemProposalsDataInput {
  name?: String
  showPdf?: Boolean
  menu?: MenuUpdateOneWithoutSectionsInput
}

export interface ItemProposalUpdateWithWhereUniqueWithoutSectionInput {
  where: ItemProposalWhereUniqueInput
  data: ItemProposalUpdateWithoutSectionDataInput
}

export interface TaxUpdateInput {
  name?: String
  value?: Float
  budgets?: BudgetUpdateManyWithoutTaxInput
  budgetLines?: BudgetLineUpdateManyWithoutTaxInput
}

export interface ItemProposalUpdateWithoutSectionDataInput {
  status?: ItemProposalStatus
  items?: ItemUpdateManyInput
}

export interface PlaceUpdateOneWithoutPlaceContactsInput {
  create?: PlaceCreateWithoutPlaceContactsInput
  connect?: PlaceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PlaceUpdateWithoutPlaceContactsDataInput
  upsert?: PlaceUpsertWithoutPlaceContactsInput
}

export interface ItemUpdateManyInput {
  create?: ItemCreateInput[] | ItemCreateInput
  connect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  disconnect?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  delete?: ItemWhereUniqueInput[] | ItemWhereUniqueInput
  update?: ItemUpdateWithWhereUniqueNestedInput[] | ItemUpdateWithWhereUniqueNestedInput
  upsert?: ItemUpsertWithWhereUniqueNestedInput[] | ItemUpsertWithWhereUniqueNestedInput
}

export interface EventTypeUpdateInput {
  name?: String
  offers?: OfferUpdateManyWithoutEventTypeInput
}

export interface ItemUpdateWithWhereUniqueNestedInput {
  where: ItemWhereUniqueInput
  data: ItemUpdateDataInput
}

export interface ItemUpdateWithoutCategoriesDataInput {
  itemTranslations?: ItemTranslationUpdateManyWithoutItemsInput
  sectionItems?: SectionItemUpdateManyInput
}

export interface ItemUpdateDataInput {
  itemTranslations?: ItemTranslationUpdateManyWithoutItemsInput
  categories?: CategoryUpdateManyWithoutItemsInput
  sectionItems?: SectionItemUpdateManyInput
}

export interface OfferUpdateOneWithoutPlaceInput {
  create?: OfferCreateWithoutPlaceInput
  connect?: OfferWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OfferUpdateWithoutPlaceDataInput
  upsert?: OfferUpsertWithoutPlaceInput
}

export interface ItemTranslationUpdateManyWithoutItemsInput {
  create?: ItemTranslationCreateWithoutItemsInput[] | ItemTranslationCreateWithoutItemsInput
  connect?: ItemTranslationWhereUniqueInput[] | ItemTranslationWhereUniqueInput
  disconnect?: ItemTranslationWhereUniqueInput[] | ItemTranslationWhereUniqueInput
  delete?: ItemTranslationWhereUniqueInput[] | ItemTranslationWhereUniqueInput
  update?: ItemTranslationUpdateWithWhereUniqueWithoutItemsInput[] | ItemTranslationUpdateWithWhereUniqueWithoutItemsInput
  upsert?: ItemTranslationUpsertWithWhereUniqueWithoutItemsInput[] | ItemTranslationUpsertWithWhereUniqueWithoutItemsInput
}

export interface OfferUpdateInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address?: String
  city?: String
  endTime?: DateTime
  gmtOffset?: String
  maxPersons?: Int
  minPersons?: Int
  name?: String
  postalCode?: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  client?: ClientUpdateOneWithoutOffersInput
  event?: EventUpdateOneWithoutOfferInput
  budgetLines?: BudgetLineUpdateManyWithoutOfferInput
  clientContact?: ClientContactUpdateOneWithoutOffersInput
  communications?: CommunicationUpdateManyWithoutOfferInput
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType?: EventTypeUpdateOneWithoutOffersInput
  place?: PlaceUpdateOneWithoutOfferInput
  sectionItems?: SectionItemUpdateManyWithoutOfferInput
  menus?: MenuUpdateManyWithoutOfferInput
}

export interface ItemTranslationUpdateWithWhereUniqueWithoutItemsInput {
  where: ItemTranslationWhereUniqueInput
  data: ItemTranslationUpdateWithoutItemsDataInput
}

export interface ClientContactUpsertWithWhereUniqueWithoutClientInput {
  where: ClientContactWhereUniqueInput
  update: ClientContactUpdateWithoutClientDataInput
  create: ClientContactCreateWithoutClientInput
}

export interface ItemTranslationUpdateWithoutItemsDataInput {
  description?: String
  internalDescription?: String
  language?: LanguageEnum
  name?: String
}

export interface ClientUpsertWithoutClientContactsInput {
  update: ClientUpdateWithoutClientContactsDataInput
  create: ClientCreateWithoutClientContactsInput
}

export interface ItemTranslationUpsertWithWhereUniqueWithoutItemsInput {
  where: ItemTranslationWhereUniqueInput
  update: ItemTranslationUpdateWithoutItemsDataInput
  create: ItemTranslationCreateWithoutItemsInput
}

export interface UserUpdateWithoutJobsDataInput {
  role?: Role
  email?: String
  image?: String
  name?: String
  password?: String
  language?: LanguageEnum
  employee?: EmployeeUpdateOneWithoutUserInput
}

export interface CategoryUpdateManyWithoutItemsInput {
  create?: CategoryCreateWithoutItemsInput[] | CategoryCreateWithoutItemsInput
  connect?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput
  disconnect?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput
  delete?: CategoryWhereUniqueInput[] | CategoryWhereUniqueInput
  update?: CategoryUpdateWithWhereUniqueWithoutItemsInput[] | CategoryUpdateWithWhereUniqueWithoutItemsInput
  upsert?: CategoryUpsertWithWhereUniqueWithoutItemsInput[] | CategoryUpsertWithWhereUniqueWithoutItemsInput
}

export interface ClientContactCreateManyWithoutClientInput {
  create?: ClientContactCreateWithoutClientInput[] | ClientContactCreateWithoutClientInput
  connect?: ClientContactWhereUniqueInput[] | ClientContactWhereUniqueInput
}

export interface CategoryUpdateWithWhereUniqueWithoutItemsInput {
  where: CategoryWhereUniqueInput
  data: CategoryUpdateWithoutItemsDataInput
}

export interface JobCreateOneWithoutEmployeesInput {
  create?: JobCreateWithoutEmployeesInput
  connect?: JobWhereUniqueInput
}

export interface CategoryUpdateWithoutItemsDataInput {
  name?: String
}

export interface TaxCreateOneWithoutBudgetLinesInput {
  create?: TaxCreateWithoutBudgetLinesInput
  connect?: TaxWhereUniqueInput
}

export interface CategoryUpsertWithWhereUniqueWithoutItemsInput {
  where: CategoryWhereUniqueInput
  update: CategoryUpdateWithoutItemsDataInput
  create: CategoryCreateWithoutItemsInput
}

export interface EventStuffCreateManyWithoutEventInput {
  create?: EventStuffCreateWithoutEventInput[] | EventStuffCreateWithoutEventInput
  connect?: EventStuffWhereUniqueInput[] | EventStuffWhereUniqueInput
}

export interface SectionItemUpdateManyInput {
  create?: SectionItemCreateInput[] | SectionItemCreateInput
  connect?: SectionItemWhereUniqueInput[] | SectionItemWhereUniqueInput
  disconnect?: SectionItemWhereUniqueInput[] | SectionItemWhereUniqueInput
  delete?: SectionItemWhereUniqueInput[] | SectionItemWhereUniqueInput
  update?: SectionItemUpdateWithWhereUniqueNestedInput[] | SectionItemUpdateWithWhereUniqueNestedInput
  upsert?: SectionItemUpsertWithWhereUniqueNestedInput[] | SectionItemUpsertWithWhereUniqueNestedInput
}

export interface ClientCreateOneWithoutClientContactsInput {
  create?: ClientCreateWithoutClientContactsInput
  connect?: ClientWhereUniqueInput
}

export interface SectionItemUpdateWithWhereUniqueNestedInput {
  where: SectionItemWhereUniqueInput
  data: SectionItemUpdateDataInput
}

export interface JobCreateOneWithoutEmployeeEstimationsInput {
  create?: JobCreateWithoutEmployeeEstimationsInput
  connect?: JobWhereUniqueInput
}

export interface SectionItemUpdateDataInput {
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
  static?: Boolean
  type?: SectionTypes
  w?: Int
  x?: Int
  y?: Int
  offer?: OfferUpdateOneWithoutSectionItemsInput
  menu?: MenuUpdateOneWithoutSectionItemInput
}

export interface BudgetCreateManyWithoutInvoiceInput {
  create?: BudgetCreateWithoutInvoiceInput[] | BudgetCreateWithoutInvoiceInput
  connect?: BudgetWhereUniqueInput[] | BudgetWhereUniqueInput
}

export interface OfferUpdateOneWithoutSectionItemsInput {
  create?: OfferCreateWithoutSectionItemsInput
  connect?: OfferWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OfferUpdateWithoutSectionItemsDataInput
  upsert?: OfferUpsertWithoutSectionItemsInput
}

export interface EventTypeCreateOneWithoutOffersInput {
  create?: EventTypeCreateWithoutOffersInput
  connect?: EventTypeWhereUniqueInput
}

export interface OfferUpdateWithoutSectionItemsDataInput {
  customMessage?: String
  status?: StatusOffer
  language?: LanguageEnum
  address?: String
  city?: String
  endTime?: DateTime
  gmtOffset?: String
  maxPersons?: Int
  minPersons?: Int
  name?: String
  postalCode?: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  client?: ClientUpdateOneWithoutOffersInput
  event?: EventUpdateOneWithoutOfferInput
  budgetLines?: BudgetLineUpdateManyWithoutOfferInput
  clientContact?: ClientContactUpdateOneWithoutOffersInput
  communications?: CommunicationUpdateManyWithoutOfferInput
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutOfferInput
  eventType?: EventTypeUpdateOneWithoutOffersInput
  place?: PlaceUpdateOneWithoutOfferInput
  menus?: MenuUpdateManyWithoutOfferInput
}

export interface MenuCreateOneWithoutSectionItemInput {
  create?: MenuCreateWithoutSectionItemInput
  connect?: MenuWhereUniqueInput
}

export interface MenuUpdateManyWithoutOfferInput {
  create?: MenuCreateWithoutOfferInput[] | MenuCreateWithoutOfferInput
  connect?: MenuWhereUniqueInput[] | MenuWhereUniqueInput
  disconnect?: MenuWhereUniqueInput[] | MenuWhereUniqueInput
  delete?: MenuWhereUniqueInput[] | MenuWhereUniqueInput
  update?: MenuUpdateWithWhereUniqueWithoutOfferInput[] | MenuUpdateWithWhereUniqueWithoutOfferInput
  upsert?: MenuUpsertWithWhereUniqueWithoutOfferInput[] | MenuUpsertWithWhereUniqueWithoutOfferInput
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

export interface MenuUpdateWithWhereUniqueWithoutOfferInput {
  where: MenuWhereUniqueInput
  data: MenuUpdateWithoutOfferDataInput
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

export interface MenuUpdateWithoutOfferDataInput {
  comment?: String
  endDate?: DateTime
  hasItemsCold?: Boolean
  hasItemsDessert?: Boolean
  hasItemsHot?: Boolean
  hasItemsZCold?: Boolean
  hasItemsZHot?: Boolean
  kitchenNotes?: String
  name?: String
  people?: Int
  price?: Float
  startDate?: DateTime
  sectionItem?: SectionItemUpdateOneWithoutMenuInput
  sections?: SectionUpdateManyWithoutMenuInput
}

export interface OfferWhereInput {
  AND?: OfferWhereInput[] | OfferWhereInput
  OR?: OfferWhereInput[] | OfferWhereInput
  NOT?: OfferWhereInput[] | OfferWhereInput
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
  language?: LanguageEnum
  language_not?: LanguageEnum
  language_in?: LanguageEnum[] | LanguageEnum
  language_not_in?: LanguageEnum[] | LanguageEnum
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
  rev?: String
  rev_not?: String
  rev_in?: String[] | String
  rev_not_in?: String[] | String
  rev_lt?: String
  rev_lte?: String
  rev_gt?: String
  rev_gte?: String
  rev_contains?: String
  rev_not_contains?: String
  rev_starts_with?: String
  rev_not_starts_with?: String
  rev_ends_with?: String
  rev_not_ends_with?: String
  showTotalBudgetsPdf?: Boolean
  showTotalBudgetsPdf_not?: Boolean
  startTime?: DateTime
  startTime_not?: DateTime
  startTime_in?: DateTime[] | DateTime
  startTime_not_in?: DateTime[] | DateTime
  startTime_lt?: DateTime
  startTime_lte?: DateTime
  startTime_gt?: DateTime
  startTime_gte?: DateTime
  version?: Int
  version_not?: Int
  version_in?: Int[] | Int
  version_not_in?: Int[] | Int
  version_lt?: Int
  version_lte?: Int
  version_gt?: Int
  version_gte?: Int
  client?: ClientWhereInput
  event?: EventWhereInput
  budgetLines_every?: BudgetLineWhereInput
  budgetLines_some?: BudgetLineWhereInput
  budgetLines_none?: BudgetLineWhereInput
  clientContact?: ClientContactWhereInput
  communications_every?: CommunicationWhereInput
  communications_some?: CommunicationWhereInput
  communications_none?: CommunicationWhereInput
  employeeEstimations_every?: EmployeeEstimationWhereInput
  employeeEstimations_some?: EmployeeEstimationWhereInput
  employeeEstimations_none?: EmployeeEstimationWhereInput
  eventType?: EventTypeWhereInput
  place?: PlaceWhereInput
  sectionItems_every?: SectionItemWhereInput
  sectionItems_some?: SectionItemWhereInput
  sectionItems_none?: SectionItemWhereInput
  menus_every?: MenuWhereInput
  menus_some?: MenuWhereInput
  menus_none?: MenuWhereInput
}

export interface SectionItemUpdateOneWithoutMenuInput {
  create?: SectionItemCreateWithoutMenuInput
  connect?: SectionItemWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: SectionItemUpdateWithoutMenuDataInput
  upsert?: SectionItemUpsertWithoutMenuInput
}

export interface EventStuffWhereUniqueInput {
  id?: ID_Input
}

export interface SectionItemUpdateWithoutMenuDataInput {
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
  static?: Boolean
  type?: SectionTypes
  w?: Int
  x?: Int
  y?: Int
  offer?: OfferUpdateOneWithoutSectionItemsInput
}

export interface SectionUpsertWithoutItemProposalsInput {
  update: SectionUpdateWithoutItemProposalsDataInput
  create: SectionCreateWithoutItemProposalsInput
}

export interface SectionItemUpsertWithoutMenuInput {
  update: SectionItemUpdateWithoutMenuDataInput
  create: SectionItemCreateWithoutMenuInput
}

export interface EventStuffUpdateManyWithoutStuffInput {
  create?: EventStuffCreateWithoutStuffInput[] | EventStuffCreateWithoutStuffInput
  connect?: EventStuffWhereUniqueInput[] | EventStuffWhereUniqueInput
  disconnect?: EventStuffWhereUniqueInput[] | EventStuffWhereUniqueInput
  delete?: EventStuffWhereUniqueInput[] | EventStuffWhereUniqueInput
  update?: EventStuffUpdateWithWhereUniqueWithoutStuffInput[] | EventStuffUpdateWithWhereUniqueWithoutStuffInput
  upsert?: EventStuffUpsertWithWhereUniqueWithoutStuffInput[] | EventStuffUpsertWithWhereUniqueWithoutStuffInput
}

export interface MenuUpsertWithWhereUniqueWithoutOfferInput {
  where: MenuWhereUniqueInput
  update: MenuUpdateWithoutOfferDataInput
  create: MenuCreateWithoutOfferInput
}

export interface EventStuffUpdateInput {
  quantity?: Int
  event?: EventUpdateOneWithoutEventStuffsInput
  stuff?: StuffUpdateOneWithoutEventStuffsInput
}

export interface OfferUpsertWithoutSectionItemsInput {
  update: OfferUpdateWithoutSectionItemsDataInput
  create: OfferCreateWithoutSectionItemsInput
}

export interface ItemUpsertWithoutItemTranslationsInput {
  update: ItemUpdateWithoutItemTranslationsDataInput
  create: ItemCreateWithoutItemTranslationsInput
}

export interface SectionItemUpsertWithWhereUniqueNestedInput {
  where: SectionItemWhereUniqueInput
  update: SectionItemUpdateDataInput
  create: SectionItemCreateInput
}

export interface JobUpsertWithoutEmployeesInput {
  update: JobUpdateWithoutEmployeesDataInput
  create: JobCreateWithoutEmployeesInput
}

export interface ItemUpsertWithWhereUniqueNestedInput {
  where: ItemWhereUniqueInput
  update: ItemUpdateDataInput
  create: ItemCreateInput
}

export interface OfferCreateOneWithoutEventInput {
  create?: OfferCreateWithoutEventInput
  connect?: OfferWhereUniqueInput
}

export interface ItemProposalUpsertWithWhereUniqueWithoutSectionInput {
  where: ItemProposalWhereUniqueInput
  update: ItemProposalUpdateWithoutSectionDataInput
  create: ItemProposalCreateWithoutSectionInput
}

export interface OfferCreateOneWithoutEmployeeEstimationsInput {
  create?: OfferCreateWithoutEmployeeEstimationsInput
  connect?: OfferWhereUniqueInput
}

export interface SectionUpsertWithWhereUniqueWithoutMenuInput {
  where: SectionWhereUniqueInput
  update: SectionUpdateWithoutMenuDataInput
  create: SectionCreateWithoutMenuInput
}

export interface VehicleCreateManyWithoutEventsInput {
  create?: VehicleCreateWithoutEventsInput[] | VehicleCreateWithoutEventsInput
  connect?: VehicleWhereUniqueInput[] | VehicleWhereUniqueInput
}

export interface MenuUpsertWithoutSectionItemInput {
  update: MenuUpdateWithoutSectionItemDataInput
  create: MenuCreateWithoutSectionItemInput
}

export interface EventCreateOneWithoutEmployeesInput {
  create?: EventCreateWithoutEmployeesInput
  connect?: EventWhereUniqueInput
}

export interface SectionItemUpsertWithWhereUniqueWithoutOfferInput {
  where: SectionItemWhereUniqueInput
  update: SectionItemUpdateWithoutOfferDataInput
  create: SectionItemCreateWithoutOfferInput
}

export interface PlaceContactCreateManyWithoutPlaceInput {
  create?: PlaceContactCreateWithoutPlaceInput[] | PlaceContactCreateWithoutPlaceInput
  connect?: PlaceContactWhereUniqueInput[] | PlaceContactWhereUniqueInput
}

export interface OfferUpsertWithoutBudgetLinesInput {
  update: OfferUpdateWithoutBudgetLinesDataInput
  create: OfferCreateWithoutBudgetLinesInput
}

export interface EventStuffSubscriptionWhereInput {
  AND?: EventStuffSubscriptionWhereInput[] | EventStuffSubscriptionWhereInput
  OR?: EventStuffSubscriptionWhereInput[] | EventStuffSubscriptionWhereInput
  NOT?: EventStuffSubscriptionWhereInput[] | EventStuffSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: EventStuffWhereInput
}

export interface BudgetLineUpsertWithWhereUniqueWithoutTaxInput {
  where: BudgetLineWhereUniqueInput
  update: BudgetLineUpdateWithoutTaxDataInput
  create: BudgetLineCreateWithoutTaxInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface TaxUpsertWithoutBudgetsInput {
  update: TaxUpdateWithoutBudgetsDataInput
  create: TaxCreateWithoutBudgetsInput
}

export interface EventUpdateWithoutVehiclesDataInput {
  canceled?: Boolean
  offer?: OfferUpdateOneWithoutEventInput
  employees?: EmployeeUpdateManyWithoutEventInput
  eventStuffs?: EventStuffUpdateManyWithoutEventInput
  invoice?: InvoiceUpdateOneWithoutEventInput
}

export interface BudgetUpsertWithWhereUniqueWithoutInvoiceInput {
  where: BudgetWhereUniqueInput
  update: BudgetUpdateWithoutInvoiceDataInput
  create: BudgetCreateWithoutInvoiceInput
}

export interface BudgetLineUpdateInput {
  description?: String
  quantity?: Int
  total?: Float
  unitPrice?: Float
  value?: Float
  offer?: OfferUpdateOneWithoutBudgetLinesInput
  tax?: TaxUpdateOneWithoutBudgetLinesInput
}

export interface InvoiceUpsertWithoutEventInput {
  update: InvoiceUpdateWithoutEventDataInput
  create: InvoiceCreateWithoutEventInput
}

export interface UserUpsertWithWhereUniqueWithoutJobsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutJobsDataInput
  create: UserCreateWithoutJobsInput
}

export interface EventUpsertWithoutEmployeesInput {
  update: EventUpdateWithoutEmployeesDataInput
  create: EventCreateWithoutEmployeesInput
}

export interface InvoiceCreateOneWithoutBudgetsInput {
  create?: InvoiceCreateWithoutBudgetsInput
  connect?: InvoiceWhereUniqueInput
}

export interface UserUpdateOneWithoutEmployeeInput {
  create?: UserCreateWithoutEmployeeInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutEmployeeDataInput
  upsert?: UserUpsertWithoutEmployeeInput
}

export interface BudgetLineCreateManyWithoutTaxInput {
  create?: BudgetLineCreateWithoutTaxInput[] | BudgetLineCreateWithoutTaxInput
  connect?: BudgetLineWhereUniqueInput[] | BudgetLineWhereUniqueInput
}

export interface UserUpdateWithoutEmployeeDataInput {
  role?: Role
  email?: String
  image?: String
  name?: String
  password?: String
  language?: LanguageEnum
  jobs?: JobUpdateManyWithoutUsersInput
}

export interface BudgetWhereInput {
  AND?: BudgetWhereInput[] | BudgetWhereInput
  OR?: BudgetWhereInput[] | BudgetWhereInput
  NOT?: BudgetWhereInput[] | BudgetWhereInput
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
  total?: Float
  total_not?: Float
  total_in?: Float[] | Float
  total_not_in?: Float[] | Float
  total_lt?: Float
  total_lte?: Float
  total_gt?: Float
  total_gte?: Float
  unitPrice?: Float
  unitPrice_not?: Float
  unitPrice_in?: Float[] | Float
  unitPrice_not_in?: Float[] | Float
  unitPrice_lt?: Float
  unitPrice_lte?: Float
  unitPrice_gt?: Float
  unitPrice_gte?: Float
  invoice?: InvoiceWhereInput
  tax?: TaxWhereInput
}

export interface JobUpdateManyWithoutUsersInput {
  create?: JobCreateWithoutUsersInput[] | JobCreateWithoutUsersInput
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput
  disconnect?: JobWhereUniqueInput[] | JobWhereUniqueInput
  delete?: JobWhereUniqueInput[] | JobWhereUniqueInput
  update?: JobUpdateWithWhereUniqueWithoutUsersInput[] | JobUpdateWithWhereUniqueWithoutUsersInput
  upsert?: JobUpsertWithWhereUniqueWithoutUsersInput[] | JobUpsertWithWhereUniqueWithoutUsersInput
}

export interface OfferUpsertWithWhereUniqueWithoutEventTypeInput {
  where: OfferWhereUniqueInput
  update: OfferUpdateWithoutEventTypeDataInput
  create: OfferCreateWithoutEventTypeInput
}

export interface JobUpdateWithWhereUniqueWithoutUsersInput {
  where: JobWhereUniqueInput
  data: JobUpdateWithoutUsersDataInput
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

export interface UserUpsertWithoutEmployeeInput {
  update: UserUpdateWithoutEmployeeDataInput
  create: UserCreateWithoutEmployeeInput
}

export interface JobUpsertWithWhereUniqueWithoutUsersInput {
  where: JobWhereUniqueInput
  update: JobUpdateWithoutUsersDataInput
  create: JobCreateWithoutUsersInput
}

export interface JobUpdateWithoutUsersDataInput {
  name?: String
  employeeEstimations?: EmployeeEstimationUpdateManyWithoutJobInput
  employees?: EmployeeUpdateManyWithoutJobInput
}

export interface CommunicationCreateManyWithoutOfferInput {
  create?: CommunicationCreateWithoutOfferInput[] | CommunicationCreateWithoutOfferInput
  connect?: CommunicationWhereUniqueInput[] | CommunicationWhereUniqueInput
}

export interface CommunicationUpdateInput {
  message?: String
  subject?: String
  channel?: Channel
  date?: DateTime
  gmtOffset?: String
  offer?: OfferUpdateOneWithoutCommunicationsInput
}

export interface ItemProposalWhereUniqueInput {
  id?: ID_Input
}

export interface ItemProposalWhereInput {
  AND?: ItemProposalWhereInput[] | ItemProposalWhereInput
  OR?: ItemProposalWhereInput[] | ItemProposalWhereInput
  NOT?: ItemProposalWhereInput[] | ItemProposalWhereInput
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
  status?: ItemProposalStatus
  status_not?: ItemProposalStatus
  status_in?: ItemProposalStatus[] | ItemProposalStatus
  status_not_in?: ItemProposalStatus[] | ItemProposalStatus
  items_every?: ItemWhereInput
  items_some?: ItemWhereInput
  items_none?: ItemWhereInput
  section?: SectionWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface ItemPreviousValues {
  id: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface ClientConnection {
  pageInfo: PageInfo
  edges: ClientEdge[]
  aggregate: AggregateClient
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
  static?: Boolean
  type: SectionTypes
  w: Int
  x: Int
  y: Int
}

export interface ItemSubscriptionPayload {
  mutation: MutationType
  node?: Item
  updatedFields?: String[]
  previousValues?: ItemPreviousValues
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
  language?: LanguageEnum
  type?: ClientType
}

export interface Event extends Node {
  id: ID_Output
  offer?: Offer
  employees?: Employee[]
  eventStuffs?: EventStuff[]
  invoice?: Invoice
  vehicles?: Vehicle[]
  canceled?: Boolean
}

/*
 * A connection to a list of items.

 */
export interface ItemConnection {
  pageInfo: PageInfo
  edges: ItemEdge[]
  aggregate: AggregateItem
}

export interface AggregateItem {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface EventEdge {
  node: Event
  cursor: String
}

export interface BatchPayload {
  count: Long
}

export interface AggregateSectionItem {
  count: Int
}

export interface EventPreviousValues {
  id: ID_Output
  canceled?: Boolean
}

/*
 * A connection to a list of items.

 */
export interface SectionItemConnection {
  pageInfo: PageInfo
  edges: SectionItemEdge[]
  aggregate: AggregateSectionItem
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
export interface SectionEdge {
  node: Section
  cursor: String
}

export interface EventSubscriptionPayload {
  mutation: MutationType
  node?: Event
  updatedFields?: String[]
  previousValues?: EventPreviousValues
}

export interface AggregateMenu {
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
export interface MenuConnection {
  pageInfo: PageInfo
  edges: MenuEdge[]
  aggregate: AggregateMenu
}

export interface ClientPreviousValues {
  address?: String
  createdAt: DateTime
  email: String
  id: ID_Output
  name: String
  phone: String
  tva?: String
  language?: LanguageEnum
  type?: ClientType
}

/*
 * An edge in a connection.

 */
export interface ItemProposalEdge {
  node: ItemProposal
  cursor: String
}

export interface Offer extends Node {
  client?: Client
  createdAt: DateTime
  customMessage?: String
  event?: Event
  id: ID_Output
  status: StatusOffer
  language?: LanguageEnum
  address: String
  budgetLines?: BudgetLine[]
  city: String
  clientContact?: ClientContact
  communications?: Communication[]
  employeeEstimations?: EmployeeEstimation[]
  endTime?: DateTime
  eventType?: EventType
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  place?: Place
  postalCode: String
  rev?: String
  sectionItems?: SectionItem[]
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
  menus?: Menu[]
}

export interface AggregateVehicle {
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
export interface VehicleConnection {
  pageInfo: PageInfo
  edges: VehicleEdge[]
  aggregate: AggregateVehicle
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
export interface TaxEdge {
  node: Tax
  cursor: String
}

export interface Stuff extends Node {
  eventStuffs?: EventStuff[]
  id: ID_Output
  name: String
}

export interface AggregateStuff {
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
export interface StuffConnection {
  pageInfo: PageInfo
  edges: StuffEdge[]
  aggregate: AggregateStuff
}

export interface OfferPreviousValues {
  createdAt: DateTime
  customMessage?: String
  id: ID_Output
  status: StatusOffer
  language?: LanguageEnum
  address: String
  city: String
  endTime?: DateTime
  gmtOffset: String
  maxPersons?: Int
  minPersons?: Int
  name: String
  postalCode: String
  rev?: String
  showTotalBudgetsPdf?: Boolean
  startTime?: DateTime
  version?: Int
}

/*
 * An edge in a connection.

 */
export interface PlaceContactEdge {
  node: PlaceContact
  cursor: String
}

export interface EventStuff extends Node {
  event?: Event
  id: ID_Output
  quantity: Int
  stuff?: Stuff
}

export interface AggregateJob {
  count: Int
}

export interface ItemTranslationSubscriptionPayload {
  mutation: MutationType
  node?: ItemTranslation
  updatedFields?: String[]
  previousValues?: ItemTranslationPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface JobConnection {
  pageInfo: PageInfo
  edges: JobEdge[]
  aggregate: AggregateJob
}

export interface ItemTranslationPreviousValues {
  description?: String
  id: ID_Output
  internalDescription?: String
  language: LanguageEnum
  name?: String
}

/*
 * An edge in a connection.

 */
export interface InvoiceEdge {
  node: Invoice
  cursor: String
}

export interface Category extends Node {
  id: ID_Output
  name: String
  items?: Item[]
}

export interface AggregateEventType {
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
export interface EventTypeConnection {
  pageInfo: PageInfo
  edges: EventTypeEdge[]
  aggregate: AggregateEventType
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
  language?: LanguageEnum
}

/*
 * An edge in a connection.

 */
export interface EventStuffEdge {
  node: EventStuff
  cursor: String
}

export interface ItemTranslation extends Node {
  description?: String
  id: ID_Output
  items?: Item
  internalDescription?: String
  language: LanguageEnum
  name?: String
}

export interface AggregateEmployeeEstimation {
  count: Int
}

export interface ClientContactSubscriptionPayload {
  mutation: MutationType
  node?: ClientContact
  updatedFields?: String[]
  previousValues?: ClientContactPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface EmployeeEstimationConnection {
  pageInfo: PageInfo
  edges: EmployeeEstimationEdge[]
  aggregate: AggregateEmployeeEstimation
}

export interface ClientContactPreviousValues {
  email: String
  id: ID_Output
  mobilePhone?: String
  name: String
  phoneNumber?: String
}

/*
 * An edge in a connection.

 */
export interface EmployeeEdge {
  node: Employee
  cursor: String
}

export interface Item extends Node {
  id: ID_Output
  itemTranslations?: ItemTranslation[]
  categories?: Category[]
  sectionItems?: SectionItem[]
}

export interface AggregateCategory {
  count: Int
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
export interface CategoryConnection {
  pageInfo: PageInfo
  edges: CategoryEdge[]
  aggregate: AggregateCategory
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

/*
 * An edge in a connection.

 */
export interface BudgetLineEdge {
  node: BudgetLine
  cursor: String
}

export interface ItemProposal extends Node {
  id: ID_Output
  items?: Item[]
  section?: Section
  status: ItemProposalStatus
}

export interface AggregateBudget {
  count: Int
}

export interface BudgetSubscriptionPayload {
  mutation: MutationType
  node?: Budget
  updatedFields?: String[]
  previousValues?: BudgetPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface BudgetConnection {
  pageInfo: PageInfo
  edges: BudgetEdge[]
  aggregate: AggregateBudget
}

export interface BudgetPreviousValues {
  description: String
  id: ID_Output
  quantity: Int
  total: Float
  unitPrice: Float
}

/*
 * An edge in a connection.

 */
export interface PlaceEdge {
  node: Place
  cursor: String
}

export interface Section extends Node {
  id: ID_Output
  itemProposals?: ItemProposal[]
  menu?: Menu
  name?: String
  showPdf?: Boolean
}

export interface AggregateClientContact {
  count: Int
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
export interface ClientContactConnection {
  pageInfo: PageInfo
  edges: ClientContactEdge[]
  aggregate: AggregateClientContact
}

export interface BudgetLinePreviousValues {
  description: String
  id: ID_Output
  quantity?: Int
  total?: Float
  unitPrice?: Float
  value: Float
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface Menu extends Node {
  comment?: String
  endDate?: DateTime
  hasItemsCold?: Boolean
  hasItemsDessert?: Boolean
  hasItemsHot?: Boolean
  hasItemsZCold?: Boolean
  hasItemsZHot?: Boolean
  id: ID_Output
  kitchenNotes?: String
  name: String
  offer?: Offer
  people?: Int
  price?: Float
  sectionItem?: SectionItem
  sections?: Section[]
  startDate?: DateTime
}

export interface AggregateItemTranslation {
  count: Int
}

export interface CategorySubscriptionPayload {
  mutation: MutationType
  node?: Category
  updatedFields?: String[]
  previousValues?: CategoryPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ItemTranslationConnection {
  pageInfo: PageInfo
  edges: ItemTranslationEdge[]
  aggregate: AggregateItemTranslation
}

export interface CategoryPreviousValues {
  id: ID_Output
  name: String
}

/*
 * An edge in a connection.

 */
export interface OfferEdge {
  node: Offer
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
  static?: Boolean
  type: SectionTypes
  w: Int
  x: Int
  y: Int
  menu?: Menu
}

export interface AggregateCommunication {
  count: Int
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
export interface CommunicationConnection {
  pageInfo: PageInfo
  edges: CommunicationEdge[]
  aggregate: AggregateCommunication
}

export interface EmployeePreviousValues {
  endedAt?: DateTime
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  id: ID_Output
  startedAt?: DateTime
}

/*
 * An edge in a connection.

 */
export interface ClientEdge {
  node: Client
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

/*
 * An edge in a connection.

 */
export interface ItemEdge {
  node: Item
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
export interface EventConnection {
  pageInfo: PageInfo
  edges: EventEdge[]
  aggregate: AggregateEvent
}

export interface EmployeeEstimationPreviousValues {
  estimatedEndAt: DateTime
  estimatedStartAt: DateTime
  id: ID_Output
  number: Int
  pricePerHour: Float
  total: Float
}

export interface AggregateSection {
  count: Int
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

/*
 * An edge in a connection.

 */
export interface MenuEdge {
  node: Menu
  cursor: String
}

export interface EventStuffSubscriptionPayload {
  mutation: MutationType
  node?: EventStuff
  updatedFields?: String[]
  previousValues?: EventStuffPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ItemProposalConnection {
  pageInfo: PageInfo
  edges: ItemProposalEdge[]
  aggregate: AggregateItemProposal
}

export interface EventStuffPreviousValues {
  id: ID_Output
  quantity: Int
}

export interface AggregateTax {
  count: Int
}

export interface EventType extends Node {
  id: ID_Output
  name: String
  offers?: Offer[]
}

/*
 * An edge in a connection.

 */
export interface StuffEdge {
  node: Stuff
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
export interface PlaceContactConnection {
  pageInfo: PageInfo
  edges: PlaceContactEdge[]
  aggregate: AggregatePlaceContact
}

export interface EventTypePreviousValues {
  id: ID_Output
  name: String
}

export interface AggregateInvoice {
  count: Int
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
  language?: LanguageEnum
}

/*
 * An edge in a connection.

 */
export interface EventTypeEdge {
  node: EventType
  cursor: String
}

export interface InvoiceSubscriptionPayload {
  mutation: MutationType
  node?: Invoice
  updatedFields?: String[]
  previousValues?: InvoicePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface EventStuffConnection {
  pageInfo: PageInfo
  edges: EventStuffEdge[]
  aggregate: AggregateEventStuff
}

export interface InvoicePreviousValues {
  address?: String
  date?: DateTime
  id: ID_Output
  name?: String
  paid: Boolean
  tva?: String
  number?: Int
  type?: Account
}

export interface AggregateEmployee {
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
export interface CategoryEdge {
  node: Category
  cursor: String
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

export interface AggregatePlace {
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
export interface ClientContactEdge {
  node: ClientContact
  cursor: String
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
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface PlaceContactPreviousValues {
  email?: String
  id: ID_Output
  mobilePhone?: String
  name: String
  phoneNumber?: String
}

export interface AggregateOffer {
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
export interface CommunicationEdge {
  node: Communication
  cursor: String
}

export interface StuffSubscriptionPayload {
  mutation: MutationType
  node?: Stuff
  updatedFields?: String[]
  previousValues?: StuffPreviousValues
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

export interface StuffPreviousValues {
  id: ID_Output
  name: String
}

/*
 * An edge in a connection.

 */
export interface SectionItemEdge {
  node: SectionItem
  cursor: String
}

export interface Communication extends Node {
  id: ID_Output
  message: String
  subject: String
  channel: Channel
  date: DateTime
  gmtOffset: String
  offer?: Offer
}

export interface AggregateItemProposal {
  count: Int
}

export interface TaxSubscriptionPayload {
  mutation: MutationType
  node?: Tax
  updatedFields?: String[]
  previousValues?: TaxPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface TaxConnection {
  pageInfo: PageInfo
  edges: TaxEdge[]
  aggregate: AggregateTax
}

export interface TaxPreviousValues {
  id: ID_Output
  name: String
  value: Float
}

/*
 * An edge in a connection.

 */
export interface JobEdge {
  node: Job
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

export interface AggregateEventStuff {
  count: Int
}

export interface VehicleSubscriptionPayload {
  mutation: MutationType
  node?: Vehicle
  updatedFields?: String[]
  previousValues?: VehiclePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface EmployeeConnection {
  pageInfo: PageInfo
  edges: EmployeeEdge[]
  aggregate: AggregateEmployee
}

export interface VehiclePreviousValues {
  color?: String
  description?: String
  id: ID_Output
  name: String
  plate: String
  year?: Int
}

/*
 * An edge in a connection.

 */
export interface BudgetEdge {
  node: Budget
  cursor: String
}

export interface Invoice extends Node {
  address?: String
  budgets?: Budget[]
  date?: DateTime
  event?: Event
  id: ID_Output
  name?: String
  paid: Boolean
  tva?: String
  number?: Int
  type?: Account
}

export interface AggregateUser {
  count: Int
}

export interface ItemProposalSubscriptionPayload {
  mutation: MutationType
  node?: ItemProposal
  updatedFields?: String[]
  previousValues?: ItemProposalPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface OfferConnection {
  pageInfo: PageInfo
  edges: OfferEdge[]
  aggregate: AggregateOffer
}

export interface ItemProposalPreviousValues {
  id: ID_Output
  status: ItemProposalStatus
}

export interface AggregateEvent {
  count: Int
}

export interface Budget extends Node {
  description: String
  id: ID_Output
  invoice?: Invoice
  quantity: Int
  tax?: Tax
  total: Float
  unitPrice: Float
}

/*
 * An edge in a connection.

 */
export interface VehicleEdge {
  node: Vehicle
  cursor: String
}

export interface MenuSubscriptionPayload {
  mutation: MutationType
  node?: Menu
  updatedFields?: String[]
  previousValues?: MenuPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface InvoiceConnection {
  pageInfo: PageInfo
  edges: InvoiceEdge[]
  aggregate: AggregateInvoice
}

export interface MenuPreviousValues {
  comment?: String
  endDate?: DateTime
  hasItemsCold?: Boolean
  hasItemsDessert?: Boolean
  hasItemsHot?: Boolean
  hasItemsZCold?: Boolean
  hasItemsZHot?: Boolean
  id: ID_Output
  kitchenNotes?: String
  name: String
  people?: Int
  price?: Float
  startDate?: DateTime
}

export interface AggregateBudgetLine {
  count: Int
}

export interface Tax extends Node {
  budgets?: Budget[]
  budgetLines?: BudgetLine[]
  id: ID_Output
  name: String
  value: Float
}

/*
 * An edge in a connection.

 */
export interface ItemTranslationEdge {
  node: ItemTranslation
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface SectionConnection {
  pageInfo: PageInfo
  edges: SectionEdge[]
  aggregate: AggregateSection
}

export interface SectionItemSubscriptionPayload {
  mutation: MutationType
  node?: SectionItem
  updatedFields?: String[]
  previousValues?: SectionItemPreviousValues
}

export interface BudgetLine extends Node {
  description: String
  id: ID_Output
  offer?: Offer
  quantity?: Int
  tax?: Tax
  total?: Float
  unitPrice?: Float
  value: Float
}

export interface SectionPreviousValues {
  id: ID_Output
  name?: String
  showPdf?: Boolean
}

export interface SectionSubscriptionPayload {
  mutation: MutationType
  node?: Section
  updatedFields?: String[]
  previousValues?: SectionPreviousValues
}

export interface AggregatePlaceContact {
  count: Int
}

export interface AggregateClient {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface PlaceConnection {
  pageInfo: PageInfo
  edges: PlaceEdge[]
  aggregate: AggregatePlace
}

/*
 * An edge in a connection.

 */
export interface EmployeeEstimationEdge {
  node: EmployeeEstimation
  cursor: String
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

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
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

export type DateTime = Date | string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number