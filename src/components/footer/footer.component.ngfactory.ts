/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from './pager.component.ngfactory';
import * as i3 from './pager.component';
import * as i4 from './footer.component';
const styles_DataTableFooterComponent:any[] = ([] as any[]);
export const RenderType_DataTableFooterComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_DataTableFooterComponent,data:{}});
function View_DataTableFooterComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted(-1,(null as any),['\n      ']))],(null as any),
      (null as any));
}
function View_DataTableFooterComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵand(16777216,(null as any),(null as any),2,(null as any),
      View_DataTableFooterComponent_2)),i0.ɵdid(1,540672,(null as any),0,i1.NgTemplateOutlet,
      [i0.ViewContainerRef],{ngTemplateOutletContext:[0,'ngTemplateOutletContext'],
          ngTemplateOutlet:[1,'ngTemplateOutlet']},(null as any)),i0.ɵpod(2,{rowCount:0,
      pageSize:1,selectedCount:2,curPage:3,offset:4}),(_l()(),i0.ɵand(0,(null as any),
      (null as any),0))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _ck(_v,2,0,_co.rowCount,_co.pageSize,_co.selectedCount,_co.curPage,
        _co.offset);
    const currVal_1:any = _co.footerTemplate.template;
    _ck(_v,1,0,currVal_0,currVal_1);
  },(null as any));
}
function View_DataTableFooterComponent_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'span',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted(1,(null as any),['\n          ',' ',' / \n        ']))],(null as any),
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.selectedCount.toLocaleString();
        const currVal_1:any = _co.selectedMessage;
        _ck(_v,1,0,currVal_0,currVal_1);
      });
}
function View_DataTableFooterComponent_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),4,'div',[['class',
      'page-count']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_DataTableFooterComponent_4)),i0.ɵdid(3,
          16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,
              'ngIf']},(null as any)),(_l()(),i0.ɵted(4,(null as any),['\n        ',
          ' ','\n      ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.selectedMessage;
    _ck(_v,3,0,currVal_0);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_1:any = _co.rowCount.toLocaleString();
    const currVal_2:any = _co.totalMessage;
    _ck(_v,4,0,currVal_1,currVal_2);
  });
}
function View_DataTableFooterComponent_5(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),2,'datatable-pager',
      [['class','datatable-pager']],[[8,'hidden',0]],[[(null as any),'change']],(_v,
          en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('change' === en)) {
          const pd_0:any = ((<any>_co.page.emit($event)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },i2.View_DataTablePagerComponent_0,i2.RenderType_DataTablePagerComponent)),
      i0.ɵdid(1,49152,(null as any),0,i3.DataTablePagerComponent,([] as any[]),{pagerLeftArrowIcon:[0,
          'pagerLeftArrowIcon'],pagerRightArrowIcon:[1,'pagerRightArrowIcon'],pagerPreviousIcon:[2,
          'pagerPreviousIcon'],pagerNextIcon:[3,'pagerNextIcon'],size:[4,'size'],count:[5,
          'count'],page:[6,'page']},{change:'change'}),(_l()(),i0.ɵted(-1,(null as any),
          ['\n      ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_1:any = _co.pagerLeftArrowIcon;
    const currVal_2:any = _co.pagerRightArrowIcon;
    const currVal_3:any = _co.pagerPreviousIcon;
    const currVal_4:any = _co.pagerNextIcon;
    const currVal_5:any = _co.pageSize;
    const currVal_6:any = _co.rowCount;
    const currVal_7:any = _co.curPage;
    _ck(_v,1,0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:boolean = !_co.isVisible;
    _ck(_v,0,0,currVal_0);
  });
}
export function View_DataTableFooterComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(2,[(_l()(),i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵeld(1,
      0,(null as any),(null as any),12,'div',[['class','datatable-footer-inner']],
      [[4,'height','px']],(null as any),(null as any),(null as any),(null as any))),
      i0.ɵdid(2,278528,(null as any),0,i1.NgClass,[i0.IterableDiffers,i0.KeyValueDiffers,
          i0.ElementRef,i0.Renderer],{klass:[0,'klass'],ngClass:[1,'ngClass']},(null as any)),
      i0.ɵpod(3,{'selected-count':0}),(_l()(),i0.ɵted(-1,(null as any),['\n      '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_DataTableFooterComponent_1)),
      i0.ɵdid(6,16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n      '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_DataTableFooterComponent_3)),
      i0.ɵdid(9,16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n      '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_DataTableFooterComponent_5)),
      i0.ɵdid(12,16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n  ']))],(_ck,_v) => {
    var _co:i4.DataTableFooterComponent = _v.component;
    const currVal_1:any = 'datatable-footer-inner';
    const currVal_2:any = _ck(_v,3,0,_co.selectedMessage);
    _ck(_v,2,0,currVal_1,currVal_2);
    const currVal_3:any = _co.footerTemplate;
    _ck(_v,6,0,currVal_3);
    const currVal_4:boolean = !_co.footerTemplate;
    _ck(_v,9,0,currVal_4);
    const currVal_5:boolean = !_co.footerTemplate;
    _ck(_v,12,0,currVal_5);
  },(_ck,_v) => {
    var _co:i4.DataTableFooterComponent = _v.component;
    const currVal_0:any = _co.footerHeight;
    _ck(_v,1,0,currVal_0);
  });
}
export function View_DataTableFooterComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'datatable-footer',
      [['class','datatable-footer']],(null as any),(null as any),(null as any),View_DataTableFooterComponent_0,
      RenderType_DataTableFooterComponent)),i0.ɵdid(1,49152,(null as any),0,i4.DataTableFooterComponent,
      ([] as any[]),(null as any),(null as any))],(null as any),(null as any));
}
export const DataTableFooterComponentNgFactory:i0.ComponentFactory<i4.DataTableFooterComponent> = i0.ɵccf('datatable-footer',
    i4.DataTableFooterComponent,View_DataTableFooterComponent_Host_0,{footerHeight:'footerHeight',
        rowCount:'rowCount',pageSize:'pageSize',offset:'offset',pagerLeftArrowIcon:'pagerLeftArrowIcon',
        pagerRightArrowIcon:'pagerRightArrowIcon',pagerPreviousIcon:'pagerPreviousIcon',
        pagerNextIcon:'pagerNextIcon',totalMessage:'totalMessage',footerTemplate:'footerTemplate',
        selectedCount:'selectedCount',selectedMessage:'selectedMessage'},{page:'page'},
    ([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL25vaXMvUHJvamVjdHMvbmd4LWRhdGF0YWJsZS9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9ub2lzL1Byb2plY3RzL25neC1kYXRhdGFibGUvc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy9ub2lzL1Byb2plY3RzL25neC1kYXRhdGFibGUvc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMuRGF0YVRhYmxlRm9vdGVyQ29tcG9uZW50Lmh0bWwiLCJuZzovLy9Vc2Vycy9ub2lzL1Byb2plY3RzL25neC1kYXRhdGFibGUvc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMuRGF0YVRhYmxlRm9vdGVyQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJkYXRhdGFibGUtZm9vdGVyLWlubmVyXCJcbiAgICAgIFtuZ0NsYXNzXT1cInsnc2VsZWN0ZWQtY291bnQnOiBzZWxlY3RlZE1lc3NhZ2V9XCJcbiAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwiZm9vdGVySGVpZ2h0XCI+XG4gICAgICA8bmctdGVtcGxhdGVcbiAgICAgICAgKm5nSWY9XCJmb290ZXJUZW1wbGF0ZVwiXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImZvb3RlclRlbXBsYXRlLnRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgXG4gICAgICAgICAgcm93Q291bnQ6IHJvd0NvdW50LCBcbiAgICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUsIFxuICAgICAgICAgIHNlbGVjdGVkQ291bnQ6IHNlbGVjdGVkQ291bnQsXG4gICAgICAgICAgY3VyUGFnZTogY3VyUGFnZSxcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldFxuICAgICAgICB9XCI+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtY291bnRcIiAqbmdJZj1cIiFmb290ZXJUZW1wbGF0ZVwiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cInNlbGVjdGVkTWVzc2FnZVwiPlxuICAgICAgICAgIHt7c2VsZWN0ZWRDb3VudC50b0xvY2FsZVN0cmluZygpfX0ge3tzZWxlY3RlZE1lc3NhZ2V9fSAvIFxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHt7cm93Q291bnQudG9Mb2NhbGVTdHJpbmcoKX19IHt7dG90YWxNZXNzYWdlfX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRhdGF0YWJsZS1wYWdlciAqbmdJZj1cIiFmb290ZXJUZW1wbGF0ZVwiXG4gICAgICAgIFtwYWdlckxlZnRBcnJvd0ljb25dPVwicGFnZXJMZWZ0QXJyb3dJY29uXCJcbiAgICAgICAgW3BhZ2VyUmlnaHRBcnJvd0ljb25dPVwicGFnZXJSaWdodEFycm93SWNvblwiXG4gICAgICAgIFtwYWdlclByZXZpb3VzSWNvbl09XCJwYWdlclByZXZpb3VzSWNvblwiXG4gICAgICAgIFtwYWdlck5leHRJY29uXT1cInBhZ2VyTmV4dEljb25cIlxuICAgICAgICBbcGFnZV09XCJjdXJQYWdlXCJcbiAgICAgICAgW3NpemVdPVwicGFnZVNpemVcIlxuICAgICAgICBbY291bnRdPVwicm93Q291bnRcIlxuICAgICAgICBbaGlkZGVuXT1cIiFpc1Zpc2libGVcIlxuICAgICAgICAoY2hhbmdlKT1cInBhZ2UuZW1pdCgkZXZlbnQpXCI+XG4gICAgICA8L2RhdGF0YWJsZS1wYWdlcj5cbiAgICA8L2Rpdj5cbiAgIiwiPGRhdGF0YWJsZS1mb290ZXI+PC9kYXRhdGFibGUtZm9vdGVyPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ2NXOzs7O29CQVRMO01BQUEseUNBQUE7TUFBQTtVQUFBLCtEQUdFO01BQUE7OztJQUFBO1FBQUE7SUFEQTtJQUZGLFdBR0UsVUFEQSxTQUZGOzs7O29CQVlFO01BQUEsd0VBQThCO2FBQUE7OztRQUFBO1FBQUE7UUFBQTs7OztvQkFEaEM7TUFBQTtNQUFnRCxrREFDOUM7VUFBQSx1RUFBQTtVQUFBO2NBQUEsd0JBRU87VUFBQTs7SUFGRDtJQUFOLFdBQU0sU0FBTjs7O0lBRU87SUFBQTtJQUFBOzs7O29CQUdUO01BQUE7bUJBQUE7UUFBQTtRQUFBO1FBU0U7VUFBQTtVQUFBO1FBQUE7UUFURjtNQUFBO2FBQUE7VUFBQTtVQUFBO1VBQUEsNkNBUytCO1VBQUE7O0lBUjdCO0lBQ0E7SUFDQTtJQUNBO0lBRUE7SUFDQTtJQUZBO0lBTEYsV0FDRSxVQUNBLFVBQ0EsVUFDQSxVQUVBLFVBQ0EsVUFGQSxTQUxGOzs7SUFRRTtJQVJGLFdBUUUsU0FSRjs7OztvQkF0Qk4sOENBQ0k7TUFBQTtNQUFBO2FBQUE7bUNBQUE7YUFFRSx5QkFDaUM7TUFDakM7YUFBQTtVQUFBLGlDQVVjO01BQ2Q7YUFBQTtVQUFBLGlDQUtNO01BQ047YUFBQTtVQUFBLGlDQVVrQjtNQUNkOztJQS9CSjtJQUNBO0lBRkYsV0FDRSxVQUNBLFNBRkY7SUFLSTtJQURGLFdBQ0UsU0FERjtJQVd3QjtJQUF4QixXQUF3QixTQUF4QjtJQU1pQjtJQUFqQixZQUFpQixTQUFqQjs7O0lBbEJBO0lBSEYsV0FHRSxTQUhGOzs7O29CQ0RKO01BQUE7eUNBQUEsVUFBQTtNQUFBOzs7Ozs7OzsifQ==
