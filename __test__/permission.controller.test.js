const permissionController = require("../controllers/permission.controller")
const permissionService = require("../services/permission.service")
require("dotenv").config()

describe("Permission controller", () => {
  beforeEach(() => {
    jest.resetModules()
  })

  //Find All Tests

  test("Find All should respond with a 200 status code", async () => {
    jest.spyOn(permissionService, "findAll").mockResolvedValueOnce(() => [
      {
        id: 2,
        employee_first_name: "Jose",
        employee_last_name: "Escobar",
        permission_type_id: 1,
        permission_date: "2022-01-12T00:00:00.000Z",
        PermissionTypeId: 1,
        PermissionType: {
          id: 1,
          description: "Admin",
        },
      },
    ])

    const mReq = {}
    const mRes = { status: jest.fn().mockReturnThis(), send: jest.fn() }

    await permissionController.getList(mReq, mRes)
    expect(mRes.status).toBeCalledWith(200)
    expect(permissionService.findAll).toBeCalledTimes(1)
  })

  test("Find All should respond with a 500 status code", async () => {
    jest.spyOn(permissionService, "findAll").mockResolvedValueOnce(() => {throw new Error("Internal server error")})

    const mReq = {}
    const mRes = { status: jest.fn().mockReturnThis(), send: jest.fn() }

    try{
        await permissionController.getList(mReq, mRes)
    }catch(error){
      expect(mRes.status).toBeCalledWith(500)
      expect(permissionService.findAll).toBeCalledTimes(1)
    }
  })

  //Find One

  test('Find One should respond with a 200 status code', async ()=>{
    jest.spyOn(permissionService, "findOne").mockResolvedValueOnce(()=>(
                {
                id: 2,
                employee_first_name: "Jose",
                employee_last_name: "Escobar",
                permission_type_id: 1,
                permission_date: "2022-01-12T00:00:00.000Z",
                PermissionTypeId: 1,
                PermissionType: {
                id: 1,
                description: "Admin"
                        }
                }
            )
        )

        const mReq = {params: {id:1}}
        const mRes = { status: jest.fn().mockReturnThis(), send: jest.fn() }

        await permissionController.getOne(mReq, mRes)
        expect(mRes.status).toBeCalledWith(200)
        expect(permissionService.findOne).toBeCalledTimes(1)
      }
    )

    test("Find One should respond with a 500 status code", async () => {
        jest.spyOn(permissionService, "findOne").mockResolvedValueOnce(() => {throw new Error("Internal server error")})
    
        const mReq = {params:{id:1}}
        const mRes = { status: jest.fn().mockReturnThis(), send: jest.fn() }
    
        try{
            await permissionController.getOne(mReq, mRes)
        }catch(error){
          expect(mRes.status).toBeCalledWith(500)
          expect(permissionService.findOne).toBeCalledTimes(1)
        }
      })

      //Create a new permission

      test('Create should respond with a 200 status code', async ()=>{
        jest.spyOn(permissionService, "create").mockResolvedValueOnce(()=>(
                    {
                        id: 2,
                        employee_first_name: "Jose",
                        employee_last_name: "Escobar",
                        permission_type_id: 1,
                        permission_date: "2022-01-12T00:00:00.000Z",
                        PermissionTypeId: 1,
                        PermissionType: {
                        id: 1,
                        description: "Admin"
                                }
                    }
                )
            )
    
            const mReq = {
                body: {
                employee_first_name: "Jose",
                employee_last_name: "Escobar",
                permission_type_id: 1,
                permission_date:"2022-01-12"
            }}
            const mRes = { status: jest.fn().mockReturnThis(), send: jest.fn() }
    
            await permissionController.create(mReq, mRes)
            expect(mRes.status).toBeCalledWith(200)
            expect(permissionService.create).toBeCalledTimes(1)
          }
        )

        test("Create should respond with a 500 status code", async () => {
            jest.spyOn(permissionService, "create").mockResolvedValueOnce(() => {throw new Error("Internal server error")})
        
            const mReq = {
                body: {
                employee_first_name: "Jose",
                employee_last_name: "Escobar",
                permission_type_id: 1,
                permission_date:"2022-01-12"
            }}
            const mRes = { status: jest.fn().mockReturnThis(), send: jest.fn() }
        
            try{
                await permissionController.create(mReq, mRes)
            }catch(error){
              expect(mRes.status).toBeCalledWith(500)
              expect(permissionService.create).toBeCalledTimes(1)
            }
          })

        //Update permissions 

        test('Update should respond with a 200 status code', async ()=>{
            jest.spyOn(permissionService, "update").mockResolvedValueOnce(()=>(
                        {
                            id: 2,
                            employee_first_name: "Jose",
                            employee_last_name: "Escobar",
                            permission_type_id: 1,
                            permission_date: "2022-01-12T00:00:00.000Z",
                            PermissionTypeId: 1,
                            PermissionType: {
                            id: 1,
                            description: "Admin"
                                    }
                        }
                    )
                )
        
                const mReq = {
                    body: {
                    id: 2,
                    employee_first_name: "Jose",
                    employee_last_name: "Escobar",
                    permission_type_id: 1,
                    permission_date:"2022-01-12"
                }}
                const mRes = { status: jest.fn().mockReturnThis(), send: jest.fn() }
        
                await permissionController.update(mReq, mRes)
                expect(mRes.status).toBeCalledWith(200)
                expect(permissionService.update).toBeCalledTimes(1)
              }
            )
    
            test("Update should respond with a 500 status code", async () => {
                jest.spyOn(permissionService, "update").mockResolvedValueOnce(() => {throw new Error("Internal server error")})
            
                const mReq = {
                    body: {
                    id: 2,
                    employee_first_name: "Jose",
                    employee_last_name: "Escobar",
                    permission_type_id: 1,
                    permission_date:"2022-01-12"
                }}
                const mRes = { status: jest.fn().mockReturnThis(), send: jest.fn() }
            
                try{
                    await permissionController.update(mReq, mRes)
                }catch(error){
                  expect(mRes.status).toBeCalledWith(500)
                  expect(permissionService.update).toBeCalledTimes(1)
                }
              })
})