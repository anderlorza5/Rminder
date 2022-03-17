using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;

public class SuscripcionService : ISuscripcionService
{
    private readonly SuscripcionContext _context;
    private readonly IMapper _mapper;

    public SuscripcionService(SuscripcionContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public SuscripcionDTO Add(BaseSuscripcionDTO baseSuscripcion)
    {
        var _mappedSuscripcion = _mapper.Map<SuscripcionEntity>(baseSuscripcion);
        var entityAdded = _context.Suscripcions.Add(_mappedSuscripcion);
        _context.SaveChanges();
        return _mapper.Map<SuscripcionDTO>(entityAdded);
    }

    public void Delete(int guid)
    {
        SuscripcionEntity Suscripcion = _context.Suscripcions.FirstOrDefault(x => x.Id == guid);

        if (Suscripcion == null)
            throw new ApplicationException($"Bokk with id {guid} not found");

        _context.Suscripcions.Remove(Suscripcion);
        _context.SaveChanges();
    }

    public IEnumerable<SuscripcionDTO> GetAll()
    {
        return _mapper.Map<IEnumerable<SuscripcionDTO>>(_context.Suscripcions.Select(x => x));
    }

    public SuscripcionDTO GetByID(int guid)
    {
        return _mapper.Map<SuscripcionDTO>(_context.Suscripcions.FirstOrDefault(x => x.Id == guid));
    }

    public SuscripcionDTO Modify(BaseSuscripcionDTO Suscripcion, int guid)
    {
        var _mappedSuscripcion = _mapper.Map<SuscripcionEntity>(Suscripcion);
        _mappedSuscripcion.Id = guid;

        SuscripcionEntity modifiedSuscripcion = _context.Suscripcions.FirstOrDefault(x => x.Id == guid);

        if (modifiedSuscripcion == null)
            return null;

        _context.Entry(modifiedSuscripcion).CurrentValues.SetValues(_mappedSuscripcion);

        _context.SaveChanges();

        return _mapper.Map<SuscripcionDTO>(_mappedSuscripcion);
    }

    public IEnumerable<SuscripcionDTO> GetAllSubs(int guid)
    {
        return _mapper.Map<IEnumerable<SuscripcionDTO>>(_context.Suscripcions.Where(x => x.Id_usuario==guid));
    }

}