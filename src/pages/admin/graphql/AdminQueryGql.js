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
  }`,
  statisticCandidateByMonth: `{
    statisticCandidateByMonth {
      month
      monthValue
    }
  }`,
  statisticCandidateByGender: `{
    statisticCandidateByGender {
      gender
      genderValue
    }
  }`,
  statisticCandidateByAge: `{
  statisticCandidateByAge {
    age
    ageValue
  }
}`,
  statisticCandidateByUniversity: `{
  statisticCandidateByUniversity {
    university
    universityValue
  }
}`

}


export default AdminQueryGql