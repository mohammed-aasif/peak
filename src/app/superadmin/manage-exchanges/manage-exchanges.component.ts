import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-manage-exchanges',
  templateUrl: './manage-exchanges.component.html',
  styleUrls: ['./manage-exchanges.component.css']
})
export class ManageExchangesComponent implements OnInit {
  onDisabledShow:boolean = false;
  onEnabledShow:boolean = true;
  constructor() { }

  ngOnInit(): void {

    $(function() {
      $('nav a[href^="/superadmin/manage-exchanges' + location.pathname.split("/superadmin/manage-exchanges")[1] + '"]');
      $("body").addClass('toggled-active')
    });
    
  }
  /*table edit*/ 
  onEdit()
  {
    this.onDisabledShow = true;
    this.onEnabledShow = false;
    $('.disabled_input').prop("disabled", false).addClass("enabled_inputBg");
  }

}

