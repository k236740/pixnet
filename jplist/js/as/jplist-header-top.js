
var jplistTop = '<div class="jplist-ios-button">'+
'          <i class="fa fa-sort"></i>'+
'          <span>顯示導航</span>'+
'      </div>'+
'      <!-- panel -->'+
'      <div class="jplist-panel box panel-top">'+
'          <!-- items per page dropdown -->'+
'          <div class="jplist-drop-down" data-control-type="items-per-page-drop-down" data-control-name="paging" data-control-action="paging">'+
'            <ul>'+
'              <li><span data-number="1" data-default="true"> 每頁顯示 1 個項目 </span></li>'+
'              <li><span data-number="3"> 每頁顯示 3 個項目 </span></li>'+
'              <li><span data-number="5"> 每頁顯示 5 個項目 </span></li>'+
'              <li><span data-number="7"> 每頁顯示 7 個項目 </span></li>'+
'              <li><span data-number="9"> 每頁顯示 9 個項目 </span></li>'+
'              <li><span data-number="all"> 檢視所有項目 </span></li>'+
'            </ul>'+
'          </div>'+
'          <!-- sort dropdown -->'+
'          <div class="jplist-drop-down" data-control-type="sort-drop-down" data-control-name="sort" data-control-action="sort" data-datetime-format="{month}/{day}/{year}"> <!-- {year}, {month}, {day}, {hour}, {min}, {sec} -->'+
'              <ul>'+
'                  <li><span data-path="default">排序方式</span></li>'+
'                  <li><span data-path=".title" data-order="asc" data-type="text">標題 A-Z</span></li>'+
'                  <li><span data-path=".title" data-order="desc" data-type="text">標題 Z-A</span></li>'+
'                  <li><span data-path=".desc" data-order="asc" data-type="text">描述 A-Z</span></li>'+
'                  <li><span data-path=".desc" data-order="desc" data-type="text">描述 Z-A</span></li>'+
'              </ul>'+
'          </div>'+
'          <!-- filter by title -->'+
'          <div class="text-filter-box">'+
'              <i class="fa fa-search  jplist-icon"></i>'+
'              <!--[if lt IE 10]>'+
'              <div class="jplist-label">Filter by Title:</div>'+
'              <![endif]-->'+
'              <input data-path=".title" type="text" value="" placeholder="按標題篩選" data-control-type="textbox" data-control-name="title-filter" data-control-action="filter" />'+
'          </div>'+
'          <!-- filter by description -->'+
'          <div class="text-filter-box">'+
'              <i class="fa fa-search  jplist-icon"></i>'+
'              <!--[if lt IE 10]>'+
'              <div class="jplist-label">Filter by Description:</div>'+
'              <![endif]-->'+
'              <input data-path=".desc" type="text" value="" placeholder="按說明篩選" data-control-type="textbox" data-control-name="desc-filter" data-control-action="filter" />'+
'          </div>'+
'          <!-- pagination results -->'+
'          <br style="clear:both" />'+
'          <div class="jplist-label" data-type="Page {current} of {pages}" data-control-type="pagination-info" data-control-name="paging" data-control-action="paging"></div>'+
'          <!-- pagination control -->'+
'          <div class="jplist-pagination" data-control-type="pagination" data-control-name="paging" data-control-action="paging"> </div>'+
'      </div>';
