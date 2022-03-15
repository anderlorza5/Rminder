using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers;

[ApiController]
[Route("[controller]")]
public class SuscripcionsController : ControllerBase
{
    private readonly ILogger<SuscripcionsController> _logger;
    private readonly ISuscripcionService _SuscripcionService;

    /// <summary>
    /// It creates a SuscripcionController
    /// </summary>
    /// <param name="logger">used for logging</param>
    /// <param name="SuscripcionService">used for dealing with the Suscripcion data</param>
    public SuscripcionsController(ILogger<SuscripcionsController> logger, ISuscripcionService SuscripcionService)
    {
        _logger = logger;
        _SuscripcionService = SuscripcionService;
    }

    /// <summary>
    /// Returns all the Suscripcions
    /// </summary>
    /// <returns>Returns a list of <see cref="SuscripcionDTO"/></returns>
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SuscripcionDTO))]
    public ActionResult<SuscripcionDTO> Get()
    {
        return Ok(_SuscripcionService.GetAll());
    }

    /// <summary>
    /// It returns a Suscripcion by id 
    /// </summary>
    /// <param name="Id">the id of the Suscripcion</param>
    /// <returns>Returns a Suscripcion <see cref="SuscripcionDTO"/></returns>
    [HttpGet("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SuscripcionDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<SuscripcionDTO> Get(int Id)
    {
        SuscripcionDTO result = _SuscripcionService.GetByID(Id);

        if (result == null)
            return NotFound();

        return Ok(result);

    }


    /// <summary>
    /// it deletes a Suscripcion
    /// </summary>
    /// <param name="Id">the id of the Suscripcion that is going to be delated</param>
    /// <returns>Returns the deleted Suscripcion <see cref="SuscripcionDTO"/></returns>
    [HttpDelete("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SuscripcionDTO))]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<SuscripcionDTO> Delete(int Id)
    {
        SuscripcionDTO result = _SuscripcionService.GetByID(Id);

        if (result == null)
            return NotFound();

        _SuscripcionService.Delete(Id);

        return Ok(result);

    }


    /// <summary>
    /// It creates a Suscripcion
    /// </summary>
    /// <param name="baseSuscripcion">the created Suscripcion <see cref="BaseSuscripcionDTO"/></param>
    /// <returns>Returns the created Suscripcion <see cref="SuscripcionDTO"/></returns>
    ///<remarks>
    /// Sample request:
    ///
    /// POST
    /// {
    ///
    /// 
    /// "anio": 3029,
    /// "duration": 239,
    /// "lenguaje": "Gallego",
    /// "actor_id": 1,
    /// "director_id": 2,
    ///
    /// }
    /// </remarks>
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SuscripcionDTO))]
    public ActionResult<SuscripcionDTO> Post([FromBody] BaseSuscripcionDTO baseSuscripcion)
    {

        return Ok(_SuscripcionService.Add(baseSuscripcion));
    }

    /// <summary>
    /// it modifies a Suscripcion
    /// </summary>
    /// <param name="baseSuscripcion">the created Suscripcion <see cref="BaseSuscripcionDTO"/></param>
    /// <param name="Id">the id of the modified Suscripcion</param>
    /// <returns>Returns the modified Suscripcion <see cref="SuscripcionDTO"/><</returns>
    [HttpPut("{Id}")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(SuscripcionDTO))]
    public ActionResult<SuscripcionDTO> Put([FromBody] BaseSuscripcionDTO baseSuscripcion, int Id)
    {

        return Ok(_SuscripcionService.Modify(baseSuscripcion, Id));
    }

}
