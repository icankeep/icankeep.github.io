var target = document.querySelector('tr.sale-room-tr[roomid="98518289"]');
target.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
$('#latestModify_98518289').show();
window.timeouttest = setTimeout(function () {
    $('#latestModify_98518289').hide();//找到对应的标签隐藏
}, 10000);

<div class="hover-item" style="text-align:center;line-height:30px;width:auto;font-weight: normal;font-size:  12px;">
                     <table class="table-room" id="" style="width:100%;">
                        <thead>
                            <tr>
                                <th style="width:70px;text-align:center;">指标项</th> 
                                <th style="width:70px;text-align:center;">缺陷率</th> 
                                <th style="width:140px;text-align:center;">确认率</th> 
                                <th style="width:140px;text-align:center;">超时比例</th>              
                            </tr>
                            <tr>
                                <td style="text-align:center;">超标值 </td> 
                                <td style="text-align:center;">&gt;0.03</td> 
                                <td style="text-align:center;">国内＜0.8(含港澳，不含台湾),中国台湾＜0.5</td> 
                                <td style="text-align:center;">国内≥0.2(含港澳，不含台湾),中国台湾≥0.5</td>                         
                            </tr>
                            <tr>
                                <td style="text-align:center;">当前值</td> 
                                <td id="defectrate" style="font-weight:bold;text-align:center;"></td> 
                                <td id="noroompercent" style="font-weight:bold;text-align:center;"></td> 
                                <td class="color-red" id="overtime" style="font-weight:bold;text-align:center;"></td>                         
                            </tr>
                            <tr>
                                <td style="text-align:center;">关联订单</td> 
                                <td colspan="3" id="orderids"></td>                                                        
                            </tr>
                        </thead>
                    </table>
                </div>



                    var automaticModifyPriceResultRemind;
                    var remindType;
                    var latestDateTime;
                    if (isShowRoomPriceLog) {
                        for (var i = 0; i < roomDateDic[strKey].RoomPriceLogs.length; i++) {
                            var roomPriceLog = roomDateDic[strKey].RoomPriceLogs[i];
                            if (roomPriceLog) {
                                if (roomPriceLog.Type == 1) {
                                    sucRoomPriceLog = roomPriceLog;
                                    priceColor = " color-green";
                                    if (latestDateTime || latestDateTime < roomPriceLog.DataChange_LastTime) {
                                        remindType = 1;
                                        latestDateTime = roomPriceLog.DataChange_LastTime;
                                    }
                                } else if (roomPriceLog.Type == 2) {
                                    priceColor = " color-red";
                                    if (latestDateTime || latestDateTime < roomPriceLog.DataChange_LastTime) {
                                        remindType = 2;
                                        latestDateTime = roomPriceLog.DataChange_LastTime;
                                    }
                                }
                            }
                        }
                    }
                    if (remindType) {
                        if (remindType == 1) {
                            automaticModifyPriceResultRemind = '<span class="modify-price-success-icon"></span>';
                        } else {
                            automaticModifyPriceResultRemind = '<span class="modify-price-failed-icon"></span>';
                        }
                    }
                   
                    // 房价
                    var roomPrice = 0;
                    if (roomInfo != null && roomInfo.RoomPriceType == 2 && roomDateDic[strKey].PPCost >= 0) {
                        roomPrice = roomDateDic[strKey].PPCost;
                        divRoomDate.find("[name=lblPrice]").html(automaticModifyPriceResultRemind + '<dfn class="txt-price' + priceColor + '">' + roomInfo.Currency + roomDateDic[strKey].PPCost + '</dfn>');
                    } else if (roomInfo != null && roomInfo.RoomPriceType == 1 && roomDateDic[strKey].PPPrice >= 0) {
                        roomPrice = roomDateDic[strKey].PPPrice;
                        divRoomDate.find("[name=lblPrice]").html(automaticModifyPriceResultRemind + '<dfn class="txt-price' + priceColor + '">' + roomInfo.Currency + roomDateDic[strKey].PPPrice + '</dfn>');
                    } else {
                        divRoomDate.find("[name=lblPrice]").html(languageText.Noprice);
                        divRoomDate.find("[name=lblBreakfast]").html('');
                    }



                    // 806 后台校验
                    if ("".Equals(SrcHotelID) && "".Equals(SrcRoomID) && SrcSupplierID == 0 && "".Equals(SupplierXHotelID) && "".Equals(SupplierXRoomID) && SupplierXSupplierID == 0 && isSync == -1 && sourceChannel == -1)
                    {
                        jsonReturnEntity.Rcode = -1;
                        jsonReturnEntity.Msg = "请输入至少一个筛选条件";
                    }