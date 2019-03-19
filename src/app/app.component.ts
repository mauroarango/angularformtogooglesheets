import { Component, OnInit  } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  

  public ngOnInit()
  {
    var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbwVpPB4hjcgZw1CaqaGKayhudZ-7x56anwUOijB5hfRaZ93cJow/exec'

          $('#submit-form').on('click', function(e) {
          e.preventDefault();
            var jqxhr = $.ajax({
              url: url,
              method: "GET",
              dataType: "json",
              data: $form.serializeObject()
            }).success(
              // do something
            );
          })
              


  }
}