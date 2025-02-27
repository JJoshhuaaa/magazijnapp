using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Magazijnapp.API.Models;

[ApiController]
[Route("api/controller")]
public class InventoryController : ControllerBase
{
    public IActionResult GetInventory()
    {
        var inventory = new List<object>
        {
            new { id = 1, name = "Item 1", quantity = 10 },
            new { id = 2, name = "Item 2", quantity = 5 }
        };

        return Ok(inventory);
    }
}