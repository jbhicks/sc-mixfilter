import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Soundcloud Mixfilter';
  tracks: any = [];
  filteredTracks: any = [];
  min = 0;
  max = 12171500;
  showTicks = true;
  minLength = 0;

  ngOnInit(): void {
    axios.get('http://localhost:8081').then((res) => {
      const tracks = res.data.collection.filter(
        (item: any) => item.type === 'track' || item.type === 'track-repost'
      );
      this.setData(tracks);
      this.setFilteredData(tracks);
    });
  }

  onMinLengthChange(value: any) {
    this.minLength = value;
    const tracks = this.tracks.filter((track: any) => {
      return track.track.duration > value;
    });
    this.setFilteredData(tracks);
  }

  setData(tracks: any) {
    this.tracks = tracks;
  }

  setFilteredData(tracks: any) {
    this.filteredTracks = tracks;
  }

  handleCardClick(track: any) {
    console.log('click!');
    console.log(track);
    window.open(track.track.permalink_url, '_blank');
  }

  parseMillisecondsIntoReadableTime(milliseconds: number) {
    //Get hours from milliseconds
    var hours = milliseconds / (1000 * 60 * 60);
    var absoluteHours = Math.floor(hours);
    var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

    //Get remainder from hours and convert to minutes
    var minutes = (hours - absoluteHours) * 60;
    var absoluteMinutes = Math.floor(minutes);
    var m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;

    //Get remainder from minutes and convert to seconds
    var seconds = (minutes - absoluteMinutes) * 60;
    var absoluteSeconds = Math.floor(seconds);
    var s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

    return h + ':' + m + ':' + s;
  } 
}
