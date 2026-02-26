using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace AssetManagement.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AssetController : ControllerBase
    {
        // In-memory asset store for demonstration
        private static readonly List<AssetDto> Assets = new List<AssetDto>
        {
            new AssetDto { Id = 1, Name = "Laptop", Description = "Dell XPS 13", Value = 1200.00m },
            new AssetDto { Id = 2, Name = "Projector", Description = "Epson Full HD", Value = 800.00m },
            new AssetDto { Id = 3, Name = "Office Chair", Description = "Ergonomic chair", Value = 250.00m }
        };
        private static int _nextId = 4;

        [HttpGet]
        public ActionResult<IEnumerable<AssetDto>> GetAll()
        {
            return Ok(Assets);
        }

        [HttpGet("{id}")]
        public ActionResult<AssetDto> GetById(int id)
        {
            var asset = Assets.FirstOrDefault(a => a.Id == id);
            if (asset == null)
                return NotFound();
            return Ok(asset);
        }

        [HttpPost]
        public ActionResult<AssetDto> Create([FromBody] AssetDto asset)
        {
            asset.Id = _nextId++;
            Assets.Add(asset);
            return CreatedAtAction(nameof(GetById), new { id = asset.Id }, asset);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] AssetDto updatedAsset)
        {
            var asset = Assets.FirstOrDefault(a => a.Id == id);
            if (asset == null)
                return NotFound();
            asset.Name = updatedAsset.Name;
            asset.Description = updatedAsset.Description;
            asset.Value = updatedAsset.Value;
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var asset = Assets.FirstOrDefault(a => a.Id == id);
            if (asset == null)
                return NotFound();
            Assets.Remove(asset);
            return NoContent();
        }
    }

    // Simple DTO for demonstration
    public class AssetDto
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public decimal Value { get; set; }
    }
}
