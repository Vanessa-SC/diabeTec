import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'medicamentos', loadChildren: './medicamentos/medicamentos.module#MedicamentosPageModule' },
  { path: 'menus', loadChildren: './menus/menus.module#MenusPageModule' },
  { path: 'presion', loadChildren: './presion/presion.module#PresionPageModule' },
  { path: 'peso', loadChildren: './peso/peso.module#PesoPageModule' },
  { path: 'recordatorios', loadChildren: './recordatorios/recordatorios.module#RecordatoriosPageModule' },
  { path: 'ajustes', loadChildren: './ajustes/ajustes.module#AjustesPageModule' },
  { path: 'noticias', loadChildren: './noticias/noticias.module#NoticiasPageModule' },
  { path: 'graficas', loadChildren: './graficas/graficas.module#GraficasPageModule' },
  { path: 'ejercicios', loadChildren: './ejercicios/ejercicios.module#EjerciciosPageModule' },
  { path: 'bitacora', loadChildren: './bitacora/bitacora.module#BitacoraPageModule' },
  { path: 'add-medicamento', loadChildren: './add-medicamento/add-medicamento.module#AddMedicamentoPageModule' },
  { path: 'receta', loadChildren: './receta/receta.module#RecetaPageModule' },
  { path: 'add-peso', loadChildren: './add-peso/add-peso.module#AddPesoPageModule' },
  { path: 'add-recordatorio', loadChildren: './add-recordatorio/add-recordatorio.module#AddRecordatorioPageModule' },
  { path: 'add-glucosa', loadChildren: './add-glucosa/add-glucosa.module#AddGlucosaPageModule' },
  { path: 'eliminar', loadChildren: './eliminar/eliminar.module#EliminarPageModule' },
  { path: 'add-presion', loadChildren: './add-presion/add-presion.module#AddPresionPageModule' },  { path: 'view-peso', loadChildren: './view-peso/view-peso.module#ViewPesoPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
