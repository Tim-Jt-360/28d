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
var script = {"children":["this.MainViewer"],"propagateClick":false,"width":"100%","scrollBarMargin":2,"hash": "201a29c068e583b7881eccb007b33ad7b50187ae08f2184dee57a3920e7e8f66", "definitions": [{"class":"PlayList","id":"mainPlayList","items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_F25583F6_FDC9_CE13_41B6_1BF439B92B50_camera","media":"this.panorama_F25583F6_FDC9_CE13_41B6_1BF439B92B50","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer"}]},{"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_F25583F6_FDC9_CE13_41B6_1BF439B92B50_t.webp","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","rowCount":8,"height":4096,"url":"media/panorama_F25583F6_FDC9_CE13_41B6_1BF439B92B50_0/{face}/0/{row}_{column}.webp","tags":"ondemand","colCount":48,"width":24576},{"class":"TiledImageResourceLevel","rowCount":4,"height":2048,"url":"media/panorama_F25583F6_FDC9_CE13_41B6_1BF439B92B50_0/{face}/1/{row}_{column}.webp","tags":"ondemand","colCount":24,"width":12288},{"class":"TiledImageResourceLevel","rowCount":2,"height":1024,"url":"media/panorama_F25583F6_FDC9_CE13_41B6_1BF439B92B50_0/{face}/2/{row}_{column}.webp","tags":"ondemand","colCount":12,"width":6144},{"class":"TiledImageResourceLevel","rowCount":1,"height":512,"url":"media/panorama_F25583F6_FDC9_CE13_41B6_1BF439B92B50_0/{face}/3/{row}_{column}.webp","tags":["ondemand","preload"],"colCount":6,"width":3072}]}}],"data":{"label":"Sch\u00fcepwis 28d"},"hfovMax":130,"class":"Panorama","hfov":360,"vfov":180,"label":trans('panorama_F25583F6_FDC9_CE13_41B6_1BF439B92B50.label'),"id":"panorama_F25583F6_FDC9_CE13_41B6_1BF439B92B50","thumbnailUrl":"media/panorama_F25583F6_FDC9_CE13_41B6_1BF439B92B50_t.webp"},{"class":"PanoramaCamera","id":"panorama_F25583F6_FDC9_CE13_41B6_1BF439B92B50_camera","initialPosition":{"class":"PanoramaCameraPosition","pitch":0,"yaw":0},"enterPointingToHorizon":true,"initialSequence":"this.sequence_F3CD5DDE_FDC9_DA10_41EF_15D2E361D887"},{"id":"MainViewerPanoramaPlayer","keepModel3DLoadedWithoutLocation":true,"aaEnabled":true,"displayPlaybackBar":true,"arrowKeysAction":"translate","class":"PanoramaPlayer","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer"},{"progressBorderRadius":2,"propagateClick":false,"progressLeft":"33%","playbackBarBackgroundColor":["#FFFFFF"],"toolTipFontSize":"1.11vmin","playbackBarHeight":10,"playbackBarHeadWidth":6,"toolTipPaddingRight":6,"playbackBarBackgroundColorDirection":"vertical","surfaceReticleColor":"#FFFFFF","playbackBarProgressBorderSize":0,"data":{"name":"Main Viewer"},"vrPointerColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"toolTipPaddingTop":4,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"toolTipBackgroundColor":"#F6F6F6","vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowHorizontalLength":0,"toolTipPaddingBottom":4,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","vrPointerSelectionTime":2000,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","toolTipShadowColor":"#333138","class":"ViewerArea","subtitlesTextShadowOpacity":1,"toolTipBorderColor":"#767676","playbackBarHeadBorderRadius":0,"toolTipFontFamily":"Arial","surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","progressBackgroundColorRatios":[0],"progressOpacity":0.7,"progressRight":"33%","firstTransitionDuration":0,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"progressBarBackgroundColorDirection":"horizontal","subtitlesFontSize":"3vmin","progressBarBackgroundColorRatios":[0],"id":"MainViewer","subtitlesTop":0,"progressBarBorderColor":"#000000","subtitlesTextShadowColor":"#000000","subtitlesBorderColor":"#FFFFFF","progressBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowHorizontalLength":1,"toolTipTextShadowColor":"#000000","playbackBarBackgroundOpacity":1,"playbackBarLeft":0,"playbackBarHeadShadowBlurRadius":3,"vrThumbstickRotationStep":20,"subtitlesBottom":50,"progressBackgroundColor":["#000000"],"minHeight":50,"playbackBarHeadShadowColor":"#000000","minWidth":100,"playbackBarHeadBorderSize":0,"playbackBarHeadHeight":15,"toolTipFontColor":"#606060","progressBottom":10,"progressHeight":2,"progressBorderSize":0,"progressBarBorderRadius":2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"width":"100%","playbackBarHeadShadow":true,"playbackBarHeadShadowVerticalLength":0,"height":"100%","progressBarBorderSize":0,"toolTipPaddingLeft":6,"playbackBarBottom":5,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontFamily":"Arial","subtitlesTextShadowVerticalLength":1},{"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_out"}],"id":"sequence_F3CD5DDE_FDC9_DA10_41EF_15D2E361D887"}],"id":"rootPlayer","data":{"displayTooltipInTouchScreens":true,"history":{},"textToSpeechConfig":{"speechOnInfoWindow":false,"volume":1,"speechOnQuizQuestion":false,"pitch":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"rate":1},"locales":{"es":"locale/es.txt"},"name":"Player6432","defaultLocale":"es"},"backgroundColor":["#FFFFFF"],"layout":"absolute","xrPanelsEnabled":true,"start":"this.init()","defaultMenu":["fullscreen","mute","rotation"],"gap":10,"minHeight":0,"scrollBarColor":"#000000","watermark":false,"minWidth":0,"height":"100%","backgroundColorRatios":[0],"class":"Player","scripts":{"showWindowBase":TDV.Tour.Script.showWindowBase,"resumePlayers":TDV.Tour.Script.resumePlayers,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"registerKey":TDV.Tour.Script.registerKey,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"isPanorama":TDV.Tour.Script.isPanorama,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"clone":TDV.Tour.Script.clone,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showWindow":TDV.Tour.Script.showWindow,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getComponentByName":TDV.Tour.Script.getComponentByName,"getKey":TDV.Tour.Script.getKey,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"openLink":TDV.Tour.Script.openLink,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"playAudioList":TDV.Tour.Script.playAudioList,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setValue":TDV.Tour.Script.setValue,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"executeJS":TDV.Tour.Script.executeJS,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"initQuiz":TDV.Tour.Script.initQuiz,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getPixels":TDV.Tour.Script.getPixels,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"toggleVR":TDV.Tour.Script.toggleVR,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"init":TDV.Tour.Script.init,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"downloadFile":TDV.Tour.Script.downloadFile,"disableVR":TDV.Tour.Script.disableVR,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMapLocation":TDV.Tour.Script.setMapLocation,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"quizShowScore":TDV.Tour.Script.quizShowScore,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"cloneBindings":TDV.Tour.Script.cloneBindings,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getOverlays":TDV.Tour.Script.getOverlays,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizStart":TDV.Tour.Script.quizStart,"startMeasurement":TDV.Tour.Script.startMeasurement,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"createTween":TDV.Tour.Script.createTween,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizFinish":TDV.Tour.Script.quizFinish,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"unregisterKey":TDV.Tour.Script.unregisterKey,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"showPopupImage":TDV.Tour.Script.showPopupImage,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"shareSocial":TDV.Tour.Script.shareSocial,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"translate":TDV.Tour.Script.translate,"mixObject":TDV.Tour.Script.mixObject,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"unloadViewer":TDV.Tour.Script.unloadViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"existsKey":TDV.Tour.Script.existsKey,"enableVR":TDV.Tour.Script.enableVR,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setLocale":TDV.Tour.Script.setLocale}};
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
//Generated with v2026.1.2, Fri Oct 2 2026