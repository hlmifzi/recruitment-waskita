const AdminQueryGql = {
    JumlahPeserta: `{
        pokemon(name: "Pikachu") {
          id
          number
          name
          attacks {
            special {
              name
              type
              damage
            }
          }
          evolutions {
            id
            number
            name
            weight {
              minimum
              maximum
            }
            attacks {
              fast {
                name
                type
                damage
              }
            }
          }
        }
      }`
}


export default AdminQueryGql