using System.Collections.Generic;
using Microsoft.AspNetCore.JsonPatch;

/// <summary>
/// This is the service for Suscripcions
/// </summary>
public interface ISuscripcionService
{
    public IEnumerable<SuscripcionDTO> GetAll();

    public IEnumerable<SuscripcionDTO> GetAllSubs(int guid);

    public SuscripcionDTO GetByID(int guid);

    public SuscripcionDTO Add(BaseSuscripcionDTO guid);

    public void Delete(int guid);

    public SuscripcionDTO Modify(BaseSuscripcionDTO Suscripcion, int guid);
}