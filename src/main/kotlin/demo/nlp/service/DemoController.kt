package demo.nlp.service

import edu.stanford.nlp.ie.crf.CRFClassifier
import edu.stanford.nlp.util.CoreMap
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class DemoController {

    private var classifier: CRFClassifier<CoreMap>? = null

    @RequestMapping("/dummy")
    fun dummy(name: String?): Greeting {

        if (classifier == null) {
            classifier = CRFClassifier.getDefaultClassifier<CoreMap>()
        }

        val id = GreetingController.Generator.id.incrementAndGet()
        return Greeting(id, name + ": " +  classifier.toString())
    }

    @RequestMapping("/text")
    fun text(name: String?): Greeting {

        val id = GreetingController.Generator.id.incrementAndGet()
        return Greeting(id, "->Tabs are also controllable if you want to programmatically pass them their values." +
                " This allows for more functionality in Tabs such as not having any Tab selected or assigning them different values.")
    }
}