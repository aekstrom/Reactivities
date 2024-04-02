using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class ActivitiesController(DataContext dbContext) : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<IList<Activity>>> GetActivities()
    {
        return await dbContext.Activities.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivity(Guid id)
    {
        return await dbContext.Activities.FindAsync(id);
    }
}