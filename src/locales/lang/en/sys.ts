export default {
  api: {
    operationFailed: 'Operation failed',
    errorTip: 'Error Tip',
    errorMessage: 'The operation failed, the system is abnormal!',
    timeoutMessage: 'Login timed out, please log in again!',
    apiTimeoutMessage: 'The interface request timed out, please refresh the page and try again!',
    apiRequestFailed: 'The interface request failed, please try again later!',
    networkException: 'network anomaly',
    networkExceptionMsg:
      'Please check if your network connection is normal! The network is abnormal',

    errMsg401: 'The user does not have permission (token, user name, password error)!',
    errMsg403: 'The user is authorized, but access is forbidden!',
    errMsg404: 'Network request error, the resource was not found!',
    errMsg405: 'Network request error, request method not allowed!',
    errMsg408: 'Network request timed out!',
    errMsg500: 'Server error, please contact the administrator!',
    errMsg501: 'The network is not implemented!',
    errMsg502: 'Network Error!',
    errMsg503: 'The service is unavailable, the server is temporarily overloaded or maintained!',
    errMsg504: 'Network timeout!',
    errMsg505: 'The http version does not support the request!',
  },
  app: {
    logoutTip: 'Reminder',
    logoutMessage: 'Confirm to exit the system?',
    menuLoading: 'Menu loading...',
  },
  errorLog: {
    tableTitle: 'Error log list',
    tableColumnType: 'Type',
    tableColumnDate: 'Time',
    tableColumnFile: 'File',
    tableColumnMsg: 'Error message',
    tableColumnStackMsg: 'Stack info',

    tableActionDesc: 'Details',

    modalTitle: 'Error details',

    fireVueError: 'Fire vue error',
    fireResourceError: 'Fire resource error',
    fireAjaxError: 'Fire ajax error',

    enableMessage: 'Only effective when useErrorHandle=true in `/src/settings/projectSetting.ts`.',
  },
  exception: {
    backLogin: 'Back Login',
    backHome: 'Back Home',
    subTitle403: "Sorry, you don't have access to this page.",
    subTitle404: 'Sorry, the page you visited does not exist.',
    subTitle500: 'Sorry, the server is reporting an error.',
    noDataTitle: 'No data on the current page.',
    networkErrorTitle: 'Network Error',
    networkErrorSubTitle:
      'Sorry, Your network connection has been disconnected, please check your network!',
  },
  lock: {
    unlock: 'Click to unlock',
    alert: 'Lock screen password error',
    backToLogin: 'Back to login',
    entry: 'Enter the system',
    placeholder: 'Please enter the lock screen password or user password',
  },
  login: {
    backSignIn: 'Back sign in',
    mobileSignInFormTitle: 'Mobile sign in',
    qrSignInFormTitle: 'Qr code sign in',
    signInFormTitle: 'Sign in',
    emailSignUpFormTitle: 'Sign up by email',
    signUpFormTitle: 'Sign up tenant',
    forgetFormTitle: 'Reset password',

    signInTitle: 'Distributed management system',
    signInDesc: 'Develop microservices management system in a short time',
    policy: 'I agree to the xxx Privacy Policy',
    scanSign: `scanning the code to complete the login`,

    loginButton: 'Sign in',
    registerButton: 'Sign up tenant',
    rememberMe: 'Remember me',
    forgetPassword: 'Forget Password?',
    otherSignIn: 'Sign in with',

    // notify
    loginSuccessTitle: 'Login successful',
    loginSuccessDesc: 'Welcome back',
    signupSuccessTitle: 'Sign up successful',
    signupSuccessDesc: 'Welcome',

    // placeholder
    accountPlaceholder: 'Please input username',
    passwordPlaceholder: 'Please input password',
    emailPlaceholder: 'Please enter your email address',
    smsPlaceholder: 'Please input sms code',
    mobilePlaceholder: 'Please input mobile',
    policyPlaceholder: 'Register after checking',
    diffPwd: 'The two passwords are inconsistent',

    username: 'Username',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    email: 'Email',
    smsCode: 'SMS code',
    mobile: 'Mobile',
    captcha: 'Captcha',
    account: 'Account'
  },
  menu: {
    // noun
    menuName: 'Menu Name',
    menuTitle: 'Title Shown',
    icon: 'Icon',
    order: 'Order',
    component: 'Component',
    statusName: 'Status',
    type: 'Menu Type',
    directory: 'Directory',
    menu: 'Menu',
    button: 'Button',
    menuParent: 'Menu Parent',
    routePath: 'Route Path',
    componentPath: 'Component Path',
    isHttpPath: 'Http Path?',
    isKeepAlive: 'Keep Alive?',
    isShown: 'Show',
    isHidden: 'Hidden',
    isBreadcrumbShown: 'Show Breadcrumb?',
    currentActiveMenu: 'Active Tab',
    isAutoCloseTab: 'Auto Close Tab?',
    hideTab: 'Hide Tab',
    frameSrc: 'Iframe Path',
    carryParam: 'Carry Parameter',
    hideChildrenInMenu: 'Hide Children',
    affix: 'Affix Tab',
    dynamicLevel: 'Maximum opened Tab',
    realPath: 'Static Path',
    redirectPath: 'Redirect Path',
    menuParamManagement: 'Extra Parameters',
    paramKey: 'Key',
    paramType: 'Type',
    paramValue: 'Value',
    paramList: 'Parameter List',
    rootMenu: 'Root Menu',
    menuList: 'Menu List',
    // action
    addMenu: 'Add Menu',
    editMenu: 'Eidt Menu',
    addMenuParam: 'Add Parameter',
    editMenuParam: 'Edit Parameter',
    // help
    componentHelp:
      'The directory is "LAYOUT", embedded pages use "IFrame", and regular pages use the page path.',
    pathHelp: 'All menus including directories must set the path.',
  },
  role: {
    // noun
    roleList: 'Role List',
    roleName: 'Role Name',
    roleTitle: 'Role',
    roleValue: 'Role Value',
    defaultRouter: 'Default Router Path',
    admin: 'Administrator',
    stuff: 'Stuff',
    seller: 'Seller',
    member: 'Member',
    // action
    addRole: 'Add Role',
    editRole: 'Edit Role',
    // notification
    adminStatusChangeForbidden: 'Disallow modification of admin status',
  },
  apis: {
    // noun
    apiList: 'API List',
    path: 'Path',
    description: 'Description',
    method: 'Method',
    group: 'Group',
    // action
    addApi: 'Add API',
    editApi: 'Edit API',
    // help message
    isRequiredHelpMessage:
      'Whether it is a necessary API, if it is a necessary API, it must be selected during authorization management, and cancellation is not allowed',
  },
  authority: {
    authorityManagement: 'Authorization Management',
    menuAuthority: 'Menu',
    apiAuthority: 'API',
  },
  user: {
    // noun
    userList: 'User List',
    name: 'name',
    avatar: 'Avatar',
    oldPassword: 'Old Password',
    newPassword: 'New Password',
    description: 'User description',
    homePath: 'User home page',
    // action
    addUser: 'Add User',
    editUser: 'Edit User',
    changePassword: 'Change Password',
    forceLoggingOut: 'Force logging out',
    phoneNumber: 'Phone Number'
  },
  init: {
    // noun
    initTitle: 'Initialize database',
    initProgressTitle: 'Progress',
    initCoreDatabase: 'Initialize core database',
    initFileDatabase: 'Initialize file manager database (optional)',
    initMMSDatabase: 'Initialize member management service database (optional)',
    initJobDatabase: 'Initialize scheduled task management service database (optional)',
    initMcmsDatabase: 'Initialize message center management service database (optional)',
  },
  sys: {
    version: 'Version',
    Name: 'System Name',
    navigation: 'Navigation',
    info: 'System Information',
    // notification
    welcome: 'Welcome to use WanSen ERP',
  },
  dictionary: {
    // noun
    name: 'Dictionary Name',
    dictionaryList: 'Dictionary List',
    dictionaryDetailList: 'Key/Value List',
    key: 'Key',
    value: 'Value',
    // action
    addDictionary: 'Add Dictionary',
    addDictionaryDetail: 'Add Key/Value',
    editDictionary: 'Edit Dictionary',
    editDictionaryDetail: 'Edit Key/Value',
  },
  oauth: {
    // noun
    providerList: 'Provider List',
    clientId: 'Client ID',
    clientSecret: 'Client Secret',
    redirectURL: 'Redirect URL',
    scope: 'Scope',
    authURL: 'Authorization URL',
    tokenURL: 'Token URL',
    authStyle: 'Authorization Style',
    infoURL: 'User Info Path',
    autoDetect: 'Auto detect',
    params: 'Parameters Mode',
    header: 'Header Mode',
    callback: 'Callback interface',
    // action
    addProvider: 'Add Provider',
    editProvider: 'Edit Provider',
  },
  token: {
    // noun
    tokenList: 'Token List',
  },
  department: {
    status: 'Status',
    name: 'Name',
    ancestors: 'Ancestors',
    leader: 'Leader',
    phone: 'Phone',
    email: 'Email',
    sort: 'Sort',
    parentId: 'ParentId',
    addDepartment: 'Add Department',
    editDepartment: 'Edit Department',
    departmentList: 'Department List',
    firstLevelDepartment: 'First level department',
    userDepartment: 'Department',
  },
  position: {
    name: 'Position Name',
    code: 'Position Code',
    remark: 'Remark',
    addPosition: 'Add Position',
    editPosition: 'Edit Position',
    positionList: 'Position List',
    userPosition: 'Position',
  },
  member: {
    rankId: 'Member Rank',
    addMember: 'Add Member',
    editMember: 'Edit Member',
    memberList: 'Member List',
  },
  memberRank: {
    name: 'Rank Name',
    description: 'Rank Description',
    remark: 'Remark',
    addMemberRank: 'Add Rank',
    editMemberRank: 'Edit Rank',
    memberRankList: 'Rank List',
    code: 'Rank Code',
  },
  task: {
    status: 'Status',
    name: 'Task Name',
    taskGroup: 'Task Group',
    cronExpression: 'Cron Expression',
    pattern: 'Pattern',
    payload: 'Payload',
    addTask: 'Add Task',
    editTask: 'Edit Task',
    taskList: 'Task List',
  },
  taskLog: {
    id: 'Id',
    startedAt: 'Started Time',
    finishedAt: 'Finished Time',
    result: 'Result',
    addTaskLog: 'Add Task Log',
    editTaskLog: 'Edit Task Log',
    taskLogList: 'Task Log List',
  },
};
