(this.webpackJsonpnote=this.webpackJsonpnote||[]).push([[0],{11:function(e,t,n){e.exports={container:"Sheet_container__1lR6k",bar:"Sheet_bar__zUD0a",chord:"Sheet_chord__F1BfF",currentPosition:"Sheet_currentPosition__3Qx7A"}},21:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var r,i,o,a=n(6),s=n(16),c=n.n(s),h=(n(21),n(22),n(7)),u=n(0),d=n(4),l=n(2),f=n(25),v=n(14),b=n(13);!function(e){e.None="none",e.Rare="rare",e.Medium="medium",e.WellDone="well done",e.Insane="insane"}(r||(r={})),function(e){e.CheckBox="checkbox",e.Select="select",e.NumberDropdown="numberDropdown"}(i||(i={})),function(e){e.ConfigValueSetting="ConfigValueSetting",e.NumberSetting="NumberSetting",e.BooleanSetting="BooleanSetting"}(o||(o={}));var m=function(){function e(t,n,r){Object(u.a)(this,e),this.type=void 0,this.onSettingChanged=new f.a,this._value=void 0,this.name=void 0,this._value=t,this.type=n,this.name=r}return Object(l.a)(e,[{key:"value",get:function(){return this._value},set:function(e){this._value=e,console.log("value set",e),this.onSettingChanged.next(e)}}]),e}(),p=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(e,r,i,a){var s;return Object(u.a)(this,n),(s=t.call(this,e,o.NumberSetting,a)).min=void 0,s.max=void 0,s.value=e,s.min=r,s.max=i,s}return n}(m),j=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(e,r){return Object(u.a)(this,n),t.call(this,e,o.ConfigValueSetting,r)}return n}(m),g=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(e,r){return Object(u.a)(this,n),t.call(this,e,o.BooleanSetting,r)}return n}(m);function C(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];t||(t=[]);var n=e.filter((function(e){return!t.includes(e)}));return n[Math.floor(Math.random()*n.length)]}function y(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=C(0,100);return!(e===r.None||!t)&&(e===r.Rare?n>80:e===r.Medium?n>60:e===r.WellDone?n>40:e===r.Insane?n>20:void 0)}function M(e,t){var n=t.indexOf(e);return[].concat(Object(d.a)(t.slice(n)),Object(d.a)(t.slice(0,n)))}function w(e,t){t||(t=e,e=0);for(var n=[],r=e;r<t;r++)n.push(r);return n}var P,S=function(){function e(){Object(u.a)(this,e)}return Object(l.a)(e,null,[{key:"doesBarChordsFullfillAllConditions",value:function(e,t){return!(t.AlwaysHaveChordOnFirstQuarter&&!e.every((function(e){return e[0]})))&&!e.some((function(e){return e.length>t.MaxChordsPerBar.value}))}},{key:"mapChordsToBars",value:function(e,t){for(var n=this,r=0;r<1e4;r++){var i=this.divideChordsToBars(e,t).map((function(e){return n.fillChordsWithNull(e,t.MaxChordsPerBar.value)}));if(this.doesBarChordsFullfillAllConditions(i,t)){var o=i.map((function(e){return new x(e,t)}));return console.log("Found bar division after "+r+" iterations.",o),o}}return console.error("Could not find chords! 10000 iterations too less?",{chordProgression:e,config:t}),[]}},{key:"divideChordsToBars",value:function(e,t){for(var n=e.chords.slice(),r=[],i=0;i<t.HowManyBars.value;i++){var o=C(t.MinChordsPerBar.value,t.MaxChordsPerBar.value),a=n.slice(0,o);r.push(a),n=n.slice(o,n.length)}return r}},{key:"fillChordsWithNull",value:function(e,t){for(var n=e.slice();n.length<t;){var r=C(0,n.length);n=[].concat(Object(d.a)(n.slice(0,r)),[null],Object(d.a)(n.slice(r,n.length)))}return n}}]),e}(),x=function e(t,n){Object(u.a)(this,e),this.chords=void 0,this.chords=t},_=n(3);!function(e){e.JazzyProgressionness="JazzyProgressionness",e.CircleOfFifthMaxCloseness="CircleOfFifthMaxCloseness",e.UseAlwaysMajorThirdOnStep3="UseAlwaysMajorThirdOnStep3",e.ChordComplexity="",e.KeyChange="KeyChange",e.DoNotUseSteps="DoNotUseSteps",e.DoNotUseStep7="DoNotUseStep7",e.EndWith6Or1="EndWith6Or1",e.UserMelodicMinorFromStep3="UserMelodicMinorFromStep3",e.UseHarmonicMinorFromStep6="UseHarmonicMinorFromStep6",e.MaxChordsPerBar="MaxChordsPerBar",e.MinChordsPerBar="MinChordsPerBar",e.HowManyBars="HowManyBars",e.AlwaysHaveChordOnFirstQuarter="AlwaysHaveChordOnFirstQuarter",e.RhythmCrzyness="RhythmCrzyness",e.EmptyBars="EmptyBars"}(P||(P={}));var F,N=function(){function e(){Object(u.a)(this,e),this.JazzyProgressionness=new j(r.None,P.JazzyProgressionness),this.CircleOfFifthMaxCloseness=new p(3,1,6,P.CircleOfFifthMaxCloseness),this.UseAlwaysMajorThirdOnStep3=new g(!0,P.JazzyProgressionness),this.ChordComplexity=new j(r.Insane,P.ChordComplexity),this.KeyChange=new g(!0,P.KeyChange),this.EndWith6Or1=new g(!0,P.EndWith6Or1),this.DoNotUseStep7=new g(!0,P.DoNotUseStep7),this.UseHarmonicMinorFromStep6=new j(r.Rare,P.UseHarmonicMinorFromStep6),this.UserMelodicMinorFromStep3=new j(r.Rare,P.UserMelodicMinorFromStep3),this.MaxChordsPerBar=new p(2,1,8,P.MaxChordsPerBar),this.MinChordsPerBar=new p(1,0,4,P.MinChordsPerBar),this.HowManyBars=new p(4,1,20,P.HowManyBars),this.AlwaysHaveChordOnFirstQuarter=new g(!0,P.AlwaysHaveChordOnFirstQuarter),this.RhythmCrzyness=new j(r.Medium,P.RhythmCrzyness),this.EmptyBars=new j(r.None,P.EmptyBars)}return Object(l.a)(e,[{key:"entries",get:function(){return Object.entries(this)}}]),e}(),T=function e(){var t=this;Object(u.a)(this,e),this.config=new N,this.onChange=new f.a;var n,r=Object(_.a)(this.config.entries);try{var i=function(){var e=Object(h.a)(n.value,2)[1];e.onSettingChanged.subscribe((function(){console.log("config changed",e),t.onChange.next(null)}))};for(r.s();!(n=r.n()).done;)i()}catch(o){r.e(o)}finally{r.f()}},k=function(){function e(t,n){Object(u.a)(this,e),this.id=void 0,this.flat=void 0,this.sharp=void 0,this.id=t,this.flat=t,this.sharp=null!==n&&void 0!==n?n:t}return Object(l.a)(e,[{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F.Sharp;return e===F.Sharp?this.sharp:this.flat}}]),e}();!function(e){e.Flat="flat",e.Sharp="sharp"}(F||(F={}));var B=function(){function e(){Object(u.a)(this,e)}return Object(l.a)(e,null,[{key:"Random",get:function(){return U[C(0,11)]}},{key:"scaleType",value:function(t){return[e.C,e.F,e.Bb,e.Eb,e.Ab,e.Db,e.Gb].includes(t)?F.Flat:F.Sharp}}]),e}();B.C=new k("C"),B.Db=new k("Db","C#"),B.D=new k("D"),B.Eb=new k("Eb","D#"),B.E=new k("E"),B.F=new k("F"),B.Gb=new k("Gb","F#"),B.G=new k("G"),B.Ab=new k("Ab","G#"),B.A=new k("A"),B.Bb=new k("Bb","A#"),B.B=new k("B");var U=Object.values(B),I=function e(t,n,r){Object(u.a)(this,e),this.id=void 0,this.name=void 0,this.steps=void 0,this.standardSymbol=void 0,this.name=t,this.id=t,this.steps=n,this.standardSymbol=r},R=function e(){Object(u.a)(this,e)};R.PerfectUnison=new I("unison",0,"root"),R.MinorSecond=new I("minorSecond",1,"b9"),R.MajorSecond=new I("majorSecond",2,"9"),R.MinorThird=new I("minorThird",3,"b3"),R.MajorThird=new I("majorThird",4,"3"),R.PerfectForth=new I("perfectForth",5,"11"),R.Tritone=new I("tritone",6,"b5"),R.PerfectFifth=new I("perfectFifth",7,"5"),R.MinorSixth=new I("minorSixth",8,"b13"),R.MajorSixth=new I("majorSixth",9,"13"),R.MinorSeventh=new I("minorSeventh",10,"7"),R.MajorSeventh=new I("majorSeventh",11,"\u0394");var A,D=Object.values(R);!function(e){e.Up="up",e.Down="down"}(A||(A={}));var z=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:A.Up;Object(u.a)(this,e),this.root=void 0,this.target=void 0,this.interval=void 0,this.direction=void 0,this.root=t,this.target=n,this.direction=r,this.interval=e.intervalBetweenNotes(t,n,r)}return Object(l.a)(e,null,[{key:"intervalBetweenNotes",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:A.Up,r=U.indexOf(e),i=U.indexOf(t);return r===i?R.PerfectUnison:n===A.Up?i>r?D[i-r]:D[12-r+i]:i>r?D[r+(12-i)]:D[r-i]}},{key:"calculateInterval",value:function(e,t){var n=U.indexOf(e);return[].concat(Object(d.a)(U.slice(n)),Object(d.a)(U.slice(0,n)))[t.steps]}}]),e}(),E=function(){function e(t,n,r){Object(u.a)(this,e),this.id=void 0,this.intervals=void 0,this.standardSymbol=void 0,this.id=t,this.intervals=n,this.standardSymbol=r}return Object(l.a)(e,[{key:"isPresentInNotes",value:function(e,t){var n,r=Object(_.a)(this.intervals);try{for(r.s();!(n=r.n()).done;){var i=n.value;if(!t.includes(z.calculateInterval(e,i)))return!1}}catch(o){r.e(o)}finally{r.f()}return!0}}]),e}(),H=function e(){Object(u.a)(this,e)};H.PerfectUnison=new E("unison",[R.PerfectUnison],"unison"),H.Minor=new E("minor",[R.PerfectUnison,R.MinorThird,R.PerfectFifth],"_"),H.MinorB5=new E("minorb5",[R.PerfectUnison,R.MinorThird,R.Tritone],"_b5"),H.Major=new E("major",[R.PerfectUnison,R.MajorThird,R.PerfectFifth],""),H.Major7=new E("\u03947",[R.PerfectUnison,R.MajorThird,R.PerfectFifth,R.MajorSeventh],"\u03947"),H.Chord7=new E("7",[R.PerfectUnison,R.MajorThird,R.PerfectFifth,R.MinorSeventh],"7"),H.Minor7=new E("_7",[R.PerfectUnison,R.MinorThird,R.PerfectFifth,R.MinorSeventh],"_7"),H.Minor7b5=new E("_7b5",[R.PerfectUnison,R.MinorThird,R.MinorSeventh,R.Tritone],"_7b5"),H.Chord7b9=new E("7b9",[R.PerfectUnison,R.MajorThird,R.PerfectFifth,R.MinorSeventh,R.MinorSecond],"7b9"),H.Chord7Sharp5=new E("7#5",[R.PerfectUnison,R.MajorThird,R.MinorSixth,R.MinorSeventh],"7#5"),H.Chord7Sharp11=new E("7#11",[R.PerfectUnison,R.MajorThird,R.Tritone,R.PerfectFifth,R.MinorSeventh],"7#11"),H.PowerChord=new E("5",[R.PerfectUnison,R.PerfectFifth],"5"),H.MajorB13=new E("\u0394#5",[R.PerfectUnison,R.MajorThird,R.MinorSixth,R.MajorSeventh],"\u0394#5"),H.Dim7=new E("\xb07",[R.PerfectUnison,R.MinorThird,R.Tritone,R.MajorSixth],"\xb07"),H.b9b13=new E("#5b9",[R.PerfectUnison,R.MinorSecond,R.MajorThird,R.MinorSixth],"#5b9"),H.MinorMajor7=new E("_\u0394",[R.PerfectUnison,R.MinorThird,R.PerfectFifth,R.MajorSeventh],"_\u0394"),H.Minor6=new E("_6",[R.PerfectUnison,R.MinorThird,R.PerfectFifth,R.MajorSixth],"_6"),H.Major6=new E("6",[R.PerfectUnison,R.MajorThird,R.PerfectFifth,R.MajorSixth],"6"),H.Minorb6=new E("_b6",[R.PerfectUnison,R.MinorThird,R.PerfectFifth,R.MinorSixth],"_b6"),H.Majorb6=new E("b6",[R.PerfectUnison,R.MajorThird,R.PerfectFifth,R.MinorSixth],"b6"),H.Minor9=new E("_9",[R.PerfectUnison,R.MinorThird,R.PerfectFifth,R.MajorSecond],"_9"),H.Major9=new E("9",[R.PerfectUnison,R.MajorThird,R.PerfectFifth,R.MajorSecond],"9"),H.Minorb9=new E("_b9",[R.PerfectUnison,R.MinorThird,R.PerfectFifth,R.MinorSecond],"_b9"),H.Majorb9=new E("b9",[R.PerfectUnison,R.MajorThird,R.PerfectFifth,R.MinorSecond],"b9"),H.Sus4=new E("7sus4",[R.PerfectUnison,R.PerfectForth,R.PerfectFifth,R.MinorSeventh],"sus4"),H.NineSus4=new E("79sus4",[R.PerfectUnison,R.PerfectForth,R.PerfectFifth,R.MinorSeventh,R.MajorSecond],"79sus4"),H.Major7b6=new E("7b13",[R.PerfectUnison,R.PerfectForth,R.PerfectFifth,R.MinorSeventh,R.MinorSixth],"7b13");var J=Object.values(H),L=function e(t,n,r){Object(u.a)(this,e),this.id=void 0,this.name=void 0,this.steps=void 0,this.modes=void 0,this.intervals=void 0,this.id=t,this.name=t,this.steps=n,this.modes=null!==r&&void 0!==r?r:null;var i,o=[],a=0,s=Object(_.a)(n);try{for(s.s();!(i=s.n()).done;){var c=i.value;D[a=c+a]&&o.push(D[a])}}catch(h){s.e(h)}finally{s.f()}this.intervals=[R.PerfectUnison].concat(o)},W=function(){function e(){Object(u.a)(this,e)}return Object(l.a)(e,null,[{key:"Random",get:function(){return O(K)}}]),e}();W.Major=new L("major",[2,2,1,2,2,2,1],["ionisch (dur)","dorisch","phrygisch","lydisch","mixolydisch","aeolisch (moll)","lokrisch"]),W.HarmonicMinor=new L("harmonic minor",[2,1,2,2,1,3,1],["harmonic minor mode","Locrian 13 or Locrian 6 (half-diminished)","Ionian #5 (augmented)","Dorian #11 (or dorian #4) (minor)","Phrygian dominant (dominant)","Lydian #2 (major)","Super locrian bb7 (diminished)"]),W.MelodicMinor=new L("melodic minor",[2,1,2,2,2,2,1],["melodic minor mode","dorisch b9","lydisch augmented","lydisch dominant / mixo #11","mixolydisch b13","aeolisch b5 (lokrisch #2)","alterierte skala (super lokrisch)"]);var G,K=Object.values(W),Q=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B.Random,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W.Major,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;Object(u.a)(this,e),this.rootNote=void 0,this.scale=void 0,this.mode=void 0,this.notes=void 0,this.name=void 0,this.id=void 0,this.scaleType=void 0,this.triads=void 0,this.tetrads=void 0,this.allChords=void 0,this.scale=n,this.rootNote=t,this.mode=r,this.id=t.id+" "+n.id+" mode: "+r,this.name=t.id+" "+(n.modes?n.modes[r]:n.id),this.scaleType=B.scaleType(t),this.notes=this.calculateScaleNotes(t,n,r),this.tetrads=this.addTetrads(this.notes),this.triads=this.addTriads(this.notes),this.allChords=this.addCrazyChords(this.notes),r&&null===n.modes&&console.error("Mode not present in scale",{rootNote:t,scale:n,mode:r})}return Object(l.a)(e,[{key:"rootNoteName",get:function(){return this.rootNote.render(this.scaleType)}},{key:"calculateScaleNotes",value:function(e,t,n){var r=M(e,U);return t.intervals.map((function(e){return r[e.steps]}))}},{key:"addTetrads",value:function(e){var t,n=this,r=[],i=Object(_.a)(e);try{var o=function(){var i,o=t.value,a=M(o,e).filter((function(e,t){return 0===t||2===t||4===t||6===t})).map((function(e){return z.intervalBetweenNotes(o,e)})),s=void 0,c=Object(_.a)(J);try{var h=function(){var e=i.value;if(a.every((function(t){return e.intervals.includes(t)})))return s=e,"break"};for(c.s();!(i=c.n()).done;){if("break"===h())break}}catch(d){c.e(d)}finally{c.f()}if(s){var u=new Z(o,s,n);r.push(u)}else console.error("Tetrad not found",{this:n,note:o,scaleNotes:e,chordIntervals:a})};for(i.s();!(t=i.n()).done;)o()}catch(a){i.e(a)}finally{i.f()}return r}},{key:"addTriads",value:function(e){var t,n=this,r=[],i=Object(_.a)(e);try{var o=function(){var i,o=t.value,a=M(o,e).filter((function(e,t){return 0===t||2===t||4===t})).map((function(e){return z.intervalBetweenNotes(o,e)})),s=void 0,c=Object(_.a)(J);try{var h=function(){var e=i.value;if(a.every((function(t){return e.intervals.includes(t)})))return s=e,"break"};for(c.s();!(i=c.n()).done;){if("break"===h())break}}catch(d){c.e(d)}finally{c.f()}if(s){var u=new Z(o,s,n);r.push(u)}else console.error("Tetrad not found",{this:n,note:o,scaleNotes:e,chordIntervals:a})};for(i.s();!(t=i.n()).done;)o()}catch(a){i.e(a)}finally{i.f()}return r}},{key:"addCrazyChords",value:function(e){var t,n=[],r=Object(_.a)(e);try{for(r.s();!(t=r.n()).done;){var i,o=t.value,a=[],s=Object(_.a)(J);try{for(s.s();!(i=s.n()).done;){var c=i.value;if(c!==H.PerfectUnison)c.isPresentInNotes(o,e)&&a.push(new Z(o,c))}}catch(h){s.e(h)}finally{s.f()}n.push(a)}}catch(h){r.e(h)}finally{r.f()}return n}},{key:"RandomNote",get:function(){return O(this.notes)}},{key:"RandomTetrad",get:function(){return O(this.tetrads)}},{key:"getRandomTetrad",value:function(e){return O(this.tetrads,[e])}},{key:"getRandomTriad",value:function(e){return O(this.triads,[e])}},{key:"getRandomCrzyChord",value:function(e){var t=O(this.allChords,[e]);return O(t,[e])}},{key:"FifthJump",get:function(){return new e(z.calculateInterval(this.rootNote,R.PerfectFifth),this.scale)}},{key:"FourthJump",get:function(){return new e(z.calculateInterval(this.rootNote,R.PerfectForth),this.scale)}},{key:"getStepTetrad",value:function(e){return e>7||e<0?(console.error("Warning, cant geht this step tetrad",{step:e,scale:this}),this.tetrads[0]):this.tetrads[e-1]}},{key:"getCloseCircleOfFifthsScale",value:function(e){for(var t=C(1,e),n=C(0,100)<50,r=this,i=0;i<t;i++)r=n?r.FifthJump:r.FourthJump;return r}},{key:"RandomProgression",get:function(){for(var e,t=[],n=0;n<4;n++){var r=[];t.push(r);for(var i=0;i<2;i++){if(C(0,100)<50&&0!==i)r.push(null);else{var o=O(this.tetrads,[e]);r.push(o),e=o}}}return t}}]),e}();var V,Z=function(){function e(t,n,r,i){Object(u.a)(this,e),this.id=void 0,this.name=void 0,this.chord=void 0,this.rootNote=void 0,this.notes=void 0,this.context=void 0,this.specialContext=void 0,this.rootNote=t,this.chord=n,this.name=t.flat+n.id,this.id=t.id+n.id,r&&(this.id=this.id+" context:"+(null===r||void 0===r?void 0:r.id)),this.notes=e.calculateNotesForChord(t,n),this.context=r,this.specialContext=i}return Object(l.a)(e,[{key:"step",get:function(){return this.context?this.context.notes.indexOf(this.rootNote)+1:""}},{key:"render",get:function(){var e;return this.context?this.rootNote.render(null===(e=this.context)||void 0===e?void 0:e.scaleType)+this.chord.standardSymbol:this.rootNote.flat+this.chord.standardSymbol}},{key:"presentInScales",get:function(){var e=this,t=[];G||(G=function(){var e,t=[],n=Object(_.a)(U);try{for(n.s();!(e=n.n()).done;){var r,i=e.value,o=Object(_.a)(K);try{for(o.s();!(r=o.n()).done;){var a=r.value;t.push(new Q(i,a))}}catch(s){o.e(s)}finally{o.f()}}}catch(s){n.e(s)}finally{n.f()}return t}());var n,r=Object(_.a)(G);try{var i=function(){var r=n.value;e.notes.every((function(e){return r.notes.includes(e)}))&&t.push(r)};for(r.s();!(n=r.n()).done;)i()}catch(o){r.e(o)}finally{r.f()}return t}},{key:"presentInScalesAsString",get:function(){var e=this;return this.presentInScales.map((function(t){var n=e.withContext(t).step,r=""===n?"":t.scale.modes?t.scale.modes[n]:"",i=e.withContext(t).render+" "+r;return t.name+" - step: "+e.withContext(t).step+"  mode:  "+i})).join("\n")}},{key:"withContext",value:function(t){return new e(this.rootNote,this.chord,t)}}],[{key:"calculateNotesForChord",value:function(e,t){var n=U.indexOf(e),r=[].concat(Object(d.a)(U.slice(n)),Object(d.a)(U.slice(0,n)));return t.intervals.map((function(e){return r[e.steps]}))}}]),e}(),q=function e(t,n,r){Object(u.a)(this,e),this.chords=void 0,this.chordsCount=void 0,this.counter_251=void 0,this.twoFiveOnes=void 0,this.chords=t,this.chordsCount=t.length,this.counter_251=n,this.twoFiveOnes=r},X=function(){function e(){Object(u.a)(this,e)}return Object(l.a)(e,null,[{key:"createChordProgression",value:function(e,t){for(var n,r=e.scale,i=[],o=[],a=t.HowManyBars.value,s=0,c=C(a,t.MaxChordsPerBar.value*a);i.length<c;){if(y(t.JazzyProgressionness.value,c>=3)){var h=[];C(0,1)?(h=[r.getStepTetrad(2),r.getStepTetrad(5),r.getStepTetrad(1)],n=r.getStepTetrad(1)):(h=[r.getStepTetrad(7),new Z(r.getStepTetrad(3).rootNote,H.Chord7),r.getStepTetrad(6)],n=r.getStepTetrad(6)),i.push(h[0]),i.push(h[1]),i.push(h[2]),console.log("added 2 5 1 !"),s+=1,o.push(h)}var u=r.getRandomTetrad(n);3===u.step&&t.UseAlwaysMajorThirdOnStep3.value&&(u=new Z(u.rootNote,H.Chord7)),n=u,i.push(u)}return t.DoNotUseStep7.value&&(i=(i=(i=(i=(i=i.map((function(e){return 7===e.step?r.getRandomTriad():e}))).map((function(e){return e.chord===H.MinorB5?r.getRandomTetrad():e}))).map((function(e){return e.chord===H.Minor7b5?r.getRandomTetrad():e}))).map((function(e){return e.chord===H.Minor7b5?r.getRandomTetrad():e}))).map((function(e){return e.chord===H.Minor7b5?r.getRandomTetrad():e}))),console.log("Random chord progression created",i),new q(i,s,o)}}]),e}(),Y=function(){function e(t,n){var r=this;Object(u.a)(this,e),this.scale=void 0,this.bars=void 0,this.chordProgression=void 0,this.onChange=new f.a,this.index=void 0,this.lastPart=void 0,this.subscribableConfig=new T,this.index=n,this.lastPart=t,this.subscribableConfig.onChange.subscribe((function(){r.init(),r.onChange.next(r)})),t&&t.onChange.subscribe((function(){r.init(),r.onChange.next(null)}));var i=this.subscribableConfig.config;this.scale=new Q(B.Random,W.Major),this.chordProgression=X.createChordProgression(this,i),this.bars=S.mapChordsToBars(this.chordProgression,i),this.init()}return Object(l.a)(e,[{key:"init",value:function(){var e=this.subscribableConfig.config,t=this.lastPart;t&&!1===e.KeyChange.value?this.scale=t.scale:this.scale=t?t.scale.getCloseCircleOfFifthsScale(e.CircleOfFifthMaxCloseness.value):new Q(B.Random,W.Major),this.chordProgression=X.createChordProgression(this,e),this.bars=S.mapChordsToBars(this.chordProgression,e),this.onChange.next(0)}}]),e}();!function(e){e[e.A=0]="A",e[e.B=1]="B",e[e.C=2]="C",e[e.D=3]="D",e[e.E=4]="E",e[e.F=5]="F"}(V||(V={}));var $=function(){function e(){Object(u.a)(this,e),this.onChange=new f.a,this.parts=[],this.partOrder=void 0,this.addPart(),this.addPart(),this.addPart(),this.partOrder=[V.A,V.A,V.B,V.C]}return Object(l.a)(e,[{key:"partsInOrder",get:function(){var e=this;return this.partOrder.map((function(t){return e.parts[t]}))}},{key:"rebuildParts",value:function(){this.parts.forEach((function(e){return e.init()})),this.onChange.next(0)}},{key:"randomPartsOrder",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,t=[],n=0;n<e;n++)t.push(C(0,2));this.partOrder=t,this.rebuildParts()}},{key:"setPartOrder",value:function(e){this.partOrder=e,this.onChange.next(0)}},{key:"addPart",value:function(){var e=new Y(this.parts[this.parts.length-1],this.parts.length);this.parts=[].concat(Object(d.a)(this.parts),[e]),e.onChange.subscribe(this.onChange)}},{key:"removePart",value:function(e){this.parts=this.parts.filter((function(t){return e!==t}))}}]),e}(),ee=new function e(){Object(u.a)(this,e),this.tune=new $,console.log(this.tune)};function te(e){var t=Object(a.useState)(0),n=Object(h.a)(t,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){if(e){var t=e.onChange.subscribe((function(){i(r+1)}));return function(){return t.unsubscribe()}}}),[e,r,i]),r}var ne=n(5),re=n.n(ne),ie=n(1);function oe(e){var t=e.part,n=t.subscribableConfig.config;return te(t),te(t.subscribableConfig),Object(ie.jsxs)("div",{className:re.a.container,children:[Object(ie.jsx)("button",{onClick:function(e){return t.init()},children:"Rebuild"}),n.entries.map((function(e){var n,i=Object(h.a)(e,2),a=i[0],s=i[1];return 0===t.index&&s.name===P.CircleOfFifthMaxCloseness||0===t.index&&s.name===P.KeyChange?null:Object(ie.jsxs)("div",{className:re.a.setting,children:[Object(ie.jsx)("div",{className:re.a.name,children:(n=a,n.split("").map((function(e,t){return e.toUpperCase()===e?"".concat(0!==t?"-":"").concat(e.toLowerCase()):e})).join("")).replaceAll("-"," ")}),Object(ie.jsxs)("div",{className:re.a.input,children:[s.type===o.BooleanSetting&&Object(ie.jsx)("input",{type:"checkbox",checked:s.value,onChange:function(e){s.value=e.target.checked}}),s.type===o.ConfigValueSetting&&Object(ie.jsx)("select",{onChange:function(e){return s.value=e.target.value},value:s.value,children:Object.values(r).map((function(e){return Object(ie.jsx)("option",{children:e},e)}))}),s.type===o.NumberSetting&&Object(ie.jsx)("select",{onChange:function(e){return s.value=parseFloat(e.target.value)},value:s.value.toString(),children:w(s.min,s.max).map((function(e){return Object(ie.jsx)("option",{children:e},e.toString())}))})]}),Object(ie.jsx)("div",{className:re.a.info,children:s.name===P.JazzyProgressionness&&t.chordProgression.counter_251})]})})),Object(ie.jsx)("div",{className:re.a.resultName,children:"Result: "+t.scale.name}),Object(ie.jsx)("div",{className:re.a.result,children:t.bars.map((function(e){return Object(ie.jsx)("div",{className:re.a.bar,children:e.chords.map((function(e){return Object(ie.jsxs)("div",{className:re.a.chord,children:[e&&e.step+" - ",e&&e.render]})}))})}))})]})}function ae(e){return 60/e*1e3}var se=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,n=arguments.length>1?arguments[1]:void 0;Object(u.a)(this,e),this._renderCount=0,this._bpm=60,this._timeInterval=ae(this._bpm),this._runningInterval=void 0,this.onChange=new f.a,this._beforeNext=void 0,this._beforeNext=n,this.bpm=t,this._startInterval()}return Object(l.a)(e,[{key:"resetRenderCount",value:function(){this._renderCount=0}},{key:"stop",value:function(){this._runningInterval&&clearInterval(this._runningInterval)}},{key:"_rerender",value:function(){this._renderCount=this._renderCount+1,this.onChange.next(this._renderCount)}},{key:"bpm",get:function(){return this._bpm},set:function(e){this._bpm=e,this._timeInterval=ae(e),this._startInterval(),this._rerender()}},{key:"getPosition",value:function(e,t){for(var n=e*t,r=this._renderCount%n,i=0;i<n;){if(i===r||i<r&&i+t>r)return{bar:i/t,chordInBar:r-i,isLastOne:r===n-1};i+=t}}},{key:"_startInterval",value:function(){var e=this;this._runningInterval&&clearInterval(this._runningInterval),this._runningInterval=setInterval((function(){e._beforeNext(),e._rerender()}),this._timeInterval)}}]),e}(),ce=n(11),he=n.n(ce),ue=new se(40,(function(){}));function de(){te(ee.tune);var e=ee.tune;te(ue);var t=e.partsInOrder.map((function(e){return e.bars})).reduce((function(e,t){return e.concat(t)})),n=ue.getPosition(t.length,e.parts[0].subscribableConfig.config.MaxChordsPerBar.value);return console.log(n),Object(ie.jsx)("div",{className:he.a.container,children:t.map((function(e,t){return Object(ie.jsx)("div",{className:he.a.bar,children:e.chords.map((function(e,r){var i=null===e||void 0===e?void 0:e.presentInScalesAsString,o=n&&n.bar===t&&n.chordInBar===r;return Object(ie.jsxs)("div",{className:he.a.chord,title:i,children:[null===e||void 0===e?void 0:e.render,Object(ie.jsx)("div",{className:he.a.currentPosition,style:{display:o?"":"none"}})]})}))})}))})}ue.stop();var le=n(8),fe=n.n(le);function ve(){var e=Object(a.useState)(ee.tune.partOrder.toString().replaceAll(",","")),t=Object(h.a)(e,2),n=t[0],r=t[1];return te(ee.tune),Object(ie.jsxs)("div",{className:fe.a.container,children:[Object(ie.jsxs)("div",{className:fe.a.headBar,children:[Object(ie.jsx)("div",{className:fe.a.order,children:"parts order:"}),Object(ie.jsx)("input",{type:"string",value:n,onChange:function(e){return r(e.target.value)},onBlur:function(e){var t=n.split("").map((function(e){return parseFloat(e)}));ee.tune.setPartOrder(t)}}),Object(ie.jsx)("button",{onClick:function(e){return ee.tune.randomPartsOrder()},children:"Random"}),ee.tune.partOrder.toString().replaceAll(",","")]}),Object(ie.jsxs)("div",{className:fe.a.row,children:[Object(ie.jsx)("div",{className:fe.a.parts,children:ee.tune.parts.map((function(e){return Object(ie.jsx)(oe,{part:e})}))}),Object(ie.jsx)("div",{className:fe.a.tune,children:Object(ie.jsx)(de,{})})]})]})}var be=function(){return Object(ie.jsx)("div",{className:"App",children:Object(ie.jsx)(ve,{})})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),o(e),a(e)}))};c.a.render(Object(ie.jsx)(be,{}),document.getElementById("root")),me()},5:function(e,t,n){e.exports={container:"PartConfig_container__2duve",setting:"PartConfig_setting__3oS4O",name:"PartConfig_name__5LsEd",result:"PartConfig_result__166_7",bar:"PartConfig_bar__xnho3",chord:"PartConfig_chord__1Egbv"}},8:function(e,t,n){e.exports={container:"main_container__1eZB0",headBar:"main_headBar__1LHD4",order:"main_order__1-XLA",row:"main_row__2Wz0C",parts:"main_parts__3tdU4",tune:"main_tune__2sVqZ"}}},[[24,1,2]]]);
//# sourceMappingURL=main.28af13a4.chunk.js.map