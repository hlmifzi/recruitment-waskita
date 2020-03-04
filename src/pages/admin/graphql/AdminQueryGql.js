const AdminQueryGql = {
  candidateList: ` {
    candidateList {
      results {
        id
        name
        gender
        age
        university {
          university
        }
        noKtp
        email
        createdAt
      }
    }
  }`
}


export default AdminQueryGql