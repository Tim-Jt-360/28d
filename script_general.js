(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.')['map'](function (r) {
                        return r['trim']();
                    }), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"defaultMenu":["fullscreen","mute","rotation"],"xrPanelsEnabled":true,"watermark":false,"id":"rootPlayer","scripts":{"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"clone":TDV.Tour.Script.clone,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"openLink":TDV.Tour.Script.openLink,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setLocale":TDV.Tour.Script.setLocale,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"mixObject":TDV.Tour.Script.mixObject,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setValue":TDV.Tour.Script.setValue,"shareSocial":TDV.Tour.Script.shareSocial,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"executeJS":TDV.Tour.Script.executeJS,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPixels":TDV.Tour.Script.getPixels,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizShowScore":TDV.Tour.Script.quizShowScore,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"resumePlayers":TDV.Tour.Script.resumePlayers,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"downloadFile":TDV.Tour.Script.downloadFile,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"isPanorama":TDV.Tour.Script.isPanorama,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"init":TDV.Tour.Script.init,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"toggleVR":TDV.Tour.Script.toggleVR,"getOverlays":TDV.Tour.Script.getOverlays,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"existsKey":TDV.Tour.Script.existsKey,"registerKey":TDV.Tour.Script.registerKey,"enableVR":TDV.Tour.Script.enableVR,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"setMapLocation":TDV.Tour.Script.setMapLocation,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizStart":TDV.Tour.Script.quizStart,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"unloadViewer":TDV.Tour.Script.unloadViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizFinish":TDV.Tour.Script.quizFinish,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"initQuiz":TDV.Tour.Script.initQuiz,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"initAnalytics":TDV.Tour.Script.initAnalytics,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showWindow":TDV.Tour.Script.showWindow,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"createTween":TDV.Tour.Script.createTween,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getKey":TDV.Tour.Script.getKey,"playAudioList":TDV.Tour.Script.playAudioList,"cloneBindings":TDV.Tour.Script.cloneBindings,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"disableVR":TDV.Tour.Script.disableVR,"historyGoBack":TDV.Tour.Script.historyGoBack,"historyGoForward":TDV.Tour.Script.historyGoForward,"getMediaByName":TDV.Tour.Script.getMediaByName,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"textToSpeech":TDV.Tour.Script.textToSpeech,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showWindowBase":TDV.Tour.Script.showWindowBase,"getComponentByName":TDV.Tour.Script.getComponentByName,"showPopupImage":TDV.Tour.Script.showPopupImage,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"translate":TDV.Tour.Script.translate,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getMainViewer":TDV.Tour.Script.getMainViewer,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"startMeasurement":TDV.Tour.Script.startMeasurement,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia},"backgroundColor":["#FFFFFF"],"scrollBarMargin":2,"data":{"locales":{"es":"locale/es.txt"},"name":"Player6432","displayTooltipInTouchScreens":true,"defaultLocale":"es","history":{},"textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"rate":1,"speechOnQuizQuestion":false}},"start":"this.init()","backgroundColorRatios":[0],"class":"Player","gap":10,"propagateClick":false,"layout":"absolute","minWidth":0,"minHeight":0,"scrollBarColor":"#000000","height":"100%","hash": "14c4b0c3018df244c887503338f23dafa8eb49b7697e9ffc9fb1540a23f3a4b5", "definitions": [{"width":"100%","subtitlesTextShadowVerticalLength":1,"toolTipFontColor":"#606060","toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingLeft":6,"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","playbackBarProgressBorderColor":"#000000","vrPointerSelectionTime":2000,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","data":{"name":"Main Viewer"},"playbackBarBorderSize":0,"surfaceReticleColor":"#FFFFFF","progressBackgroundColorRatios":[0],"playbackBarHeadShadowHorizontalLength":0,"subtitlesTextShadowOpacity":1,"progressRight":"33%","progressOpacity":0.7,"subtitlesTop":0,"progressBarBackgroundColorDirection":"horizontal","playbackBarBackgroundOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"subtitlesFontColor":"#FFFFFF","progressBarBorderColor":"#000000","vrPointerColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"toolTipPaddingBottom":4,"vrPointerSelectionColor":"#FF6600","playbackBarLeft":0,"subtitlesFontSize":"3vmin","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","progressBorderColor":"#000000","toolTipPaddingRight":6,"subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColor":["#3399FF"],"id":"MainViewer","playbackBarHeadShadow":true,"toolTipBorderColor":"#767676","subtitlesBorderColor":"#FFFFFF","progressBackgroundColor":["#000000"],"vrThumbstickRotationStep":20,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBottom":10,"playbackBarBottom":5,"playbackBarHeadShadowVerticalLength":0,"toolTipPaddingTop":4,"progressBorderSize":0,"progressBarBorderSize":0,"class":"ViewerArea","progressBarBorderRadius":2,"firstTransitionDuration":0,"propagateClick":false,"playbackBarHeight":10,"toolTipShadowColor":"#333138","progressHeight":2,"minHeight":50,"playbackBarProgressBorderSize":0,"minWidth":100,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesBottom":50,"playbackBarHeadWidth":6,"toolTipFontFamily":"Arial","progressBorderRadius":2,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"toolTipFontSize":"1.11vmin","toolTipTextShadowColor":"#000000","height":"100%","progressLeft":"33%","subtitlesTextShadowHorizontalLength":1,"playbackBarRight":0,"playbackBarHeadShadowOpacity":0.7,"subtitlesFontFamily":"Arial"},{"initialSequence":"this.sequence_F3CD5DDE_FDC9_DA10_41EF_15D2E361D887","class":"PanoramaCamera","id":"panorama_D0E67A4F_C732_F28E_41D9_0F82D8F7B031_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"enterPointingToHorizon":true},{"thumbnailUrl":"media/panorama_D0E67A4F_C732_F28E_41D9_0F82D8F7B031_t.webp","class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_D0E67A4F_C732_F28E_41D9_0F82D8F7B031_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"rowCount":8,"height":4096,"url":"media/panorama_D0E67A4F_C732_F28E_41D9_0F82D8F7B031_0/{face}/0/{row}_{column}.webp","colCount":48,"tags":"ondemand","class":"TiledImageResourceLevel","width":24576},{"rowCount":4,"height":2048,"url":"media/panorama_D0E67A4F_C732_F28E_41D9_0F82D8F7B031_0/{face}/1/{row}_{column}.webp","colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","width":12288},{"rowCount":2,"height":1024,"url":"media/panorama_D0E67A4F_C732_F28E_41D9_0F82D8F7B031_0/{face}/2/{row}_{column}.webp","colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_D0E67A4F_C732_F28E_41D9_0F82D8F7B031_0/{face}/3/{row}_{column}.webp","colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","width":3072}]}}],"hfovMax":130,"hfov":360,"vfov":180,"label":trans('panorama_D0E67A4F_C732_F28E_41D9_0F82D8F7B031.label'),"id":"panorama_D0E67A4F_C732_F28E_41D9_0F82D8F7B031","data":{"label":"Sch\u00fcepwis 28d"}},{"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","displayPlaybackBar":true,"class":"PanoramaPlayer","keepModel3DLoadedWithoutLocation":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate"},{"id":"mainPlayList","items":[{"camera":"this.panorama_D0E67A4F_C732_F28E_41D9_0F82D8F7B031_camera","media":"this.panorama_D0E67A4F_C732_F28E_41D9_0F82D8F7B031","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer"}],"class":"PlayList"},{"class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_F3CD5DDE_FDC9_DA10_41EF_15D2E361D887"}],"children":["this.MainViewer"],"width":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.2, Tue Nov 10 2026