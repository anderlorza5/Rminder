using AutoMapper;

public class SuscripcionProfile : Profile
{
    public SuscripcionProfile()
    {
        CreateMap<SuscripcionDTO, SuscripcionEntity>();
        CreateMap<SuscripcionEntity, SuscripcionDTO>();
        CreateMap<BaseSuscripcionDTO, SuscripcionEntity>();
        CreateMap<SuscripcionEntity, BaseSuscripcionDTO>();
    }
}
