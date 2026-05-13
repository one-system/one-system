using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

#region  Add ANGULAR

builder.Services.AddSpaStaticFiles(configuration => { configuration.RootPath = "clientapp/dist/sample1"; });

#endregion

#region  Add API

//builder.Services.AddControllers();
//// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
//builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();

#endregion

#region  Add MVC

//builder.Services.AddControllersWithViews(); // .SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

#endregion

#region Add RAZOR

//builder.Services.AddRazorPages();

#endregion

WebApplication app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();

    #region RAZOR

    //app.UseExceptionHandler("/Error"); // RAZOR

    #endregion

    #region MVC

    //app.UseExceptionHandler("/Home/Error"); // MVC

    #endregion

    #region API

    //app.UseSwagger();
    //app.UseSwaggerUI();

    #endregion
}

app.UseHttpsRedirection();
app.UseStaticFiles();

#region ASP.NET

//app.UseRouting();
//app.UseAuthorization();

#endregion

#region  ANGULAR

app.UseSpaStaticFiles();

app.UseSpa(spa => {
    // To learn more about options for serving an Angular SPA from ASP.NET Core,
    // https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/angular

    spa.Options.SourcePath = "clientapp/dist/sample1";

    //if (app.Environment.IsDevelopment())
    //{
    //    spa.UseAngularCliServer(npmScript: "start");
    //}
});

#endregion

#region API

//app.MapControllers();

#endregion

#region  MVC

//app.MapControllerRoute(
//    name: "default",
//    pattern: "{controller=Home}/{action=Index}/{id?}");

#endregion

#region  RAZOR

//app.MapRazorPages();

#endregion

app.Run();

