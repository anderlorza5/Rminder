using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class UsersController : ControllerBase
{
    private readonly ILogger<UsersController> _logger;
    private readonly IUserService _UserService;

    /// <summary>
    /// It creates a UserController
    /// </summary>
    /// <param name="logger">used for logging</param>
    /// <param name="UserService">used for dealing with the User data</param>
    public UsersController(ILogger<UsersController> logger, IUserService UserService)
    {
        _logger = logger;
        _UserService = UserService;
    }

    /// <summary>
    /// Returns all the Users
    /// </summary>
    /// <returns>Returns a list of <see cref="UserDTO"/></returns>
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(UserDTO))]
    public ActionResult<UserDTO> Get()
    {
        return Ok(_UserService.GetAll());
    }

    /// <summary>
    /// It returns a User by id 
    /// </summary>
    /// <param name="Id">the id of the User</param>
    /// <returns>Returns a User <see cref="UserDTO"/></returns>
    [HttpGet("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(UserDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<UserDTO> Get(int Id)
    {
        UserDTO result = _UserService.GetByID(Id);

        if (result == null)
            return NotFound();

        return Ok(result);

    }


    /// <summary>
    /// it deletes a User
    /// </summary>
    /// <param name="Id">the id of the User that is going to be delated</param>
    /// <returns>Returns the deleted User <see cref="UserDTO"/></returns>
    [HttpDelete("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(UserDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<UserDTO> Delete(int Id)
    {
        UserDTO result = _UserService.GetByID(Id);

        if (result == null)
            return NotFound();

        _UserService.Delete(Id);

        return Ok(result);

    }


    /// <summary>
    /// It creates a User
    /// </summary>
    /// <param name="baseUser">the created User <see cref="BaseUserDTO"/></param>
    /// <returns>Returns the created User <see cref="UserDTO"/></returns>
    ///<remarks>
    /// Sample request:
    ///
    /// POST
    /// {
    ///
    /// 
    /// "name": "Prueba Swagger Post",
    /// "surname": "Daniel",
    /// "birthdate": "2020-12-23 15:40:45.2756145",
    ///
    /// }
    /// </remarks>
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(UserDTO))]
    public ActionResult<UserDTO> Post([FromBody] BaseUserDTO baseUser)
    {

        return Ok(_UserService.Add(baseUser));
    }

    /// <summary>
    /// it modifies a User
    /// </summary>
    /// <param name="baseUser">the created User <see cref="BaseUserDTO"/></param>
    /// <param name="Id">the id of the modified User</param>
    /// <returns>Returns the modified User <see cref="UserDTO"/><</returns>
    [HttpPut("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(UserDTO))]
    public ActionResult<UserDTO> Put([FromBody] BaseUserDTO baseUser, int Id)
    {

        return Ok(_UserService.Modify(baseUser, Id));
    }

}
