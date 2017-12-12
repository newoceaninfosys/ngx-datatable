/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from './body-cell.component';
const styles_DataTableBodyCellComponent:any[] = ([] as any[]);
export const RenderType_DataTableBodyCellComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_DataTableBodyCellComponent,data:{}});
function View_DataTableBodyCellComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),3,'label',[['class',
      'datatable-checkbox']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),i0.ɵeld(2,
      0,(null as any),(null as any),0,'input',[['type','checkbox']],[[8,'checked',
          0]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.onCheckboxChange($event)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n      ']))],
      (null as any),(_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.isSelected;
        _ck(_v,2,0,currVal_0);
      });
}
function View_DataTableBodyCellComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'span',([] as any[]),
      [[8,'title',0],[8,'innerHTML',1]],(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n      ']))],(null as any),
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = _co.sanitizedValue;
        const currVal_1:any = _co.value;
        _ck(_v,0,0,currVal_0,currVal_1);
      });
}
function View_DataTableBodyCellComponent_4(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted(-1,(null as any),['\n      ']))],(null as any),
      (null as any));
}
function View_DataTableBodyCellComponent_3(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵand(16777216,[[1,3],['cellTemplate',2]],(null as any),
      1,(null as any),View_DataTableBodyCellComponent_4)),i0.ɵdid(1,540672,(null as any),
      0,i1.NgTemplateOutlet,[i0.ViewContainerRef],{ngTemplateOutletContext:[0,'ngTemplateOutletContext'],
          ngTemplateOutlet:[1,'ngTemplateOutlet']},(null as any)),(_l()(),i0.ɵand(0,
      (null as any),(null as any),0))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.cellContext;
    const currVal_1:any = _co.column.cellTemplate;
    _ck(_v,1,0,currVal_0,currVal_1);
  },(null as any));
}
export function View_DataTableBodyCellComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(2,[i0.ɵqud(671088640,1,{cellTemplate:0}),(_l()(),i0.ɵted(-1,(null as any),
      ['\n    '])),(_l()(),i0.ɵeld(2,0,(null as any),(null as any),10,'div',[['class',
      'datatable-body-cell-label']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n      '])),(_l()(),i0.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_DataTableBodyCellComponent_1)),
      i0.ɵdid(5,16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n      '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_DataTableBodyCellComponent_2)),
      i0.ɵdid(8,16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n      '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_DataTableBodyCellComponent_3)),
      i0.ɵdid(11,16384,(null as any),0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n  ']))],(_ck,_v) => {
    var _co:i2.DataTableBodyCellComponent = _v.component;
    const currVal_0:any = (_co.column.checkboxable && (!_co.displayCheck || _co.displayCheck(_co.row,
        _co.column,_co.value)));
    _ck(_v,5,0,currVal_0);
    const currVal_1:boolean = !_co.column.cellTemplate;
    _ck(_v,8,0,currVal_1);
    const currVal_2:any = _co.column.cellTemplate;
    _ck(_v,11,0,currVal_2);
  },(null as any));
}
export function View_DataTableBodyCellComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'datatable-body-cell',
      ([] as any[]),[[8,'className',0],[4,'width','px'],[4,'height',(null as any)]],
      [[(null as any),'focus'],[(null as any),'blur'],[(null as any),'click'],[(null as any),
          'dblclick'],[(null as any),'keydown']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('focus' === en)) {
          const pd_0:any = ((<any>i0.ɵnov(_v,1).onFocus()) !== false);
          ad = (pd_0 && ad);
        }
        if (('blur' === en)) {
          const pd_1:any = ((<any>i0.ɵnov(_v,1).onBlur()) !== false);
          ad = (pd_1 && ad);
        }
        if (('click' === en)) {
          const pd_2:any = ((<any>i0.ɵnov(_v,1).onClick($event)) !== false);
          ad = (pd_2 && ad);
        }
        if (('dblclick' === en)) {
          const pd_3:any = ((<any>i0.ɵnov(_v,1).onDblClick($event)) !== false);
          ad = (pd_3 && ad);
        }
        if (('keydown' === en)) {
          const pd_4:any = ((<any>i0.ɵnov(_v,1).onKeyDown($event)) !== false);
          ad = (pd_4 && ad);
        }
        return ad;
      },View_DataTableBodyCellComponent_0,RenderType_DataTableBodyCellComponent)),
      i0.ɵdid(1,442368,(null as any),0,i2.DataTableBodyCellComponent,[i0.ElementRef,
          i0.ChangeDetectorRef],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(_ck,_v) => {
    const currVal_0:any = i0.ɵnov(_v,1).columnCssClasses;
    const currVal_1:any = i0.ɵnov(_v,1).width;
    const currVal_2:any = i0.ɵnov(_v,1).height;
    _ck(_v,0,0,currVal_0,currVal_1,currVal_2);
  });
}
export const DataTableBodyCellComponentNgFactory:i0.ComponentFactory<i2.DataTableBodyCellComponent> = i0.ɵccf('datatable-body-cell',
    i2.DataTableBodyCellComponent,View_DataTableBodyCellComponent_Host_0,{displayCheck:'displayCheck',
        group:'group',rowHeight:'rowHeight',isSelected:'isSelected',expanded:'expanded',
        rowIndex:'rowIndex',column:'column',row:'row',sorts:'sorts'},{activate:'activate'},
    ([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL25vaXMvUHJvamVjdHMvbmd4LWRhdGF0YWJsZS9zcmMvY29tcG9uZW50cy9ib2R5L2JvZHktY2VsbC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvbm9pcy9Qcm9qZWN0cy9uZ3gtZGF0YXRhYmxlL3NyYy9jb21wb25lbnRzL2JvZHkvYm9keS1jZWxsLmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL25vaXMvUHJvamVjdHMvbmd4LWRhdGF0YWJsZS9zcmMvY29tcG9uZW50cy9ib2R5L2JvZHktY2VsbC5jb21wb25lbnQudHMuRGF0YVRhYmxlQm9keUNlbGxDb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL25vaXMvUHJvamVjdHMvbmd4LWRhdGF0YWJsZS9zcmMvY29tcG9uZW50cy9ib2R5L2JvZHktY2VsbC5jb21wb25lbnQudHMuRGF0YVRhYmxlQm9keUNlbGxDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCJcbiAgICA8ZGl2IGNsYXNzPVwiZGF0YXRhYmxlLWJvZHktY2VsbC1sYWJlbFwiPlxuICAgICAgPGxhYmVsXG4gICAgICAgICpuZ0lmPVwiY29sdW1uLmNoZWNrYm94YWJsZSAmJiAoIWRpc3BsYXlDaGVjayB8fCBkaXNwbGF5Q2hlY2socm93LCBjb2x1bW4sIHZhbHVlKSlcIlxuICAgICAgICBjbGFzcz1cImRhdGF0YWJsZS1jaGVja2JveFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIFtjaGVja2VkXT1cImlzU2VsZWN0ZWRcIlxuICAgICAgICAgIChjbGljayk9XCJvbkNoZWNrYm94Q2hhbmdlKCRldmVudClcIlxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxzcGFuXG4gICAgICAgICpuZ0lmPVwiIWNvbHVtbi5jZWxsVGVtcGxhdGVcIlxuICAgICAgICBbdGl0bGVdPVwic2FuaXRpemVkVmFsdWVcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cInZhbHVlXCI+XG4gICAgICA8L3NwYW4+XG4gICAgICA8bmctdGVtcGxhdGUgI2NlbGxUZW1wbGF0ZVxuICAgICAgICAqbmdJZj1cImNvbHVtbi5jZWxsVGVtcGxhdGVcIlxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjb2x1bW4uY2VsbFRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cImNlbGxDb250ZXh0XCI+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICAiLCI8ZGF0YXRhYmxlLWJvZHktY2VsbD48L2RhdGF0YWJsZS1ib2R5LWNlbGw+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O29CQ0VNO01BQUE7TUFBQSxnQkFFNkIsa0RBQzNCO01BQUE7VUFBQTtRQUFBO1FBQUE7UUFHRTtVQUFBO1VBQUE7UUFBQTtRQUhGO01BQUEsZ0NBSUU7OztRQUZBO1FBRkYsV0FFRSxTQUZGOzs7O29CQU1GO01BQUE7TUFBQSxnQkFHc0I7OztRQURwQjtRQUNBO1FBSEYsV0FFRSxVQUNBLFNBSEY7Ozs7b0JBUTBDOzs7O29CQUgxQztNQUFBLDJEQUFBO01BQUE7VUFBQTs7O0lBR0U7SUFEQTtJQUZGLFdBR0UsVUFEQSxTQUZGOzs7OzBEQWhCTjtNQUFBLGFBQ0k7TUFBQTtNQUFBLGdCQUF1QyxnREFDckM7TUFBQTthQUFBO1VBQUEsaUNBUVE7TUFDUjthQUFBO1VBQUEsaUNBSU87TUFDUDthQUFBO1VBQUEsaUNBSWM7TUFDVjs7SUFsQkY7UUFBQTtJQURGLFdBQ0UsU0FERjtJQVVFO0lBREYsV0FDRSxTQURGO0lBTUU7SUFERixZQUNFLFNBREY7Ozs7b0JDaEJOO01BQUE7TUFBQTtVQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7VUFBQTtVQUFBO1FBQUE7UUFBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO1VBQUE7VUFBQTtRQUFBO1FBQUE7TUFBQTthQUFBOzhCQUFBO0lBQUE7O0lBQUE7SUFBQTtJQUFBO0lBQUEsV0FBQSw2QkFBQTs7Ozs7OzsifQ==