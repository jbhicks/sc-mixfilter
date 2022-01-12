import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Soundcloud Mixfilter';
  tracks: any = [];
  min = 0;
  max = 25000000;
  showTicks = true;
  trackLength = 15000000;

  ngOnInit(): void {
    axios.get('http://localhost:8081').then((res) => {
      // filter out the tracks
      console.log(res);
      const tracks = res.data.collection.filter(
        (item: any) => item.type === 'track' || item.type === 'track-repost'
      );
      this.setData(tracks);
    });
  }

  setData(tracks: any) {
    console.log(tracks);
    this.tracks = tracks;
  }
}
