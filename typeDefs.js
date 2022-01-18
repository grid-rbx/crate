module.exports = `
type User {
    name: String
    id: Int
    description: String
    created: String
    isBanned: Boolean
    displayName: String
    externalAppDisplayName: String
}

type ValidateDisplayName {
    status: Int
}

type Query {
    user(id: Int): User
    validateDisplayName(displayName: String, birthdate: String): ValidateDisplayName
}
`